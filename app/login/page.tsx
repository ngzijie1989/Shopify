import LoginWrapper from "../components/LoginWrapper";
import styles from "@/app/lib/css/login.module.css"

function Page() {

  return (
    <div className={`${styles.loginContainer}`}>
      <div className="w-3/5 mx-auto">
        <h1 className="text-3xl font-bold mb-3 text-center">Sign In To Shopify Clone!</h1>
        <LoginWrapper />
      </div>
    </div>
  )
}

export default Page