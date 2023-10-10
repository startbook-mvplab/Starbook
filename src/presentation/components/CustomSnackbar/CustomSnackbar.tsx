// import { AppStore } from '@/redux/store';
import { Alert, Snackbar } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { closeSnackbar, SnackbarState } from '@/redux/states/snackbar';
import { AppStore } from '@/redux/store';


const CustomSnackbar: React.FC = () => {

	const snackbarState: SnackbarState = useSelector((store: AppStore) => store.snackbar);

	const dispatch = useDispatch();

	const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		dispatch(closeSnackbar());
	};

	return (
		<Snackbar
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={snackbarState.open}
			onClose={handleClose}
			autoHideDuration={2000}
		>
			<Alert
				onClose={handleClose}
				severity={snackbarState.alertColor}
				sx={{ width: '100%' }}
			>
				{snackbarState.message}
			</Alert>
		</Snackbar>
	)


};

export default CustomSnackbar;
