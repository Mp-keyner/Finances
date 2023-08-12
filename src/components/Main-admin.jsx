import React from "react";
import logo from "../img/finance$.svg";
import Home from "../img/home.svg";
import user1 from "../img/user.svg";
import book from "../img/book.svg";
import edit from "../img/edit.svg";
import file from "../img/file.svg";
import key from "../img/key.svg";

const MainAdmin = () => {
  return (
    <section className="containerAdmin">
      <div className="leftAdmin">
        <img src={logo} alt="" />
        <div className="home">
          <img src={Home} alt="" />
          Inicio
        </div>
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
      </div>
      <div className="rigthAdmin">
        <div></div>
        <div>
          <div></div>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainAdmin;
