import { useRef, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';


import {
  Avatar,
  Box,
  Button,
  Divider,
  Hidden,
  lighten,
  List,
  ListItem,
  ListItemText,
  Popover,
  Stack,
  Typography
} from '@mui/material';

import { styled } from '@mui/material/styles';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';;
import LoginIcon from '@mui/icons-material/Login';
import React from 'react';
import { GlobalContext } from '@/presentation/contexts/GlobalContext/GlobalContext';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { LocalStorageProtocol } from '@/protocols/cache/local_cache';

import { IUser } from '@/data/models';
import { StorageKeysEnum } from '@/presentation/utilities';
import { useRouter } from 'next/router';
import { mainRoutes } from '@/presentation/routes/routes';


const DateBoxButton = styled(Button)(
  ({ theme }) => `
        border-radius: 13px;
        border: 1px solid;
        border-color: ${theme.colors?.primary.dark};
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`
);

const MenuDateBox = styled(Box)(
  ({ theme }) => `
        background: ${theme.colors?.alpha.black[5]};
        padding: ${theme.spacing(2)};
`
);

const DateBoxText = styled(Box)(
  ({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`
);

const DateBoxLabel = styled(Typography)(
  ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
`
);

const DateBoxDescription = styled(Typography)(
  ({ theme }) => `
        color: ${lighten(theme.palette.secondary.main, 0.5)}
`
);

function HeaderUserMenu() {

  const locaStorage = new LocalStorageProtocol();

  const userData: IUser = locaStorage.get(StorageKeysEnum.user);

  const user = {
    name: userData?.firstName,
    // avatar: '',
    avatar: '/static/images/avatars/1.jpg',
    jobtitle: userData?.email,
  };

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const { logout, isAuthStatus } = React.useContext(GlobalContext)
  const router = useRouter();

  return (
    <>
      <DateBoxButton color="primary" ref={ref} onClick={handleOpen}>
        {/* <Avatar variant="rounded" alt={user.name} src={user.avatar} />*/}
        <PersonIcon sx={{ color: (theme) => theme.colors?.primary.dark }} />
        <Hidden mdDown>
          <DateBoxText>
            <Typography>Actualizar Perfil</Typography>
          </DateBoxText>
        </Hidden>
        <Hidden smDown>
          <ExpandMoreTwoToneIcon
            sx={{
              ml: 1,
              color: (theme) => theme.colors?.primary.dark
            }} />
        </Hidden>
      </DateBoxButton>
      <Popover

        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}>
        <MenuDateBox sx={{ minWidth: 210 }} display="flex">
          {/* <Avatar variant="rounded" alt={user.name} src={user.avatar} /> */}

          <PersonIcon />
          <DateBoxText>
            <DateBoxLabel variant="body1">{user.name}</DateBoxLabel>
            <DateBoxDescription variant="body2">
              {user.jobtitle}
            </DateBoxDescription>
          </DateBoxText>
        </MenuDateBox>
        <Divider sx={{ mb: 0 }} />
        {/* <List sx={{ p: 1 }} component="nav">
          <ListItem button to="/management/profile/details" component={NavLink}>
            <AccountBoxTwoToneIcon fontSize="small" />
            <ListItemText primary="Perfil" />
          </ListItem>
          <ListItem
            button
            to="/management/profile/settings"
            component={NavLink}
          >
            <AccountTreeTwoToneIcon fontSize="small" />
            <ListItemText primary="Configuracion de cuenta" />
          </ListItem>
        </List> */}
        <Divider />
        <Stack alignItems={'start'}>
          <Box sx={{ m: 1 }}>

            {(!isAuthStatus())
              ? <Button
                // disabled={isAuthStatus()}
                onClick={() => {  router.push(mainRoutes.login) }}
                color="primary" fullWidth
              >
                <LoginIcon sx={{ mr: 1 }} />
                Iniciar sesión
              </Button>
              : <Button
                // disabled={isAuthStatus()}
                onClick={() => { router.push(mainRoutes.forms)}}
                color="primary" fullWidth
              >
                <AccountBoxIcon sx={{ mr: 1 }} />
                Actualizar datos
              </Button>}

          </Box>

          <Divider />
          <Box sx={{ m: 1 }}>

            <Button
              disabled={!isAuthStatus()}
              onClick={() => {
                logout();
                router.push(mainRoutes.login)
                setOpen(false)
              }}
              color="primary" fullWidth
            >
              <LockOpenTwoToneIcon sx={{ mr: 1 }} />
              Cerrar sesión
            </Button>

          </Box>
        </Stack>
      </Popover>
    </>
  );
}

export default HeaderUserMenu;
