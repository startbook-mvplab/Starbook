
import { CustomIcon, InformationCard } from '@/presentation/components';
import { Box, Grid, Stack, Typography } from '@mui/material';


export interface InformationsCardInversionistaProps {

}

const InformationsCardInversionista: React.FC<InformationsCardInversionistaProps> = () => {
	return (
		<Grid
			alignItems="center"
			pt={3}
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: "flex-start",
				width: '100%',
			}}
		>

			<InformationCard
				title='Tesis de inversión'
				titleBold
				width={{
					mobile: 280,
					desktop: 400,
				}}
				height={{
					mobile: 150,
					desktop: 120,
				}}
			>
				<Typography variant='body1'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum dapibus sodales. Cras id porta risus.
					Praesent pellentesque nulla id justo pharetra, non aliquet urna ultricies.
				</Typography>
			</InformationCard>
			<Box sx={{
				width: '15px',
				display: { xs: 'none', sm: 'flex' }
			}}>

			</Box>


			<InformationCard
				title='Ticket Promedio'
				titleBold
				width={{
					mobile: 280,
					desktop: 400,
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
					<Typography variant='h1'>
						630.000
					</Typography>
					<Stack
						direction="column"
						justifyContent="center"
						alignItems="center"
						spacing={2}
					>
						<CustomIcon
							iconName='subida1'
							width={15}
							height={10}
						/>
						USD
					</Stack>
					<Box
						sx={{ display: { xs: 'none', sm: 'flex' } }}
					>
						<CustomIcon
							iconName='green_chart'
							width={100}
							height={50}
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

export default InformationsCardInversionista;






