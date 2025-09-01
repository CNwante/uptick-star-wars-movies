import spinner from "../assets/spinner.webp";

export const Spinner = () => {
  return (
    <div className="h-screen grid place-content-center">
      <img src={spinner} alt="Loading spinner" className="w-16 h-16  object-contain animate-spin bg-[#fe2a13] rounded-full outline-2 outline-amber-300" />
    </div>
  );
};
