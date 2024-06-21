import styles from "@/app/lib/css/loadingspinner.module.css"

function loading() {
  return (
    <div className={styles.loadingContainer}>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  )
}

export default loading
