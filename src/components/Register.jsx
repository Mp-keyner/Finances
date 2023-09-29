import React from "react";
import "../App.css";
import imgLateral from "../img/Jan-Business_team_3 1.svg";
import logo from "../img/logoFyba.png";
import ojo from "../img/eye.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { InputLabel, Select, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const Register = () => {
  const navigate = useNavigate();

  const GoLogin = () => {
    // Redirigir al usuario a otra parte
    navigate("/");
  };
  const GoMain = () => {
    // Redirigir al usuario a otra parte
    navigate("/");
  };
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <section className="containerRegister">
        <div className="right-register">
          <img src={logo} alt="" className="logo" onClick={GoMain} />
          <h1>Iniciar Sesion</h1>
          <form className="form-register">
            <TextField variant="filled" placeholder="Nombre Completo: Pedro.." label='Nombre Completo ' color="text" sx={{
              background: '#fff',
              color: '#000',
              borderRadius: '8px 8px 0px 0px',
              width: '100%',
            }} />
            <TextField variant="filled" placeholder="Nombre Completo: Pedro.." label='Ingresa tu Email' color="text" type="email" sx={{
              background: '#fff',
              color: '#000',
              borderRadius: '8px 8px 0px 0px',
              width: '100%',
            }} />
            <TextField variant="filled" placeholder="Nombre Completo: Pedro.." label='Ingresa tu contraseña' color="text" type="password" sx={{
              background: '#fff',
              color: '#000',
              borderRadius: '8px 8px 0px 0px',
              width: '100%',
            }} />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <label htmlFor="" className="input" style={{ width: '99%' }}>
              Codigo de Registro
              <input type="text" id="Email" placeholder="Ingresa tu email" />
            </label>
            <label htmlFor="" className="input" style={{ width: '99%' }}>
              Universidad
              <select style={{ width: '100%' }}>
                <option value="Universidad 1">Universidad 1</option>
                <option value="Universidad 2">Universidad 2</option>
                <option value="Universidad 3">Universidad 3</option>
                <option value="Universidad 4">Universidad 4</option>
                <option value="Universidad 5">Universidad 5</option>
              </select>
            </label>

            <div className="btn">
              <button onClick={GoLogin}>Iniciar Secion</button>
            </div>
          </form>
        </div>
        <div className="left">
          <img src={imgLateral} alt="" />
        </div>
      </section>
    </motion.div>
  );
};

export default Register;
