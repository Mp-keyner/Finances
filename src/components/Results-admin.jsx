import React, { useState } from "react";
import logo from "../img/finance$.svg";
import Home from "../img/home.svg";
import user1 from "../img/user.svg";
import book from "../img/book.svg";
import edit from "../img/edit.svg";
import editB from "../img/edit-black.svg";
import file from "../img/file.svg";
import fileB from "../img/book-black.svg";
import key from "../img/key.svg";
import goOut from "../img/goOut.svg";
import Lupa from "../img/Lupa.svg";
import UserCircle from "../img/UserCircle.svg";
import Basura from "../img/Basura.svg";
import Modal from "./Modal";
import { motion } from "framer-motion";

const ResultsAdmin = () => {
  const [modal, setModal] = useState(false);
  const Delete = () => {
    setModal(!modal);
    console.log("delete");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <section className="containerAdmin">
        <div className="leftAdmin">
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
            <img src={Lupa} alt="" />
            <p>Usuario a buscar</p>
            <img src={UserCircle} alt="" />
            <img src={goOut} alt="" />
          </div>
          <div className="lefAdmi">
            <div className="containerUserLive">
              Lista de usuarios
              <table>
                <tr>
                  <th>Nombre Completo</th>
                  <th>Universidad</th>
                  <th>Licencia</th>
                  <th>Acciones</th>
                </tr>
                <br />
                <tr>
                  <td>Pedro Alfonzo Molina Castillo</td>
                  <td>Universidad Autonoma Del Caribe</td>
                  <td>Activa</td>
                  <td>
                    <div className="iconTable">
                      <img src={fileB} alt="Generar PDF" />
                      <img src={editB} alt="Editar" />
                      <img src={Basura} alt="Eliminar" onClick={Delete} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Pedro Alfonzo Molina Castillo</td>
                  <td>Universidad Autonoma Del Caribe</td>
                  <td>Caducada</td>
                  <td>
                    <div className="iconTable">
                      <img src={fileB} alt="Generar PDF" />
                      <img src={editB} alt="Editar" />
                      <img src={Basura} alt="Eliminar" onClick={Delete} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Pedro Alfonzo Molina Castillo</td>
                  <td>Universidad Autonoma Del Caribe</td>
                  <td>Caducada</td>
                  <td>
                    <div className="iconTable">
                      <img src={fileB} alt="Generar PDF" />
                      <img src={editB} alt="Editar" />
                      <img src={Basura} alt="Eliminar" onClick={Delete} />
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        {modal && <Modal delete={Delete} />}
      </section>
    </motion.div>
  );
};

export default ResultsAdmin;