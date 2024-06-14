import { CredentialsSignin, NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from "./app/lib/prisma";
import { compare } from "bcrypt";

const credentials = CredentialsProvider({
  name: "Credentials",
  credentials: {
    email: {
      label: "email"
    },

    password: {
      label: "Password",
      type: "password"
    }
  },

  async authorize(credentials){

    if (!credentials?.email || !credentials.password) {
      return null
    }

    const user = await prisma.user.findFirst({
      where: {
        provider: "Credentials",
        email: credentials.email
      }
    })

    if (!user) {
      return null
    }

    if (!user.active){

      return null //how to return custom errors}
    }

    const password = user.password

    const passwordValid = await compare(credentials.password, password) //password can be empty

    if (!passwordValid){
      return null }

    return {
      id: user.id,
      name: user.name,
      email: user.email
    }
  }
})

const authConfig = {
  providers: [credentials, Google],
  cookies: {
    secure: true
  },
  pages: {
    signIn: "/login" //custom login page redirect
  },
  callbacks: {
    async signIn({profile} : {profile: any}){
      try {
        if (profile) {
          const userCheck = await prisma.user.findFirst({
            where: {
              email: profile.email
            }
          })

          if (!userCheck) {

            const newUser = await prisma.user.create({
              data: {
                name: profile.name,
                email: profile.email,
                imagePath: profile.picture,
                provider: "Google",
                active: true
              }
            })
          } 
            return {
              user: true
            }
        }
        return {
          user: true
        }

      } catch (e) {
        return {
          user: false
        };
      }
    
    },
    async redirect({ url }){
      if (url.includes("signin")) return "/"
      return url;
    },
    async session({session, token}){
      return token
    }
  }
}

export const { handlers, auth, signIn, signOut  } = NextAuth(authConfig)