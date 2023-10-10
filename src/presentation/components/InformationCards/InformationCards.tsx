
import { Stack, Typography } from '@mui/material';
import React, { FC } from 'react';
import { CustomBox } from '../CustomBox';
import { ReactNode } from 'react';
import { CustomIcon } from '../CustomIcon';
import { RolEnum } from '@/presentation/utilities';


export interface InformationCardsProps {
	rol?: RolEnum,

}

const InformationCards: React.FC<InformationCardsProps> = ({ rol }) => {
	return (
		<Stack
			direction="row"
			justifyContent="flex-start"
			alignItems="center"
			spacing={2}
			width='100%'
			pt={3}
		>

			<CustomCard
				title='Modelo de negocio'
				width={360}
			>
				<Typography variant='body1'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum dapibus sodales. Cras id porta risus.
					Praesent pellentesque nulla id justo pharetra, non aliquet urna ultricies.
				</Typography>
			</CustomCard>
			<CustomCard
				title='Oportunidad'
			// width={360}
			>
				<Typography variant='body1'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum dapibus sodales. Cras id porta risus.
				</Typography>
			</CustomCard>

			<CustomCard
				title='Mercado potencial'
			// width={360}
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
					<CustomIcon
						iconName='green_chart'
						width={100}
						height={50}
					/>
				</Stack>


			</CustomCard>
		</Stack>
	)
};

export default InformationCards;



interface CustomCardProps {
	title: string,
	children: ReactNode,
	width?: number,
}


const CustomCard: FC<CustomCardProps> = ({ title, children, width = 300 }) => {
	return (
		<CustomBox>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="flex-start"
				spacing={2}
				// width={width}
				height={120}
			>
				<Typography variant='body1'>
					{title}
				</Typography>

				{children}
			</Stack>
		</CustomBox>
	)
}

