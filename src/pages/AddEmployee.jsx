import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function AddEmployee() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    salary: "",
    status: "active",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/employees", form)
      .then(() => navigate("/employees")) 
      .catch(() => alert("Failed to add employee"));
  };

  const handleCancel = () => {
    navigate("/employees"); 
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="position"
          placeholder="Position"
          value={form.position}
          onChange={handleChange}
          required
        />
        <input
          name="salary"
          placeholder="Salary"
          type="number"
          value={form.salary}
          onChange={handleChange}
          required
        />
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <button type="submit">Add</button>
        <button type="button" onClick={handleCancel} >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
