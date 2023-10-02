import React, { useState } from "react";
import logo from "../img/logoFyba.png";
import Home2 from "../img/home2.svg";
import user1 from "../img/user2.svg";
import book from "../img/book.svg";
import edit from "../img/edit.svg";
import editB from "../img/edit-black.svg";
import file from "../img/file.svg";
import fileB from "../img/book-black.svg";
import key from "../img/key.svg";
import goOut from "../img/goOut.svg";
import Lupa from "../img/Lupa.svg";
import UserCircle from "../img/UserCircle.svg";
import Modal from "./Modal";
import { motion } from "framer-motion";
import xClose from "../img/xClose.svg";
import menu from "../img/Menu.svg";
import { Link, useNavigate } from "react-router-dom";

const Generar = () => {
  const navigate = useNavigate();

  const GoMain = () => {
    // Redirigir al usuario a otra parte
    navigate("/");
  };
  const GoUsert = () => {
    // Redirigir al usuario a otra parte
    navigate("/result-admin");
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
                <div className="user Activo" title="Ver usuarios">
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
              <div className="user  ActivoHver" title="Generar Codigo">
                <img src={edit} alt="" />
                <p>Generar Codigo</p>
              </div>
              <div className="book ActivoHver" title="Administrar Codigos">
                <img src={key} alt="" />
                <p>Administrar Codigos</p>
              </div>
            </div>
            <div>
              <p>Reportes</p>
              <div className="user ActivoHver" title="Generar PDF">
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
          <div className="containerGenerar">
            <form action="">
              <label htmlFor="">
                <span>Nombre</span>
                <input
                  type="text"
                  placeholder="Juanito Perez Diaz"
                  className="inou"
                  required
                />
              </label>
              <label htmlFor="">
                <span>Email</span>
                <input
                  type="text"
                  required
                  placeholder="Juanito Perez Diaz"
                  className="inou"
                />
              </label>
              <label htmlFor="">
                <span>Universidad</span>
                <select name="" id="" title="Seleciona Universidad">
                  <option value="">Seleciona una opcion</option>
                </select>
              </label>
              <label htmlFor="">
                <span>Codigo de usuario</span>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="7G8SD89SJJSAK8FS97F8A09AC"
                  className="inou"
                  disabled
                  title="Codigo de usuario"
                />
              </label>
              <label htmlFor="" className="btns">
                <button className="bt" onClick={GoUsert}>
                  Guardar
                </button>
                <button className="bt" onClick={GoUsert}>
                  Cancelar
                </button>
              </label>
            </form>
          </div>
        </div>
        {modal && <Modal delete={Delete} />}
      </section>
    </motion.div>
  );
};

export default Generar;
