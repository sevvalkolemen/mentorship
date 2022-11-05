import { useState } from "react";
import { register } from "./firebase";
import { Toaster } from "react-hot-toast";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    console.log(user);
  };
  return (
    <div>
      <Toaster position="top-right"/>
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
        <button type="submit" disabled={!email || !password}>
          Kayıt
        </button>
      </form>
    </div>
  );
}

export default App;
