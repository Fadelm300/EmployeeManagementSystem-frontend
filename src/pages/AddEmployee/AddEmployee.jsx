import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import "./AddEmployee.css";

function AddEmployee() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    salary: "",
    status: "active",
  });
const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setErrors({});

  try {
    await api.post("/employees", form);
    navigate("/employees");
  } catch (err) {
    if (!err.response) {
      alert("Server unreachable. Please try again later.");
      return;
    }

    const { status, data } = err.response;

    if (status === 422) {
      const fieldErrors = {};
      if (data.errors) {
        Object.keys(data.errors).forEach(key => {
          fieldErrors[key] = data.errors[key][0];
        });
      }
      setErrors(fieldErrors);
      return;
    }

    alert("Failed to add employee. Please try again.");
  }
};

  return (
    <div className="add-emp-page">
      <div className="add-emp-card">
        <h2>Add Employee</h2>
        <p className="add-emp-subtitle">Create a new employee record</p>

        <form onSubmit={handleSubmit}>
          <div className="add-emp-group">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label>Name</label>
          </div>

          <div className="add-emp-group">
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label>Email</label>
            {errors.email && <span className="input-error-email">{errors.email}</span>}

          </div>

          <div className="add-emp-group">
            <input
              name="position"
              value={form.position}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label>Position</label>
          </div>

          <div className="add-emp-group">
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

          <div className="add-emp-group">
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

          <div className="add-emp-actions">
            <button type="submit" className="add-emp-btn">
              Save
            </button>
            <button
              type="button"
              className="add-emp-cancel"
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

export default AddEmployee;
