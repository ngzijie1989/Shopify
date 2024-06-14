'use server'

import { cookies } from "next/headers";

export const getServerCookie = () => {
  const cookieStore = cookies()
  const check = cookieStore.get("visited")

  if (check !== undefined){
    return "visited"
  } else {
    return "not visited"
  }
};

export const setServerCookie = () => {
  const cookieStore = cookies()
  const check = cookieStore.set("visited",1)

  return "set"
};