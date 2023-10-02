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
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

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
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
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
              <div className="user ActivoHver" title="Generar Codigo">
                <img src={edit} alt="" />
                <p>Generar Codigo</p>
              </div>
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
          <div className="containerGenerar">
            <form action="">
              <TextField id="outlined-basic" label="Nombre" placeholder="Juanito Perez Diaz" variant="outlined" sx={{
                width: '20pc'
              }} />
              <TextField id="outlined-basic" label="Email" placeholder="JuanitoPerezDiaz@" variant="outlined" sx={{
                width: '20pc'
              }} />

              <FormControl fullWidth variant="filled" sx={{
                width: '20pc',
                borderRadius: '5px 5px 0 0',
                backgroundColor: 'transparent',
                '&::before': {
                  borderBottom: '2px solid red'
                },
                '&:hover': {
                  backgroundColor: 'transparent',
                },
                '& div': {
                  border: '1px solid #c4c4c4'
                },
                '& div div': {
                  border: 'none'
                },
                '&:focus': {
                  backgroundColor: 'transparent',
                  borderBottom: 'none'
                },
                '&.Mui-focused': {
                  backgroundColor: 'transparent',
                },
                '& div:hover': {
                  backgroundColor: 'transparent',
                },
                '& div:focus': {
                  backgroundColor: 'transparent',
                },

              }}>
                <InputLabel id="demo-simple-select-label" color='text'

                >Selecciona tu Universidad</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Selecciona tu Universidad"
                  onChange={handleChange}
                  color="text"

                >
                  <MenuItem value={10}>Universidad 1</MenuItem>
                  <MenuItem value={20}>Universidad 2</MenuItem>
                  <MenuItem value={30}>Universidad 3</MenuItem>
                </Select>
              </FormControl>
              <TextField helperText="Este es tu cdigo de usuario" variant="outlined" label="codigo de usuario" autoComplete="off" disabled value={'14323..'} sx={{
                width: '20pc'
              }} />
              <label htmlFor="" className="btns">
                <Button className="bt" onClick={GoUsert}>
                  Guardar
                </Button>
                <Button className="bt" onClick={GoUsert}>
                  Cancelar
                </Button>
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
