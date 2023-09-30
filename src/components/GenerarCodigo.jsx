import React, { useState } from "react";
import logo from "../img/logoFyba.png";
import Home2 from "../img/home2.svg";
import user1 from "../img/user.svg";
import book from "../img/book.svg";
import edit from "../img/edit2.svg";
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
import xClose from "../img/xClose.svg";
import menu from "../img/Menu.svg";
import { Link, useNavigate } from "react-router-dom";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const Generar = () => { 
  const [date2, setDate2] = useState("");
  console.log(date);
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
                <div className="book ActivoHver" title="Agregar Universidades">
                  <img src={book} alt="" />
                  <p>Agregar Universidades</p>
                </div>
              </Link>
            </div>
            <div>
              <p>Licencias</p>
              <div className="user Activo " title="Generar Codigo">
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" />
      </DemoContainer>
    </LocalizationProvider>
              <label htmlFor="">
                <span>Fecha de finalizacion</span>
                <div>
                  <input
                    type="text"
                    placeholder="2023-10-20"
                    value={date2}
                    disabled
                    title="Fecha de finalizacion"
                  />
                  <input
                    className="date"
                    type="date"
                    onChange={(e) => setDate2(e.target.value)}
                    value={date2}
                    id="calendario"
                    title="Fecha de finalizacion"
                  />
                </div>
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
              <button className="btnSub">Generar</button>
            </form>
          </div>
        </div>
        {modal && <Modal delete={Delete} />}
      </section>
    </motion.div>
  );
};

export default Generar;
