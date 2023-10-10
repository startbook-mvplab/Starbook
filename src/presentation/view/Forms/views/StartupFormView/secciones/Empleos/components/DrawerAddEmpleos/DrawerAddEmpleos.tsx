import { CustomButton } from '@/presentation/components';
import { FormsStartupContext } from '@/presentation/contexts/FormsStartupContext/FormsStartupContext';
import { SubTitleIcon } from '@/presentation/layouts/FormsLayout/SidebarForm/components/SubTitleIcon';
import { CssFormControlLabel, CssTextField } from '@/presentation/styles/styles';
import { Box, CircularProgress, Drawer, Stack, MenuItem, Alert, RadioGroup, Radio, Checkbox, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import 'dayjs/locale/es';
// import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, DesktopDatePicker } from '@mui/x-date-pickers';
import {listasEmpleo } from '../listasDesplegables';
import { MultiSelector } from '@/presentation/components/MultiSelector';
import { periodicidadList } from '../../../InformacionFinanciera/components/DrawerAddInfFinanciera/DrawerAddInfFinaciera';
import { TablasFormIdEnum } from '@/presentation/utilities';
import { ModalDelete } from '@/presentation/view/Forms/components/ModalDelete';

export interface DrawerAddEmpleosProps {
}

const DrawerAddEmpleos: React.FC<DrawerAddEmpleosProps> = () => {

	const { sidebarEmpleosOpen,
		handleEmpleosSidebarClose,
		fechaEmpleos, handleFechaEmpleos,
		empleos, handleEmpleos,
		createAll, updateAll,
		cargoEmpleos, handleCargoEmpleos,
		loadingCreateStartup,
		errorApi, createOK,
		empleosMultiSelected,handleEmpleosSelected,

		periodicidadEmpleos,handlePeriodicidadEmpleos,

		idItem, createAndUpdate, openModalId
	} = useContext(FormsStartupContext)

	return (
		<Drawer
			anchor='right'
			variant={"temporary"}
			open={sidebarEmpleosOpen}
			sx={{
				// display: { xs: 'block', sm: 'none' },
				'& .MuiDrawer-paper': { boxSizing: 'border-box', width: 400, bgcolor: 'rgba(29,27,13,0.2)' },
			}}
			ModalProps={{ keepMounted: true }}
			onClose={() => handleEmpleosSidebarClose()}
		>
			{(TablasFormIdEnum.empleos === openModalId)
				&& <ModalDelete
					title={`Desea eliminar el dato de empleo seleccionado?`}
					tablaId={TablasFormIdEnum.empleos}
					modalId={'empleos'}
					itemId={idItem!}
				/>}

			<Box sx={{ textAlign: 'center' }}>
				<Stack paddingTop={4} direction={'column'}>
					<SubTitleIcon subtitle='Empleos' paddingLeft='20px' />
				</Stack>
			</Box>
			<Stack paddingX={'50px'} paddingTop={'50px'} spacing={4} >

				<LocalizationProvider
					dateAdapter={AdapterDayjs}
					adapterLocale='es'
				>
					<DatePicker
						label="Periodo"
						// inputFormat="DD/MM/YYYY"
						views={['month','year',]}
						inputFormat="MM/YYYY"
						value={fechaEmpleos}
						onChange={handleFechaEmpleos}
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


				<CssTextField
					fullWidth
					// disabled={disable}
					sx={{ input: { color: 'white' } }}
					select
					label="Periodicidad"
					value={periodicidadEmpleos}
					onChange={handlePeriodicidadEmpleos}
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
				{/* </Stack>
{/* 
				</DatePickerWrapper> */}

				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleEmpleos}
					value={empleos}
					label="Empleos"
					type="text"
					placeholder='Empleos'
					fullWidth
				/>
				<MultiSelector
				value={empleosMultiSelected}
				onChange={handleEmpleosSelected}
				list={listasEmpleo}
				/>
				

				{
					(!createOK)
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
								? () => createAll(TablasFormIdEnum.empleos)
								: () => updateAll(idItem!, TablasFormIdEnum.empleos)
						}
						textColorHover={'white'}
						sx={{
							width: '150px',
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
						// onClick={async  () => {}}
						onClick={handleEmpleosSidebarClose}
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
			</Stack >
		</Drawer >
	);
};

export default DrawerAddEmpleos;
