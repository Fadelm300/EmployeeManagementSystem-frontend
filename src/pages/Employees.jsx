import { useEffect, useState } from 'react';
import api from '../api';

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.get('/employees')
      .then(res => setEmployees(res.data.data))
      .catch(() => alert('Unauthorized'));
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name} - {emp.position}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Employees;
