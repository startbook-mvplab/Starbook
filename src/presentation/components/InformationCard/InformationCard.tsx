import { Skeleton, Stack, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { CustomBox } from '../CustomBox';

interface InformationCardProps {
	loading?: boolean,
	title: string,
	titleBold?: boolean,
	children: ReactNode,
	width?: {
		mobile: number,
		desktop: number
	},
	height?: {
		mobile: number,
		desktop: number
	},
}


const InformationCard: FC<InformationCardProps> =
	({ title, titleBold = false, children,
		height = { mobile: 120, desktop: 120 },
		width = { mobile: 300, desktop: 340 },
		loading = false,
	}) => {
		return (
			<CustomBox
				sxProps={{
					mb: { xs: '10px' }
				}}
			>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="flex-start"
					spacing={2}
					sx={{
						width: {
							xs: width.mobile,
							sm: width.desktop,
						},
						height: {
							xs: height.mobile,
							sm: height.desktop,
						},

					}}
				>
					<Typography
						variant='body1'
						fontSize={18}
						fontWeight={titleBold ? 700 : undefined}>
						{title}
					</Typography>

					{
						loading ?
							<Skeleton animation="wave" height={30} width={150} />
							:
							children
					}
				</Stack>
			</CustomBox>
		)
	}


export default InformationCard;
