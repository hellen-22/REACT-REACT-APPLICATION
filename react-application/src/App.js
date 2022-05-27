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
import Hooks from "./screens/Hooks";
import DataFetch from "./components/DataFetch";

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
          <Route path="/hooks" element={<Hooks/>} />
          <Route path="/Data" element={<DataFetch/>} />
        </Routes>
    </Router>
    
  );
}

export default App;
