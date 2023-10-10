import { Avatar, Box, Skeleton, Stack, Typography } from '@mui/material';
import React from 'react';


export interface PersonAvatarInfoProps {
	loading?: boolean,
	name: string,
	avatar: string,
	workPosition: string,
	email: string,
	fontSize?: number,
}

const PersonAvatarInfo: React.FC<PersonAvatarInfoProps> = ({ loading = false, name, avatar, workPosition, email, fontSize = 14 }) => {
	return (
		<Stack
			direction="row"
			justifyContent="flex-start"
			alignItems="center"
			spacing={1}
		>
			<Avatar variant="rounded" alt={avatar!} src={avatar!} />
			{
				loading ?
					<Box >
						<Skeleton animation="wave" width={100} />
						<Skeleton animation="wave" width={40} />
						<Skeleton animation="wave" width={100} />
					</Box>
					:
					<Stack
						direction="column"
						justifyContent="flex-start"
						alignItems="flex-start"
						spacing={0}
					>
						<Typography fontSize={fontSize}>
							{name!}
						</Typography>
						<Typography fontSize={fontSize - 3}>
							{workPosition!}
						</Typography>
						<Typography fontSize={fontSize - 3}>
							{email!}
						</Typography>

					</Stack>
			}

		</Stack>
	)
};

export default PersonAvatarInfo;


