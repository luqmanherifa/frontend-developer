import { useRef, useState } from "react";

export default function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email.includes("@")) {
      setError("Email is not valid");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" ref={emailRef} placeholder="Email" />
      <input type="password" ref={passwordRef} placeholder="Password" />

      <button type="submit">Submit</button>

      {error && <p>{error}</p>}
    </form>
  );
}
