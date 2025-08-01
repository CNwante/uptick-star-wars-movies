import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { LoginForm } from "../components/LoginForm";
import loginBg from "../assets/login_bg.jpeg";
import type { AppDispatch } from "../stores/store";

export const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = (userName: string) => {
    dispatch(login({ username: userName }));
  };
  return (
    <section
      className="bg-cover w-full"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="h-[100vh] w-full p-4 grid place-items-center inset-0 bg-black/30">
        <LoginForm onFormSubmit={handleLogin} />
      </div>
    </section>
  );
};
