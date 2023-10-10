

import { FormControlLabel, Select, styled, TextField } from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker/DatePicker";


export const CssTextField = styled(TextField)({
	'& label.Mui-focused': {
		color: 'yellow',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: 'yellow',
	},

	'& .MuiFormLabel-root.MuiInputLabel-root.Mui-disabled': {
		color: 'white',
	},
	

	'& .MuiSelect-select': {
		'MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled': {
			opacity: 1,
			WebkitTextFillColor: 'rgba(255,255,255,1)'
		}
	},
	"& .MuiInputBase-input.Mui-disabled": {
		WebkitTextFillColor: 'rgba(255,255,255,1)'
	},

	'& .MuiSvgIcon-root': {
		'& .MuiSelect-icon:disabled': {
			color: 'transparent'
		},
		color: 'rgba(255,255,255,1)'
	},

	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: 'white',
		},
		'&:hover fieldset': {
			borderColor: 'yellow',
		},
		'&.Mui-focused fieldset': {
			borderColor: 'yellow',
		},
		//   '& .MuiOutlinedInput-root': {
		// 	 color:'white',
		// 	},
	},
});



export const CssSelect = styled(Select)({
	'& label.Mui-focused': {
		color: 'yellow',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: 'yellow',
	},

	'& .MuiFormLabel-root.MuiInputLabel-root.Mui-disabled': {
		color: 'white',
	},
	

	'& .MuiSelect-select': {
		'MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled': {
			opacity: 1,
			WebkitTextFillColor: 'rgba(255,255,255,1)'
		}
	},


	'& .MuiSvgIcon-root': {
		'& .MuiSelect-icon:disabled': {
			color: 'transparent'
		},
		color: 'rgba(255,255,255,1)'
	},

	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: 'white',
		},
		'&:hover fieldset': {
			borderColor: 'yellow',
		},
		'&.Mui-focused fieldset': {
			borderColor: 'yellow',
		},
		//   '& .MuiOutlinedInput-root': {
		// 	 color:'white',
		// 	},
	},
});


// export const CssDatePicker = styled(DatePicker)({
// 	'& label.Mui-focused': {
// 		color: 'yellow',
// 	},
// 	'& .MuiInput-underline:after': {
// 		borderBottomColor: 'yellow',
// 	},

// 	'& .label.Mui-disabled': {
// 		color: 'white',
// 	},
// 	'& .MuiOutlinedInput:disabled': {
// 		opacity: 1,
// 		WebkitTextFillColor: 'rgba(255,255,255,1)'
// 	},

// 	'& .MuiSvgIcon-root': {
// 		color: 'rgba(255,255,255,1)'
// 	},

// 	'& .MuiPickersModal-dialog': {
// 		backgroundColor: 'red'
// 	},


// 	'& .MuiOutlinedInput-root': {
// 		'& fieldset': {
// 			borderColor: 'white',
// 		},
// 		'&:hover fieldset': {
// 			borderColor: 'yellow',
// 		},
// 		'&.Mui-focused fieldset': {
// 			borderColor: 'yellow',
// 		},

// 	},
// });

export const CssFormControlLabel = styled(FormControlLabel)({

	'& .MuiFormControlLabel-label.Mui-disabled': {
		color: 'rgba(255,255,255,1)'
	},
})


