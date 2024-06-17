import { useState } from "react";
import { validatePassword } from "./validate";

export function PasswordInput({ onChange }) {
  const [password, setPassword] = useState("");

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    onChange(e.target.value);
  }

  const error = validatePassword(password);

  return (
    <div>
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        id="password"
        autoComplete="true"
        value={password}
        onChange={handlePasswordChange}
      ></input>
      <div className="error">{error}</div>
    </div>
  );
}
