
import { ChartIndicatorCurve, ChartIndicatorWithArrow, CustomIcon, InformationCard } from '@/presentation/components';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import { StartupPageContext } from '../../context/StartupPageContext';
import { compareLastArrayItems, formatNumber, showFieldWithValidation } from '@/presentation/utilities';

const InformationsCardStartup: React.FC = () => {

	const { startup, loading, error, infoFinancieraLastYear } = useContext(StartupPageContext);


	const size = infoFinancieraLastYear.length;

	let mercadoPotencial: number = 0;

	if (size > 0) {
		mercadoPotencial = infoFinancieraLastYear[size - 1].mercado_potencial;
		// console.log('infoFinancieraLastYear: ', infoFinancieraLastYear);
	}

	const mercadoPotSubio = compareLastArrayItems(infoFinancieraLastYear.map(e => e.mercado_potencial))

	return (

		<Grid
			alignItems="center"
			pt={3}
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: "space-between",
				width: '100%'
			}}
		>
			<InformationCard
				loading={loading}
				title='Modelo de negocio'
				width={{ mobile: 300, desktop: 340 }}
				height={{ mobile: 140, desktop: 120 }}
			>
				<Typography variant='body1'>
					{showFieldWithValidation(startup?.tipo_modelo_negocio)}
				</Typography>
			</InformationCard>
			<InformationCard
				loading={loading}
				title='Oportunidad'
				width={{ mobile: 300, desktop: 340 }}
			>
				<Typography variant='body1'>
					{showFieldWithValidation(startup?.oportunidades_y_retos)}
				</Typography>
			</InformationCard>

			<InformationCard
				loading={loading}
				title='Mercado potencial'
				width={{
					mobile: 300,
					desktop: 340
				}}
			>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					spacing={2}
					width='100%'
				>
					$
					<Typography variant='h1'> {formatNumber(mercadoPotencial)} </Typography>
					<Stack
						direction="column"
						justifyContent="center"
						alignItems="center"
						spacing={2}
					>
						<ChartIndicatorWithArrow
							width={15}
							height={10}
							isGreen={mercadoPotSubio}
						/>
						USD
					</Stack>
					<Box
						sx={{ display: { xs: 'none', sm: 'flex' } }}
					>
						<ChartIndicatorCurve
							width={100}
							height={50}
							isGreen={mercadoPotSubio}
						/>
					</Box>
					<Box
						sx={{ display: { xs: 'flex', sm: 'none' } }}
					>
						<CustomIcon
							iconName='green_chart'
							width={40}
							height={30}
						/>
					</Box>
				</Stack>
			</InformationCard>
		</Grid>
	)
};

export default InformationsCardStartup;
