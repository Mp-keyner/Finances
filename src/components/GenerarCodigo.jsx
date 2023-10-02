import React, { useState } from "react";
import logo from "../img/logoFyba.png";
import Home2 from "../img/home2.svg";
import user1 from "../img/user.svg";
import book from "../img/book.svg";
import edit from "../img/edit2.svg";
import key from "../img/key.svg";
import goOut from "../img/goOut.svg";
import Lupa from "../img/Lupa.svg";
import UserCircle from "../img/UserCircle.svg";
import Modal from "./Modal";
import { motion } from "framer-motion";
import xClose from "../img/xClose.svg";
import menu from "../img/Menu.svg";
import { Link, useNavigate } from "react-router-dom";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";


const Generar = () => {
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
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
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
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker label="Fecha de inicio" sx={{
                    width: '20pc'
                  }} />
                </DemoContainer>
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker label="Fecha de finalizacion" sx={{
                    width: '20pc'
                  }} />
                </DemoContainer>
              </LocalizationProvider>

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
              <Button variant="contained" sx={{
                background: '#e9352b',
                padding: '0.6pc 0',
                width: '20pc',
                '&:hover': {
                  background: '#fe5b52'
                }
              }}>Generar</Button>
            </form>
          </div>
        </div>
        {modal && <Modal delete={Delete} />}
      </section>
    </motion.div >
  );
};

export default Generar;
