import React from "react";
import "../App.css";
import imgLateral from "../img/Jan-Business_team_3 1.svg";
import logo from "../img/finance$.svg";
import ojo from "../img/eye.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const GoLogin = () => {
    // Redirigir al usuario a otra parte
    navigate("/");
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
          <img src={logo} alt="" className="logo" />
          <h1>Iniciar Sesion</h1>
          <form className="form-register">
            <label htmlFor="" className="input">
              Email
              <input type="text" id="Email" placeholder="Ingresa tu email" />
            </label>
            <label htmlFor="" className="input">
              Email
              <input type="text" id="Email" placeholder="Ingresa tu email" />
            </label>
            <label htmlFor="" className="input">
              Email
              <input type="text" id="Email" placeholder="Ingresa tu email" />
            </label>
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
