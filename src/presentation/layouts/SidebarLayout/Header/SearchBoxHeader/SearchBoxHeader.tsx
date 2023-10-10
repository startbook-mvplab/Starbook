import { Box, InputAdornment, List, ListItem, ListItemButton, Paper, Skeleton, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
import Autocomplete, { AutocompleteChangeReason } from '@mui/material/Autocomplete';
import { CircularProgress } from '@mui/material';
import { IStartup } from '@/data/models';
import { BuscadorEmpresasContext } from '@/presentation/view/BuscadorEmpresasPage/context/BuscadorEmpresasContext';

export interface SearchBoxHeaderProps { }

const SearchBoxHeader2: React.FC<SearchBoxHeaderProps> = () => {
	return (
		<Box px='20px' pt='10px' width='40%'>
			<TextField
				// onChange={}
				type=''
				hiddenLabel
				variant="outlined"
				placeholder='Información de la Startup'
				// defaultValue={label}
				margin="normal"
				size='small'

				sx={{
					borderColor: (theme) => theme.colors.primary,
					borderRadius: '13px',
					margin: '5px 0px',

					// '& label': { paddingLeft: (theme) => theme.spacing(2) },
					// '& input': { paddingLeft: (theme) => theme.spacing(3.5)},
					'& fieldset': {
						paddingLeft: (theme) => theme.spacing(2.5),
						borderRadius: '13px',
						// border:'1px solid ',
						//   bgcolor: '#E5E6E7',
						borderColor: (theme) => theme.colors.primary,
						// bgcolor: 'red'

					},
					'& .MuiInputBase-root': {
						color: (theme) => theme.colors.alpha.white[100],
						borderColor: (theme) => theme.colors.primary,
						borderRadius: '13px',
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

// export default SearchBoxHeader;


// const CustomPaperComponent = (props: any) => (
// 	<Paper elevation={4} sx={{ backgroundColor: 'black', ...props.style }}>
// 		{props.children}
// 	</Paper>
// );


const CustomPaperComponent = (props: any) => (
	<Paper elevation={4} sx={{ backgroundColor: 'black', ...props.style }}>
		{props.children}
	</Paper>
);



const SearchBoxHeader: React.FC = () => {
	const [open, setOpen] = useState(false);
	const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
	const {
		companies,
		searchCompanies,
		setSearchQuery,
		loading,
		resetSearch,
		handleCompanySelected,
	} = useContext(BuscadorEmpresasContext);



	let queryName = '';

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

		const query = event.target.value;
		if (query.length >= 2) {
			setOpen(true);

			if (timeoutId) {
				clearTimeout(timeoutId);
			}
			const newTimeoutId = setTimeout(() => {
				searchCompanies(query);
				queryName = query;
				// alert(query);
			}, 300);
			setTimeoutId(newTimeoutId);
		} else {
			setOpen(false);
			// setOptions([]);
			resetSearch();
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		}
	};

	const onCompanyChange = (
		event: React.SyntheticEvent<Element, Event>,
		value: string | IStartup | null,
		reason: AutocompleteChangeReason
	) => {
		if (reason === "clear") {
			resetSearch();
		}
		else {

			if (typeof (value) !== 'string') {
				console.log('=======================')
				console.log(value);
				console.log('=======================')
				handleCompanySelected(value!);
			}

		}
	};

	const handleOpen = (event: React.SyntheticEvent<Element, Event>) => {
		setOpen(true);
		if (queryName.length === 0) {
			resetSearch();
		}

	}

	return (
		<Box px='20px' pt='10px' width='40%'>
			<Autocomplete
				id="search-bar"
				open={open}
				freeSolo
				onOpen={handleOpen}
				onClose={() => setOpen(false)}
				onChange={onCompanyChange}
				options={companies}
				loading={loading}
				// getOptionLabel={(option) => option.label}
				getOptionLabel={(company) => {
					// Value selected with enter, right from the input
					if (typeof company === 'string') {
						return company;
					}
					// Add "xxx" option created dynamically
					if (companies) {
						return company.startupName;
					}
					// Regular option
					return company.startupName;
				}}
				noOptionsText="No hay startups que coincidan con ese nombre"
				loadingText="Cargando..."
				PaperComponent={CustomPaperComponent}
				// ListboxComponent={CustomListboxComponent}

				renderInput={(params) => (
					<TextField
						{...params}
						placeholder='Información de la Startup'

						type=''
						hiddenLabel
						variant="outlined"
						onChange={handleInputChange}

						InputProps={{
							...params.InputProps,
							startAdornment: (
								<InputAdornment position="start">
									{
										loading ?
											<CircularProgress color="primary" size={20} /> :

											<SearchIcon
												sx={{
													color: (theme) => theme.colors?.primary.dark
												}}
											/>
									}

								</InputAdornment>
							),
							endAdornment: (
								<>
									{params.InputProps.endAdornment}
								</>
							),
						}}

						sx={{
							borderColor: (theme) => theme.colors?.primary,
							borderRadius: '13px',
							margin: '5px 0px',

							// '& label': { paddingLeft: (theme) => theme.spacing(2) },
							// '& input': { paddingLeft: (theme) => theme.spacing(3.5)},
							'& fieldset': {
								paddingLeft: (theme) => theme.spacing(2.5),
								borderRadius: '13px',
								// border:'1px solid ',
								//   bgcolor: '#E5E6E7',
								borderColor: (theme) => theme.colors?.primary,
								// bgcolor: 'red'

							},
							'& .MuiInputBase-root': {
								color: (theme) => theme.colors?.alpha.white[100],
								borderColor: (theme) => theme.colors?.primary,
								borderRadius: '13px',
								backgroundColor: 'black',
								height: '50px'
							},
							notchedOutline: {
								borderWidth: "2px",
								borderColor: "yellow !important"
							}
						}}
					/>
				)}
				renderOption={(props, company) => (



					// loading ?
					// 	<List component="nav"
					// 	>
					// 		{[1, 2, 3, 4, 5, 6].map(e => <Skeleton key={e} animation="wave" width={240} height={30} />)}
					// 	</List>
					// 	:

					<List component="nav" {...props}
					>
						<ListItem key={company._id}
						>
							{company.startupName}
						</ListItem>

					</List>
				)
				}
			/>

		</Box >
	);
};

// export default SearchBar;

export default SearchBoxHeader;
