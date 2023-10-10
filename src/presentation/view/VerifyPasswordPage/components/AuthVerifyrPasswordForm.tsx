
import { CustomButton } from '@/presentation/components/CustomButton';
import { GlobalContext } from '@/presentation/contexts/GlobalContext/GlobalContext';
import { mainRoutes } from '@/presentation/routes/routes';
import { CssTextField } from '@/presentation/styles/styles';
import { Stack, Grid, Box, Link, Typography, TextField, CircularProgress, styled, MenuItem, FormControlLabel, Checkbox, Button } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface AuthVerifyPasswordFormProps { }

const AuthVerifyPasswordForm: React.FC<AuthVerifyPasswordFormProps> = () => {


	const {
		login, register, loadingAuth, isAuthStatus,
		email, errorEmail, handleEmail,
		recoverCode, handleRecoverCode, errorRecoverCode,
		password, errorPassword, handlePassword,
		passwordConfirm, errorPasswordConfirm, handlePasswordConfirm,
		verificarNewPassword,
	} = React.useContext(GlobalContext)

	const router = useRouter();

	return (

		<Stack direction='column' alignItems='center'>

			<Grid container display='flex'
				justifyContent='center'
				alignItems='center'
			>

				<Stack paddingBottom={1} direction="row" spacing={0.5} alignItems={'center'}>
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


				<Stack paddingBottom={1} direction="row" spacing={0.5}>
					<Typography variant="body2" fontWeight={700}>Ingrese el código que se envió a su correo</Typography>
				</Stack>

				<Grid item xs={12} paddingBottom={2}>
					<CssTextField
						sx={{ input: { color: 'white' } }}
						onChange={handleRecoverCode}
						value={recoverCode}
						label="código"
						type="number"
						placeholder='código'
						fullWidth
					/>
				</Grid>

				<Stack paddingBottom={1} direction="row" spacing={0.5}>
					<Typography variant="body2" fontWeight={700}>Ingrese el código que se envió a su correo</Typography>
				</Stack>

				<Grid item xs={12} paddingBottom={2}>
					<CssTextField
						sx={{ input: { color: 'white' } }}
						onChange={handlePassword}
						value={password}
						label="Nueva Contraseña"
						type="password"
						placeholder='Nueva Contraseña'
						fullWidth
					/>
				</Grid>

				<Grid item xs={12} paddingBottom={2}>
					<CssTextField
						sx={{ input: { color: 'white' } }}
						onChange={handlePasswordConfirm}
						value={passwordConfirm}
						label="Confirmar Nueva Contraseña"
						type="password"
						placeholder='Confirmar Nueva Contraseña'
						fullWidth
					/>
				</Grid>



				<Grid container padding='10px'>
					<Grid item xs={12} display='flex' justifyContent='center'>

						<CustomButton
							fontSize={'20px'}
							onClick={async () => {
							router.push(mainRoutes.recoverPassword)
							}}
							fullWidth={false}
							sx={{width: '350px',height: '50px',color: 'primary',marginRight:'20px'}}
							variant='contained'
							text='Reenviar Código'
						/>

						<CustomButton
							fontSize={'20px'}
							onClick={async () => {
								await verificarNewPassword() && router.push(mainRoutes.login)
							}}
							disabled={(!errorEmail && !errorRecoverCode && !errorPasswordConfirm)
								? false : true

							}
							textColorHover={(!errorEmail && !errorRecoverCode && !errorPasswordConfirm) ? 'white' : null}
							textColor={'white'}
							colorHover={(!errorEmail && !errorRecoverCode && !errorPasswordConfirm) ? 'primary' : ''}
							colorActive={(!errorEmail && !errorRecoverCode && !errorPasswordConfirm) ? 'primary' : ''}
							sx={{
								width: '250px',
								height: '50px',
								color: 'primary'
							}}
							variant='contained'
							text={(!loadingAuth) ? 'Verificar' : 'Verificando...'}
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

export default AuthVerifyPasswordForm;
