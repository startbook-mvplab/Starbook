import { useContext } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import EditOffIcon from '@mui/icons-material/EditOff';
import {Box,styled,useTheme,darken,Button,Typography,CircularProgress,} from '@mui/material';
import { CustomButton, Logo, Scrollbar } from '@/presentation/components';
import { Stack } from '@mui/material';
import { SubTitle } from 'chart.js';
import { SubTitleIcon } from './components/SubTitleIcon';
import { SubTitleButton } from './components/SubTitleButton';
import { FormsStartupContext } from '@/presentation/contexts/FormsStartupContext/FormsStartupContext';


const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar?.width};
        min-width: ${theme.sidebar?.width};
        color: ${theme.colors?.alpha.trueWhite[70]};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 10px;
`
);

function SidebarForms() {
  // const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  // const closeSidebar = () => toggleSidebarForms();
  const theme = useTheme();

  const {
    disable,
   actualizarStartup,
    loadingCreateStartup,
    handleDisable,
  } = useContext(FormsStartupContext);


  return (
    <SidebarWrapper
      sx={{
        width: '375px',
        display: { xs: 'none', lg: 'inline-block' },
        position: 'fixed',
        left: 0,
        top: 0,
        background: 'rgba(229,227,13,0.03)',
      }}>
      <Scrollbar>
        <Box mt={2}>

          <Box mx={1} sx={{ width: 52 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={8}
              width='200px'
            >
              <Logo />
            </Stack>
          </Box>
        </Box>
        <Stack paddingY={6} paddingX={1} direction={'column'} alignItems={'start'}>

          <SubTitleIcon subtitle='Mi cuenta' />

          <Stack paddingY={2} paddingLeft={2} direction={'row'} spacing={2}>

            <CustomButton
              fontSize={'16px'}
              padding='4px 10px'
              onClick={async () => {
                await actualizarStartup();
                handleDisable();
              }}
              textColorHover={'white'}
              textColor={'white'}
              colorHover={'primary'}
              colorActive={'primary'}
              sx={{
                width: '150px',
                height: '50px',
                bgcolor:'rgba(229,227,13,0.8)'
              }}
              variant='contained'
              text={(!loadingCreateStartup) ? 'Actualizar' : 'Actualizando...'}
              endIcon={(!loadingCreateStartup)
                ? <></>
                : <CircularProgress sx={{ color: 'black' }} variant='indeterminate' size='30px' />} fullWidth={false} />

            <CustomButton
              fullWidth={false}  
              fontSize={'16px'}
              onClick={async () => {
               handleDisable();
              } }
              textColorHover={'white'}
              textColor={'white'}
              colorHover={'primary'}
              colorActive={'primary'}
              sx={{
                width: '150px',
                height: '50px',
                bgcolor:'rgba(229,227,13,0.8)'
              }}
              variant='contained'
              text={(disable)?'Editar':'No Editar'}
              endIcon={(disable)
                ? <EditIcon sx={{ color: 'black' }}/>
                : <EditOffIcon sx={{ color: 'black' }}/>
              }/>
          </Stack>

          <Typography paddingY={2} paddingX={3} typography={'h4'} fontWeight={600} >
            La información periódica de empleos, información financiera, financiación e información de tracción debe actualizarse al menos cada 3 meses
          </Typography>

          <Typography paddingY={2} paddingX={3} typography={'h1'} fontWeight={600} >
            Startup
          </Typography>
          <SubTitleButton subtitle='Información fija' imgSufijo={''} />
          <SubTitleButton subtitle='Información general' img={''} imgSufijo={''} />
          <SubTitleButton subtitle='Expectativa' img={''} imgSufijo={''} />
          <SubTitleButton subtitle='Experiencia' img={''} imgSufijo={''} />
          <SubTitleButton subtitle='Sociedad' img={''} imgSufijo={''} />

        </Stack>

        <Stack paddingX={1} direction={'column'} alignItems={'start'}>
          <SubTitleButton subtitle='Información periódica' imgSufijo={''} />
          <SubTitleButton subtitle='Empleos' img={''} />
          <SubTitleButton subtitle='Información financiera' img={''} />
          <SubTitleButton subtitle='Financiación' img={''} />
          <SubTitleButton subtitle='Información de tracción' img={''}   />

        </Stack>
      </Scrollbar>
    </SidebarWrapper>

  );
}

export default SidebarForms;
