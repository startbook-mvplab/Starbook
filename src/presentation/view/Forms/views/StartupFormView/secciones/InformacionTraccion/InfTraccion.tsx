import { ISocio } from '@/data/interfaces/socio_interface';
import { CustomButton } from '@/presentation/components';
import { SubTitleIcon } from '@/presentation/layouts/FormsLayout/SidebarForm/components/SubTitleIcon';
import { Button, Skeleton, Stack } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { FormsStartupContext } from '@/presentation/contexts/FormsStartupContext/FormsStartupContext';
import { Iinversiones } from '@/data/interfaces/inversiones_interface';
import DrawerAddInfTraccion from './components/DrawerAddInformacionTraccion/DrawerAddInfTraccion';
import { IinformacionTraccion } from '@/data/interfaces/informacionTraccion_interface';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TablasFormIdEnum } from '@/presentation/utilities';
import { localeTextDataGrid } from '@/presentation/utilities/constants/loacaleTextGrid';

export interface InfTraccionProps { }

const InfTraccion: React.FC<InfTraccionProps> = () => {

	const pageSize = 5;

	// console.log('DOC:',docs)
	const {
		handleInfTraccionSidebarToggle,
		loadingGetStartup,
		myStartup,
		cargarInfTraccionDrawer, borrarErrorApi, handleOpenModalDelete
	} = useContext(FormsStartupContext);

	// console.log('InfTraccion:', myStartup?.infTraccion)

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

			field: "CAC",
			headerName: "CAC (USD)",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		},

		{
			field: "LTV",
			headerName: "LTV (USD)",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		},

		{
			field: "usuarios_activo",
			headerName: "Usuarios activos",
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
					handleInfTraccionSidebarToggle(),
						cargarInfTraccionDrawer('update', params.row)
				}}><ModeEditOutlineOutlinedIcon sx={{ marginRight: '0px', color: 'yelow' }} />
				</Button>

				<Button onClick={() => {
					handleOpenModalDelete(TablasFormIdEnum.infTraccion),
						borrarErrorApi(),
						cargarInfTraccionDrawer('update', params.row)
				}}><DeleteOutlineIcon sx={{ marginRight: '0px', color: 'red' }} />
				</Button>
			</>)
		},
	];

	return (
		<section id="Información de tracción">
			<DrawerAddInfTraccion />
			<Stack paddingTop={8} direction={'column'}>

				<Stack width="80%" direction='row' justifyContent={'space-between'}>
					<SubTitleIcon subtitle='Información de tracción' img={''} />
					<CustomButton
						onClick={() => { cargarInfTraccionDrawer('create'), handleInfTraccionSidebarToggle() }}
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
							rows={myStartup ? myStartup?.infTraccion! : []}
							columns={columns}
							disableColumnSelector
							localeText={localeTextDataGrid}
							// cledisableRowSelectionOnClick
							autoHeight
							// pageSizeOptions={[5]}
							getRowId={(row: IinformacionTraccion) => row._id!}
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

export default InfTraccion;
