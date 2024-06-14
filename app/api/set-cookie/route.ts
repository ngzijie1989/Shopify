import { NextResponse } from "next/server"
import { setServerCookie } from "@/app/lib/utils/cookie"

export async function POST(info) {
  const set = await setServerCookie()
  console.log(set)
      
  return NextResponse.json(set)
}
