import React, { useState } from "react";
import logo from "../img/logoFyba.png";
import Home2 from "../img/home2.svg";
import user1 from "../img/user.svg";
import book from "../img/book2.svg";
import edit from "../img/edit.svg";
import editB from "../img/edit-black.svg";
import file from "../img/file.svg";
import key from "../img/key.svg";
import goOut from "../img/goOut.svg";
import Lupa from "../img/Lupa.svg";
import UserCircle from "../img/UserCircle.svg";
import Basura from "../img/Basura.svg";
import Modal from "./Modal";
import { motion } from "framer-motion";
import xClose from "../img/xClose.svg";
import menu from "../img/Menu.svg";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const AdminUni = () => {
  const navigate = useNavigate();

  const GoMain = () => {
    // Redirigir al usuario a otra parte
    navigate("/");
  };
  const [manu, setManu] = useState(false);
  const ShowMenu = () => {
    console.log("ya ya ya ");
    setManu(!manu);
  };
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
            <div className="home ActivoHver" title="Inicio">
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
                <div className="book Activo" title="Agregar Universidades">
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
          <div className="SecSearch">
            <img src={menu} alt="" id="menu" onClick={ShowMenu} />
            <div>
              <img src={Lupa} alt="" />
              <p>Usuario a buscar</p>
              <img src={UserCircle} alt="" />
              <img src={goOut} alt="" />
            </div>
          </div>
          <div className="lefAdmi" style={{
            gridTemplateColumns: '1fr',
            justifyItems: 'center',
            paddingTop: '1pc'
          }}>
            <div className="containerResults">
              <div className="centrarLados" style={{
                width: '100%',
              }}>
                <p> Lista de universidades</p>
                <Button variant="contained" sx={{
                  '&:hover': {
                    // background: '#0aff06',
                    background: 'transparent',
                  },
                  background: '#fff',
                  color: '#0aff06',
                  border: '1px solid #0aff06'
                }}>Agregar</Button>
              </div>
              <table>
                <tr>
                  <th>Universidad</th>
                  <th>Ciudad</th>
                  <th>Acciones</th>
                </tr>
                <br />
                <tr>
                  <td>Universidad del valle</td>
                  <td>Universidad Autonoma Del Caribe</td>
                  <td>
                    <div className="iconTable">
                      <img src={editB} alt="Editar" title="Editar" />
                      <img
                        src={Basura}
                        alt="Eliminar"
                        onClick={Delete}
                        title="Eliminar"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Universidad del valle</td>
                  <td>Universidad Autonoma Del Caribe</td>
                  <td>
                    <div className="iconTable">
                      <img src={editB} alt="Editar" title="Editar" />
                      <img
                        src={Basura}
                        alt="Eliminar"
                        onClick={Delete}
                        title="Editar"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Universidad del valle</td>
                  <td>Universidad Autonoma Del Caribe</td>
                  <td>
                    <div className="iconTable">
                      <img src={editB} alt="Editar" title="Editar" />
                      <img
                        src={Basura}
                        alt="Eliminar"
                        onClick={Delete}
                        title="Editar"
                      />
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

export default AdminUni;
