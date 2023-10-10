
import { CustomButton } from '@/presentation/components/CustomButton';
import { GlobalContext } from '@/presentation/contexts/GlobalContext/GlobalContext';
import { mainRoutes } from '@/presentation/routes/routes';
import { CssTextField } from '@/presentation/styles/styles';
import { Stack, Grid, Box, Link, Typography, TextField, CircularProgress, styled, MenuItem, FormControlLabel, Checkbox, Button } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface AuthRecoverPasswordFormProps { }

const AuthRecoverPasswordForm: React.FC<AuthRecoverPasswordFormProps> = () => {


	const {
		loadingAuth,
		email, errorEmail, handleEmail,
		recuperarPassword,
	} = React.useContext(GlobalContext)

	const router = useRouter();


	return (

		<Stack direction='column' alignItems='center'>

			<Grid container display='flex'
				justifyContent='center'
				alignItems='center'
			>

				<Stack direction="row" spacing={0.5} alignItems={'center'}>
					<Typography variant="body2" fontWeight={700}>Ingrese su correo electrónico</Typography>
					<Button variant='text'>
						Iniciar sesión
					</Button>
				</Stack>

				<Grid item xs={12} paddingBottom={2}>
					<CssTextField
						sx={{ input: { color: 'white' } }}
						onChange={handleEmail}
						value={email}
						label="Correo electrónico"
						type="email"
						placeholder='Email'
						fullWidth
					/>
				</Grid>

				<Grid container padding='10px'>
					<Grid item xs={12} display='flex' justifyContent='center'>

						<CustomButton
							fontSize={'20px'}
							onClick={async () => {
								await recuperarPassword()&&	router.push(mainRoutes.veifyPassword);;
							}}
							disabled={(!errorEmail)
								? false : true
							}
							textColorHover={(!errorEmail) ? 'white' : null}
							textColor={'white'}
							colorHover={(!errorEmail) ? 'primary' : ''}
							colorActive={(!errorEmail) ? 'primary' : ''}
							sx={{
								width: '250px',
								height: '50px',
								color: 'primary'
							}}
							variant='contained'
							text={(!loadingAuth) ? 'Siguiente' : 'Siguiente...'}
							endIcon={(!loadingAuth)
								? <></>
								: <CircularProgress sx={{ color: 'black' }} variant='indeterminate' size='30px' />} fullWidth={false} />


					</Grid>
				</Grid>
				{/* <Link component={NextLink} href={''} variant="subtitle2">
					Recuperar contraseña
				</Link> */}

			</Grid>
		</Stack>
	);
};

export default AuthRecoverPasswordForm;
