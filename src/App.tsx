import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { LoginPage } from "./pages/LoginPage";
import { MoviesPage } from "./pages/MoviesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />}/>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/movies"
        element={
          <ProtectedRoute>
            <MoviesPage />
          </ProtectedRoute>
        }
      />
      {/* <Route path="/" element={<Navigate to="/movies" />} /> */}
    </Routes>
  );
}

export default App;
