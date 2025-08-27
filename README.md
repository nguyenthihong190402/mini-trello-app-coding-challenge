# mini-trello-app-coding-challenge

- **Front-end:** React + TypeScript + Ant Design + Vite + TailWindCss
- **Back-end:** Node.js + Express
- **Database:** Firebase Firestore
- **Authentication:** JWT with email verification + Nodemailer
- **Real-time updates:** WebSocket / Socket.io

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)

Installation
1. Clone the repository:
   git clone https://github.com/nguyenthihong190402/mini-trello-app-coding-challenge.git
   
2. Install dependencies:
   # Front-end
   cd frontend-mini-trello-app
   npm install

   # Back-end
   cd express-backend
   npm install
   
3. Runing
   # Front-end
   cd frontend-mini-trello-app
   npm run dev
   http://localhost:5173
   # Back-end
   cd express-backend
   npm run dev
   http://localhost:8080
   
#Technologies Used
    React + TypeScript – Front-end framework
    Ant Design – UI components
    Vite – Front-end build tool
	TailWindCss - Style Css
    Node.js + Express – REST API
    Firebase Firestore – Database
    JWT – Authentication
    
#API Endpoints
Authentication
POST /auth/signup – Signup with email & verification code
POST /auth/signin – Sign in and receive JWT access token

Boards
GET /boards – Get all boards for authenticated user
POST /boards – Create a new board
GET /boards/:id – Get board details
PUT /boards/:id – Update board
DELETE /boards/:id – Delete board

#Screenshots 
Implement Front-end
[Login page](Screenshots/login.png)
[Input email not format](Screenshots/InputNotFormat.png)
[loading when sending email ](Screenshots/loading.png)
[Auth Page](Screenshots/verify.png)
[Check code when input](Screenshots/checkcode.png)
[email to receive code](Screenshots/mail.png)

RESTFull API: test Postman
[Get all boards for authenticated user](Screenshots/getBoardById.png)
[Update board](Screenshots/updateBoard.png)
[Delete board](Screenshots/deleteBoard.png)
[Get all boards for authenticated user](Screenshots/getAllBoard.png)
[Create a new board](Screenshots/createBoard.png)
