import { Box, Typography,  useTheme } from '@mui/material';
import React from 'react';
export interface HeaderDashboardProps { }

const HeaderDashboard: React.FC<HeaderDashboardProps> = () => {
	const theme = useTheme();
	const colors = theme.colors;

	return (
		<Box mb="30px">
			<Typography
				variant="h2"
				color={colors.primary}
				fontWeight="bold"
				sx={{ m: "0 0 5px 0" }}
			>
			Dashboard
			</Typography>
			<Typography variant="h5" color={colors.primary}>
				Bienvenido a tu Dashboard
			</Typography>
		</Box>
	);
};

export default HeaderDashboard;
