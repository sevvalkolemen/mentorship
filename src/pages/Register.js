import React from "react";
import { useState } from "react";
import { register } from "../firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    console.log(user);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Eposta"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="btn btn-primary"
        type="submit"
        disabled={!email || !password}
      >
        Kayıt
      </button>
    </form>
  );
}

export default Register;
