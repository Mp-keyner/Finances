import { useTheme } from "@emotion/react";
import { Avatar, Box, Divider, List, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material"
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const NavDrawer = () => {
    const theme = useTheme(); // Accede al tema
    const Space = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.6pc'
    }
    return (
        <Box sx={{
            background: '#00000080',
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px'
        }}>
            <Box sx={{
                background: theme.palette.background.secondary,
                width: '15.6pc',
                height: '100vh'
            }}>
                <Box component='nav' sx={{
                    background: '#3435ce',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Avatar
                        src="https://finances-roan.vercel.app/static/media/logoFyba.67771ec6aba4d01164fb.png"
                        alt="Imagen del logo de la cosa esta"
                        sx={{
                            width: '90%',
                            height: '7pc',
                            background: '#3435ce',
                            borderRadius: 0,
                        }}
                    />
                </Box>
                <Divider />
                <Box component='nav' >
                    <List sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1pc'
                    }}>
                        <ListItem disablePadding>
                            <ListItemButton component='a' href="#keyner" sx={Space}>
                                <Typography component='p' sx={{
                                    fontWeight: 700,
                                    height: '1.3pc'
                                }}>
                                    Inicio
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component='a' href="#keyner" sx={Space}>
                                <Typography component='p' sx={{
                                    fontWeight: 700,
                                    height: '1.3pc'
                                }}>
                                    Nuevo estudio
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component='a' href="#keyner" sx={Space}>
                                <Typography component='p' sx={{
                                    fontWeight: 700,
                                    height: '1.3pc'
                                }}>
                                    Ver estudio
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component='a' href="#keyner" sx={Space}>
                                <Avatar
                                    alt='Foto de Perfil'
                                    sx={{
                                        width: '30px',
                                        height: '30px'
                                    }}
                                />
                                <Typography component='p' sx={{
                                    fontWeight: 700,
                                    height: '1.3pc'
                                }}>
                                    PERFIL
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component='a' href="#keyner" sx={Space}>
                                <ListItemIcon sx={{
                                    minWidth: '0.4pc'
                                }}>
                                    <ExitToAppOutlinedIcon color='text' />
                                </ListItemIcon>
                                <Typography component='p' sx={{
                                    fontWeight: 700,
                                    height: '1.3pc'
                                }}>
                                    SALIR
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box>
    )
}

export default NavDrawer