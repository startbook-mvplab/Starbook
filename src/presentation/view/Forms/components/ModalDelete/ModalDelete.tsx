import { CustomButton } from '@/presentation/components';
import { Modal, Avatar, Button, Stack, Box, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { FormsStartupContext } from '@/presentation/contexts/FormsStartupContext/FormsStartupContext';


export interface ModalDeleteProps {
	title?: string,
	tablaId?: string,
	itemId?: string,
	modalId?:string,
}

const ModalDelete: React.FC<ModalDeleteProps> = ({ title, tablaId,modalId, itemId }) => {

	const {
		handleCloseModalDelete,
		openModalDelete,
		loadingCreateStartup,
		deleteAll,
		errorApi
	} = useContext(FormsStartupContext);

	console.log('Items:',itemId,'TablaId',tablaId);

	return <Modal
		open={openModalDelete}
		onClose={handleCloseModalDelete}
		aria-labelledby="modal-modal-title"
		aria-describedby="modal-modal-description"
		sx={{
			'& .MuiBackdrop-root': { background: 'rgba(0,0,0,10%)' },
			overflow: 'auto',
			top: '20%', left: { xs: '20%', sm: '40%' },
		}}>
		<>
			<Avatar
				sx={{
					top: '15px',
					right: { xs: '-250px', sm: '-400px' },
					background: 'red',
					width: '25px',
					height: '25px'
				}}>
				<Button onClick={handleCloseModalDelete}>
					<CloseIcon sx={{ color: 'white' }} />
				</Button>
			</Avatar>

			<Stack
				direction='row'
				alignItems='center'
				sx={{
					width: { xs: '200px', sm: '450px', md: '500px', lg: '500px', xl: '500px' },
					// bgcolor: 'background.paper',
					// boxShadow: 24,
					borderRadius: 4,
				}}>
				<Box
					borderRadius={'10px'}
					bgcolor={'rgba(229,227,13,0.1)'}
					minWidth={{ xs: '300px', sm: '440px' }}
					minHeight={'200px'}
				>

					{
						<Stack margin={'25px'} direction={'column'} justifyContent={'center'} alignItems={'center'}>

							<img
								src={'/WARNING.png'}
								width={37}
								height={37}
								alt=''
								style={{ marginTop: '5px', alignItems: 'center' }}
							/>

							{(errorApi?.length === undefined || errorApi?.length === 0)
								? < Typography
									paddingY={2}
									fontSize={16}
									textAlign={'center'}
									//  paddingX={{ sm: 2 }}
									style={{ fontWeight: 700, }}
								>{title}
								</Typography >
								: <></>
							}

							{(errorApi?.length === undefined || errorApi?.length === 0)
								? <></>
								: <Alert severity="success" sx={{ marginTop: 3 }}>
									{errorApi}
								</Alert>
							}

							<Stack paddingY={2} paddingLeft={2} direction={'row'} spacing={2}>

								<CustomButton
									disabled={!(errorApi?.length === undefined || errorApi?.length === 0) }
									fontSize={'16px'}
									padding='4px 10px'
									onClick={() => { deleteAll(itemId!, tablaId!) }}
									textColorHover={'white'}
									sx={{
										width: '150px',
										height: '50px',
										bgcolor: 'rgba(229,227,13,0.8)'
									}}
									variant='contained'
									text={(!loadingCreateStartup) ? 'Eliminar' : 'Eliminando...'}
									endIcon={(!loadingCreateStartup)
										? <></>
										: <CircularProgress sx={{ color: 'black' }} variant='indeterminate' size='30px' />} fullWidth={false} />

								<CustomButton
									fullWidth={false}
									fontSize={'16px'}
									onClick={handleCloseModalDelete}
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
					}
				</Box>

			</Stack>
		</>
	</Modal >
		;
};

export default ModalDelete;
