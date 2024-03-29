# Web Software Production 

![Alt text](image.png)

## Server Address and Endpoints
- Frontend URL: http://172.16.6.255:8080/
- Backend URL: http://172.16.6.255:4040/

## Team Members
- Nhan Tran `nhan.tran@tuni.fi`

## Introduction
This is a TodoApp project which can be used to CRUD tasks using functional CI/CD pipeline. It contains 6 phases but just only 4 basic phases (from 1 to 4) and 2 extra phases (Testing and Database)

### Option 1 : Steps to Run the Application Locally
1. Ensure that Node.js is installed on your computer. If not, you can obtain it from the official website.
2. Clone the project repository to your local machine using `git clone https://github.com/se-5G00DM04/2023-ntran-project.git`.
3. Use the `cd` command to navigate to the project's root directory.
4. Install the necessary dependencies for both the frontend and backend components by executing the command `npm install` in their respective directories.
5. Initiate the backend server by navigating to the backend directory and executing `npm run dev`. The server will start and be accessible at  `http://localhost:5000`.
6. Launch the frontend application by navigating to the frontend directory and executing `npm start`. The application will open in your default web browser at  `http://localhost:3000`.

### Option 2 : Using Docker to run project locally
1. Ensure that you have Docker and Docker Compose installed on your device. 
2. Clone the project repository to your local machine using `git clone https://github.com/se-5G00DM04/2023-ntran-project.git`.
3. Use the `cd` command to navigate to the project's root directory.
4. Start running the Project `docker-compose up --build`. This command will start both  Frontend and Backend services
5. Your Frontend app will accessible at address `http://localhost:8080`, and Backend app will accessible at `http://localhost:4040`

## Completed Phases
1. Initial setup (5p)
2. Docker localhost (5p)
3. CI/CD Pipeline & Remote Server (5p)
4. Implement Features/Functionalities for the React ToDo app (10p)
5. Testing feature (5p)
6. Database (3p) - Connected Database and Create CRUD endpoints for task list

## Expected Project grade and Reason for that:
I think my grade should be near maximum because I have implemented almost features of this Todo App Project just only remain Frontend for last step.

