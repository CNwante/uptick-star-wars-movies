import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/auth/authSlice";
import { LoginForm } from "../features/components/LoginForm";
import loginBg from "../assets/login_bg.jpeg";
import type { AppDispatch } from "../stores/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../stores/store";

export const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  if (isAuth) {
    return <Navigate to="/movies" />;
  }

  const handleLogin = (getUserName: string, getPassword: string) => {
    dispatch(login({ username: getUserName, password: getPassword }));
    navigate("/movies");
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
