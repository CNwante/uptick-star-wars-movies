import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { LoginPage } from "./pages/LoginPage";
import { MoviesPage } from "./pages/MoviesPage";
import {ROUTES} from "./routes/appRoutes";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />}/>
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route
        path={ROUTES.movies}
        element={
          <ProtectedRoute>
            <MoviesPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
