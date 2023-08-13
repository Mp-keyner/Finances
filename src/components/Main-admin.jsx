import React, { useState } from "react";
import logo from "../img/finance$.svg";
import Home from "../img/home.svg";
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

const MainAdmin = () => {
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
          className="leftAdmin"
          style={{
            transform: `translateX(${manu ? "-19pc" : "0pc"})`,
          }}
        >
          <img
            src={xClose}
            alt=""
            className="xClose"
            onClick={ShowMenu}
            style={{ width: "3pc" }}
          />
          <img src={logo} alt="" />
          <div className="home">
            <img src={Home} alt="" />
            Inicio
          </div>
          <div className="containerOp">
            <div>
              <p>cuentas</p>
              <div className="user">
                <img src={user1} alt="" />
                <p>Ver usuarios</p>
              </div>
              <div className="book">
                <img src={book} alt="" />
                <p>Agregar Universidades</p>
              </div>
            </div>
            <div>
              <p>Licencias</p>
              <div className="user">
                <img src={edit} alt="" />
                <p>Generar Codigo</p>
              </div>
              <div className="book">
                <img src={key} alt="" />
                <p>Administrar Codigos</p>
              </div>
            </div>
            <div>
              <p>Reportes</p>
              <div className="user">
                <img src={file} alt="" />
                <p>Generar PDF</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rigthAdmin">
          <div className="SecSearch">
            <img src={menu} alt="" id="menu" onClick={ShowMenu} />
            <div>
              <img src={Lupa} alt="" />
              <p>Usuario a buscar</p>
              <img src={UserCircle} alt="" />
              <img src={goOut} alt="" />
            </div>
          </div>
          <div className="lefAdmi">
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
            <div className="ContainercarInfo">
              <div className="CarValue">
                <div className="centrar">
                  <img src={UserCircle} alt="" />
                  <p>NUMEROS DE USUARIOS CONECTADOS</p>
                </div>
                <div className="centrar">
                  <div className="CirLive"></div>
                  <p style={{ fontSize: "2pc" }}>200</p>
                </div>
              </div>
              <div className="CarValue">
                <div className="centrar">
                  <img src={candado} alt="" style={{ width: "4pc" }} />
                  <p>NUMEROS DE USUARIOS CONECTADOS</p>
                </div>
                <div className="centrar">
                  <p style={{ fontSize: "2pc" }}>200</p>
                </div>
              </div>
              <div className="CarValue">
                <div className="centrar">
                  <img src={users} alt="" style={{ width: "4pc" }} />
                  <p>NUMEROS DE USUARIOS CONECTADOS</p>
                </div>
                <div className="centrar">
                  <p style={{ fontSize: "2pc" }}>200</p>
                </div>
              </div>
              <div className="CarValue">
                <div className="centrar">
                  <img src={x} alt="" />
                  <p>NUMEROS DE USUARIOS CONECTADOS</p>
                </div>
                <div className="centrar">
                  <p style={{ fontSize: "2pc" }}>200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default MainAdmin;
