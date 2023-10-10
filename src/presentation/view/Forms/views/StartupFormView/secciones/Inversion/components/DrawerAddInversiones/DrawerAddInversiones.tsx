import { CustomButton } from '@/presentation/components';
import { FormsStartupContext } from '@/presentation/contexts/FormsStartupContext/FormsStartupContext';
import { SubTitleIcon } from '@/presentation/layouts/FormsLayout/SidebarForm/components/SubTitleIcon';
import { CssTextField } from '@/presentation/styles/styles';
import { Alert, Box, CircularProgress, Drawer, Grid, Stack, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { MenuItem } from '@mui/material';

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TablasFormIdEnum } from '@/presentation/utilities';
import { ModalDelete } from '@/presentation/view/Forms/components/ModalDelete';

const categoria = [
	{ value: 'Blockchain', label: 'Blockchain', },
	{ value: 'IOT', label: 'IOT', },
	{ value: 'Big Data', label: 'Big Data', },
	{ value: 'Economía Naranja', label: 'Economía Naranja', },
	{ value: 'Edtech', label: 'Edtech', },
	{ value: 'Foodtech', label: 'Foodtech', },
	{ value: 'Agritech', label: 'Agritech', },
	{ value: 'Health Tech', label: 'Health Tech', },
	{ value: 'Intraemprendimiento', label: 'Intraemprendimiento', },
	{ value: 'Legaltech', label: 'Legaltech', },
	{ value: 'Proptech', label: 'Proptech', },
	{ value: 'Movilidad y nuevas energías', label: 'Movilidad y nuevas energías', },
	{ value: 'Fintech', label: 'Fintech', },
	{ value: 'Retail/ marketplace/ E-commerce', label: 'Retail/ marketplace/ E-commerce', },
	{ value: 'SAAS', label: 'SAAS', },
	{ value: 'Cloud', label: 'Cloud', },
	{ value: 'IA', label: 'IA', },
];


const ronda = [
	{ value: 'Pre-semilla: etapa inicial del negocio', label: 'Pre-semilla: etapa inicial del negocio', },
	{ value: 'Semilla: etapa de desarrollo de producto', label: 'Semilla: etapa de desarrollo de producto', },
	{ value: 'Serie A', label: 'Serie A', },
	{ value: 'Serie B', label: 'Serie B', },
	{ value: 'Serie C', label: 'Serie C', },
	{ value: 'Otro', label: 'Otro', },
	{ value: 'No tengo preferencia', label: 'No tengo preferencia', },

];

const buscar_inver = [
	{ value: 'Si', label: 'Si', },
	{ value: 'No', label: 'No', },
];


export interface DrawerAddInversionesProps {
}

