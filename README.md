# 🎓 Education Platform Web App
![Node Version](https://img.shields.io/badge/node-v20.0.0+-blue?style=flat-square&logo=node.js)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=flat-square&logo=redux&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-%2346E3B7.svg?style=flat&logo=render&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23C1E1C1?style=flat-square&logo=swagger&logoColor=black)

A full-stack React-based educational platform designed to manage and browse educational courses. It features server-based authentication, a search system, ability to add new content, and interactive forms with client-side validation.

---

🔗 You can explore a [**Live Demo**](https://education-platform-web-app.vercel.app) of the website  

### ⚠️ Important Note on Live Demo
The backend of this project is hosted on a **Render Free Tier**.

Cold Start: If the site hasn't been visited recently, the server will be in "sleep" mode.

Delay: Please allow **~50 seconds** for the server to wake up when you first load the page. Once awake, the data will sync perfectly.

## 📁 Project Structure

The repository is organized as a monorepo-style structure for easy management:

* **/frontend**: React application built with Vite, Redux Toolkit, and SCSS Modules.
* **/backend**: NestJS server providing a RESTful API and Swagger documentation.

---

## 🚀 Installation & Local Setup

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/education1bohdan/Education-Platform-Web-App.git
cd Education-Platform-Web-App
```

⚠️ In order for the project (/frontend) to work correctly locally with the local server (/backend), they must run in parallel (Keep both CLIs open).

### 2. Backend Setup

```bash
cd backend
npm install --legacy-peer-deps
npm run start
```
⚠️ Important: use `npm install --legacy-peer-deps` for backend setup to avoid Node.js package version conflict.

_API URL: http://localhost:4000_

_Interactive Docs: http://localhost:4000/api (Swagger)_

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run start
```

_The website will automatically open at: http://localhost:5173_

### ⚙️ Environment Variables
If you need to use ports or API URLs different from the defaults, create a .env file in the respective directories:

**Backend (/backend/.env)**

_For example:_
```bash
PORT=4000
FRONTEND_URL=http://localhost:5173
```
_(Default server port is 4000 and Frontend URL is localhost:5173. You can change it to whatever you need.)_

**Frontend (/frontend/.env)**

_For example:_
```bash
VITE_API_URL=http://localhost:4000
```
_(Default Vite API URL is localhost:4000. You can change it to whatever you need.)_




### 🌍 Deployment Note
The project is configured for cloud deployment:

**Frontend**: Ready for Vercel (see vercel.json) and. See it on [Vercel](https://education-platform-web-app.vercel.app)

**Backend**: Can be hosted on Render or Railway. See it on [Render](https://education-platform-web-app.onrender.com/api) (_Need to wait ~50 seconds_)

















