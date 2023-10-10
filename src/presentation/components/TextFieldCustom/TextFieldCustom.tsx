import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import React, { ReactNode } from 'react';



export interface TextFieldCustomProps {
	label: string
	id: string
	autoComplete: string
	leftIcon?: ReactNode
	register: any
	// errors: any
	validate: any
	disable?:boolean
	error: any
	helperText: any
	isPassword?: boolean
	color?: string,
	placeholder?:string,
	type?:React.HTMLInputTypeAttribute | undefined
	onChange?:React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
}

const TextFieldCustom: React.FC<TextFieldCustomProps> =
	({onChange, 
		type='text',
		color, 
		label, 
		id, 
		autoComplete, 
		leftIcon, 
		register, 
		validate, 
		error, 
		helperText, 
		isPassword = false, 
		placeholder,
		disable=false
	}) => {

		// console.log(isPassword);
		return <Box>

			<Typography
				fontSize={15}
				// color="black"
				align='left'
				fontWeight='bold'>
				{`${label}*`}
			</Typography>

			<TextField
			   disabled={disable}
			    onChange={onChange}
				type={isPassword ? 'password' :type}
				hiddenLabel
				variant="outlined"
				placeholder={placeholder}
				// defaultValue={label}
				margin="normal"
				size='small'

				sx={{
					margin: '5px 0px',

					// '& label': { paddingLeft: (theme) => theme.spacing(2) },
					// '& input': { paddingLeft: (theme) => theme.spacing(3.5)},
					'& fieldset': {
						paddingLeft: (theme) => theme.spacing(2.5),
						borderRadius: '6px',
						boxShadow: '6px 10px 30px -10px #888888',
						//   bgcolor: '#E5E6E7',
						borderColor: 'white',
						color: (theme) => theme.colors.alpha.white[100],

						// bgcolor: 'red'

					},
					'& .MuiInputBase-root': {
						color: (theme) => theme.colors.alpha.white[100],

						backgroundColor: '#black',
						height: '40px'
					},
				}}
				// sx={{
				// 	'& .MuiInputBase-root': {
				// 		paddingBottom: '10px',
				// 		paddingLeft: '10px',
				// 		// backgroundColor: 'white',
				// 		backgroundColor: 'transparent',   //Este es una propuesta. Puede regresarse al color blanco
				// 		height: '40px'
				// 	},
				// }}
				fullWidth
				id={id}
				// label={label}
				name={id}
				autoComplete={autoComplete}
				autoFocus

				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							{leftIcon}
							{/* <GoogleIcon /> */}
						</InputAdornment>
					),
					// disableUnderline: true,	

				}}
				{...register}
				error={error}
				helperText={helperText}
				{...register(`${id}`, validate)}
			//   error={!!errors?.name}
			//   helperText={errors?.name ? errors.name.message : null}
			/>
		</Box>

	};

export default TextFieldCustom;

