import { useContext } from 'react';

import {
  Box,
  IconButton,
  Tooltip,
  alpha,
  lighten,
  styled,
  useTheme,
} from '@mui/material';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

import HeaderUserMenu from './DateBox';
import { SidebarContext } from '@/presentation/contexts/SidebarContext';
import { SearchBoxHeader } from './SearchBoxHeader';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.header?.height};
        color: ${theme.header?.textColor};
        padding: ${theme.spacing(0, 1)};
        padding-top: 30px;
        right: 0;
        z-index: 6;
        position:relative;
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: ${theme.sidebar.width};
            width:85%;
        }`
);


function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();

  return (

    <HeaderWrapper
      display="flex"
      alignItems="center"
    // sx={{
    //   boxShadow:
    //     theme.palette.mode === 'dark'
    //       ? `0 1px 0 ${alpha(
    //           lighten(theme.colors.primary.main, 0.7),
    //           0.15
    //         )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
    //       : `0px 2px 8px -3px ${alpha(
    //           theme.colors.alpha.black[100],
    //           0.2
    //         )}, 0px 5px 22px -4px ${alpha(
    //           theme.colors.alpha.black[100],
    //           0.1
    //         )}`
    // }}
    >
      {/* <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
        spacing={2}
      >
        <HeaderMenu />
      </Stack> */}
      <SearchBoxHeader />
      
      <Box display="flex" alignItems="center">
        {/* <HeaderButtons /> */}
        <HeaderUserMenu />
        <Box
          component="span"
          sx={{
            ml: 2,
            display: { lg: 'none', xs: 'inline-block' }
          }}>
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle
                ? (<MenuTwoToneIcon fontSize="small"/>)
                : (<CloseTwoToneIcon fontSize="small"/>)
              }
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </HeaderWrapper>



  );
}

export default Header;

