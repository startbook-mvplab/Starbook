import React from 'react';
import { Alert, Box, Card, Link, Stack, Typography } from '@mui/material';
import { GlobalContext } from '@/presentation/contexts/GlobalContext/GlobalContext';
import AuthRegisterForm from './components/AuthRegisterForm';
import { Email } from '@mui/icons-material';
import { mainRoutes } from '@/presentation/routes/routes';


export interface RegisterViewProps { }

const RegisterView: React.FC<RegisterViewProps> = () => {

	const {
		authOK,messageErrorAuth,
		email, password, name, phone,
		errorEmail, messageErrorEmail,
		errorPhone, messageErrorPhone,
		errorPassword, messageErrorPassword,
		// passwordConfirm,errorPasswordConfirm, messageErrorPasswordConfirm

	} = React.useContext(GlobalContext);



	return (
		<Stack paddingTop={{ xs: 10, sm: 20, md: 20, xl: 20 }} alignItems={'center'}>

			<Box width={{ xs: 300, sm: 400, md: 500, xl: 500 }}>
				<Card elevation={10} sx={{ minWidth: 275, bgcolor: 'transparent', padding: 4 }}>
					<Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>

						<Typography variant="h4" fontWeight={600}>
							Empieza tu prueba
							gratuita ahora
						</Typography>

						<Stack direction="row" spacing={0.5}>
							<Typography variant="body2" fontWeight={700}>¿Ya estás registrado?</Typography>

							<Link href={mainRoutes.login} variant="subtitle2">
								Iniciar sesión
							</Link>
						</Stack>

					</Stack>

					{(authOK)
						? (errorEmail || errorPassword || errorPhone)
							? <Alert severity="warning" sx={{ mb: 3 }}>
								{messageErrorEmail || messageErrorPassword || messageErrorPhone}
							</Alert>
							: (email !== '' || password !== '' || phone !== '')
								? <Alert severity="success" sx={{ mb: 3 }}>
									{'Sus datos tienen el formato correcto'}
								</Alert>
								: null
						: <Alert severity="error" sx={{ mb: 3, bgcolor: 'rgba(221,50,50,40%)' }}>
							{messageErrorAuth}
						  </Alert>
					}

					<AuthRegisterForm />

				</Card >
			</Box>
		</Stack>
	)
};

export default RegisterView;
