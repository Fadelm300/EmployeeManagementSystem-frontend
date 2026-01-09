import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'; 
import Employees from './pages/Employees'
// import AddEditEmployee from './pages/AddEditEmployee';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />{/* public route */}
      {/* protected route */}
       <Route
          path="/employees"
          element={
            <ProtectedRoute>
              <Employees />
            </ProtectedRoute>
          }
        />
       </Routes>
    </Router>
  );
}

export default App;
