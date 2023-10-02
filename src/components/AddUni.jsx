import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";

const AddUni = (props) => {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className="containerModal">
            <div className="modal" style={{
                height: 'auto'
            }}>
                <p>Agregar Universidad</p>
                <hr />
                <div className="mainModal" style={{
                    gap: '1pc',
                    height: '20pc'
                }}>
                    <TextField
                        label="Nombre"
                        variant="outlined"
                        placeholder="Ingresa  el nombre de la Universidad"
                        sx={{
                            width: '20pc'
                        }}
                    />
                    <FormControl fullWidth variant="filled" sx={{
                        width: '30pc',
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
                    <hr />
                    <div>
                        <Button className="btnTrue" onClick={props.addUni}>
                            Cancelar
                        </Button>
                        <Button onClick={props.addUni} sx={{
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

export default AddUni;
