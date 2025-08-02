import type { Movie } from "../types/movieTypes";

export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch("https://swapi.info/api/films");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const json = await response.json();

    const movieData: Movie[] = json;
    return movieData.map((movie) => ({
      ...movie,
      opening_crawl:
        movie.opening_crawl.length > 200
          ? movie.opening_crawl.slice(0, 200) + "..."
          : movie.opening_crawl,
    }));
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw error;
  }
};
