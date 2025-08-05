import type { Movie } from "../types/movieTypes";

export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch("https://swapi.info/api/films");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const movieData = await response.json();
    return movieData;

  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw error;
  }
};
