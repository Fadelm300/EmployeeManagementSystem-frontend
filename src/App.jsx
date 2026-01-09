import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'; 
// import Employees from './pages/Employees'
// import AddEditEmployee from './pages/AddEditEmployee';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/employees" element={<Employees />} />
        <Route path="/employees/add" element={<AddEditEmployee />} />
        <Route path="/employees/edit/:id" element={<AddEditEmployee />} />
      */}
       </Routes>
    </Router>
  );
}

export default App;
