# Star Wars Movies Project

This project is part of the Uptick Week 5 task. It is a web application that lists Star Wars movies using an external API.

---

## Features

- Fetch and display a list of Star Wars movies.
- Display details such as title, release date, director, and opening crawl.
- Simple, clean grid-based layout.

---

## Tech Stack

- **React** (Frontend)
- **TailwindCSS** (Styling)
- **TypeScript**
- **Redux Toolkit**

---

## Project Structure

- src/components – UI components for movies and layout.
- src/pages – Page-level components (e.g., Movies List).
- src/services – API-related logic.
- src/assets – Images and static files.

---

## Getting Started

### Prerequisites

- Node.js (>=18)
- npm or yarn

### Installation

1. Clone the repository:
   git clone https://github.com/your-username/star-wars-movies.git
2. Navigate to the project folder:
   cd star-wars-movies
3. Install dependencies:
   npm install

### Run the project

npm run dev

### Build for production

npm run build

---

## Branching Strategy

Given the short timeframe, a **minimal Git branching strategy** will be used:

- main – Always stable and ready to submit.
- dev – Active development branch.
- feature/ – Short-lived optional branches for individual features (merged back into dev).

Example flow:
```
 main  <--- stable
     \
      dev  <--- main work happens here
     /   \
setup	  \
       	  feature/authentication
          feature/movie-grid
```

---

## License

MIT License
