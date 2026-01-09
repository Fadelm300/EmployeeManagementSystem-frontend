# Employee Management Frontend

This is the **React frontend** for the Employee Management System.  
It connects to the Laravel API backend and allows you to manage employees.

---

## 🛠 Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- Backend API running (Laravel) on `http://localhost:8000/api`

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

