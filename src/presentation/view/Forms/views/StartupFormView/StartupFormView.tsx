import { SubTitleIcon } from '@/presentation/layouts/FormsLayout/SidebarForm/components/SubTitleIcon';
import { Alert, Box, Button, CircularProgress, Divider, Grid, Stack, alpha, darken, styled } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Empleos } from './secciones/Empleos';
import { Expectativa } from './secciones/Expectativa';
import { Experiencia } from './secciones/Experiencia';
import { InformacionFinanciera } from './secciones/InformacionFinanciera';
import { InformacionGeneral } from './secciones/InformacionGeneral';
import { InformacionPeriodica } from './secciones/InformacionPeriodica';
import { Inversion } from './secciones/Inversion';
import { Sociedad } from './secciones/Sociedad';
import { TablaSocios } from './secciones/TablaSocios';
import { InfTraccion } from './secciones/InformacionTraccion';
import { ModalDelete } from '../../components/ModalDelete';
import { FormsStartupContext } from '@/presentation/contexts/FormsStartupContext/FormsStartupContext';
import { CustomButton, Logo } from '@/presentation/components';
import EditIcon from '@mui/icons-material/Edit';
import EditOffIcon from '@mui/icons-material/EditOff';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import { GlobalContext } from '@/presentation/contexts/GlobalContext/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import { mainRoutes } from '@/presentation/routes/routes';

export interface StartupFormViewProps { }

const StartupFormView: React.FC<StartupFormViewProps> = () => {

	const CustomDivider = styled(Divider)(
		({ theme }) => `
		margin-top: 15px;
			  height: 1px;
			  width: 100%;
			  margin-bottom: 20px;
			  background: ${alpha(darken(theme.colors?.primary.dark, 0.1), 0.5)};
			  @media (min-width: ${theme.breakpoints?.values.lg}px) {
				  left: ${theme.sidebar?.width};
				  width: auto;
			  }
	  `
	  );

	  
	const {
		errorApiGlobal,
		disable,
		actualizarStartup,
		createOK,
		loadingCreateStartup,
		handleDisable, myStartup, meStartup, initState,
	} = useContext(FormsStartupContext);

	const {
		isAuthStatus, logout
	} = useContext(GlobalContext);

	const router = useRouter();
	// useEffect(() => {
	// 	 initState(myStartup!.empresa!);
	// },[loadingCreateStartup])
	

	if (errorApiGlobal?.length) {
		return (
			<Alert severity="error" sx={{ mb: 3, bgcolor: 'rgba(221,50,50,40%)' }}>
				{errorApiGlobal}
				<br />El usuario no tiene startup creada aún
			</Alert>
		)
	} else {
		return (
			<Grid paddingX={8}
				paddingBottom={4}
				paddingTop={5}
			>

				<Stack
					display={{ xs: 'block', sm: 'block', lg: 'none' }}
					position={'fixed'}
					zIndex={999}
					top={10}
					left={{ xs: '10px', sm: '10px', md: '20vw' }}
					paddingLeft={2}
					direction={'row'}
					spacing={{ xs: 2, sm: 6, md: 8 }}>
					<Stack position={'fixed'}>
						<Logo />
					</Stack>

					<Stack  
					direction={'row'} 
					paddingTop={0}
					paddingLeft={5} 
					spacing={{xs:2,sm:8}}>
						<CustomButton
							fontSize={'16px'}
							// padding='4px 10px'
							onClick={async () => {
								await actualizarStartup();
								handleDisable();
							}}
							textColorHover={'white'}
							textColor={'white'}
							colorHover={'primary'}
							colorActive={'primary'}
							sx={{
								width: { xs: '50px', sm: '50px', md: '150px' },
								height: { xs: '40px', sm: '50px', md: '50px' },
								bgcolor: 'rgba(229,227,13,0.8)'
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
							}}
							textColorHover={'white'}
							textColor={'white'}
							colorHover={'primary'}
							colorActive={'primary'}
							sx={{
								width: { xs: '50px', sm: '150px', md: '150px' },
								height: { xs: '40px', sm: '50px', md: '50px' },
								bgcolor: 'rgba(229,227,13,0.8)'
							}}
							variant='contained'
							text={(disable) ? 'Editar' : 'No Editar'}
							endIcon={(disable)
								? <EditIcon sx={{ color: 'black' }} />
								: <EditOffIcon sx={{ color: 'black' }} />
							} />


					</Stack>
				</Stack>
				
				<Stack
					position='fixed'
					zIndex={999}
					top={0}
					right={{ sm: '5px', md: '30px' }}
					paddingLeft={16}
					direction={'column'}
				>

					<Box sx={{ m: 1 }}>
						<Button
							disabled={!isAuthStatus()}
							onClick={() => {
								logout();
								router.push(mainRoutes.login);
								// setOpen(false)
							}}
							color="primary" fullWidth
						>
							<LockOpenTwoToneIcon sx={{ mr: 1 }} />
							Cerrar sesión
						</Button>
					</Box>
				</Stack>

				<CustomDivider />
				<Box paddingTop={4}>
					<SubTitleIcon subtitle='Información fija' paddingLeft='40px' />
				</Box>
				
				<InformacionGeneral />
				<Expectativa />
				<Experiencia />
				<Sociedad />

				<InformacionPeriodica />
				<TablaSocios />
				<Empleos />
				<InformacionFinanciera />
				<Inversion />
				<InfTraccion />
			</Grid >
		);
	}
};


export default StartupFormView;
