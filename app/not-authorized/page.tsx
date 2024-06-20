import styles from '@/app/lib/css/noaccess.module.css'
import Link from 'next/link'

function Page() {

  return (
    <div className={styles.noacesssContainer}>
      <h1 className="mb-4 font-bold">You are not authorized to enter this page</h1>
      <Link href="/" className="btn btn-primary">Go back to home Page</Link>
    </div>
  )
}

export default Page
