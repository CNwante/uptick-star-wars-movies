import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { ROUTES } from "./routes/appRoutes";
import { LandingPage } from "./pages/LandingPage";
import { Spinner } from "./components/Spinner";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path={ROUTES.login}
        element={
          <Suspense fallback={<Spinner />}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.movies}
        element={
          <ProtectedRoute>
            <Suspense fallback={<Spinner />}>
              <MoviesPage />
            </Suspense>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
