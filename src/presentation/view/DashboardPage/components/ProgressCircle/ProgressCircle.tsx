import { Box, useTheme } from '@mui/material';
import React from 'react';
export interface ProgressCircleProps {
	progress?: number,
	size?: string
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ progress = 0.75, size = "40" }) => {

	const theme = useTheme();
	const colors = theme.colors;
	const angle = progress * 360;


	return (
		<Box
			sx={{
				background: `radial-gradient(${colors.primary.lighter} 55%, transparent 56%),
				conic-gradient(transparent 0deg ${angle}deg, ${colors.secondary.light} ${angle}deg 360deg),
				${colors.primary.dark}`,
				borderRadius: "50%",
				width: `${size}px`,
				height: `${size}px`,
			}}
		/>
	);
};

export default ProgressCircle;
