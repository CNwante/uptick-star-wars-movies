export interface AuthState {
  isAuthenticated: boolean;
  username: string | null;
}

export interface LoginFormProps {
  onFormSubmit: (userName: string) => void;
}
