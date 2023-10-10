import { ISocio } from '@/data/interfaces/socio_interface';
import { CustomButton } from '@/presentation/components';
import { SubTitleIcon } from '@/presentation/layouts/FormsLayout/SidebarForm/components/SubTitleIcon';
import { Button, Stack } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { DrawerAddSocios } from './components/DrawerAddSocios';
import { FormsStartupContext } from '@/presentation/contexts/FormsStartupContext/FormsStartupContext';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ISocios } from '@/data/models/socios.model';
import { TablasFormIdEnum } from '@/presentation/utilities';
import { localeTextDataGrid } from '@/presentation/utilities/constants/loacaleTextGrid';

export interface TablaSociosProps { }

const TablaSocios: React.FC<TablaSociosProps> = () => {

	const pageSize = 5;

	// console.log('DOC:',docs)
	const {
		handleSociosSidebarToggle,
		myStartup,
		cargarSociosDrawer,
		handleOpenModalDelete,
		borrarErrorApi
	} = useContext(FormsStartupContext);


	const columns: GridColDef[] = [

		{
			field: "nombre",
			headerName: "Nombre",
			headerClassName: 'table-color--header',
			// cellClassName:'style-theme--cell',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => (
				<Button
					onClick={() => { }}
				>{params.value}.</Button>
			)
		},

		{

			field: "identificacion",
			headerName: "Identificación",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		},

		{
			field: "correo",
			headerName: "Correo",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		},

		{
			field: "cargo",
			headerName: "Cargo",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		},
		{
			field: "acciones",
			headerName: "Acciones",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 130,
			renderCell: (params: GridRenderCellParams) =>
			(<>
				<Button onClick={() => {
					handleSociosSidebarToggle(),
						cargarSociosDrawer('update', params.row)
				}}><ModeEditOutlineOutlinedIcon sx={{ marginRight: '0px', color: 'yelow' }} />
				</Button>

				<Button onClick={() => {
					handleOpenModalDelete(TablasFormIdEnum.socios),
					borrarErrorApi(),
					cargarSociosDrawer('update', params.row)
				}}><DeleteOutlineIcon sx={{ marginRight: '0px', color: 'red' }} />
				</Button>
			</>)
		},
	];


	return (
		<section id="Socios">
			
			<DrawerAddSocios />
			<Stack paddingTop={6} direction={'column'}>

				<Stack width="80%" direction='row' justifyContent={'space-between'}>
					<SubTitleIcon subtitle='Socios' img={''} />
					<CustomButton
						onClick={() => { cargarSociosDrawer('create'), handleSociosSidebarToggle() }}
						sx={{ bgcolor: 'white', borderRadius: '20px' }}
						endIcon={<AddIcon sx={{ color: 'black' }} />}
						fullWidth={false}
						text={'Agregar'} />
				</Stack>

				<Stack direction='column' paddingLeft={5} paddingTop={5} width={'100%'} spacing={2}>

					<DataGrid
						style={{ width: "80%" }}
						sx={{
							'&:hover, &.Mui-hovered': { backgroundColor: 'rgb(0, 0,0,40%)' },
							'& .MuiDataGrid-row:hover': { backgroundColor: 'rgb(0,0,0,60%)' },
						}}
						rows={myStartup ? myStartup?.socios! : []}
						columns={columns}
						disableColumnSelector
						localeText={localeTextDataGrid}
						// cledisableRowSelectionOnClick
						autoHeight
						// pageSizeOptions={[5]}
						getRowId={(row: ISocios) => row._id!}
					/>

				</Stack>

			</Stack>
		</section>
	);
};

export default TablaSocios;
