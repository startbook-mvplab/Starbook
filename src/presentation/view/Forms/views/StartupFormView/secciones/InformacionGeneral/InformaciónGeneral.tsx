import { FormsStartupContext } from '@/presentation/contexts/FormsStartupContext/FormsStartupContext';
import { SubTitleButton } from '@/presentation/layouts/FormsLayout/SidebarForm/components/SubTitleButton';
import { SubTitleIcon } from '@/presentation/layouts/FormsLayout/SidebarForm/components/SubTitleIcon';
import { CssTextField } from '@/presentation/styles/styles';
import { Autocomplete, Box, Container, Grid, MenuItem, Stack } from '@mui/material';
import React, { useContext } from 'react';
import { codigos, paises } from './pais-municipios';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export interface InformacionGeneralProps { }


const currencies = [
	{ value: '0', label: 'Blockchain', },
	{ value: '1', label: 'IOT', },
	{ value: '2', label: 'Big Data', },
	{ value: '3', label: 'Economía Naranja', },
	{ value: '4', label: 'Edtech', },
	{ value: '5', label: 'Foodtech', },
	{ value: '6', label: 'Agritech', },
	{ value: '7', label: 'Health Tech', },
	{ value: '8', label: 'Legaltech', },
	{ value: '9', label: 'Proptech', },
	{ value: '10', label: 'Movilidad y nuevas energías', },
	{ value: '11', label: 'Fintech', },
	{ value: '12', label: 'Retail/ marketplace/ E-commerce', },
	{ value: '13', label: 'SAAS', },
	{ value: '14', label: 'Cloud', },
	{ value: '15', label: 'IA', },
];



