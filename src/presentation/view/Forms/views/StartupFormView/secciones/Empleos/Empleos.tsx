
import { CustomButton } from '@/presentation/components';
import { SubTitleIcon } from '@/presentation/layouts/FormsLayout/SidebarForm/components/SubTitleIcon';
import { Button, Skeleton, Stack } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { FormsStartupContext } from '@/presentation/contexts/FormsStartupContext/FormsStartupContext';
import { Iempleos } from '@/data/interfaces/empleos_interface';
import { DrawerAddEmpleos } from './components/DrawerAddEmpleos';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TablasFormIdEnum } from '@/presentation/utilities';
import { localeTextDataGrid } from '@/presentation/utilities/constants/loacaleTextGrid';


export interface EmpleosProps { }

const Empleos: React.FC<EmpleosProps> = () => {

	const pageSize = 5;

	// console.log('DOC:',docs)
	const { handleEmpleosSidebarToggle,
		loadingGetStartup,
		myStartup,
		cargarEmpleosDrawer,
		handleOpenModalDelete,
		borrarErrorApi
	} = useContext(FormsStartupContext);

	console.log('Empleos:', myStartup?.empleo)

	const columns: GridColDef[] = [

		{
			field: "fecha",
			headerName: "Periodo",
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

			field: "empleos",
			headerName: "Empleos",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		},

		{
			field: "perfiles",
			headerName: "Perfiles",
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
					handleEmpleosSidebarToggle(),
						cargarEmpleosDrawer('update', params.row)
				}}><ModeEditOutlineOutlinedIcon sx={{ marginRight: '0px', color: 'yelow' }} />
				</Button>
				<Button onClick={() => {
					handleOpenModalDelete(TablasFormIdEnum.empleos),
						borrarErrorApi(),
						cargarEmpleosDrawer('update', params.row)
				}}><DeleteOutlineIcon sx={{ marginRight: '0px', color: 'red' }} />
				</Button>
			</>)
		},

	];

	return (
		<section id="Empleos">
			<DrawerAddEmpleos />
			<Stack paddingTop={8} direction={'column'}>

				<Stack width="80%" direction='row' justifyContent={'space-between'}>
					<SubTitleIcon subtitle='Empleos' img={''} />
					<CustomButton
						onClick={() => {
							cargarEmpleosDrawer('create'),
								handleEmpleosSidebarToggle()
						}}
						sx={{ bgcolor: 'white', borderRadius: '20px' }}
						endIcon={<AddIcon sx={{ color: 'black' }} />}
						fullWidth={false}
						text={'Agregar'} />
				</Stack>

				{(!loadingGetStartup)
					? <Stack direction='column' paddingLeft={5} paddingTop={5} width={'100%'} spacing={2}>

						<DataGrid
							style={{ width: "80%" }}
							sx={{
								'&:hover, &.Mui-hovered': { backgroundColor: 'rgb(0, 0,0,40%)' },
								'& .MuiDataGrid-row:hover': { backgroundColor: 'rgb(0,0,0,60%)' },
							}}
							rows={myStartup ? myStartup?.empleo! : []}
							columns={columns}
							disableColumnSelector
							localeText={localeTextDataGrid}
							// cledisableRowSelectionOnClick
							autoHeight
							// pageSizeOptions={[5]}
							getRowId={(row: Iempleos) => row._id!}
						/>

					</Stack>
					: <Skeleton variant="rectangular"
						sx={{ marginTop: 5, marginLeft: 5, borderRadius: '10px' }}
						width='80%' height={250}
					/>
				}

			</Stack>
		</section>
	)
};

export default Empleos;
