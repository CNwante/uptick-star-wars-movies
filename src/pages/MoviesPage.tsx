import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import { fetchMovies } from "../services/swapiService";
import type { Movie } from "../types/movieTypes";
import { Spinner } from "../components/Spinner";

export const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Failed to load movies");
        }
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <p className="text-red-400 text-3xl md:text-5xl text-center grid place-content-center h-screen">Error: {error}</p>;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {movies.map((movie) => (
        <MovieCard key={movie.episode_id} movieData={movie} />
      ))}
    </div>
  );
};
