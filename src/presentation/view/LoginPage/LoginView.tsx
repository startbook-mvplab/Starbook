
import { GlobalContext } from '@/presentation/contexts/GlobalContext/GlobalContext';
import { Alert, Box, Card, Link, Stack, Tooltip, Typography } from '@mui/material';
import React from 'react';
import AuthLoginForm from './components/AuthLoginForm';
import { mainRoutes } from '@/presentation/routes/routes';

export interface LoginViewProps { }


const LoginView: React.FC<LoginViewProps> = () => {

	const {
		authOK, messageErrorAuth,
		email, password,
		errorEmail, messageErrorEmail,
		errorPassword, messageErrorPassword,messageErrorRecoverPassword
	} = React.useContext(GlobalContext);


	return (

		<Stack paddingTop={{ xs: 10, sm: 20, md: 20, xl: 20 }} alignItems={'center'}>

			<Box width={{ xs: 300, sm: 400, md: 500, xl: 500 }}>
				<Card elevation={10} sx={{ minWidth: 275, bgcolor: 'transparent', padding: 4 }}>

					<Stack spacing={2} sx={{ mb: 5, position: 'relative' }} justifyItems={'center'} alignItems={'center'}>

						<Typography variant="h3" fontWeight={600}>Inicio de Sesión</Typography>

						<Stack direction="row" spacing={0.5}>
							<Typography variant="h4" fontWeight={700}>Nuevo usuario?</Typography>

							<Link href={mainRoutes.register} variant="subtitle2">
								Crear cuenta
							</Link>
						</Stack>

					</Stack>

					{(authOK)
						? (errorEmail || errorPassword)
							? <Alert severity="warning" sx={{ mb: 3 }}>
								{messageErrorEmail || messageErrorPassword}
							</Alert>
							: (email !== '' || password !== '')
								? (messageErrorRecoverPassword === '')
									? <Alert severity="success" sx={{ mb: 3 }}>
										{'Sus datos tienen el formato correcto'}
									</Alert>
									: <Alert severity="success" sx={{ mb: 3 }}>
										{messageErrorRecoverPassword}
									</Alert>

								: null
						: <Alert severity="error" sx={{ mb: 3, bgcolor: 'rgba(221,50,50,40%)' }}>
							{'Credenciales Inválidas'}
						</Alert>
					}

					<AuthLoginForm />

				</Card >
			</Box>
		</Stack>
	)
};

export default LoginView;
