import SearchIcon from '@mui/icons-material/Search';
import { Box, Stack, TextField, useMediaQuery } from '@mui/material';
import { useContext, useState } from 'react';
import { BuscadorEmpresasContext } from '../../context/BuscadorEmpresasContext';


export interface SearchBarInterface { }

const textColor = '#898989';

const SearchBar: React.FC<SearchBarInterface> = () => {

    const { searchCompanies, loading, setSearchQuery } = useContext(BuscadorEmpresasContext);

    // const isMovil = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            <TextField
                fullWidth
                id="standard-search"
                // label={searchBarLabel}
                // placeholder={searchBarLabel}
                type="search"
				variant="outlined"
                // variant="outlined"

                InputProps={{
                    startAdornment: (
                        < SearchIcon
                            sx={{
                                fontSize: { xs: '25px', sm: '32px' },
                                color: { textColor },
                                paddingRight: '10px'
                            }}
                        />
                    ),
                }}
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

            onChange={(event) => { setSearchQuery(event.target.value) }}

            onKeyPress={(ev) => {
            	console.log(`Pressed keyCode ${ev.key}`);
            	if (ev.key === 'Enter') {
            		searchCompanies();
            		ev.preventDefault();
            	}
            }}
            />

            {/* <Paper
				variant="outlined"
				component="form"
				sx={{
					maxHeight: '45px',
					p: '0px 4px',
					pl: {xs: '10px',  sm:'15px'},
					display: 'flex',
					alignItems: 'center',
					width: "100%",
					height: '50px',
					// borderColor: colorsInfostore.primary,
					borderWidth: '0px',
					backgroundColor: colorsInfostore.content,
					borderRadius: '6px',
				}}
			>
				< SearchIcon sx={{ fontSize: {xs: '20px',  sm:'25px'}, color: { textColor } }} />
				< InputBase
					placeholder={searchBarLabel} //"Escribe el nit de la empresa"
					inputProps={{ 'aria-label': 'search google maps' }}
					sx={{
						ml: {xs: '6px',  sm:'15px'},
						flex: 1,
						fontSize: {xs: '13px',  sm:'14px'},
						color: { textColor },
						fontWeight: '600'
					}}
				/>
			</Paper> */}


            {/* <CustomButton

				loading={loading}
				height={isMovil ? 38 : 45}
				width={isMovil ? 30 : 120}
				fontSize={isMovil ? '10px' : '14px'}
				// padding='30px 20px'
				size='small'

				text={isMovil ? '' : !loading ? 'Buscar' : 'Buscando...'}
				endIcon={<ArrowForwardIcon />}
				onClick={async () => {
					// setLoading(true);
					// await new Promise(r => setTimeout(r, 1000));
					// setLoading(false);
					searchCompanies();
				}}
				sx={{
					display: { xs: 'none', sm: 'flex' }
				}}
			/> */}

        </Stack >

    );
}

export default SearchBar;