import { CustomButton } from '@/presentation/components';
import { FormsStartupContext } from '@/presentation/contexts/FormsStartupContext/FormsStartupContext';
import { SubTitleIcon } from '@/presentation/layouts/FormsLayout/SidebarForm/components/SubTitleIcon';
import { CssTextField } from '@/presentation/styles/styles';
import { Alert, Box, CircularProgress, Drawer, Grid, MenuItem, Stack } from '@mui/material';
import React, { useContext, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import 'dayjs/locale/es';
import { TablasFormIdEnum } from '@/presentation/utilities';
import { ModalDelete } from '@/presentation/view/Forms/components/ModalDelete';


 export const periodicidadList = [
	{ value: '0', label: 'Mensual', },
	{ value: '1', label: 'Trimestral', },
	{ value: '2', label: 'Anual', },

];

export interface DrawerAddInfFinancieraProps {
}

const DrawerAddInfFinanciera: React.FC<DrawerAddInfFinancieraProps> = () => {

	const { sidebarInfFinancieraOpen,
		handleInfFinancieraSidebarClose,
		fechaInfFinanciera, handleFechaInfFinanciera,
		clientesInfFinanciera, handleClientesInfFinanciera,
		ingresosInfFinanciera, handleIngresosInfFinanciera,
		costosInfFinanciera, handleCostosInfFinanciera,
		presupuestoMarketingInfFinanciera, handlePresupuestoMarketingInfFinanciera,
		monthlyInfFinanciera, handleMonthlyInfFinanciera,
		burnInfFinanciera, handleBurnInfFinanciera,
		ventasInfFinanciera, handleVentasInfFinanciera,
		facturacionInfFinanciera, handleFacturacionInfFinanciera,
		mercadoPotencialInfFinanciera, handleMercadoPotencialInfFinanciera,

		periodicidadInfFinanciera,handlePeriodicidadInfFinanciera,

		createAll, updateAll,
		loadingCreateStartup,
		errorApi, createOK,
		openModalId,
		createAndUpdate, idItem
	} = useContext(FormsStartupContext)

	return (
		<Drawer
			anchor='right'
			variant={"temporary"}
			open={sidebarInfFinancieraOpen}
			sx={{
				// display: { xs: 'block', sm: 'none' },
				'& .MuiDrawer-paper': { boxSizing: 'border-box', width: 400, bgcolor: 'rgba(29,27,13,0.2)' },
			}}
			ModalProps={{ keepMounted: true }}
			onClose={() => handleInfFinancieraSidebarClose()}
		>
			{(TablasFormIdEnum.infFinanciera === openModalId)
				&& <ModalDelete
					title={`Desea eliminar el dato de información financiera seleccionado?`}
					tablaId={TablasFormIdEnum.infFinanciera}
					modalId='infFinanciera'
					itemId={idItem!}
				/>
			}

			<Box sx={{ textAlign: 'center' }}>
				<Stack paddingTop={4} direction={'column'}>
					<SubTitleIcon subtitle='Información financiera' paddingLeft='20px' />
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
							value={fechaInfFinanciera}
							onChange={handleFechaInfFinanciera}
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
					value={periodicidadInfFinanciera}
					onChange={handlePeriodicidadInfFinanciera}
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
					onChange={handleIngresosInfFinanciera}
					value={ingresosInfFinanciera}
					label="Ingresos (USD)"
					type="text"
					placeholder='Ingresos (USD)'
					fullWidth
				/>
				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleCostosInfFinanciera}
					value={costosInfFinanciera}
					label="Costos (USD)"
					type="text"
					placeholder='Costos (USD)'
					fullWidth
				/>
				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handlePresupuestoMarketingInfFinanciera}
					value={presupuestoMarketingInfFinanciera}
					label="Presupuesto marketing (USD)"
					type="text"
					placeholder='Presupuesto marketing (USD)'
					fullWidth
				/>

				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleClientesInfFinanciera}
					value={clientesInfFinanciera}
					label="Clientes"
					type="text"
					placeholder='Clientes'
					fullWidth
				/>

				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleMonthlyInfFinanciera}
					value={monthlyInfFinanciera}
					label="Monthly recurring revenue"
					type="text"
					placeholder='Monthly recurring revenue'
					fullWidth
				/>
				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleBurnInfFinanciera}
					value={burnInfFinanciera}
					label="Burn rate (%)"
					type="text"
					placeholder='Burn rate (%)'
					fullWidth
				/>
				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleVentasInfFinanciera}
					value={ventasInfFinanciera}
					label="Ventas (USD)"
					type="text"
					placeholder='ventas'
					fullWidth
				/>
				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleFacturacionInfFinanciera}
					value={facturacionInfFinanciera}
					label="Facturación (USD)"
					type="text"
					placeholder='Facturación'
					fullWidth
				/>
				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleMercadoPotencialInfFinanciera}
					value={mercadoPotencialInfFinanciera}
					label="Mercado potencial"
					type="text"
					placeholder='Mercado potencial'
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
								? () => createAll(TablasFormIdEnum.infFinanciera)
								: () => updateAll(idItem!, TablasFormIdEnum.infFinanciera)
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
						onClick={handleInfFinancieraSidebarClose}
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

export default DrawerAddInfFinanciera;
