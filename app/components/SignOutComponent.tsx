'use client'
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";

function SignOutComponent() {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/login' }) // Call the imported signIn function
  };

  return (
    <div>
        <li><button onClick={handleSignOut}>
          Sign Out
        </button></li>
    </div>
  );
}

export default SignOutComponent;