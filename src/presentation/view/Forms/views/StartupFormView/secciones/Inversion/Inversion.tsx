import { ISocio } from '@/data/interfaces/socio_interface';
import { CustomButton } from '@/presentation/components';
import { SubTitleIcon } from '@/presentation/layouts/FormsLayout/SidebarForm/components/SubTitleIcon';
import { Button, Skeleton, Stack } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useContext, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { FormsStartupContext } from '@/presentation/contexts/FormsStartupContext/FormsStartupContext';
import { Iinversiones } from '@/data/interfaces/inversiones_interface';
import { DrawerAddInversiones } from './components/DrawerAddInversiones';
import { IEmpresa } from '@/data/models/empresa.model';
import { IFinanciacion } from '@/data/models/financiacion.model';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TablasFormIdEnum } from '@/presentation/utilities';
import { localeTextDataGrid } from '@/presentation/utilities/constants/loacaleTextGrid';

export interface InversionProps {

}

const Inversion: React.FC<InversionProps> = () => {

	const pageSize = 5;

	const { handleInversionesSidebarToggle,
		loadingGetStartup,
		myStartup,
		cargarFinanciacionDrawer, borrarErrorApi, handleOpenModalDelete
	} = useContext(FormsStartupContext);

	// console.log('DOC1:',myStartup?.financiacion)

	// console.log('DOC2:',startup)

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

			field: "pactado",
			headerName: "% pactado",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		},

		{
			field: "nombre_inversionista",
			headerName: "Inversionista",
			headerClassName: 'table-color--header',
			flex: 1,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => <>{params.value}.</>
		},

		{
			field: "cant",
			headerName: "Capital invertido (USD)",
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
					handleInversionesSidebarToggle(),
						cargarFinanciacionDrawer('update', params.row)
				}}><ModeEditOutlineOutlinedIcon sx={{ marginRight: '0px', color: 'yelow' }} />
				</Button>
				<Button onClick={() => {
					handleOpenModalDelete(TablasFormIdEnum.financiacion),
						borrarErrorApi(),
						cargarFinanciacionDrawer('update', params.row)
				}}><DeleteOutlineIcon sx={{ marginRight: '0px', color: 'red' }} />
				</Button>
			</>)
		},
	];


	return (
		<section id="Financiación">
			<DrawerAddInversiones />
			<Stack paddingTop={8} direction={'column'}>

				<Stack width="80%" direction='row' justifyContent={'space-between'}>
					<SubTitleIcon subtitle='Financiación' img={''} />
					<CustomButton
						onClick={() => {
							cargarFinanciacionDrawer('create'),
								handleInversionesSidebarToggle()
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
							rows={myStartup ? myStartup?.financiacion! : []}
							columns={columns}
							disableColumnSelector
							localeText={localeTextDataGrid}
							// cledisableRowSelectionOnClick
							autoHeight
							// pageSizeOptions={[5]}
							getRowId={(row: IFinanciacion) => row._id!}
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

export default Inversion;
