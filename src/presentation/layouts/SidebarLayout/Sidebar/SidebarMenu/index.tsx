import { FC, ReactNode, useContext, useState } from 'react';

import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Divider,
  useTheme,
  Stack
} from '@mui/material';
import { NavLink as RouterLink} from 'react-router-dom';
import { SidebarContext } from '@/presentation/contexts/SidebarContext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import { CustomIcon } from '@/presentation/components';
import { darken } from '@mui/material';
import { UserBox } from '../UserBox';
import { GlobalContext } from '@/presentation/contexts/GlobalContext/GlobalContext';
import { mainRoutes } from '@/presentation/routes/routes';
import { StartupSections } from '@/presentation/utilities';
import { useRouter } from 'next/router';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);


function SidebarMenu() {
  const { closeSidebar } = useContext(SidebarContext);

  const router = useRouter();

  return (
    <>
      <MenuWrapper>
        <List
          component="div"
          sx={{ mx: '5px'}}
         // subheader={
         //   <ListSubheader component="div" disableSticky>
         //     Dashboard
         //   </ListSubheader>
         // }
         >
          {/* <CustomItemMenu
            text='Inicio'
            icon={< HomeIcon />}
            path={routes.home}
            onClick={closeSidebar}
          /> */}
           <Button
            // variant='text'
            fullWidth
            disableRipple
            // component={RouterLink}
            onClick={()=>{router.push(mainRoutes.buscador),closeSidebar}}
            // to={mainRoutes.buscador}
            startIcon={
              <CustomIcon
                iconName='inicio'

              />
              // < HomeIcon
              //   color='primary'
              // />
            }
            sx={{
              color: (theme) => theme.colors.alpha.white[100],
              mb: '20px',
              justifyContent: "flex-start",
              // minWidth:'150px',
            }}
           >
            Inicio
          </Button>
          {router.pathname === mainRoutes.startup &&
            <CustomAccordion
              title='STARTUPS'
              expanded
              icon={<CustomIcon iconName='startups' width={15} />}
              elements={Object.values(StartupSections).map(e => ({ text: e }))}
            />
          }

          {router.pathname === mainRoutes.inversionista &&
            <CustomAccordion
              title='INVERSIONISTAS'
              icon={<CustomIcon iconName='inversionistas' />}
              elements={[
                { text: 'Información general' },
                { text: 'Contacto principal' },
                { text: 'Tésis de inversión' },
                { text: 'Sectores de inversión' },
                { text: 'Startups del portafolio' },
                { text: 'Ticket' },
                { text: 'Etapa de inversión' },
              ]}
            />
          }
          {router.pathname === mainRoutes.academia &&

            <CustomAccordion
              title='ACADEMIA'
              icon={<CustomIcon iconName='academia' />}
              elements={[
                { text: 'Información general' },
                { text: 'Modelo de negocio' },
                { text: 'Interés en ecosistema' },
                { text: 'Tesis de inversión' },
                { text: 'Sector de interés' },
                { text: 'Retos' },

                ///----------------------------

                // { text: 'Información general' },
                // { text: 'Incubadora' },
                // { text: 'Pre-incubadora' },
                // { text: 'Aceleradora' },
                // { text: 'LAB' },

              ]}
            />
          }

          {router.pathname === mainRoutes.aceleradora &&
            <CustomAccordion
              title='ACELERADORA'
              icon={<CustomIcon iconName='aceleradora' />}
              elements={[
                { text: 'Información general' },
                { text: 'Incubadora' },
                { text: 'Pre-incubadora' },
                { text: 'Aceleradora' },
                { text: 'LAB' },
              ]}
            />
          }
          <br />
          <UserBox />
          {/* <CustomItemMenu
            text='Productos'
            icon={<TableChartTwoToneIcon />}
            path={routes.productos}
            onClick={closeSidebar}
          /> */}
          {/* <CustomItemMenu
            text='Usuarios'
            icon={<PeopleIcon />}
            path={routes.usuarios}
            onClick={closeSidebar}
          /> */}
          {/* <CustomItemMenu
            text='Pedidos'
            icon={<AlignHorizontalLeftIcon />}
            path={routes.pedidos}

            onClick={closeSidebar}
          />
          <CustomItemMenu
            text='Empresas'
            icon={<BusinessIcon />}
            path={routes.empresas}
            onClick={closeSidebar}
          /> */}


        </List>
        {/* <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Accounts
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/management/profile/details"
                  startIcon={<AccountCircleTwoToneIcon />}
                >
                  User Profile
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/management/profile/settings"
                  startIcon={<DisplaySettingsTwoToneIcon />}
                >
                  Account Settings
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List> */}



        {/* <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Extra Pages
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/status/404"
                  startIcon={<CheckBoxTwoToneIcon />}
                >
                  Error 404
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/status/500"
                  startIcon={<CameraFrontTwoToneIcon />}
                >
                  Error 500
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/status/coming-soon"
                  startIcon={<ChromeReaderModeTwoToneIcon />}
                >
                  Coming Soon
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/status/maintenance"
                  startIcon={<WorkspacePremiumTwoToneIcon />}
                >
                  Maintenance
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List> */}

      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;



interface CustomAccordionProps {
  title: string,
  elements: AccordionOptionProps[],
  expanded?: boolean,
  icon: ReactNode,
}

const CustomAccordion: FC<CustomAccordionProps> = ({ title, elements, expanded = false, icon }) => {
  const theme = useTheme();

  const textColor = 'black';  // theme.colors.alpha.black[100];

  const [expandedState, setExpandedState] = useState<boolean>(expanded);


  const { setActiveSection } = useContext(GlobalContext);

  const handleMenuClick = (section: string) => {
    console.log(section);
    setActiveSection(section);
  };

  return (
    <Accordion
      expanded={expandedState}
      onChange={() => setExpandedState(!expandedState)}
      sx={{
        bgColor: (theme) => theme.colors.primary.dark,
        borderRadius: '23px',
        my: '10px',
      }}

    >
      <AccordionSummary
        sx={{
          // height:'60px'
        }}
        expandIcon={<ExpandMoreIcon sx={{ color: 'black', fontSize: '26px' }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"

      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}

        >
          {icon}
          <Typography
            variant='body1'
            sx={{ color: textColor }}
          >{title}
          </Typography>
        </Stack>

      </AccordionSummary>
      <AccordionDetails>
        <Divider
          sx={{
            background: (theme) => theme.colors.alpha.black[50],
            mt: '-20px',
            mb: '5px',
          }}
        />
        {
          elements.map(e =>
            <AccordionOption
              key={e.text}
              text={e.text}
              onClick={() => handleMenuClick(e.text)}
            />
          )
        }

      </AccordionDetails>
    </Accordion>
  )
}


interface AccordionOptionProps {
  text: string,
  onClick?: () => void,
}


const AccordionOption: FC<AccordionOptionProps> = ({ text, onClick }) => {
  const textColor = 'black';

  return (
    <Button
      fullWidth
      variant='text'
      sx={{
        minHeight: '20px',
        maxHeight: '20px',
        justifyContent: "flex-start",
        ":hover": {
          bgcolor: (theme) => darken(theme.colors.primary.dark as string, 0.1)
        },
        pl: '5px'

      }}
      onClick={onClick}
    >
      <Typography
        variant='body1'
        fontSize={13}
        sx={{ color: textColor }}
      >
        {text}
      </Typography>
    </Button>
  )
}



