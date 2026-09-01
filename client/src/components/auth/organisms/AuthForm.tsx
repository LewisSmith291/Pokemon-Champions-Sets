import { useState, type SyntheticEvent } from "react";
import { signIn, signUp } from "@/services/authClient";

interface Props {
  authMode: "signin" | "signup";
  toggleMode?: () => void;
}

export default function AuthForm({authMode, toggleMode}:Props) {
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
      authMode === "signup"
        ? await signUp.email({ name, email, password })
        : await signIn.email({ email, password });

    setLoading(false);
    if (error) {
      setError(error.message ?? "Something went wrong");
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full mx-auto max-w-sm p-4">
      <h2>{authMode === "signup" ? "Create account" : "Log in"}</h2>
        { // Sign up mode includes a first name field that log in mode doesn't
        authMode === "signup" && (
          <input
            placeholder="First Name"
            className="text-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="text-input"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="text-input"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        { // Output the error message 
        error && <p className="text-(--color-error)">{error}</p>}

        <button type="submit" className="hoverable-link" disabled={loading}>
          {loading ? "…" : authMode === "signup" ? "Sign up" : "Log in"}
        </button>

        <button type="button" className="hoverable-link" onClick={() => { toggleMode?.(); setError(null); }}>
          {authMode === "signup" ? "Have an account? Log in" : "Sign up"}
        </button>
    </form>
  );
}
