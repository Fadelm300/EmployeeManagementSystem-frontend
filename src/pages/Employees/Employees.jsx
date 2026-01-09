import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import DeleteModal from "../../components/Model/DeleteModal";
import LogoutModal from "../../components/Model/LogoutModal";
import "./Employees.css";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await api.get("/employees");
        setEmployees(res.data.data || res.data);
      } catch {
        alert("Failed to load employees");
      }
    };
    fetchEmployees();
  }, []);

  const openDeleteModal = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    await api.delete(`/employees/${selectedEmployee.id}`);
    setEmployees(employees.filter(e => e.id !== selectedEmployee.id));
    setShowModal(false);
  };

  return (
    <div className="employees-page">
      <header className="employees-top">
        <div>
          <h2>Employees</h2>
          <p>Manage your company staff</p>
        </div>

        <div className="top-actions">
          <button className="primary-btn" onClick={() => navigate("/employees/add")}>
            + Add Employee
          </button>
          <button className="danger-btn" onClick={() => setShowLogoutModal(true)}>
            Logout
          </button>
        </div>
      </header>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.position}</td>
                <td>${emp.salary}</td>
                <td>
                  <span className={`status ${emp.status}`}>
                    {emp.status}
                  </span>
                </td>
                <td className="actions-cell">
                  <button
                    className="icon-btn edit"
                    onClick={() => navigate(`/employees/edit/${emp.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="icon-btn delete"
                    onClick={() => openDeleteModal(emp)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DeleteModal
        show={showModal}
        employee={selectedEmployee}
        onConfirm={confirmDelete}
        onCancel={() => setShowModal(false)}
      />

      <LogoutModal
        show={showLogoutModal}
        onConfirm={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
        onCancel={() => setShowLogoutModal(false)}
      />
    </div>
  );
}

export default Employees;
