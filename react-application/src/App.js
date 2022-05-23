import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./screens/About";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import Register from "./screens/Register";
import Login from "./screens/Login";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
    </Router>
    
  );
}

export default App;
