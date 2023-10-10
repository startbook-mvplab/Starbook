import { InformationCard } from '@/presentation/components';
import { Stack, Typography } from '@mui/material';
import React from 'react';


export interface InformationsCardAceleradoraProps { }

const InformationsCardAceleradora: React.FC<InformationsCardAceleradoraProps> = () => {
	return (
		<Stack
			direction="row"
			justifyContent="flex-start"
			alignItems="center"
			spacing={2}
			width='100%'
			pt={3}
		>

			<InformationCard
				title='Descripción del negocio'
				titleBold
				width={{
					mobile: 300,
					desktop: 400,
				}}
			>
				<Typography variant='body1'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum dapibus sodales. Cras id porta risus.
					Praesent pellentesque nulla id justo pharetra, non aliquet urna ultricies.
				</Typography>
			</InformationCard>

			<InformationCard
				title='Tesis de inversión'
				titleBold
				width={{
					mobile: 300,
					desktop: 400,
				}}
			>
				<Typography variant='body1'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum dapibus sodales. Cras id porta risus.
					Praesent pellentesque nulla id justo pharetra, non aliquet urna ultricies.
				</Typography>
			</InformationCard>


			<InformationCard
				title='Etapas'
				titleBold
				width={{
					mobile: 300,
					desktop: 300,
				}}
			>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="flex-start"
					spacing={0}
				>
					<Typography variant='body1' fontSize={16} fontWeight={400}>
						Pre-sed
					</Typography>

					<Typography variant='body1' fontSize={16} fontWeight={400}>
						Seed
					</Typography>

					<Typography variant='body1' fontSize={16} fontWeight={400}>
						Serie a
					</Typography>
				</Stack>

			</InformationCard>


		</Stack>
	)
};

export default InformationsCardAceleradora;