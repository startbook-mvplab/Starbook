import { CustomButton } from '@/presentation/components';
import { FormsStartupContext } from '@/presentation/contexts/FormsStartupContext/FormsStartupContext';
import { SubTitleIcon } from '@/presentation/layouts/FormsLayout/SidebarForm/components/SubTitleIcon';
import { CssTextField } from '@/presentation/styles/styles';
import { Alert, Box, CircularProgress, Drawer, Grid, Stack } from '@mui/material';
import React, { useContext, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { TablasFormIdEnum } from '@/presentation/utilities';
import { ModalDelete } from '@/presentation/view/Forms/components/ModalDelete';

export interface DrawerAddSociosProps {
}

const DrawerAddSocios: React.FC<DrawerAddSociosProps> = () => {

	const { sidebarSociosOpen,
		handleSociosSidebarClose,
		nameSocio, handleNameSocio,
		emailSocio, handleEmailSocio,
		identSocio, handleIdentSocio,
		cargoSocio, handleCargoSocio,
		loadingCreateStartup,

		createOK, errorApi,
		createAll, updateAll,
		openModalId,
		createAndUpdate, idItem
	} = useContext(FormsStartupContext)

	return (
		<Drawer
			anchor='right'
			variant={"temporary"}
			open={sidebarSociosOpen}
			sx={{
				// display: { xs: 'block', sm: 'none' },
				'& .MuiDrawer-paper': { boxSizing: 'border-box', width: 400, bgcolor: 'rgba(29,27,13,0.2)' },
			}}
			ModalProps={{ keepMounted: true }}
			onClose={() => handleSociosSidebarClose()}
		>
			{(TablasFormIdEnum.socios===openModalId)
			&&<ModalDelete
				title={`Desea eliminar el socio ${nameSocio}?`}
				tablaId={TablasFormIdEnum.socios}
				modalId={'socios'}
				itemId={idItem!}
			/>}

			<Box sx={{ textAlign: 'center' }}>
				<Stack paddingTop={4} direction={'column'}>
					<SubTitleIcon subtitle='Socios' paddingLeft='20px' />
				</Stack>
			</Box>
			<Stack paddingX={'50px'} paddingTop={'50px'} spacing={4} >

				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleNameSocio}
					value={nameSocio}
					label="Nombre"
					type="text"
					placeholder='Nombre'
					fullWidth
				/>

				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleEmailSocio}
					value={emailSocio}
					label="Correo"
					type="text"
					placeholder='Correo'
					fullWidth
				/>

				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleIdentSocio}
					value={identSocio}
					label="Identificación"
					type="text"
					placeholder='Identificación'
					fullWidth
				/>
				<CssTextField
					sx={{ input: { color: 'white' } }}
					onChange={handleCargoSocio}
					value={cargoSocio}
					label="Cargo"
					type="text"
					placeholder='Cargo'
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
								? () => createAll(TablasFormIdEnum.socios)
								: () => updateAll(idItem!, TablasFormIdEnum.socios)
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
						// onClick={async () => {}}
						onClick={handleSociosSidebarClose}
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

export default DrawerAddSocios;
