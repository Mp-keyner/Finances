import React from "react";
import "../App.css";
import imgLateral from "../img/Jan-Business_team_3 1.svg";
import logo from "../img/logoFyba.png";
import ojo from "../img/eye.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
            <label htmlFor="" className="input" style={{width: '99%'}}>
              Nombre Completo
              <input type="text" id="Email" placeholder="Ingresa tu email" />
            </label>
            <label htmlFor="" className="input" style={{width: '99%'}}>
              Email
              <input type="text" id="Email" placeholder="Ingresa tu email" />
            </label>
            <label htmlFor="" className="input" style={{width: '99%'}}>
              Contraseña
              <span className="eyes">
                <input
                  type="password"
                  id="Contraseña"
                  placeholder="Ingresa tu contraseña"
                  style={{width: '100%'}}
                />
                <img src={ojo} alt="" />
              </span>
            </label>
            <label htmlFor="" className="input" style={{width: '99%'}}>
              Codigo de Registro
              <input type="text" id="Email" placeholder="Ingresa tu email" />
            </label>
            <label htmlFor="" className="input" style={{width: '99%'}}>
              Universidad
              <select style={{width: '100%'}}>
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
