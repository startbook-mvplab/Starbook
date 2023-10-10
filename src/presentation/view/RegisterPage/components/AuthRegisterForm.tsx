
import { CustomButton } from '@/presentation/components/CustomButton';
import { GlobalContext } from '@/presentation/contexts/GlobalContext/GlobalContext';
import { mainRoutes } from '@/presentation/routes/routes';
import { CssTextField } from '@/presentation/styles/styles';
import { Stack, Grid, CircularProgress, styled, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const currencies = [
	{
		value: '0',
		label: 'Startup',
	},
	{
		value: '1',
		label: 'Inversionista',
	},
	{
		value: '2',
		label: 'Aceleradora/Incubadora',
	},
	{
		value: '3',
		label: 'Corporativo',
	},
	{
		value: '4',
		label: 'Academia',
	},
];

export interface AuthRegisterFormProps { }

const AuthRegisterForm: React.FC<AuthRegisterFormProps> = () => {


	const {
		login, register, loadingAuth, isAuthStatus,
		email, errorEmail, handleEmail,
		name, handleName,
		startupName,handleStartupName,
		phone, errorPhone, handlePhone,
		password, errorPassword, handlePassword,
		businessType, errorBusinessType, handleBusinessType,
		politica_de_privacidad, handlePolitica
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
						onChange={handleName}
						value={name}
						label="Nombre del contacto principal"
						type="name"
						placeholder='Nombre del contacto principal'
						fullWidth
					/>
				</Grid>

				<Grid item xs={12} paddingBottom={2}>
					<CssTextField
						sx={{ input: { color: 'white' } }}
						onChange={handleStartupName}
						value={startupName}
						label="Nombre de la empresa"
						type="starthandleStartupName"
						placeholder='Nombre de la empresa'
						fullWidth
					/>
				</Grid>


				<Grid item xs={12} paddingBottom={2}>
					<CssTextField
						sx={{ input: { color: 'white' } }}
						onChange={handleEmail}
						value={email}
						label="Email"
						type="email"
						placeholder='Email'
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} paddingBottom={2}>
					<CssTextField
						sx={{ input: { color: 'white' } }}
						onChange={handlePhone}
						value={phone}
						label="Teléfono"
						type="tel"
						placeholder='Teléfono'
						fullWidth
					/>
				</Grid>

				{/* <Grid item xs={12} paddingBottom={2}>
					<CssTextField
						sx={{ input: { color: 'white' } }}
						onChange={handleBusinessType}
						value={businessType}
						label="Business Type"
						type="text"
						placeholder='business type'
						fullWidth
					/>
				</Grid> */}

				<Grid item xs={12} paddingBottom={2}>

					<CssTextField
						fullWidth
						sx={{ input: { color: 'white' } }}
						select
						label="Business Type"
						value={businessType}
						onChange={handleBusinessType}
					//helperText="Tipo de documento"
					>{currencies.map((option) => (
						<MenuItem
							style={{ background: 'primary', color: "white" }}
							key={option.value}
							value={option.label}
						>
							{option?.label!}
						</MenuItem>
					))}
					</CssTextField>

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


				<FormControlLabel
					control={<Checkbox checked={politica_de_privacidad} onChange={handlePolitica} />}
					label={
						<span>
							He leído y acepto la{' '}
							<a
								style={{ color: 'yellow', textDecoration: ' none',textDecorationLine:'underline' }}
								href="https://startbook.net/privacy-policy/"
								target="_blank"
								rel="noopener noreferrer">
								Política de Privacidad
							</a>
						</span>
					}
				/>

				<Grid container padding='10px'>
					<Grid item xs={12} display='flex' justifyContent='center'>

						<CustomButton
							fontSize={'20px'}
							onClick={async () => {
								await register()
								await isAuthStatus() && router.push(mainRoutes.startup)
							}}
							disabled={(!errorEmail && !errorPassword) 
								         ?(politica_de_privacidad)
										   ? false : true
										    :true
										}
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
							text={(!loadingAuth) ? 'Crear Cuenta' : 'Creando...'}
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

export default AuthRegisterForm;
