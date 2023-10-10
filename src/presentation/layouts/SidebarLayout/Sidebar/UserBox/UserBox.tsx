import React, { useEffect } from 'react';

import { useRef, useState } from 'react';

import { NavLink } from 'react-router-dom';

import {
	Avatar,
	Box,
	Button,
	Divider,
	Hidden,
	lighten,
	List,
	ListItem,
	ListItemText,
	Popover,
	Typography
} from '@mui/material';


import { styled } from '@mui/material/styles';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import { CustomIcon } from '@/presentation/components';
import { UserRepository } from '@/data/repositories/user.repository ';
import { IUser } from '@/data/models';

const UserBoxButton = styled(Button)(
	({ theme }) => `
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`
);

const MenuUserBox = styled(Box)(
	({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        padding: ${theme.spacing(2)};
`
);

const UserBoxText = styled(Box)(
	({ theme }) => `
  		color: ${theme.colors.alpha.white[100]};
        text-align: left;
        padding-left: ${theme.spacing(1)};
`
);

const UserBoxLabel = styled(Typography)(
	({ theme }) => `
		color: ${theme.colors.alpha.white[100]};
        display: block;`
);

const UserBoxDescription = styled(Typography)(
	({ theme }) => `
		color: ${theme.colors.alpha.white[100]};
`
);

const userRepository = new UserRepository();

function UserBox() {


	const [user, setUser] = useState<IUser>({
		firstName: '',
		lastName: '',
		email: '',
	});

	const [fullName, setFullName] = useState<string>('');

	useEffect(() => {
		let userResp = userRepository.getMyUser();

		setUser({
			...userResp,
			avatar: '/avatar1.png',
		});

		setFullName(`${user.firstName} ${user.lastName}`);

	}, [user.firstName, user.lastName]);

	const ref = useRef<any>(null);
	const [isOpen, setOpen] = useState<boolean>(false);

	const handleOpen = (): void => {
		setOpen(true);
	};

	const handleClose = (): void => {
		setOpen(false);
	};

	return (
		<>
			<UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
				<Avatar variant="rounded" alt={fullName} src={'/no_user.png'} />
				<Hidden mdDown>
					<UserBoxText>

						<Typography fontSize={12}>
							{fullName}
						</Typography>
						<Typography fontSize={12}>
							{user.email}
						</Typography>
					</UserBoxText>
				</Hidden>
				<Hidden smDown>

					<Box pl={3}>
						<CustomIcon
							iconName='config'
							width={16}
							height={16}
						/>
					</Box>
				</Hidden>
			</UserBoxButton>
			<Popover
				anchorEl={ref.current}
				onClose={handleClose}
				open={isOpen}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
			>
				<MenuUserBox sx={{ minWidth: 210 }} display="flex">
					<Avatar variant="rounded" alt={fullName} src={user.avatar} />
					<UserBoxText>
						<UserBoxLabel variant="body1">{fullName}</UserBoxLabel>
						<UserBoxDescription variant="body2">
							{user.email}
						</UserBoxDescription>
					</UserBoxText>
				</MenuUserBox>
				<Divider sx={{ mb: 0 }} />
				{/* <List sx={{ p: 1 }} component="nav">
          <ListItem button to="/management/profile/details" component={NavLink}>
            <AccountBoxTwoToneIcon fontSize="small" />
            <ListItemText primary="Perfil" />
          </ListItem>
          <ListItem
            button
            to="/management/profile/settings"
            component={NavLink}
          >
            <AccountTreeTwoToneIcon fontSize="small" />
            <ListItemText primary="Configuracion de cuenta" />
          </ListItem>
        </List> */}
				<Divider />
				<Box sx={{ m: 1 }}>
					<Button color="primary" fullWidth>
						<LockOpenTwoToneIcon sx={{ mr: 1 }} />
						Cerrar sesión
					</Button>
				</Box>
			</Popover>
		</>
	);
}

export default UserBox;

