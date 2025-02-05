# Estromus

## Overview
Estromus is a fully-featured movie portal that allows users to browse, add, and manage movies efficiently. Built using React and Node.js, it provides a secure and seamless experience for users.

## Technologies Used
- React.js
- Tailwind CSS
- Firebase (Authentication & Database)
- Express.js (Backend API)
- MongoDB (Database)

## Core Features
- User authentication (Sign up, Login, Logout)
-Add Movie
-Edit Movie Details
- Responsive and user-friendly UI

## Dependencies
- React Router
- Firebase SDK
- Axios
- Express.js
- MongoDB Driver
- TailwindCSS

## How to Run the Project Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sajmulhossain/estromus-client.git
   cd estromus
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```

4. **Start the backend server:**
   ```bash
   cd backend
   npm install
   node server.js
   ```

5. **Start the frontend:**
   ```bash
   npm start
   ```

6. Open `http://localhost:3000` in your browser.

## Live Project & Resources
- 🔗 [Live Demo](https://ph-assignment-10-sajmul.web.app)
