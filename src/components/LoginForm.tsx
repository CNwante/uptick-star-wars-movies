import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  onFormSubmit: (userName: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onFormSubmit }) => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFormSubmit(userName);
    navigate("/movies");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full p-8 bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl text-center"
    >
      <h1 className="text-4xl font-bold mb-8 text-blue-400">Login</h1>
      <fieldset className="space-y-6">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
          className="w-full p-4 rounded-full border border-white/30 bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-4 rounded-full border border-white/30 bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
        />
      </fieldset>
      <button
        type="submit"
        className="w-full p-4 mt-8 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
      >
        Login
      </button>
      <p className="mt-4 text-sm text-blue-200">
        You don't need to create an account, just login
      </p>
    </form>
  );
};
