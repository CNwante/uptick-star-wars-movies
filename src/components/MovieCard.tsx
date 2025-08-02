import type { MovieCardProps } from "./types";

export const MovieCard: React.FC<MovieCardProps> = ({ movieData }) => {
  const { title, release_date, opening_crawl } = movieData;

  return (
    <div className="bg-gray-900 rounded-2xl p-6 hover:shadow-2xl hover:border-blue-300 transition-shadow transform hover:scale-98 duration-300 border border-yellow-700">
      <h2 className="text-2xl font-extrabold mb-3 text-yellow-400">{title}</h2>
      <p className="text-sm text-gray-400 mb-3">{release_date}</p>
      <p className="text-gray-300 mb-6 leading-relaxed">{opening_crawl}</p>
      <button className="bg-blue-600 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 w-full cursor-pointer">
        More Info
      </button>
    </div>
  );
};
