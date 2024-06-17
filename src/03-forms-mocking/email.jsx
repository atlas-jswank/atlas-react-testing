import { useState } from "react";
import { validateEmail } from "./validate";

export function EmailInput({ onChange }) {
  const [email, setEmail] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
    onChange(e.target.value);
  }

  const error = validateEmail(email);

  return (
    <div>
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        name="email"
        id="email"
        autoComplete="email"
        value={email}
        onChange={handleEmailChange}
      ></input>
      <div className="error">{error}</div>
    </div>
  );
}
