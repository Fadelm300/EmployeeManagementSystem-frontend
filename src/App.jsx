import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Employees from "./pages/Employees/Employees";
import AddEmployee from "./pages/AddEmployee/AddEmployee";
import EditEmployee from "./pages/EditEmployee/EditEmployee";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home.jsx";

// import DeleteEmployee from "./pages/DeleteEmployee";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route
          path="/employees"
          element={
            <ProtectedRoute>
              <Employees />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employees/add"
          element={
            <ProtectedRoute>
              <AddEmployee />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employees/edit/:id"
          element={
            <ProtectedRoute>
              <EditEmployee />
            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/employees/delete/:id"
          element={
            <ProtectedRoute>
              <DeleteEmployee />
            </ProtectedRoute>
          }
        /> */}

        
      </Routes>
    </Router>
  );
}

export default App;
