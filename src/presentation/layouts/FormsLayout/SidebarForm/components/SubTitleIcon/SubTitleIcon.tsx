import { Stack, Typography } from '@mui/material';
import React from 'react';

export interface SubTitleIconProps {
	subtitle: string;
	img?: string;
	paddingLeft?: string;
}

const SubTitleIcon: React.FC<SubTitleIconProps> = ({
	subtitle,
	img = '/icons/Subtract.png',
	paddingLeft,
}) => {

	return (
	
			<Stack
				sx={{ marginLeft: (img === '') ? '45px' : '15px', paddingLeft: { paddingLeft } }}
				direction={'row'}
				alignItems={'center'}>

				{(img !== '')
					&& <img src={img}
						style={{
							padding: '10px',
							borderRadius: '10px',
							width: '30px',
							height: '35px',
						}} />

				}
				<Typography
					fontSize={20}
					fontWeight={600} >
					{subtitle}
				</Typography>

			</Stack>
	);
};

export default SubTitleIcon;
