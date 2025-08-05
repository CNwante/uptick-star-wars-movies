import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "../stores/store";

describe("Login page", () => {
  test("It renders login page", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  test("It allows a user to login", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const usernameInput = screen.getByPlaceholderText(/username/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    fireEvent.change(usernameInput, { target: { vaue: "solomon" } });
    fireEvent.change(passwordInput, { target: { value: "1234" } });
    fireEvent.click(loginButton);

    expect(screen.getByText(/star wars movies/i)).toBeInTheDocument();
  });

  test("It redirects to movies page if already loggged in", () => {
    localStorage.setItem("persist:root", JSON.stringify({
      auth: JSON.stringify({ isAuthenticated: true, username: "solomon" })
    }))

    render(
      <Provider store={store} >
        <MemoryRouter initialEntries={["/login"]}>
          <App />
        </MemoryRouter>
      </Provider>
    )
  } )
});
