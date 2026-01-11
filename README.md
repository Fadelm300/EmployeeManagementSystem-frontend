<p align="center">
  <a href="https://react.dev" target="_blank">
    <img src="public/Images/react_img.png" width="200" alt="React Logo">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue" />
  <img src="https://img.shields.io/badge/Vite-Frontend-yellow" />
  <img src="https://img.shields.io/badge/Axios-HTTP%20Client-purple" />
  <img src="https://img.shields.io/badge/JWT-Authentication-green" />
  <img src="https://img.shields.io/badge/License-MIT-lightgrey" />
</p>

# Employee Management Frontend

This project is the **frontend application** for the **Employee Management System**, built using **React.js** with **Vite** for fast development and optimized builds.

The frontend communicates with a **RESTful API backend** using **Axios** and implements **JWT-based authentication** to secure protected routes such as employee management pages.

---

## 🧑‍💻 Technologies Used

- **React 18** – JavaScript library for building interactive user interfaces  
- **Vite** – Modern frontend build tool for fast development  
- **JavaScript (ES6+)** – Core programming language  
- **Axios** – HTTP client for API communication  
- **React Router DOM** – Client-side routing and protected routes  
- **JWT Authentication** – Secure user authentication and authorization  
- **CSS** – Styling and layout  

---

## 🎯 Project Purpose

The goal of this frontend is to provide a **clean, user-friendly interface** for managing employees, including:

- Secure login system
- Viewing employee records
- Adding, editing, and deleting employees
- Handling validation and API errors clearly

---

## ⚡ Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/Fadelm300/EmployeeManagementSystem-frontend.git
cd frontend
```
2. **Install dependencies**

```bash
npm install
```
or

```bash
yarn install
```
2. **Start the development server**

```bash
npm run dev
```
or

```bash
yarn dev
The app will run on http://localhost:5173 (Vite default).
```
---

## 🔗 Backend Repositories

This frontend can work with either of the following backend implementations:

### 1️⃣ Backend – CodeIgniter 4 (JWT Authentication)
- RESTful API built with CodeIgniter 4
- JWT-based authentication
- CORS enabled

🔗 Repository:  
https://github.com/Fadelm300/employee-api-v2

---

### 2️⃣ Backend – Laravel (Alternative Implementation)
- RESTful API built with Laravel
- JWT authentication
- Follows the same API structure

🔗 Repository:  
https://github.com/Fadelm300/EmployeeManagementSystem-backend

---

⚠️ **Important:**  
Make sure **only one backend** is running at a time, and update the API base URL in the frontend accordingly.
## 🔧 Backend Selection

Update the API base URL in `src/api.js` depending on the backend you choose:

```js
// CodeIgniter 4
baseURL: 'http://localhost:8080/api'

// Laravel
baseURL: 'http://localhost:8000/api'

```

## 🔧 API Configuration
 
 - Axios is configured in src/api.js:



```bash
const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: { Accept: 'application/json' },
});

```
- Make sure the backend Laravel API is running on port 8000.

- JWT token is stored in localStorage and automatically sent with API requests.

## 🔐 Authentication

- Login with an existing user from backend (seeded or created manually)

- Protected routes redirect unauthorized users to the login page.

- After login, token is stored in localStorage and used for API requests automatically.

## 🔐 Authentication Flow

### 1. Login
- User enters email and password on `/login` page.
- Form is validated on the frontend.
- POST request is sent to `/api/login` with:
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```
- Backend returns a JWT token.

- Token is stored in localStorage and automatically added to the Authorization header for future requests.
- Frontend displays validation errors under input fields and backend errors as form alerts.

### 2. Protected Routes

- /employees, /employees/add, /employees/edit/:id are protected.

- React checks if a token exists in localStorage.

- If no token is found, the user is redirected to /login.

### 3. Logout

Clicking Logout removes the token from localStorage.

User is redirected to /login.






## 🏠 App Navigation

- /login → Login page

- /employees → Employee list (protected route)

- /employees/add → Add employee

- /employees/edit/:id → Edit employee


## 🧾 Available API Endpoints

- All endpoints are under http://localhost:8000/api:

| Endpoint         | Method | Description        | Body / Params                               |
| ---------------- | ------ | ------------------ | ------------------------------------------- |
| `/login`         | POST   | Authenticate user  | `{ email, password }`                       |
| `/employees`     | GET    | Get all employees  | Header: `Authorization: Bearer <token>`     |
| `/employees`     | POST   | Add new employee   | `{ name, email, position, salary, status }` |
| `/employees/:id` | GET    | Get employee by ID | Header: `Authorization: Bearer <token>`     |
| `/employees/:id` | PUT    | Update employee    | `{ name, email, position, salary, status }` |
| `/employees/:id` | DELETE | Delete employee    | Header: `Authorization: Bearer <token>`     |

⚠️ All /employees routes require authentication via JWT token

## 💡 Notes

- Form validation is performed both frontend and backend.

- Error messages are displayed under the input fields or as alerts for destructive actions.

- Confirmation modals are used for deleting employees and logging out.

## 🖥️ Application Screenshots (Frontend)

### 🔐 Login Page
![Login Page](/public/Images/login.png)

### 📊 Dashboard
![Dashboard](/public/Images/Dashboard.png)

### ➕ Add Employee Page
![Add Employee Page](/public/Images/Add_Employee.png)

### ✏️ Edit Employee Page
![Edit Employee Page](/public/Images/Edit_Employee.png)

### 🗑️ Delete Employee Action
![Delete Employee](/public/Images/Delete_Employee.png)

### 🚪 Logout Confirmation
![Logout Confirmation](/public/Images/Confirm_Logout.png)

### ❌ Email Validation Error
![Email Error](/public/Images/input-error-email.png)

### ❌ Password Validation Message
![Password Validation](/public/Images/Password-validate-1.png)

### ❌ Invalid Login Credentials
![Invalid Credentials](/public/Images/Invalid%20email%20or%20password.png)

