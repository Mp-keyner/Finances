import { AppBar, Avatar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import NavDrawer from "./NavDrawer"
import { useState } from "react"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Nav = () => {
    const [open, setOpen] = useState(false)
    const Space = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.6pc',
        color: 'white'
    }
    return (
        <>
            <AppBar position="static" sx={{
                background: '#3435ce',
                color: 'white'
            }}>
                <Toolbar sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Box
                        component='img'
                        src="https://finances-roan.vercel.app/static/media/logoFyba.67771ec6aba4d01164fb.png"
                        alt="Imagen del logo de la cosa esta"
                        sx={{
                            height: '70px',
                            borderRadius: 'none'
                        }}
                    />
                    <Box sx={{ ...Space, display: { xs: 'none', sm: 'flex' } }}>
                        <Button sx={Space} href="/Admin">
                            <Typography component='p' color='secondary' sx={{
                                fontWeight: 700,
                                height: '1.3pc',
                                color: 'white'
                            }}>
                                Admin
                            </Typography>
                        </Button>
                        <Button sx={Space}>
                            <Typography component='p' color='secondary' sx={{
                                fontWeight: 700,
                                height: '1.3pc',
                                color: 'white'
                            }}>
                                Inicio
                            </Typography>
                        </Button>
                        <Button sx={Space}>
                            <Typography component='p' color='secondary' sx={{
                                fontWeight: 700,
                                height: '1.3pc',
                                color: 'white'
                            }}>
                                Nuevo estudio
                            </Typography>
                        </Button>
                        <Button sx={Space}>
                            <Typography component='p' color='secondary' sx={{
                                fontWeight: 700,
                                height: '1.3pc',
                                color: 'white'
                            }}>
                                Ver estudio
                            </Typography>
                        </Button>
                        <Button sx={Space}>
                            <Avatar
                                alt='Foto de Perfil'
                                sx={{
                                    width: '30px',
                                    height: '30px',
                                    border: '2px solid white'
                                }}
                            />
                            <Typography component='p' color='secondary' sx={{
                                fontWeight: 700,
                                height: '1.3pc',
                                color: 'white'
                            }}>
                                PERFIL
                            </Typography>
                        </Button>
                        <Button sx={Space}>
                            <ExitToAppOutlinedIcon sx={{
                                color: 'white'
                            }} />
                            <Typography component='p' color='secondary' sx={{
                                fontWeight: 700,
                                height: '1.3pc',
                                color: 'white'
                            }}>
                                SALIR
                            </Typography>
                        </Button>
                    </Box>
                    <IconButton sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <MenuOutlinedIcon onClick={() => setOpen(true)} sx={{
                            color: 'white'
                        }} />
                    </IconButton>
                </Toolbar>
            </AppBar >
            <Drawer open={open}
                anchor="left"
                onClose={() => setOpen(false)}
            >
                <NavDrawer />
            </Drawer>
        </>
    )
}

export default Nav