import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api";
import "./EditEmployee.css";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    salary: "",
    status: "active",
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await api.get(`/employees/${id}`);
        const emp = res.data.data || res.data;
        setForm({
          name: emp.name || "",
          email: emp.email || "",
          position: emp.position || "",
          salary: emp.salary || "",
          status: emp.status || "active",
        });
      } catch {
        alert("Employee not found");
      }
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/employees/${id}`, form);
      navigate("/employees");
    } catch {
      alert("Failed to update employee");
    }
  };

  return (
    <div className="edit-emp-page">
      <div className="edit-emp-card">
        <h2>Edit Employee</h2>
        <p className="edit-emp-subtitle">Update employee information</p>

        <form onSubmit={handleSubmit}>
          <div className="edit-emp-group">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label>Name</label>
          </div>

          <div className="edit-emp-group">
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label>Email</label>
          </div>

          <div className="edit-emp-group">
            <input
              name="position"
              value={form.position}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label>Position</label>
          </div>

          <div className="edit-emp-group">
            <input
              name="salary"
              type="number"
              value={form.salary}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label>Salary</label>
          </div>

          <div className="edit-emp-group">
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <label>Status</label>
          </div>

          <div className="edit-emp-actions">
            <button type="submit" className="edit-emp-btn">
              Update
            </button>
            <button
              type="button"
              className="edit-emp-cancel"
              onClick={() => navigate("/employees")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEmployee;
