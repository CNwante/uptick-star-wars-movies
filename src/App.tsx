import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { MoviesPage } from "./pages/MoviesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/MoviesPage" element={<MoviesPage />} />
      </Routes>
    </>
  );
}

export default App;
