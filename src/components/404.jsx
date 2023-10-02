import { Box, Button } from '@mui/material'
import React from 'react'

const NotFound = () => {
    return (
        <>

            <Box sx={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <Box
                    component={'img'}
                    src='https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2F404Fy.png?alt=media&token=82f1a6f4-6d10-499d-9586-18a27c96a4b1'
                    alt='404'
                    sx={{
                        width: '100%',
                        'md': {
                            width: '50%'
                        }

                    }}
                />
                <Button href='https://finances-roan.vercel.app/'>Go to Home</Button>
            </Box>
        </>
    )
}

export default NotFound
