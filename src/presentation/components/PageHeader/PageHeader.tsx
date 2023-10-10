import { Grid, Typography, Button } from '@mui/material';
import React from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';

export interface PageHeaderProps {
	title: string,
	update: () => void,
	description?: string,
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, update, description }) => {

	return (
		<Grid container justifyContent="space-between" alignItems="center">
			<Grid item>
				<Typography variant="h3" component="h3" gutterBottom>
					{title}
				</Typography>
				<Typography variant="subtitle2">
					{description}
				</Typography>
			</Grid>
			<Grid item>
				<Button
					sx={{ mt: { xs: 2, md: 0 } }}
					variant="contained"
					startIcon={<RefreshIcon fontSize="small" />}
					onClick={update}
				>
					Actualizar
				</Button>
			</Grid>
		</Grid>
	);
};

export default PageHeader;
