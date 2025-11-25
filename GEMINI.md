# GEMINI.md

## Project Overview

This is a frontend application for a Jiu-Jitsu gym management system. It's built with React, TypeScript, and Vite, and it uses Material-UI and Tailwind CSS for styling. The application provides features for managing members, tracking their attendance, and viewing key statistics on a dashboard. The code is written in TypeScript and contains Korean text, indicating the target audience.

## Building and Running

### Prerequisites

- Node.js and npm (or a compatible package manager)

### Development

To run the application in development mode:

```bash
npm run dev
```

This will start the Vite development server, and you can view the application at `http://localhost:5173`.

### Build

To create a production build of the application:

```bash
npm run build
```

This will generate a `dist` folder with the optimized and transpiled code.

### Linting

To check the code for any linting errors:

```bash
npm run lint
```

## Development Conventions

- The project uses TypeScript for static typing.
- Styling is done using a combination of Material-UI and Tailwind CSS.
- The project follows the standard React project structure, with components, pages, and types separated into their own folders.
- The code uses function components with hooks.
- Data is currently mocked within the components, but the inclusion of `axios` suggests that the application is intended to communicate with a backend API for data fetching and persistence.
- The application uses `react-router-dom` for client-side routing.
