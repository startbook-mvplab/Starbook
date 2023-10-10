import React, { useContext, useState } from 'react';

import {Logo } from "@/presentation/components";

import { AppBar, Box, Button, Divider, Grid,Stack, Toolbar} from "@mui/material";

import { mainRoutes } from "@/presentation/routes/routes";
import LoginIcon from '@mui/icons-material/Login';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { GlobalContext } from '@/presentation/contexts/GlobalContext/GlobalContext';
import { useRouter } from 'next/router';

export type HeaderProps = {
}

const Header: React.FC<HeaderProps>  = ({}) => {
	
	const { logout, isAuthStatus } = useContext(GlobalContext)
    const [isOpen, setOpen] = useState<boolean>(false);
    const router = useRouter();
	
    return (
        // <Card >
        <Stack
            padding={4}
            height={100}
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}>


            <AppBar
                position='fixed'
                elevation={0}
                sx={{ bgcolor: 'rgba(229,227,13,0.03)', backdropFilter: 'blur(3px)', }}
            >
                <Toolbar style={{ padding: '20px 10px', }}>
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between', paddingX: 2 }} >

                        <Logo />

                        <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {/* <Card > */}
                            <Box sx={{ m: 1 }}>

                                {(!isAuthStatus())
                                    ? <Button
                                        // disabled={isAuthStatus()}
                                        onClick={() => router.push(mainRoutes.login)}
                                        color="primary" fullWidth
                                    >
                                        <LoginIcon sx={{ mr: 1 }} />
                                        Iniciar sesión
                                    </Button>
                                    : <Button
                                        // disabled={isAuthStatus()}
                                        onClick={() => router.push(mainRoutes.forms)}
                                        color="primary" fullWidth
                                    >
                                        <AccountBoxIcon sx={{ mr: 1 }} />
                                        Mi perfil
                                    </Button>}


                            </Box>
                            {/* </Card> */}

                            <Divider />

                            {/* <Card> */}
                            <Box sx={{ m: 1 }}>
                                <Button
                                    disabled={!isAuthStatus()}
                                    onClick={() => {
                                        logout();
                                        router.push(mainRoutes.login);
                                        setOpen(false)
                                    }}
                                    color="primary" fullWidth
                                >
                                    <LockOpenTwoToneIcon sx={{ mr: 1 }} />
                                    Cerrar sesión
                                </Button>
                            </Box>
                            {/* </Card> */}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Stack>
        // </Card>
    )
};

export default Header;
