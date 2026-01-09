import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

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

  const handleCancel = () => {
    navigate("/employees");
  };

  return (
    <div>
      <h2>Edit Employee</h2>
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

        <button type="submit">Update</button>
        <button
          type="button"
          onClick={handleCancel}
          style={{ marginLeft: "10px" }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditEmployee;
