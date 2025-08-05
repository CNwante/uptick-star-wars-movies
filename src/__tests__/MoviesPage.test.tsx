import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { vi } from "vitest";
import App from "../App";


describe("Movies Page", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([
          {
            title: "A New Hope",
            release_date: "1977-05-25",
            opening_crawl: "It is a period of civil war...",
          },
          {
            title: "The Empire Strikes Back",
            release_date: "1980-05-21",
            opening_crawl: "It is a dark time for the Rebellion...",
          },
        ]),
      } as Response)
    ) as unknown as typeof fetch
  })

  test("It fetches and displays movies", async () => {
    const preloadedStore = configureStore({
      reducer: {
        auth: authReducer
      },
      preloadedState: {
        auth: {
          isAuthenticated: true,
          username: "solomon",
          password: "1234"
        }
      }
    })

    render(
      <Provider store={preloadedStore} >
        <MemoryRouter initialEntries={["/movies"]}>
          <App />
        </MemoryRouter>
      </Provider>
    )

    expect(await screen.findByText(/a new hope/i)).toBeInTheDocument()
    expect(await screen.findByText(/the empire strikes back/i)).toBeInTheDocument()
  })

  test("It redirect to login if not authenticated", () => {
    const unauthStore = configureStore({
      reducer: {
        auth: authReducer
      },
      preloadedState: {
        auth: {
          isAuthenticated: false,
          username: "",
          password: ""
        }
      }
    });

    localStorage.clear()

    render(
      <Provider store={unauthStore} >
        <MemoryRouter initialEntries={["/movies"]}>
          <App />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument()
    expect(screen.queryByText(/a new hope/i)).not.toBeInTheDocument()
  })
})
