

import Sidebar from './Sidebar';
import Header from './Header';
import { Box, Divider,alpha, darken, styled, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { StartupPageProvider } from '@/presentation/view/StartupPage/context/StartupPageProvider';
import { GlobalProvider } from '@/presentation/contexts/GlobalContext/GlobalProvider';
import ThemeProvider from '@/presentation/theme/ThemeProvider';


const CustomDivider = styled(Divider)(
  ({ theme }) => `
  margin-top: 15px;
        height: 1px;
        width: 100%;
        margin-bottom: 20px;
        background: ${alpha(darken(theme.colors?.primary.dark, 0.1), 0.5)};
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: ${theme.sidebar?.width};
            width: auto;
        }`
);

interface SidebarLayoutProps {
  children?: ReactNode;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const theme = useTheme();

  return (

    <GlobalProvider>
      <StartupPageProvider>
        <ThemeProvider>
          <Box
            sx={{
              flex: 1,
              height: '100%',
              bgcolor: 'rgba(1, 1, 1, 0.7)',

              '.MuiPageTitle-wrapper': {
                background:
                  theme.palette.mode === 'dark'
                    ? theme.colors?.alpha.trueWhite[5]
                    : theme.colors?.alpha.white[50],
                marginBottom: `${theme.spacing(4)}`,
              }
            }}
          >
            <Header />
            <Sidebar />

            <Box
              sx={{
                position: 'relative',
                zIndex: 5,
                display: 'block',
                flex: 1,
                pt: `calc(${theme.header?.height} + 10px)`,
                [theme.breakpoints.up('lg')]: {
                  ml: `calc(${theme.sidebar?.width} + 30px)`,
                },
                mr: '20px',

              }}
            >
              <CustomDivider />

              <Box
                display="block"
                sx={{
                  pl: { xs: '10px', sm: '0px' },
                  px: { xs: '0px', sm: '0px', md: '0px', lg: '0px', xl: '10%' }
                  // pr:{xs:'10px', sm: '10%'}
                }}>
                {children}
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </StartupPageProvider>
    </GlobalProvider>
  );
};

export default SidebarLayout;
