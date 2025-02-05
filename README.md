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
- Add Movie
- Edit Movie Details
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
    VITE_apiKey = AIzaSyCrGxq4owJ2iTTXEaV0FqJIj6sjlbkOoJA
   VITE_authDomain = your-domain
   VITE_projectId = your-project-id
   VITE_storageBucket = your-firebase-storageBucket
   VITE_messagingSenderId = your-messageSenderId
   VITE_appId = your-app-id
   VITE_measurementId = your-measurement-id

   VITE_imgBB_api = your-imgBB-api-key
   # VITE_api_url = http://localhost:3000
   VITE_api_url = your-live-link

   VITE_stripe_public_key = your-stripe-key
   ```


6. Open `http://localhost:3000` in your browser.

## Live Project & Resources
- 🔗 [Live Demo](https://ph-assignment-10-sajmul.web.app)
