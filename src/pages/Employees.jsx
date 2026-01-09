import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await api.get("/employees");
        setEmployees(res.data.data || res.data);
      } catch (err) {
        if (err.response?.status === 401) alert("Unauthorized");
        else alert("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;

    try {
      await api.delete(`/employees/${id}`);
      setEmployees(employees.filter((emp) => emp.id !== id));
    } catch {
      alert("Failed to delete employee");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Employees</h2>
      <button onClick={() => navigate("/employees/add")}>Add Employee</button>
      <table >
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
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.position}</td>
              <td>{emp.salary}</td>
              <td>{emp.status}</td>
              <td>
                <button onClick={() => navigate(`/employees/edit/${emp.id}`)}>Edit</button>
                <button onClick={() => handleDelete(emp.id)} >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
