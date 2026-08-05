import { signOut } from "@/services/authClient"

export default function SignOutButton() {
  return (
    <button onClick={() => signOut()}>Sign Out</button>
  )
}