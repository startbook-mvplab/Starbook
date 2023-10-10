import React from 'react';
import { Alert, Box, Card, Link, Stack, Typography } from '@mui/material';
import { GlobalContext } from '@/presentation/contexts/GlobalContext/GlobalContext';
import AuthVerifyPasswordForm from './components/AuthVerifyrPasswordForm';


export interface VerifyPasworsViewProps { }

const VerifyPasswordView: React.FC<VerifyPasworsViewProps> = () => {

	const {
		authOK, messageErrorAuth,
		recoverCode, errorRecoverCode, messageErrorRecoverCode,
		email, errorEmail, messageErrorEmail,
		passwordConfirm, errorPasswordConfirm, messageErrorPasswordConfirm,messageErrorRecoverPassword
		// passwordConfirm,errorPasswordConfirm, messageErrorPasswordConfirm

	} = React.useContext(GlobalContext);



	return (
		<Stack paddingTop={{ xs: 10, sm: 20, md: 20, xl: 20 }} alignItems={'center'}>

			<Box width={{ xs: 300, sm: 400, md: 500, xl: 500 }}>
				<Card elevation={10} sx={{ minWidth: 275, bgcolor: 'transparent', padding: 4 }}>
					<Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>

						<Typography variant="h4" fontWeight={600}>
							Verificar de la cuenta
						</Typography>


					</Stack>

					{(authOK)
						? (errorRecoverCode || errorEmail || errorPasswordConfirm)
							? <Alert severity="warning" sx={{ mb: 3 }}>
								{messageErrorRecoverCode || messageErrorEmail || messageErrorPasswordConfirm}
							</Alert>
							: (recoverCode !== '' || email !== '' || passwordConfirm !== '')
								? (messageErrorRecoverPassword === '')
									? <Alert severity="success" sx={{ mb: 3 }}>
										{'Sus datos tienen el formato correcto'}
									</Alert>
									: <Alert severity="success" sx={{ mb: 3 }}>
										{messageErrorRecoverPassword}
									</Alert>
								: null
						: <Alert severity="error" sx={{ mb: 3, bgcolor: 'rgba(221,50,50,40%)' }}>
							{messageErrorAuth}
						</Alert>
					}

					<AuthVerifyPasswordForm />

				</Card >
			</Box>
		</Stack>
	)
};

export default VerifyPasswordView;
