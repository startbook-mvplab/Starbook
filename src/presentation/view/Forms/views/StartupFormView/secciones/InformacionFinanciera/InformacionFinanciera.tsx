import { ISocio } from '@/data/interfaces/socio_interface';
import { CustomButton } from '@/presentation/components';
import { SubTitleIcon } from '@/presentation/layouts/FormsLayout/SidebarForm/components/SubTitleIcon';
import { Button, Skeleton, Stack } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { FormsStartupContext } from '@/presentation/contexts/FormsStartupContext/FormsStartupContext';
import { IinfFinaciera } from '@/data/interfaces/infFinaciera_interface';
import { DrawerAddInfFinaciera } from './components/DrawerAddInfFinanciera';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TablasFormIdEnum } from '@/presentation/utilities';
import { localeTextDataGrid } from '@/presentation/utilities/constants/loacaleTextGrid';

export interface InformacionFinancieraProps { }

const InformacionFinanciera: React.FC<InformacionFinancieraProps> = () => {

	const pageSize = 5;

	// console.log('DOC:',docs)
	const {
		handleInfFinancieraSidebarToggle,
		loadingGetStartup, cargarInfFinancieraDrawer,
		handleOpenModalDelete,
		borrarErrorApi,
		myStartup } = useContext(FormsStartupContext);

	// console.log('InfFinanciera:', myStartup?.infFinanciera)

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

			field: "ingresos",
			headerName: "Ingresos (USD)",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		},

		{
			field: "costos",
			headerName: "Costos (USD)",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		},

		{
			field: "clientes",
			headerName: "Clientes",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		},

		{
			field: "burn_rate",
			headerName: "Burn_rate",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		},
		{
			field: "ventas",
			headerName: "Ventas",
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
					handleInfFinancieraSidebarToggle(),
						cargarInfFinancieraDrawer('update', params.row)
				}}><ModeEditOutlineOutlinedIcon sx={{ marginRight: '0px', color: 'yelow' }} />
				</Button>
				<Button onClick={() => {
					    handleOpenModalDelete(TablasFormIdEnum.infFinanciera),
						borrarErrorApi(),
						cargarInfFinancieraDrawer('update', params.row)
				}}><DeleteOutlineIcon sx={{ marginRight: '0px', color: 'red' }} />
				</Button>
			</>)
		},

	];

	return (
		<section id="Información financiera">
			<DrawerAddInfFinaciera />
			<Stack paddingTop={8} direction={'column'}>

				<Stack width="80%" direction='row' justifyContent={'space-between'}>
					<SubTitleIcon subtitle='Información financiera' img={''} />
					<CustomButton
						onClick={() => { cargarInfFinancieraDrawer('create'), handleInfFinancieraSidebarToggle() }}
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
							rows={myStartup ? myStartup?.infFinanciera! : []}
							columns={columns}
							disableColumnSelector
							localeText={localeTextDataGrid}
							// cledisableRowSelectionOnClick
							autoHeight
							// pageSizeOptions={[5]}
							getRowId={(row: IinfFinaciera) => row._id!}
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

export default InformacionFinanciera;
