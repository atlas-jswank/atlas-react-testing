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
      <label htmlFor="password" className="block py-4 font-black">
        Password:
      </label>
      <input
        type="password"
        name="password"
        id="password"
        autoComplete="true"
        value={password}
        onChange={handlePasswordChange}
        className="w-[480px] rounded-full border-2 border-[#00003c] py-2 px-4"
      ></input>
      <div className="text-[#d00414] text-[0.8em]">{error}</div>
    </div>
  );
}
