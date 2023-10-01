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
import { ThemeProvider, createTheme } from "@mui/material";

function App() {

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#000',
      },
      secondary: {
        main: '#3435ce',
      },
      text: {
        main: '#000',
      },
      textLight: {
        main: '#fff'
      }
    },
  })

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
