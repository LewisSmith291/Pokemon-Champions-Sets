import { useState, type SyntheticEvent } from "react";
import { signIn, signUp } from "../../services/authClient";

interface Props {
  authMode: "signin" | "signup";
  onSuccess?: () => void;
}

export default function AuthForm({authMode, onSuccess}:Props) {
  // If auth mode is either null or sign in, use the signing in mode, otherwise use sign up mode
  // 'signin' is used so that if the user clicks from a link that says sign in, they are taken to the sign in page
  // alternatively if they click from a link that says register or sign up, they are taking to the sign up page
  const [mode, setMode] = useState<"signin" | "signup">(authMode === "signin" ? "signin" : "signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault(); // stop the full-page form reload
    setError(null);
    setLoading(true);

    // Better Auth returns { error } rather than throwing.
    const { error } =
      mode === "signup"
        ? await signUp.email({ name, email, password })
        : await signIn.email({ email, password });

    setLoading(false);
    if (error) {
      setError(error.message ?? "Something went wrong");
      return;
    }
    // On success, useSession() in App re-renders
    onSuccess?.();
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{mode === "signup" ? "Create account" : "Log in"}</h2>

      { // Sign up mode includes a first name field that log in mode doesn't
      mode === "signup" && (
        <input
          placeholder="First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      { // Output the error message 
      error && <p style={{ color: "#fd5d00" }}>{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "…" : mode === "signup" ? "Sign up" : "Log in"}
      </button>

      <button type="button" onClick={() => { setMode(mode === "signup" ? "signin" : "signup"); setError(null); }}>
        {mode === "signup" ? "Have an account? Log in" : "Sign up"}
      </button>
    </form>
  );
}
