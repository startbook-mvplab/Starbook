
import { Grid, Skeleton, Stack, Typography } from '@mui/material';
import { FC, useContext } from 'react';
import { ChartIndicatorCurve } from '../ChartIndicatorCurve';
import { CustomBox } from '../CustomBox';
import { StartupPageContext } from '@/presentation/view/StartupPage/context/StartupPageContext';
import { compareLastArrayItems } from '@/presentation/utilities';



const EconomicCards = () => {
	const { loading, error, infoFinancieraLastYear } = useContext(StartupPageContext);

	const size = infoFinancieraLastYear.length;
	let mrr: number = 0;
	let arr: number = 0;
	let grosProfit = 0;

	if (size > 0) {
		mrr = infoFinancieraLastYear[size - 1].mrr;
		arr = infoFinancieraLastYear.reduce((accumulator, data) => accumulator + data.mrr, 0);


		// grosProfit = ingresos - costos
		grosProfit = infoFinancieraLastYear[size - 1].ingresos - infoFinancieraLastYear[size - 1].costos;
	}

	const mrrSubio = compareLastArrayItems(infoFinancieraLastYear.map(e => e.mercado_potencial));



	return (
		<Grid
			alignItems="center"
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: "start",
				width: '100%'
			}}
		>
			<CustomCard
				loading={loading}
				title='ARR'
				subtitle='Annual recurring revenue'
				quantity={arr}
				subio={mrrSubio}
			/>
			<CustomCard
				loading={loading}

				title='MRR'
				subtitle='Monthly recurring revenue'
				quantity={mrr}
				subio={mrrSubio}
			/>
			<CustomCard
				loading={loading}
				title='Gross Profit'
				quantity={grosProfit}
				subio={grosProfit > 0}
			/>
		</Grid>
	);
};

export default EconomicCards;

interface CustomCardProps {
	loading?: boolean
	title: string,
	subtitle?: string,
	quantity: number,
	subio: boolean,
}

const CustomCard: FC<CustomCardProps> = ({ loading = false, title, subtitle, quantity, subio }) => {
	return (
		<CustomBox
			sxProps={{
				mr: '10px',
				mb: { xs: '10px' }
			}}>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="flex-start"
				spacing={2}
				width='300px'
				height={100}
			>
				<Stack
					direction="column"
					justifyContent="flex-start"
					alignItems="flex-start"
					spacing={0}
				>
					<Typography
						variant='body1'
						fontSize={18}
					>
						{title}
					</Typography>
					<Typography
						variant='body1'
					>
						{subtitle}
					</Typography>
				</Stack>

				{
					loading ?
						<Skeleton animation="wave" height={30} width={200} />
						:
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							spacing={2}
							width='100%'
						>
							$
							<Typography variant='h2' fontSize={25}>
								{quantity}
							</Typography>
							USD
							<ChartIndicatorCurve
								width={60}
								height={40}
								isGreen={subio}
							/>
						</Stack>
				}

			</Stack>
		</CustomBox>
	)
}

