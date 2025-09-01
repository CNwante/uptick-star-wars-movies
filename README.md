# 🌌 Star Wars Movies App

A fully responsive and accessible Star Wars Movies web application built as part of **Week 5 of the Uptick Talent Fellowship Challenge**. This project showcases data fetched from the [Star Wars API (swapi.info)](https://swapi.info), complete with frontend authentication, route protection, and unit testing.

## 🚀 Live Demo
👉 [View the live app](https://starwarsmovies.surge.sh/)

---

## 📸 Features

- 🔐 **Authentication System**
  - Redux Toolkit for state management
  - Redux Persist for storing login state
  - Protected routes and redirect logic

- 🎬 **Movies Listing Grid**
  - Data fetched from the Star Wars API
  - Responsive movie card layout
  - Each card displays:
    - Movie title
    - Release date
    - Opening crawl
    - "More Info" (dummy link)

- 💅 **UI and UX**
  - Built with **React**, **TypeScript**, and **Tailwind CSS**
  - Smooth **hover effects** on movie cards
  - Fully **responsive** layout
  - Basic **accessibility** practices applied

- 🧪 **Testing**
  - 5+ unit tests written with **React Testing Library** and **Vitest**
  - Covers components, routing, and logic

---

## 🛠️ Tech Stack

- **Framework:** React + TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit + Redux Persist
- **Routing:** React Router DOM
- **Testing:** React Testing Library + Vitest
- **Deployment:** Surge

---

## 📁 Folder Structure

```
src/
│
├── assets/ # Images or static assets
├── components/ # Reusable UI components (Navbar, MovieCard, etc.)
├── features/ # Redux slices (auth)
├── hooks/ # Custom hooks
├── pages/ # Route pages (Login, Movies)
├── services/ # API logic (swapi.ts)
├── store/ # Redux store setup
├── types/ # Shared TypeScript types
├── utils/ # Helper functions
├── App.tsx
└── main.tsx
```

---
## 🧠 What I Learned

- Structuring scalable React + TypeScript applications
- Implementing auth flow with Redux Toolkit and route protection
- Fetching and mapping external API data into a responsive UI
- Writing testable, maintainable components
- Balancing performance, accessibility, and responsiveness
- Managing time and progress under a tight deadline

---

## ✅ Getting Started

### To run the project locally:

```bash
git clone https://github.com/your-username/star-wars-movies.git

cd star-wars-movies

npm install

npm run dev
```
### To run test
```bash
npm run test
```
---

## 📄 License
This project is part of the Uptick Talent Fellowship and is intended for educational purposes.

---
## 📈 Optimization
Optimization Report → See  [optimization/README.md](optimization/README.md)

---

## 🤝 Acknowledgements
- Uptick Africa: https://www.uptickafrica.com/
- SWAPI (Star Wars API): https://swapi.info/
