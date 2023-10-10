import { CustomButton } from '@/presentation/components';
import { FormsStartupContext } from '@/presentation/contexts/FormsStartupContext/FormsStartupContext';
import { SubTitleIcon } from '@/presentation/layouts/FormsLayout/SidebarForm/components/SubTitleIcon';
import { CssTextField } from '@/presentation/styles/styles';
import { Box, CircularProgress, Drawer, Grid, Stack, Alert, IconButton, Button } from '@mui/material';
import React, { useContext, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { MenuItem } from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import 'dayjs/locale/es';
import { periodicidadList } from '../../../InformacionFinanciera/components/DrawerAddInfFinanciera/DrawerAddInfFinaciera';
import { TablasFormIdEnum } from '@/presentation/utilities';
import { ModalDelete } from '@/presentation/view/Forms/components/ModalDelete';



export interface DrawerAddInfTraccionProps {
}

const DrawerAddInfTraccion: React.FC<DrawerAddInfTraccionProps> = () => {

	const { sidebarInfTraccionOpen,
		handleInfTraccionSidebarClose,
		fechaInfTraccion, fechaInfTraccionString, handleFechaInfTraccion,
		cacInfTraccion, handleCacInfTraccion,
		ltvInfTraccion, handleLtvInfTraccion,
		usuarioInfTraccion, handleUsuarioInfTraccion,
		burnRateInfTraccion, handleBurnRateInfTraccion,
		churnRateInfTraccion, handleChurnRateInfTraccion,
		clientesRecurrentesInfTraccion, handleClientesRecurrentesInfTraccion,
		clientesInactivosInfTraccion, handleClientesInactivosInfTraccion,
		clientesNuevosInfTraccion, handleClientesNuevosInfTraccion,
		createAll, updateAll,
		loadingCreateStartup,
		errorApi, createOK,
		openModalId,
		createAndUpdate, idItem,

		periodicidadInfTraccion,handlePeriodicidadInfTraccion
	} = useContext(FormsStartupContext)


	console.log('Periodicidad Traccion:',periodicidadInfTraccion)


	return (
		<Drawer
			anchor='right'
			variant={"temporary"}
			open={sidebarInfTraccionOpen}
			sx={{
				// display: { xs: 'block', sm: 'none' },
				'& .MuiDrawer-paper': { boxSizing: 'border-box', width: 400, bgcolor: 'rgba(29,27,13,0.2)' },
			}}
			ModalProps={{ keepMounted: true }}
			onClose={() => handleInfTraccionSidebarClose()}
		>

			{(TablasFormIdEnum.infTraccion === openModalId)
				&& <ModalDelete
					title={`Desea eliminar el dato de información de tracción seleccionado?`}
					tablaId={TablasFormIdEnum.infTraccion}
					modalId={'infTraccion'}
					itemId={idItem!}
				/>}

			<Box sx={{ textAlign: 'center' }}>
				<Stack paddingTop={4} direction={'column'}>
					<SubTitleIcon subtitle='Información de tracción' paddingLeft='20px' />
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
							value={fechaInfTraccion}
							onChange={handleFechaInfTraccion}
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

				<CssTextField
					fullWidth
					// disabled={disable}
					sx={{ input: { color: 'white' } }}
					select
					label="Periodicidad"
					value={periodicidadInfTraccion}
					onChange={handlePeriodicidadInfTraccion}
				//helperText="Tipo de documento"
				>{periodicidadList.map((option) => (
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
					sx={{ input: { color: 'white' } }}
					onChange={handleCacInfTraccion}
					value={cacInfTraccion}
					label="CAC (USD)"
					type="text"
					placeholder='CAC (USD)'
					fullWidth
				/>
				<CssTextField
					sx={{ input: { color: 'white', }, }}
					onChange={handleLtvInfTraccion}
					value={ltvInfTraccion}
					label="LTV (USD)"
					type="text"
					placeholder='LTV (USD)'
					fullWidth
				/>
				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleUsuarioInfTraccion}
					value={usuarioInfTraccion}
					label="Usuarios Activos"
					type="text"
					placeholder='Usuarios Activos'
					fullWidth
				/>
				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleBurnRateInfTraccion}
					value={burnRateInfTraccion}
					label="Burn Rate"
					type="text"
					placeholder='Burn Rate'
					fullWidth
				/>
				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleChurnRateInfTraccion}
					value={churnRateInfTraccion}
					label="Churn Rate"
					type="text"
					placeholder='Churn Rate'
					fullWidth
				/>

				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleClientesRecurrentesInfTraccion}
					value={clientesRecurrentesInfTraccion}
					label="Clientes Recurrentes"
					type="text"
					placeholder='Clientes Recurrentes'
					fullWidth
				/>


				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleClientesInactivosInfTraccion}
					value={clientesInactivosInfTraccion}
					label="Clientes Inactivos"
					type="text"
					placeholder='Clientes Inactivos'
					fullWidth

				/>


				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleClientesNuevosInfTraccion}
					value={clientesNuevosInfTraccion}
					label="Nuevos Clientes"
					type="text"
					placeholder='Nuevos Clientes'
					fullWidth
				/>


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
						fontSize={'16px'}
						padding='4px 10px'
						onClick={
							createAndUpdate === 'create'
								? () => createAll(TablasFormIdEnum.infTraccion)
								: () => updateAll(idItem!, TablasFormIdEnum.infTraccion)
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
						fontSize={'16px'}
						// onClick={async () => { }}
						onClick={handleInfTraccionSidebarClose}
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
		</Drawer >
	);
};

export default DrawerAddInfTraccion;
