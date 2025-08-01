export interface AuthState {
  isAuthenticated: boolean;
  username: string | null;
  password: string | null;
}

export interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectPath?: string;
}

export interface LoginFormProps {
  onFormSubmit: (userName: string, password: string) => void;
}
