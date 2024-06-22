function LoginError({errorMessage}: {errorMessage: string | null}) {
  let message = ""
  
  if (errorMessage === "CredentialsSignin"){
    message = "Wrong username or password. Please try again."
  } else if ( errorMessage === "AccessDenied" ){
    message = "You do not have permission to access this resource. If you believe this is a mistake, please contact support for assistance.."
  }

  return (
    <div className="bg-red-800 text-white p-2">
      <p>{message}</p>
    </div>
  )
}

export default LoginError
