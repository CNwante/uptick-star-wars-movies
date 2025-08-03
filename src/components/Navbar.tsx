import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../stores/store";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import swmLogo from "../assets/swm_logo.png";
import { FiLogOut } from "react-icons/fi";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const username = useSelector((state: RootState) => state.auth.username);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="w-full bg-gray-900 text-white shadow-md sticky top-0 z-10-">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold mb-2 md:mb-0 flex justify-center items-center gap-1 flex-wrap text-center text-yellow-300">
          <img src={swmLogo} alt="Star wars movies logo" className="w-8 h-8"/>
          Star Wars Movies
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <span className="text-sm md:text-base font-medium">
            Hello, {username}
          </span>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1 rounded-md transition flex items-center gap-2"
          >
            Logout <FiLogOut />
          </button>
        </div>
      </div>
    </nav>
  );
};
