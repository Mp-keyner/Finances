import { Button } from "@mui/material";
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
            <Button className="btnTrue" onClick={props.delete}>
              Cancelar
            </Button>
            <Button onClick={props.delete} sx={{
              border: '1px solid red',
              color: 'red'
            }}>
              Eliminar ahora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
