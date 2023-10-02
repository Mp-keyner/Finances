import { Button } from "@mui/material";
import React from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Renovar = (props) => {
    return (
        <div className="containerModal">
            <div className="modal" style={{
                height: 'auto'
            }}>
                <p>Renovar licencia</p>
                <hr />
                <div className="mainModal" style={{
                    gap: '1pc',
                    height: '20pc'
                }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} sx={{
                        width: '25pc',
                    }} >
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker label="Fecha de inicio" />
                        </DemoContainer>
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs} sx={{
                        width: '25pc'
                    }} >
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker label="Fecha de finalizacion" />
                        </DemoContainer>
                    </LocalizationProvider>
                    <hr />
                    <div>
                        <Button className="btnTrue" onClick={props.RenovarF}>
                            Cancelar
                        </Button>
                        <Button onClick={props.RenovarF} sx={{
                            background: '#ffca09',
                            color: 'black',
                            border: '1px solid #ffca09'
                        }}>
                            Renovar
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Renovar;
