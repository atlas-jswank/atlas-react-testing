import { useState } from "react";
import { validateEmail, validatePassword } from "./validate";
import { EmailInput } from "./email";
import { PasswordInput } from "./password";
import "../global.css";

export const SignUp = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginSubmit(e) {
    e.preventDefault();
    onSubmit && onSubmit(email, password);
  }

  const error =
    validateEmail(email) !== "" || validatePassword(password) !== "";
  return (
    <div className="flex flex-col items-center">
      <div className="login-box bg-[#fef9e6] rounded-[30px] p-8 text-[#00003c]">
        <h2 className="text-4xl font-bold">Sign Up</h2>
        <p className="text-lg">Sign up to access the app</p>
        <form onSubmit={handleLoginSubmit}>
          <EmailInput onChange={(value) => setEmail(value)} />
          <PasswordInput onChange={(value) => setPassword(value)} />
          <button
            disabled={error}
            type="submit"
            className="btn bg-[#d00414] disabled:bg-[#00003c] mt-4"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
