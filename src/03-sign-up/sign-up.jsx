import { useState } from "react";
import { validateEmail, validatePassword } from "./validate";
import { EmailInput } from "./email";
import { PasswordInput } from "./password";
import "../global.css";
import "./sign-up.css";

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
    <div className="login">
      <div className="login-box">
        <h2>Sign Up</h2>
        <p>Sign up to access the app</p>
        <form onSubmit={handleLoginSubmit}>
          <EmailInput onChange={(value) => setEmail(value)} />
          <PasswordInput onChange={(value) => setPassword(value)} />
          <button disabled={error} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
