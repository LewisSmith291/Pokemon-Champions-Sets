import { signOut } from "better-auth/api";

export default function SignOutButton() {
  return (
    <button onClick={() => signOut()}>Sign Out</button>
  )
}