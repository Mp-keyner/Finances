import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']} sx={{
                width: '100%',
            }}>
                <DatePicker label="Basic date picker" sx={{
                    width: '100%',
                    '& button': {
                        background: 'transparent',
                        borderRadius: '50%',
                        height: '2.3pc',
                        color: 'black'
                    },
                    '& button:hover': {
                        background: 'transparent'
                    },
                    '& ::before': {
                        border: 'none',  // Cambia el color del borde antes del input
                    },
                    // '& fieldset': {
                    //     border: 'none'
                    // },
                }} />
            </DemoContainer>
        </LocalizationProvider>

    );
}