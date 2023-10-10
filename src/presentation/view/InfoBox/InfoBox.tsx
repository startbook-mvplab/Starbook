import { Box, useTheme } from '@mui/material';
import React from 'react';
import { StatBox } from '../DashboardPage/components/StatBox';
import { ReactNode } from 'react';

export interface InfoBoxProps {
	title: string
	quantity: number,
	icon: ReactNode,
}

const InfoBox: React.FC<InfoBoxProps> = ({title, quantity, icon }) => {
	const theme = useTheme();
	const colors = theme.colors;

	return (
		<Box
			gridColumn="span 3"
			bgcolor={colors.primary.lighter}
			borderRadius='10px'
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<StatBox
				title={quantity.toString()}
				subtitle={title}
				progress={0.30}
				increase="+5%"
				icon={icon}
			/>
		</Box>
	);
};

export default InfoBox;
