import { FormsStartupContext } from '@/presentation/contexts/FormsStartupContext/FormsStartupContext';
import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';

export interface SubTitleButtonProps {
	subtitle: string;
	img?: string;
	imgSufijo?: string;
	// active?:string;
	// activateState?:React.Dispatch<React.SetStateAction<string>>,
}

const SubTitleButton: React.FC<SubTitleButtonProps> = ({
	subtitle,
	img = '/icons/Subtract.png',
	imgSufijo = '/icons/shape.png',
	// activateState,
}) => {

	const {setActive,active}=useContext(FormsStartupContext);
  
	return (
		<a href={`#${subtitle}`}  style={{textDecoration:"none"}} >

			<Button
			 onClick={()=>setActive(subtitle)}	    
				sx={{
					bgcolor:(active===subtitle)?'rgba(229,227,13,0.1)':'',
					 marginLeft: (img === '') ? '30px' : '0px' 
					}}
				variant='text'
			>
				<Stack
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

					{(imgSufijo !== '')
						&& <img src={imgSufijo}
							style={{
								padding: '10px',
								borderRadius: '10px',
								width: '35px',
								height: '35px',
							}} />
					}


				</Stack>
			</Button>
		</a>
	);
};

export default SubTitleButton;
