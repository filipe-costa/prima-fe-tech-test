# About

This project uses React with Vite, Vitest, React Testing Library and CSS Modules.

## Setup

### Requirements

- Node v23

### Installation

`npm install`

### How to run application

`npm run dev`

### How to run tests

`npm run test:ui`

## Design decisions

- The project is setup to avoid cyclic dependencies with the following pattern:

  ```
    components -> features -> domain (recipes) -> app -> main.tsx
  ```

- I choose to use CSS modules instead of relying on third party UI libraries to minimally show my understanding of CSS.
- I kept HTML as semantic as possible in order to be accessible to screen readers.
- I used Context API to share state for this project - in production, I would expect each page to load its own data from a REST API endpoint, and keep the state as local as possible.
