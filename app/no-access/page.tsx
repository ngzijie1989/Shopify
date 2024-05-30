'use client'

import styles from '@/app/lib/css/noaccess.module.css'
import SignInComponent from "@/app/components/SignInComponent"
import Link from 'next/link'

function Page() {

  return (
    <div className={styles.noacesssContainer}>
      <h1 className="mb-4 font-bold">You need to sign in to continue</h1>
      <Link href="/login" className="btn btn-primary">Sign In</Link>
    </div>
  )
}

export default Page