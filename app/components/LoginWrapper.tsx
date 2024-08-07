/* eslint-disable @next/next/no-img-element */
'use client'

import styles from "@/app/lib/css/login.module.css"
import { useState } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation"
import LoginError from "./LoginError";

function LoginWrapper() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const params = useSearchParams()

  const error: string | null = params.get('error')

  const handleSubmitGoogle = (event: any) => {
    event.preventDefault();
    signIn('google', { callbackUrl: "/get-started"})
    .then(()=>{toast.success("Signed In successfully")})
  };

  const handleSubmitCredentials = (event: any) => {
    event.preventDefault();
    signIn('credentials', { 
      email: email,
      password: password,
      redirect: true,
      callbackUrl: "/get-started"
    }); // Call the imported signIn function
  };


  return (
    <div>
        <form onSubmit={handleSubmitCredentials}>
          <div className="mb-3">
            <label className="flex flex-col w-full">
              Email
              <input required type="text" placeholder="JeffBezos@email.com" className="input input-bordered w-full" onChange={(e)=> setEmail(e.currentTarget.value)} />
            </label>
          </div>

          <div className="mb-5">
            <label className="flex flex-col w-full">
              Password
              <input required type="password"  className="input input-bordered w-full" onChange={(e)=> setPassword(e.currentTarget.value)}/>
            </label>
          </div>

          <button className="btn btn-primary mb-2 w-full" type="submit">Sign In</button>
        </form>

      <form onSubmit={handleSubmitGoogle}>
        <button className={`btn ${styles.googleButton}`} >
          <img src="/googleicon.png" alt="Google Logo" className={styles.googleLogo} />
          <span className="hidden sm:block">
          &nbsp; Google Sign in</span>
        </button>

        {!!error ? <LoginError errorMessage={error} /> : ""}
      </form>
    </div>
  )
}

export default LoginWrapper
