import { ChangeEvent, useState } from "react";
import { validateEmail } from "./validate";

type EmailInputProps = {
  onChange: (value: string) => void;
};

export function EmailInput({ onChange }: EmailInputProps) {
  const [email, setEmail] = useState("");

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    onChange(e.target.value);
  }

  const error = validateEmail(email);

  return (
    <div>
      <label htmlFor="email" className="block py-4 font-black">
        Email:
      </label>
      <input
        type="text"
        name="email"
        id="email"
        autoComplete="email"
        value={email}
        onChange={handleEmailChange}
        className="w-[480px] rounded-full border-2 border-[#00003c] py-2 px-4"
      ></input>
      <div className="text-[#d00414] text-[0.8em]">{error}</div>
    </div>
  );
}
