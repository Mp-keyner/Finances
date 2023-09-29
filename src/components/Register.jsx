import React, { useState } from "react";
import "../App.css";
import imgLateral from "../img/Jan-Business_team_3 1.svg";
import logo from "../img/logoFyba.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button, FilledInput, IconButton, InputAdornment, InputLabel, Select, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
            <TextField variant="filled" placeholder="Nombre Completo: Pedro.." label='Nombre Completo ' color="textLight" sx={{
              borderRadius: '8px 8px 0px 0px',
              width: '100%',
              color: 'white',

              '& label': {
                color: 'white',
              },
              '& div::before': {
                border: 'none',  // Cambia el color del borde antes del input
              },
              '& div:hover': {
                borderBottomColor: 'white',  // Cambia el color del borde antes del input
              },
              '& div div:hover': {
                borderBottomColor: 'white',  // Cambia el color del borde antes del input
              },
              '& input': {
                color: 'white',  // Cambia el color del borde antes del input
              },
            }} />
            <TextField variant="filled" placeholder="Example@g..." label='Ingresa tu Email' color="textLight" sx={{
              borderRadius: '8px 8px 0px 0px',
              width: '100%',
              color: 'white',

              '& label': {
                color: 'white',
                borderBottomColor: 'white',
              },
              '& div::before': {
                border: 'none',  // Cambia el color del borde antes del input
              },
              '& div:hover': {
                borderBottomColor: 'white',  // Cambia el color del borde antes del input
              },
              '& div div:hover': {
                borderBottomColor: 'white',  // Cambia el color del borde antes del input
              },
              '& input': {
                color: 'white',  // Cambia el color del borde antes del input
              },
            }} />
            <FormControl fullWidth variant="filled" color='textLight'>
              <InputLabel htmlFor="filled-adornment-password" color='textLight'>Password</InputLabel>
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
                      {showPassword ? <VisibilityOff color="textLight" /> : <Visibility color='textLight' />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <TextField variant="filled" placeholder="13643..." label='Ingresa el Codigo de Registro' color="textLight" sx={{
              borderRadius: '8px 8px 0px 0px',
              width: '100%',
              color: 'white',

              '& label': {
                color: 'white',
                borderBottomColor: 'white',
              },
              '& div::before': {
                border: 'none',  // Cambia el color del borde antes del input
              },
              '& div:hover': {
                borderBottomColor: 'white',  // Cambia el color del borde antes del input
              },
              '& div div:hover': {
                borderBottomColor: 'white',  // Cambia el color del borde antes del input
              },
              '& input': {
                color: 'white',  // Cambia el color del borde antes del input
              },
            }} />
            <FormControl fullWidth variant="filled">
              <InputLabel id="demo-simple-select-label" color='textLight'
                sx={{
                  borderRadius: '8px 8px 0px 0px',
                  width: '100%',
                  color: 'white',

                  '& label': {
                    color: 'white',
                    borderBottomColor: 'white',
                  },
                  '& div::before': {
                    border: 'none',  // Cambia el color del borde antes del input
                  },
                  '& div:hover': {
                    borderBottomColor: 'white',  // Cambia el color del borde antes del input
                  },
                  '& div': {
                    color: 'white',  // Cambia el color del borde antes del input
                  },
                  '& input': {
                    color: 'white',  // Cambia el color del borde antes del input
                  },
                }}
              >Selecciona tu Universidad</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Selecciona tu Universidad"
                onChange={handleChange}
                color="textLight"

              >
                <MenuItem value={10}>Universidad 1</MenuItem>
                <MenuItem value={20}>Universidad 2</MenuItem>
                <MenuItem value={30}>Universidad 3</MenuItem>
              </Select>
            </FormControl>


            <div className="btn" style={{
              width: '100%'
            }}>
              <Button size="medium" variant="contained" onClick={GoLogin}
                sx={{
                  width: '100%'
                }}>Iniciar Sesión</Button>
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
