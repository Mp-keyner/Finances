import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const NotFound = () => {
    return (
        <>

            <Box sx={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                flexDirection: 'column',
                backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2Ffondo404.png?alt=media&token=617b1f32-2405-432a-ad89-7db287b28bb3")',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>

                <Typography variant='h4' sx={{
                    color: '#fe553e'
                }}>Page not found</Typography>
                <Button href='https://finances-roan.vercel.app/' sx={{
                    marginBottom: '4pc',
                    border: '1px solid #fe553e',
                    color: '#fe553e'
                }}>Go to Home</Button>
            </Box>
        </>
    )
}

export default NotFound
