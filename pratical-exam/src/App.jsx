import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import StudentPage from "./pages/Studentpage";
import Login from "./pages/Login";
import PrivateRoute from "./components/Privateroute";

function App() {
  const [students, setStudents] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard students={students} />
            </PrivateRoute>
          }
        />
        <Route
          path="/students"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <StudentPage students={students} setStudents={setStudents} />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
