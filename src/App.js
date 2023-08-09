import "./App.css";
import Login from "./components/Login";
import MainAdmin from "./components/Main-admin";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<MainAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
