import React from 'react';


export interface CustomIconProps {
	iconName: string,
	width?: number,
	height?: number,
}

const CustomIcon: React.FC<CustomIconProps> = ({ iconName, width = 18, height = 18 }) => {
	return <img
		src={`/icons/${iconName}.png`}
		style={{
			width: `${width}px`,
			height: `${height}px`,
		}}
	>
	</img>
};

export default CustomIcon;
