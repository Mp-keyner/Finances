import React, { useState } from "react";
import "../App.css";
import imgLateral from "../img/Jan-Business_team_3 1.svg";
import logo from "../img/logoFyba.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const Goregister = () => {
    // Redirigir al usuario a otra parte
    navigate("/register");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <section className="containerLogin">
        <div className="left">
          <img src={imgLateral} alt="" />
        </div>
        <div className="right">
          <img src={logo} alt="" className="logo" />
          <h1>Iniciar Sesion</h1>
          <form className="form">
            <TextField variant="filled" placeholder="Example@g..." label='Ingresa tu Email' color="text" sx={{
              background: 'white',
              borderRadius: '8px',
              '& div::before': {
                border: 'none',  // Cambia el color del borde antes del input
              },
            }} />
            <FormControl fullWidth variant="filled" color='text'>
              <InputLabel htmlFor="filled-adornment-password" color='text'>Password</InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                color='textLight'
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff color="text" /> : <Visibility color='text' />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <div className="old">
              <p>¿olvidastes tu contraseña?</p>
            </div>
            <div className="btn" style={{ width: '99%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              <Button size="medium" variant="contained" onClick={Goregister}
                sx={{
                  width: '100%'
                }}>Iniciar Sesión</Button>
              <p style={{
                fontSize: '1pc',
                margin: '1pc',
                borderBottom: '1px solid white',
                width: '5pc',
                paddingBottom: '0.2pc'
              }}>Registrate</p>
            </div>
          </form>
        </div>
      </section>
    </motion.div>
  );
};

export default Login;
