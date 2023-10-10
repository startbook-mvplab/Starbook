import { Box, Typography, useTheme } from '@mui/material';
import React, { ReactNode } from 'react';
import { ProgressCircle } from '../ProgressCircle';


export interface StatBoxProps {
	title: string,
	subtitle: string,
	icon: ReactNode,
	progress: number,
	increase: string,
}

const StatBox: React.FC<StatBoxProps> = ({ title, subtitle, icon, progress, increase }) => {
	const theme = useTheme();
	const colors = theme.colors;

	return (
		<Box width="100%" m="0 30px">
			<Box display="flex" justifyContent="space-between">
				<Box>
					{icon}
					<Typography
						variant="h4"
						fontWeight="bold"
						sx={{ color: colors.primary.dark }}
					>
						{title}
					</Typography>
				</Box>
				<Box>
					<ProgressCircle progress={progress} />
				</Box>
			</Box>
			<Box display="flex" justifyContent="space-between" mt="2px">
				<Typography variant="h5" sx={{ color: colors.primary.dark }}>
					{subtitle}
				</Typography>
				<Typography
					variant="h5"
					fontStyle="italic"
					sx={{ color: colors.primary.dark }}
				>
					{increase}
				</Typography>
			</Box>
		</Box>
	);
};

export default StatBox;
