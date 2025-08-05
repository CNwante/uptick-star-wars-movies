import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/auth/authSlice";
import { LoginForm } from "../features/components/LoginForm";
import loginBg from "../assets/login_bg.jpeg";
import type { AppDispatch } from "../stores/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../stores/store";
import starWarsLogo from "../assets/swm_logo.png";

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
      <div className="h-screen w-full p-4 grid place-items-center inset-0 bg-black/50">
        <div className="flex flex-col justify-center items-center">
          <img
            src={starWarsLogo}
            alt="Star wars movies logo"
            className="max-w-24"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400 tracking-wide">
            Star Wars Movies
          </h1>
          <LoginForm onFormSubmit={handleLogin} />
        </div>
      </div>
    </section>
  );
};
