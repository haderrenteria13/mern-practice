# MERN Practice Project

## Description
This is a full-stack web application built using the MERN stack:
- **M**ongoDB - Document database
- **E**xpress.js - Node.js web framework
- **R**eact - Client-side JavaScript framework
- **N**ode.js - JavaScript web server

This project serves as a practice environment for building applications with the MERN stack.

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (version 14.x or higher)
- npm (version 6.x or higher)
- MongoDB (version 4.x or higher)
- Git

## Installation
Follow these steps to set up the project locally:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd mern-practice
   ```

2. Install dependencies for the server:
   ```
   npm install
   ```

3. Navigate to the client directory and install frontend dependencies:
   ```
   cd client
   npm install
   ```

4. Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/mern-practice
   PORT=5000
   NODE_ENV=development
   ```

## Running the Application

### Development Mode
1. Start the MongoDB service:
   ```
   sudo service mongodb start
   ```

2. In the root directory, start the server:
   ```
   npm run server
   ```

3. In a separate terminal, navigate to the client directory and start the React development server:
   ```
   cd client
   npm start
   ```

4. Access the application in your browser at `http://localhost:3000`

### Production Mode
To build and run the application for production:

1. In the client directory, build the React application:
   ```
   cd client
   npm run build
   ```

2. Return to the root directory and start the production server:
   ```
   cd ..
   npm run start
   ```

3. Access the application at the configured port (default: `http://localhost:5000`)

## Project Structure
```
mern-practice/
├── client/                # React frontend
│   ├── public/            # Static files
│   ├── src/               # React source code
│   └── package.json       # Frontend dependencies
├── server/                # Express backend
│   ├── config/            # Configuration files
│   ├── controllers/       # Route controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   └── server.js          # Entry point
├── .env                   # Environment variables
├── .gitignore             # Git ignore file
├── package.json           # Backend dependencies
└── README.md              # Project documentation
```

