import "./App.css";
import Login from "./components/Login";
import MainAdmin from "./components/Main-admin";
import Register from "./components/Register";
import ResultsAdmin from "./components/Results-admin";
import AdminUni from "./components/admin-u";
import EditUser from "./components/EditUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Generar from "./components/GenerarCodigo";
import AdminList from "./components/AgragarList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<MainAdmin />} />
        <Route path="/result-admin" element={<ResultsAdmin />} />
        <Route path="/result-adminUni" element={<AdminUni />} />
        <Route path="/admin-edit" element={<EditUser />} />
        <Route path="/Generar" element={<Generar />} />
        <Route path="/admin-list" element={<AdminList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
