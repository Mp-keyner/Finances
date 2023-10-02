import React, { useState } from "react";
import logo from "../img/logoFyba.png";
import Home2 from "../img/home.svg";
import user1 from "../img/user.svg";
import book from "../img/book.svg";
import edit from "../img/edit.svg";
import file from "../img/file.svg";
import key from "../img/key.svg";
import goOut from "../img/goOut.svg";
import Lupa from "../img/Lupa.svg";
import UserCircle from "../img/UserCircle.svg";
import candado from "../img/candado.png";
import users from "../img/users.svg";
import x from "../img/x.svg";
import { motion } from "framer-motion";
import menu from "../img/Menu.svg";
import xClose from "../img/xClose.svg";
import { Link, useNavigate } from "react-router-dom";

const MainAdmin = () => {
  const navigate = useNavigate();

  const GoMain = () => {
    // Redirigir al usuario a otra parte
    navigate("/");
  };
  const GoUser = () => {
    // Redirigir al usuario a otra parte
    navigate("/result-admin");
    console.log("object");
  };
  const [manu, setManu] = useState(false);
  const ShowMenu = () => {
    console.log("ya ya ya ");
    setManu(!manu);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <section className="containerAdmin">
        <div
          className={manu ? "leftAdmin show" : "leftAdmin hiden"}
        >
          <img
            src={xClose}
            alt=""
            className="xClose"
            onClick={ShowMenu}
            style={{ width: "3pc" }}
          />
          <img src={logo} alt="" title="FINANCES" onClick={GoMain} />
          <Link to={"/admin"}>
            <div className="home Activo" title="Inicio">
              <img src={Home2} alt="" />
              Inicio
            </div>
          </Link>
          <div className="containerOp">
            <div>
              <p>cuentas</p>
              <Link to={"/result-admin"}>
                <div className="user ActivoHver" title="Ver usuarios">
                  <img src={user1} alt="" />
                  <p>Ver usuarios</p>
                </div>
              </Link>
              <Link to={"/result-adminUni"}>
                <div className="book ActivoHver" title="Agregar Universidades">
                  <img src={book} alt="" />
                  <p>Agregar Universidades</p>
                </div>
              </Link>
            </div>
            <div>
              <p>Licencias</p>
              <Link to={"/Generar"}>
                <div className="user ActivoHver " title="Generar Codigo">
                  <img src={edit} alt="" />
                  <p>Generar Codigo</p>
                </div>
              </Link>
              <Link to={"/admin-list"}>
                <div className="book ActivoHver" title="Administrar Codigos">
                  <img src={key} alt="" />
                  <p>Administrar Codigos</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="rigthAdmin">
          <div className="SecSearch  ">
            <img src={menu} alt="" id="menu" onClick={ShowMenu} />
            <div>
              <img src={Lupa} alt="" />
              <p>Usuario a buscar</p>
              <img src={UserCircle} alt="" />
              <img src={goOut} alt="" />
            </div>
          </div>
          <div className="lefAd">
            <div className="containerUserLive">
              <h2>Lista de usuarios conectados</h2>
              <hr />
              <div className="containerUse">
                <div className="UserLive">
                  <div className="CirLive"></div>
                  <p>JUANITO PEREZ</p>
                </div>
                <hr />
                <div className="UserLive">
                  <div className="CirLive"></div>
                  <p>JUANITO PEREZ</p>
                </div>
                <hr />
                <div className="UserLive">
                  <div className="CirLive"></div>
                  <p>JUANITO PEREZ</p>
                </div>
                <hr />
                <div className="UserLive">
                  <div className="CirLive"></div>
                  <p>JUANITO PEREZ</p>
                </div>
                <hr />
                <div className="UserLive">
                  <div className="CirLive"></div>
                  <p>JUANITO PEREZ</p>
                </div>
                <hr />
                <div className="UserLive">
                  <div className="CirLive"></div>
                  <p>JUANITO PEREZ</p>
                </div>
                <hr />
                <div className="UserLive">
                  <div className="CirLive"></div>
                  <p>JUANITO PEREZ</p>
                </div>
                <hr />
                <div className="UserLive">
                  <div className="CirLive"></div>
                  <p>JUANITO PEREZ</p>
                </div>
                <hr />
                <div className="UserLive">
                  <div className="CirLive"></div>
                  <p>JUANITO PEREZ</p>
                </div>
                <hr />
                <div className="UserLive">
                  <div className="CirLive"></div>
                  <p>JUANITO PEREZ</p>
                </div>
                <hr />
                <div className="UserLive">
                  <div className="CirLive"></div>
                  <p>JUANITO PEREZ</p>
                </div>
              </div>
            </div>
            <div className="CarValue">
              <div className="centrar">
                <img src={UserCircle} alt="" />
                <p className="centrarp">NUMEROS DE USUARIOS CONECTADOS</p>
              </div>
              <div className="centrar">
                <div className="CirLive"></div>
                <p style={{ fontSize: "2pc" }}>200</p>
              </div>
            </div>
            <div className="CarValue">
              <div className="centrar">
                <img src={candado} alt="" style={{ width: "4pc" }} />
                <p className="centrarp">NUMEROS DE LICENCIAS ACTIVAS</p>
              </div>
              <div className="centrar">
                <p style={{ fontSize: "2pc" }}>200</p>
              </div>
            </div>
            <div className="CarValue">
              <div className="centrar">
                <img src={users} alt="" style={{ width: "4pc" }} />
                <p className="centrarp">NUMEROS DE USUARIOS REGISTRADOS</p>
              </div>
              <div className="centrar">
                <p style={{ fontSize: "2pc" }}>200</p>
              </div>
            </div>
            <div className="CarValue">
              <div className="centrar">
                <img src={x} alt="" />
                <p className="centrarp">NUMEROS DE LICENCIAS EXPIRADAS</p>
              </div>
              <div className="centrar">
                <p style={{ fontSize: "2pc" }}>200</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default MainAdmin;
