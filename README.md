# 🎓 Education Platform Web App

A comprehensive fullstack application for managing educational courses. This project consists of a high-performance **React** frontend and a robust **NestJS** backend, featuring automated **Swagger** documentation.

---

## 📁 Project Structure

The repository is organized as a monorepo-style structure for easy management:

* **/frontend**: React application built with Vite, Redux Toolkit, and SCSS Modules.
* **/backend**: NestJS server providing a RESTful API and Swagger documentation.

---

## 🛠 Tech Stack

**Frontend:**
* React 18 (Vite)
* TypeScript
* Redux Toolkit (State Management)
* SCSS Modules (Modular Styling)
* Jest & React Testing Library

**Backend:**
* NestJS (Node.js Framework)
* TypeScript
* Swagger UI (API Documentation)
* RxJS & UUID

---

## 🚀 Installation & Local Setup

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name
```

### 2. Backend Setup
```bash
cd backend
npm install
npm run start:dev
```
API URL: http://localhost:4000

Interactive Docs: http://localhost:4000/api (Swagger)

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create a .env file in the /frontend directory:

`VITE_API_URL=http://localhost:4000`

Then start the app:

```bash
npm run start
```

App URL: `http://localhost:5173`

Deployment Note

The project is configured for cloud deployment:

    Frontend: Ready for Vercel (see vercel.json).

    Backend: Can be hosted on Render or Railway.

    Note: If accessing the live demo via Render, the initial request might take 30-60 seconds to process as the instance spins up from a "sleep" state on the free plan.


Testing & Quality

Both parts of the project include testing suites:

    Frontend Tests: cd frontend && npm run test:local

    Backend Tests: cd backend && npm run test

    Linting: The backend includes Husky and Commitlint to ensure clean code and standardized commit messages.

















