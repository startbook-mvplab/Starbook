import { Box, SxProps } from '@mui/material';
import React from 'react';
import { ReactNode } from 'react';

export interface CustomBoxProps {
	children: ReactNode,
	sxProps?: SxProps,
}

const CustomBox: React.FC<CustomBoxProps> = ({ children, sxProps }) => {
	return (
		<Box sx={{ position: 'relative', }}>
			<Box
				sx={{
					position: 'absolute',
					top: 8,
					left: -2,
					zIndex: 2,
					borderRadius: '3px',
					height: '37px',
					width: '5px',
					bgcolor: (theme) => theme.colors.primary.dark,
				}}
			/>
			<Box
				sx={{
					// position: 'absolute',
					top: 0,
					zIndex: 1,
					borderRadius: '13px',
					border: '1px solid',
					borderColor: (theme) => theme.colors.primary.dark,
					pt: '15px',
					px: '20px',
					pb: '30px',
					...sxProps,
				}}
			>
				{children}
			</Box>
		</Box>
	);
};

export default CustomBox;
