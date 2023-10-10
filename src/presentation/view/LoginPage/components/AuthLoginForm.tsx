
import { CustomButton } from '@/presentation/components/CustomButton';
import { GlobalContext } from '@/presentation/contexts/GlobalContext/GlobalContext';
import { mainRoutes } from '@/presentation/routes/routes';
import { CssTextField } from '@/presentation/styles/styles';
import { Stack, Grid, Box, Link, Typography, TextField, CircularProgress, Card, styled } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { useNavigate } from 'react-router-dom';


export interface AuthLoginFormProps { }

const AuthLoginForm: React.FC<AuthLoginFormProps> = () => {


	const {
		login, loadingAuth, isAuthStatus,
		email, errorEmail, handleEmail,
		password, errorPassword, handlePassword
	} = React.useContext(GlobalContext)

	const router = useRouter();

	return (

		<Stack direction='column' alignItems='center'>

			<Grid container display='flex'
				justifyContent='center'
				alignItems='center'
			>
				<Grid item xs={12} paddingBottom={2}>
					<CssTextField
						sx={{ input: { color: 'white' } }}
						onChange={handleEmail}
						value={email}
						label="Correo electrónico"
						type="email"
						placeholder='Correo@google.com'
						fullWidth
					/>
				</Grid>

				<Grid item xs={12} paddingBottom={2}>
					<CssTextField
						sx={{ input: { color: 'white' } }}
						onChange={handlePassword}
						value={password}
						label="Contraseña"
						type="password"
						placeholder='Contraseña'
						fullWidth
					/>
				</Grid>

				<Link href={'/recover_password'} variant="subtitle2">
					Olvidé la contraseña
				</Link>


				<Grid container padding='10px'>
					<Grid item xs={12} display='flex' justifyContent='center'>

						<CustomButton
							fontSize={'20px'}
							onClick={async () => {
								const isLogged = await login();
								if (isLogged) {
									router.push(mainRoutes.buscador);
								}
							}}
							disabled={(!errorEmail && !errorPassword) ? false : true}
							textColorHover={(!errorEmail && !errorPassword) ? 'white' : null}
							textColor={'white'}
							colorHover={(!errorEmail && !errorPassword) ? 'primary' : ''}
							colorActive={(!errorEmail && !errorPassword) ? 'primary' : ''}
							sx={{
								width: '250px',
								height: '50px',
								color: 'primary'
							}}
							variant='contained'
							text={(!loadingAuth) ? 'Iniciar sesión' : 'Iniciando...'}
							endIcon={(!loadingAuth)
								? <></>
								: <CircularProgress sx={{ color: 'black' }} variant='indeterminate' size='30px' />} fullWidth={false} />
					</Grid>
				</Grid>
			</Grid>
		</Stack>

	);
};

export default AuthLoginForm;
