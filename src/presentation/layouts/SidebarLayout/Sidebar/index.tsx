import { useContext } from 'react';

import {
  Box,
  Drawer,
  styled,
  Divider,
  darken,
  Button,
  useTheme,

} from '@mui/material';

import SidebarMenu from './SidebarMenu';
import { SidebarContext } from '@/presentation/contexts/SidebarContext';
import { Logo, Scrollbar } from '@/presentation/components';
import { Stack } from '@mui/material';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar?.width};
        min-width: ${theme.sidebar?.width};
        color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 10px;
`
);

function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block'
          },
          position: 'fixed',
          left: 0,
          top: 0,
          background: 'rgba(229,227,13,0.05)',
          // alpha(lighten(theme.colors.primary.dark as string, 0.1), 0.3),
          // theme.palette.mode === 'dark'
          //   ? alpha(lighten(theme.header.background as string, 0.1), 0.5)
          //   : darken(theme.colors.primary.dark, 0.5),
          // boxShadow:
          //   theme.palette.mode === 'dark' ? theme.sidebar.boxShadow : 'none'
        }}
      >
        <Scrollbar>
          <Box mt={2}>
            <Box
              mx={1}
              sx={{
                width: 52
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={8}
                width='200px'
              >
                <Logo />

                <Button
                  variant='contained'
                  size='small'
                  sx={{
                    maxWidth: '40px',
                    maxHeight: '40px',
                    minWidth: '40px',
                    minHeight: '40px',
                    borderRadius: '14px',
                    fontSize: '25px',
                    fontWeight: '700',
                    pb: '10px'
                  }}
                >
                  =
                </Button>
              </Stack>
            </Box>
          </Box>
          <br />
          {/* <SearchBox /> */}
          {/* <Divider
            sx={{
              mt: theme.spacing(3),
              mx: theme.spacing(2),
              background: theme.colors.alpha.trueWhite[10]
            }}
          /> */}
          <SidebarMenu />

        </Scrollbar>
        {/* <Divider
          sx={{
            background: theme.colors.alpha.trueWhite[10]
          }}
        /> */}
        {/* <SubMenuWrapper>
          <List component="div">
            <ListItem component="div">
              <Button
                disableRipple
                component={RouterLink}
                onClick={closeSidebar}
                to={routes.login}
                startIcon={<ExitToAppIcon />}
                sx={{ ml: '4px' }}
              >
                Cerrar sesion
              </Button>
            </ListItem>
          </List>
        </SubMenuWrapper> */}

      </SidebarWrapper>
      <Drawer
        sx={{
          boxShadow: `${theme.sidebar?.boxShadow}`,
        }}
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper
          sx={{
            background: darken(theme.colors?.primary.dark, 0.8)
          }} >
          <Scrollbar>
            <Box mt={3}>
              <Box
                mx={2}
                sx={{
                  width: 52
                }}
              >
                <Logo />
              </Box>
            </Box>
            <Divider
              sx={{
                mt: theme.spacing(3),
                mx: theme.spacing(2),
                background: theme.colors?.alpha.trueWhite[10]
              }}
            />
            <SidebarMenu />

          </Scrollbar>
        </SidebarWrapper>
      </Drawer>
    </>
  );
}

export default Sidebar;
