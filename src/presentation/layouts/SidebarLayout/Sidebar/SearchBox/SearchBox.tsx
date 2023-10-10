import { Box, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export interface SearchBoxInterface { }

const SearchBox: React.FC<SearchBoxInterface> = () => {
	return (
		<Box px='10px' pt='10px'>
			<TextField
			
				// onChange={}
				type=''
				hiddenLabel
				variant="outlined"
				placeholder='Buscar'
				// defaultValue={label}
				margin="normal"
				size='small'

				sx={{
					borderColor: (theme) => theme.colors.primary,
					borderRadius: '32px',
					margin: '5px 0px',

					// '& label': { paddingLeft: (theme) => theme.spacing(2) },
					// '& input': { paddingLeft: (theme) => theme.spacing(3.5)},
					'& fieldset': {
						paddingLeft: (theme) => theme.spacing(2.5),
						borderRadius: '32px',
						// border:'1px solid ',
						//   bgcolor: '#E5E6E7',
						borderColor: (theme) => theme.colors.primary,
						// bgcolor: 'red'

					},
					'& .MuiInputBase-root': {
						color: (theme) => theme.colors.alpha.white[100],
						borderColor: (theme) => theme.colors.primary,
						borderRadius: '32px',
						backgroundColor: 'black',
						height: '40px'
					},
					notchedOutline: {
						borderWidth: "2px",
						borderColor: "yellow !important"
					}
					// '& label.Mui - focused': {
					// 	color: 'white'
					// },
					// '& .MuiOutlinedInput-root': {
					// 	'&.Mui - focused fieldset': {
					// 		borderColor: 'white'
					// 	}
					// }
				}}
				fullWidth
				id='search'
				// label={label}
				name='seacrk_box'
				// autoComplete={autoComplete}
				autoFocus

				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon
								sx={{
									color: (theme) => theme.colors.primary.dark
								}}
							/>
						</InputAdornment>
					),
					// disableUnderline: true,	

				}}
			/>
		</Box>
	);
};

export default SearchBox;