const InformacionGeneral: React.FC<InformacionGeneralProps> = () => {

	const {
		disable,
		email, handleEmail,
		name, handleName,
		pais, handlePais,
		departamento, handleDepartamento,
		municipio, handleMunicipio,
		direccion, handleDireccion,
		sitioWeb, handleSitioWeb,
		linkedlin, handleLinkedlin,
		instagram, handleInstagram,
		oportunidad_y_retos, handleOportunidad_y_retos,
		facebook, handleFacebook,
		twitter, handleTwitter,
		phone, handlePhone,
		phoneCodigo, handlePhoneCodigo,
		nit, handleNit,
		healthTech, handleHealthTech,
		fechaInicioStartupString, fechaInicioStartup, handleFechaInicioStartup,
	} = useContext(FormsStartupContext);


	return (
		<section id="Información general" >
			<Grid container spacing={4}>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>

					<Stack paddingTop={3} direction='column' width={'100%'} spacing={2}>
						<SubTitleIcon subtitle='Información General' paddingLeft='20px' img='' />

						<Stack direction='column' paddingLeft={5} width={'100%'} spacing={2}>
							<CssTextField
								disabled={disable}
								sx={{ input: { color: 'white' } }}
								onChange={handleNit}
								value={nit}
								label="Nit"
								type="text"
								placeholder='Nit'
								fullWidth
							/>
							<CssTextField
								sx={{ input: { color: 'white' } }}
								disabled={disable}
								onChange={handleEmail}
								value={email}
								label="Correo electrónico"
								type="email"
								placeholder='Correo@google.com'
								fullWidth
							/>

							<CssTextField
								sx={{ input: { color: 'white' } }}
								disabled={disable}
								onChange={handleName}
								value={name}
								label="Nombre de la compañía/ Startup"
								type="text"
								placeholder='Nombre de la compañía/ Startup'
								fullWidth
							/>
							{/* <CssTextField
								sx={{ input: { color: 'white' } }}
								disabled={disable}
								onChange={handlePais}
								value={pais}
								label="País sede"
								type="text"
								placeholder='Pais sede'
								fullWidth
							/> */}
							<CssTextField
								fullWidth
								disabled={disable}
								sx={{ input: { color: 'white' } }}
								select
								label="Sector"
								value={healthTech}
								onChange={handleHealthTech}
							//helperText="Tipo de documento"
							>{currencies.map((option) => (
								<MenuItem
									sx={{
										"& .MuiInputBase-input.Mui-disabled": {
											WebkitTextFillColor: 'white',
										},
									}}
									style={{
										background: 'primary',
										color: "white",
									}}
									key={option.value}
									value={option.label}
								>
									{option?.label!}
								</MenuItem>
							))}
							</CssTextField>

							<CssTextField
								disabled={disable}
								sx={{ input: { color: 'white' } }}
								onChange={handleSitioWeb}
								value={sitioWeb}
								label="Sitio web"
								type="text"
								placeholder='Sitio web'
								fullWidth
							/>

							<Stack direction={'row'} spacing={2}>
								<Box width={'250px'}>
									<Autocomplete
										disabled={disable}
										onChange={(e) => handlePhoneCodigo(e.currentTarget.textContent!)}
										value={phoneCodigo}
										id="codigo-autocomplete"
										options={codigos}
										getOptionLabel={(option) => option}
										renderInput={(params) => (
											<CssTextField
												// onChange={handlePais}
												{...params}
												label="Código de país"
												variant="outlined"
											/>
										)} />
									{/* <CssTextField
										sx={{ input: { color: 'white' } }}
										disabled={disable}
										onChange={handlePhoneCodigo}
										value={phoneCodigo}
										label="Código de país"
										type="text"
										placeholder='Código de país'
										fullWidth
									/> */}
								</Box>

								<CssTextField
									sx={{ input: { color: 'white' } }}
									disabled={disable}
									onChange={handlePhone}
									value={phone}
									label="Teléfono"
									type="tel"
									placeholder='Teléfono'
									fullWidth
								/>


							</Stack>

							<CssTextField
								sx={{ input: { color: 'white' } }}
								disabled={disable}
								onChange={handleFacebook}
								value={facebook}
								label="Link de facebook"
								type="text"
								placeholder='Perfil de facebook'
								fullWidth
							/>

							<CssTextField
								disabled={disable}
								sx={{ input: { color: 'white' } }}
								onChange={handleInstagram}
								value={instagram}
								label="Link de instagram"
								type="text"
								placeholder='Perfil de instagram'
								fullWidth
							/>

							<LocalizationProvider
								dateAdapter={AdapterDayjs}
								adapterLocale='es'
							>
								<DatePicker
									disabled={disable}
									label="Fecha de inicio de operación"
									// inputFormat="DD/MM/YYYY"
									views={['day', 'month', 'year',]}
									inputFormat="DD/MM/YYYY"
									value={fechaInicioStartup}
									onChange={handleFechaInicioStartup}
									renderInput={(params) =>
										<CssTextField
											variant="outlined"
											multiline
											maxRows={10}
											type='date'
											// error={false}
											{...params} />
									} />
							</LocalizationProvider>


						</Stack>
					</Stack>
				</Grid>


				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<Stack direction='column' width={'100%'} spacing={2}>
						<SubTitleIcon subtitle='' paddingLeft='20px' img='' />
						<Stack direction='column' paddingTop={6} paddingLeft={5} width={'100%'} spacing={2}>
							<Autocomplete
								disabled={disable}
								onChange={(e) => handlePais(e.currentTarget.textContent!)}
								value={pais}
								id="country-autocomplete"
								options={paises}
								getOptionLabel={(option) => option}
								renderInput={(params) => (
									<CssTextField
										// onChange={handlePais}
										{...params}
										label="País sede"
										variant="outlined"
									/>
								)}
							/>
							<CssTextField
								disabled={disable}
								sx={{ input: { color: 'white' } }}
								onChange={handleDepartamento}
								value={departamento}
								label="Estado/departamento"
								type="text"
								placeholder='Estado/departamento'
								fullWidth
							/>

							<CssTextField
								sx={{ input: { color: 'white' } }}
								disabled={disable}
								onChange={handleMunicipio}
								value={municipio}
								label="Municipio"
								type="text"
								placeholder='Municipio'
								fullWidth
							/>

							<CssTextField
								disabled={disable}
								sx={{ input: { color: 'white' } }}
								onChange={handleDireccion}
								value={direccion}
								label="Dirección"
								type="text"
								placeholder='Dirección'
								fullWidth
							/>

							<CssTextField
								disabled={disable}
								sx={{ input: { color: 'white' } }}
								onChange={handleLinkedlin}
								value={linkedlin}
								label="Link de linkedin"
								type="text"
								placeholder='Perfil de linkedin'
								fullWidth
							/>
							<CssTextField
								disabled={disable}
								sx={{ input: { color: 'white' } }}
								onChange={handleTwitter}
								value={twitter}
								label="Link de twitter"
								type="text"
								placeholder='Perfil de twitter'
								fullWidth
							/>
							<CssTextField
								disabled={disable}
								sx={{ input: { color: 'white' } }}
								onChange={handleOportunidad_y_retos}
								value={oportunidad_y_retos}
								label="Oportunidad y retos"
								type="text"
								placeholder='Oportunidad y retos'
								fullWidth
								multiline
								rows={4}
							/>

						</Stack>
					</Stack>
				</Grid>

			</Grid>
		</section>
	)
}
export default InformacionGeneral;
