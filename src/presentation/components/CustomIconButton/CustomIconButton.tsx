import { IconButton } from '@mui/material';
import React from 'react';
import CustomIcon, { CustomIconProps } from '../CustomIcon/CustomIcon';


export interface CustomIconButtonProps extends CustomIconProps {
	onClick?: () => void,
	href?: string,
}

const CustomIconButton: React.FC<CustomIconButtonProps> = ({
	iconName, height, width, onClick, href }) => {
	return (
		<IconButton
			onClick={onClick}
			sx={{
				minWidth: { width },
				maxWidth: { width },
				minHeight: { height },
				maxHeight: { height }
			}}>
			<a
				href={href}
				target="_blank"
			>
				<CustomIcon
					iconName={iconName}
					height={height}
					width={width}

				/>
			</a>

		</IconButton>
	);
};

export default CustomIconButton;
