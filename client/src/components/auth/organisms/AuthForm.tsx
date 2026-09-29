import { useState, type SyntheticEvent } from "react";
import { signIn, signUp } from "@/services/authClient";
import { NAME_HINT, NAME_MAX, nameProblem } from "@/data/displayName";

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

    // Catch the shape rules here; the server still re-checks them, and is the
    // only one that knows whether the name is taken or disallowed
    if (authMode === "signup") {
      const problem = nameProblem(name);
      if (problem) {
        setError(problem);
        return;
      }
    }

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
        { // Sign up mode includes a display name field that log in mode doesn't.
          // It's public - the byline on every set - so it isn't asked for as a
          // real name.
        authMode === "signup" && (
          <>
            <input
              placeholder="Display name"
              className="text-input"
              value={name}
              maxLength={NAME_MAX}
              autoComplete="username"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <p className="text-sm text-(--color-text-muted) text-left">{NAME_HINT}</p>
          </>
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
