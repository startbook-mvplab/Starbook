

import { Box, Divider, alpha, darken, styled, useTheme } from '@mui/material';
import Sidebar from './SidebarForm';
import SidebarForms from './SidebarForm';
import { ReactNode } from 'react';
import { GlobalProvider } from '@/presentation/contexts/GlobalContext/GlobalProvider';
import ThemeProvider from '@/presentation/theme/ThemeProvider';
import { FormsStartupProvider } from '@/presentation/contexts/FormsStartupContext/FormsStartupProvider';



interface FormsLayoutProps {
  children?: ReactNode;
}

const FormsLayout: React.FC<FormsLayoutProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <GlobalProvider>
      <ThemeProvider>
        <FormsStartupProvider>
          <Box
            sx={{
              flex: 1,
              height: '100%',
              // bgcolor: 'rgba(1, 1, 1, 0.7)',
              bgcolor: 'transparent',

              '.MuiPageTitle-wrapper': {
                background:
                  theme.palette.mode === 'dark'
                    ? theme.colors?.alpha.trueWhite[5]
                    : theme.colors?.alpha.white[50],
                marginBottom: `${theme.spacing(4)}`,
              }
            }}>

            <SidebarForms />

            <Box
              sx={{
                position: 'relative',
                zIndex: 5,
                display: 'block',
                flex: 1,
                pt: `calc(${theme.header?.height} + 10px)`,
                [theme.breakpoints.up('lg')]: {
                  ml: `calc(${theme.sidebar?.width} + 155px)`,
                },
                mr: '20px',
              }}>

              {/* <CustomDivider /> */}
              <Box
                display="block"
                sx={{ pl: { xs: '10px', sm: '375px' }, }}>
                {
                  children
                }
              </Box>
            </Box>
          </Box>
        </FormsStartupProvider>
      </ThemeProvider>
    </GlobalProvider>
  );
};

export default FormsLayout;