const DrawerAddInversiones: React.FC<DrawerAddInversionesProps> = () => {

	const { sidebarInversionesOpen,
		handleInversionesSidebarClose,
		fechaInversion, handleFechaInversion,
		capitalInvertido, handleCapitalInvertido,
		nombreInversionistaInversion, handleNombreInversionistaInversion,
		cargoInversionistaInversion, handleCargoInversionistaInversion,
		correoInversionistaInversion, handleCorreoInversionistaInversion,
		categoriaInversion, handleCategoriaInversion,
		rondaInversion, handleRondaInversion,
		pactadoInversion, handlePactadoInversion,
		valoracionInversion, handleValoracionInversion,
		notaInversion, handleNotaInversion,
		buscaInversion, handleBuscaInversion,
		loadingCreateStartup,
		createAll, updateAll,
		errorApi, createOK,

		createAndUpdate, idItem, openModalId

	} = useContext(FormsStartupContext);

	// console.log('CARGAR FINANCIACION:', cargaFinanciacion)

	return (
		<Drawer
			anchor='right'
			variant={"temporary"}
			open={sidebarInversionesOpen}
			sx={{
				// display: { xs: 'block', sm: 'none' },
				'& .MuiDrawer-paper': { boxSizing: 'border-box', width: 400, bgcolor: 'rgba(29,27,13,0.2)' },
			}}
			ModalProps={{ keepMounted: true }}
			onClose={() => handleInversionesSidebarClose()}
		>

			{(TablasFormIdEnum.financiacion === openModalId)
				&& <ModalDelete
					title={`Desea eliminar el dato financiación seleccionado?`}
					tablaId={TablasFormIdEnum.financiacion}
					modalId={'financiacion'}
					itemId={idItem!}
				/>}

			<Box sx={{ textAlign: 'center' }}>
				<Stack paddingTop={4} direction={'column'}>
					<SubTitleIcon subtitle='Financiación' paddingLeft='20px' />
				</Stack>
			</Box>
			<Stack paddingX={'50px'} paddingTop={'50px'} spacing={4} >


				<Stack direction='column' paddingTop={2}>
					<LocalizationProvider
						dateAdapter={AdapterDayjs}
						adapterLocale='es'
					>
						<DatePicker
							label="Periodo"
							views={['month', 'year',]}
							inputFormat="MM/YYYY"
							onChange={handleFechaInversion}
							value={fechaInversion}
							renderInput={(params) =>
								<CssTextField
									variant="outlined"
									multiline
									maxRows={10}
									type='date'
									// defaultValue={fechaInversion}
									// error={false}
									{...params} />
							} />
					</LocalizationProvider>

				</Stack>

				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleCapitalInvertido}
					value={capitalInvertido}
					label="Capítal invertido (USD)"
					type="text"
					placeholder='Capítal invertido (USD)'
					fullWidth
				/>
				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleValoracionInversion}
					value={valoracionInversion}
					label="Valoración (USD)"
					type="text"
					placeholder='Valoración (USD)'
					fullWidth
				/>
				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleNombreInversionistaInversion}
					value={nombreInversionistaInversion}
					label="Nombre del inversionista"
					type="text"
					placeholder='Nombre del inversionista'
					fullWidth
				/>
				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleCargoInversionistaInversion}
					value={cargoInversionistaInversion}
					label="Cargo inversionista"
					type="text"
					placeholder='Cargo inversionista'
					fullWidth
				/>
				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleCorreoInversionistaInversion}
					value={correoInversionistaInversion}
					label="Correo inversionista"
					type="text"
					placeholder='inversionista@gmail.com'
					fullWidth
				/>
				<CssTextField
					sx={{ input: { color: 'white', }, }}
					onChange={handleCategoriaInversion}
					value={categoriaInversion}
					label="Categoría"
					type="text"
					placeholder='Categoría'
					fullWidth
					select
				>
					{categoria.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</CssTextField>
				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleRondaInversion}
					value={rondaInversion}
					label="Ronda"
					type="text"
					placeholder='Ronda'
					fullWidth
					select
				>
					{ronda.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</CssTextField>
				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handlePactadoInversion}
					value={pactadoInversion}
					label="% PACTADO"
					type="text"
					placeholder='% PACTADO'
					fullWidth
				/>
				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleNotaInversion}
					value={notaInversion}
					label="Nota"
					type="text"
					placeholder='Nota'
					fullWidth
					multiline
					rows={4}
				/>
				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleBuscaInversion}
					value={buscaInversion}
					label="¿Busca más inversión?"
					type="text"
					placeholder='¿Busca más inversión?'
					fullWidth
					select
				>
					{buscar_inver.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</CssTextField>

				{(!createOK)
					? (errorApi?.length)
						? <Alert severity="error" sx={{ mb: 3, bgcolor: 'rgba(221,50,50,40%)' }}>
							{errorApi?.map((error,index) => (
								<li key={index}>{error}</li>
							))}
						</Alert>
						: <></>
					: <Alert severity="success" sx={{ mb: 3 }}>
						{'Sus datos se guardaron correctamente'}
					</Alert>

				}

				<Stack paddingY={2} paddingLeft={2} direction={'row'} spacing={2}>

					<CustomButton
						fontSize={'14px'}
						padding='4px 10px'
						onClick={
							createAndUpdate === 'create'
								? () => createAll(TablasFormIdEnum.financiacion)
								: () => updateAll(idItem!, TablasFormIdEnum.financiacion)
						}
						textColorHover={'white'}
						sx={{
							width: '250px',
							height: '50px',
							bgcolor: 'rgba(229,227,13,0.8)'
						}}
						variant='contained'
						text={
							createAndUpdate === 'create'
								? (!loadingCreateStartup) ? 'Guardar' : 'Guardando...'
								: (!loadingCreateStartup) ? 'Actualizar' : 'Actualizando...'
						}
						endIcon={(!loadingCreateStartup)
							? <></>
							: <CircularProgress sx={{ color: 'black' }} variant='indeterminate' size='30px' />} fullWidth={false} />

					<CustomButton

						fullWidth={false}
						fontSize={'14px'}
						onClick={handleInversionesSidebarClose}
						textColorHover={'white'}
						sx={{
							width: '150px',
							height: '50px',
							bgcolor: 'rgba(229,227,13,0.8)'
						}}
						variant='contained'
						text={'Cancelar'}
						endIcon={<CloseIcon sx={{ color: 'black' }} />} />
				</Stack>

			</Stack>
		</Drawer>
	);
};

export default DrawerAddInversiones;
