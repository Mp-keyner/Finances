import React from "react";

const Modal = (props) => {
  return (
    <div className="containerModal">
      <div className="modal">
        <p>Eliminar a Pepito Suarez</p>
        <hr />
        <div className="mainModal">
          <p>
            Este usuario se eliminara y se perdera todo los datos guardados.
            ¿Esta seguro de hacerlo?
          </p>
          <hr />
          <div>
            <button className="btnTrue" onClick={props.delete}>
              Cancelar
            </button>
            <button className="btnClose" onClick={props.delete}>
              Eliminar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
