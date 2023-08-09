import React from "react";
import "../App.css";
import imgLateral from "../img/Jan-Business_team_3 1.svg";
import logo from "../img/finance$.svg";
import ojo from "../img/eye.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();

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
            <label htmlFor="" className="input">
              Email
              <input type="text" id="Email" placeholder="Ingresa tu email" />
            </label>
            <label htmlFor="" className="input">
              Contraseña
              <span className="eyes">
                <input
                  type="password"
                  id="Contraseña"
                  placeholder="Ingresa tu contraseña"
                />
                <img src={ojo} alt="" />
              </span>
            </label>
            <div className="old">
              <p>¿olvidastes tu contraseña?</p>
            </div>
            <div className="btn">
              <button>Iniciar Secion</button>
              <p>o</p>
              <button onClick={Goregister}>Registrarse</button>
            </div>
          </form>
        </div>
      </section>
    </motion.div>
  );
};

export default Login;
