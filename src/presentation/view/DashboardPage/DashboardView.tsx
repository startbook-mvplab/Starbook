
import { Box, Button, Typography, IconButton, useTheme, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { CustomBox } from '@/presentation/components';
import { UserRepository } from '@/data/repositories/user.repository ';


export interface DashboardViewProps { }

const DashboardView: React.FC<DashboardViewProps> = () => {
	const theme = useTheme();
	const colors = theme.colors;

	// const iconStyle = { color: colors.primary, fontSize: "26px" };

	// const userRepository = new UserRepository();

	// const [usersCount, setUsersCount] = useState<number | null>(null);
	// const [loading, setLoading] = useState(true);

	// const getUsersCount = async () => {
	// 	setLoading(true);
	// 	const usersResp = await userRepository.getAll();
	// 	setUsersCount(usersResp.count);
	// 	setLoading(false)
	// }

	useEffect(() => {
		// getUsersCount();
	}, [])

	return (
		<Box height='2000px'>
			<CustomBox>
				<Typography variant='body1'>
					Texto
				</Typography>
			</CustomBox>
		</Box>
		// <Box m="20px">
		// 	{/* HEADER */}
		// 	<Box display="flex" justifyContent="space-between" alignItems="center">
		// 		<HeaderDashboard />

		// 		<Box>
		// 			<Button
		// 				variant='contained'
		// 				sx={{
		// 					// backgroundColor: colors.primary.dark,
		// 					color: colors.info,
		// 					fontSize: "14px",
		// 					fontWeight: "bold",
		// 					padding: "10px 20px",
		// 				}}
		// 			>
		// 				<RefreshIcon sx={{ mr: "10px" }} />
		// 				Actualizar Reportes
		// 			</Button>
		// 		</Box>
		// 	</Box>

		// 	{/* GRID & CHARTS */}
		// 	<Box
		// 		display="grid"
		// 		gridTemplateColumns="repeat(12, 1fr)"
		// 		gridAutoRows="140px"
		// 		gap="20px"
		// 	>
		// 		{
		// 			loading ?
		// 				<Box
		// 					gridColumn="span 3"
		// 					bgcolor={colors.primary.lighter}
		// 					borderRadius='10px'
		// 					display="flex"
		// 					alignItems="center"
		// 					justifyContent="center"
		// 				>
		// 					<CircularProgress />
		// 				</Box>

		// 				:
		// 				<InfoBox
		// 					title="Total de usuarios"
		// 					quantity={usersCount!}
		// 					icon={<PeopleIcon sx={iconStyle} />}
		// 				/>
		// 		}

		// 		<InfoBox
		// 			title="Beneficio total"
		// 			quantity={1000}
		// 			icon={<CurrencyExchangeIcon sx={iconStyle} />}
		// 		/>

		// 		<InfoBox
		// 			title="Gastos Totales"
		// 			quantity={3000}
		// 			icon={<AttachMoneyIcon sx={iconStyle} />}
		// 		/>

		// 		<InfoBox
		// 			title="Coste Total"
		// 			quantity={2500}
		// 			icon={<PaidIcon sx={iconStyle} />}
		// 		/>

		// 		{/* ROW 2 */}
		// 		<Box
		// 			gridColumn="span 8"
		// 			gridRow="span 2"
		// 			bgcolor={colors.secondary.lighter}
		// 		>
		// 			<Box
		// 				mt="25px"
		// 				p="0 30px"
		// 				display="flex "
		// 				justifyContent="space-between"
		// 				alignItems="center"

		// 			>
		// 				<Box>
		// 					<Typography
		// 						variant="h5"
		// 						fontWeight="600"
		// 						color={colors.info}
		// 					>
		// 						Revenue Generated
		// 					</Typography>
		// 					<Typography
		// 						variant="h3"
		// 						fontWeight="bold"
		// 						color={colors.primary}
		// 					>
		// 						$59,342.32
		// 					</Typography>
		// 				</Box>
		// 				<Box>
		// 					<IconButton>
		// 						<DownloadOutlinedIcon
		// 							sx={{ fontSize: "26px", color: colors.primary }}
		// 						/>
		// 					</IconButton>
		// 				</Box>
		// 			</Box>
		// 			<Box height="250px" m="-20px 0 0 0">
		// 				<h1>Grafico</h1>
		// 				<LineChart />
		// 			</Box>
		// 		</Box>
		// 		<Box
		// 			gridColumn="span 4"
		// 			gridRow="span 2"
		// 			bgcolor={colors.secondary.lighter}
		// 			overflow="auto"
		// 		>
		// 			<Box
		// 				display="flex"
		// 				justifyContent="space-between"
		// 				alignItems="center"
		// 				borderBottom={`4px solid ${colors.primary.lighter}`}
		// 				color={colors.primary.dark}
		// 				p="15px"
		// 			>
		// 				<Typography color={colors.info} variant="h5" fontWeight="600">
		// 					Recent Transactions
		// 				</Typography>
		// 			</Box>
		// 			{mockTransactions.map((transaction, i) => (
		// 				<Box
		// 					key={`${transaction.txId}-${i}`}
		// 					display="flex"
		// 					justifyContent="space-between"
		// 					alignItems="center"
		// 					borderBottom={`4px solid ${colors.primary.lighter}`}
		// 					p="15px"
		// 				>
		// 					<Box>
		// 						<Typography
		// 							color={colors.primary}
		// 							variant="h5"
		// 							fontWeight="600"
		// 						>
		// 							{transaction.txId}
		// 						</Typography>
		// 						<Typography color={colors.info}>
		// 							{transaction.user}
		// 						</Typography>
		// 					</Box>
		// 					<Box color={colors.info}>{transaction.date}</Box>
		// 					<Box
		// 						bgcolor={colors.primary.dark}
		// 						color='white'
		// 						p="5px 10px"
		// 						borderRadius="4px"
		// 					>
		// 						${transaction.cost}
		// 					</Box>
		// 				</Box>
		// 			))}
		// 		</Box>

		// 		{/* ROW 3 */}
		// 		<Box
		// 			gridColumn="span 4"
		// 			gridRow="span 2"
		// 			bgcolor={colors.info.lighter}
		// 			p="30px"
		// 		>
		// 			<Typography variant="h5" fontWeight="600">
		// 				Campaign
		// 			</Typography>
		// 			<Box
		// 				display="flex"
		// 				flexDirection="column"
		// 				alignItems="center"
		// 				mt="25px"
		// 			>
		// 				<ProgressCircle size="125" />
		// 				<Typography
		// 					variant="h5"
		// 					color={colors.primary}
		// 					sx={{ mt: "15px" }}
		// 				>
		// 					$48,352 revenue generated
		// 				</Typography>
		// 				<Typography>Includes extra misc expenditures and costs</Typography>
		// 			</Box>
		// 		</Box>
		// 		<Box
		// 			gridColumn="span 4"
		// 			gridRow="span 2"
		// 			bgcolor={colors.info.lighter}
		// 		>
		// 			<Typography
		// 				variant="h5"
		// 				fontWeight="600"
		// 				sx={{ padding: "30px 30px 0 30px" }}
		// 			>
		// 				Sales Quantity
		// 			</Typography>
		// 			<Box height="250px" mt="-20px" >
		// 				<h1>Grafico</h1>
		// 				<BarChart />
		// 			</Box>
		// 		</Box>
		// 		<Box
		// 			gridColumn="span 4"
		// 			gridRow="span 2"
		// 			bgcolor={colors.info.lighter}
		// 			padding="30px"
		// 		>
		// 			<Typography
		// 				variant="h5"
		// 				fontWeight="600"
		// 				sx={{ marginBottom: "15px" }}
		// 			>
		// 				Geography Based Traffic
		// 			</Typography>
		// 			<h1>Grafico</h1>

		// 			{/* <Box height="200px">
		// 				<GeographyChart isDashboard={true} />
		// 			</Box> */}
		// 		</Box>
		// 	</Box>
		// </Box>
	);
};

export default DashboardView;
