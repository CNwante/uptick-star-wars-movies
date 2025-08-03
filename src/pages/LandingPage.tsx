import { useSelector } from "react-redux";
import type { RootState } from "../stores/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import bgStars from "../assets/stars-bg.jpg";

export const LandingPage = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/movies");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black text-white bg-cover bg-center relative px-4"
      style={{ backgroundImage: `url(${bgStars})` }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-2xl text-center px-4 bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400 tracking-wide">
          Star Wars Movies
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Journey into the galaxy! Explore the Star Wars movies, their release
          dates, and iconic opening crawls. Sign in to get started.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors shadow-lg cursor-pointer"
        >
          Let's Dive In
        </button>
      </div>
    </div>
  );
};
