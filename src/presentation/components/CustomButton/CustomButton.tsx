import { Button, CircularProgress, styled, SxProps, Theme, Typography } from '@mui/material';
import { MouseEventHandler, ReactNode } from 'react';


export interface CustomButtonProps {
	type?: "button" | "submit" | "reset" | undefined
	color?: string,
	borderColor?: string[] | undefined,
	colorHover?: string,
	colorActive?: string,
	colorBorderHover?: string,
	colorBorderActive?: string,
	colorFocus?: string,
	gradient?: boolean,
	fullWidth: boolean,

	text: string,
	textColor?: any,
	textColorHover?: any,
	textAlign?: any
	textTransform?: any,
	textVariant?: "inherit" | "button" | "overline" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | undefined

	fontSize?: string | number,
	fontSizeMovil?: string | number,
	fontWeight?: string | number,

	variant?: "text" | "outlined" | "contained" | undefined,

	size?: "small" | "medium" | "large" | undefined,
	height?: number,
	width?: number,
	padding?: string,

	startIcon?: ReactNode,
	endIcon?: ReactNode,
	loading?: boolean,

	disabled?: boolean,
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined,

	sx?: SxProps<Theme> | undefined

}

const CustomButton: React.FC<CustomButtonProps> = (
	{
		type,
		text,
		textAlign = 'start',
		textVariant,
		textColor,
		textColorHover = 'white',
		fontSize = 14,
		fontSizeMovil = 12,
		size = 'small',
		variant = "contained",
		fullWidth,
		height,
		width = 100,
		padding = '4px 30px',

		// color = colorsInfostore.primary,
		// borderColor=colorsInfostore.primary,
		// colorActive = colorsInfostore.primary,
		// colorFocus = colorsInfostore.primary,
		// colorHover = colorsInfostore.primary,
		// colorBorderActive = colorsInfostore.primary,
		// colorBorderHover = colorsInfostore.primary,
		gradient = false,

		startIcon,
		endIcon,
		loading,

		disabled,
		onClick,
		sx,
	}) => {


	const cirularProgress = <CircularProgress
		thickness={6}
		size='20px'
		sx={{ color: 'white' }}
	/>;



	const MyButton = styled(Button)({
		// justifyContent:'center',
		// alignContent:'center',
		// backgroundColor: color,
		// borderColor: borderColor,
		'&:hover': {
			color: textColorHover,
			// backgroundColor: colorHover,
			// borderColor: colorBorderHover,
			boxShadow: 'none',
		},
		'&:active': {
			boxShadow: 'none',
			// backgroundColor: colorActive,
			// borderColor: colorBorderActive,
		},
		'&:focus': {
			//   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',

		},
	});


	return (

		<MyButton
			type={type}
			fullWidth={fullWidth}
			disabled={disabled || loading}
			variant={variant}
			size={size}
			sx={{
				":disabled": {
					color: (theme) => theme.colors?.alpha.black[100],
					backgroundColor: '#C0C2C3'
				},

				color: (theme) => theme.colors?.alpha.black[100],

				// width: width,
				// height: height,
				padding: padding,
				// background: gradient ? 'linear-gradient(90deg, rgba(45,146,159,1) 0%, rgba(45,146,159,1) 35%, rgba(67,203,161,1) 100%)' : variant === 'contained' ? color : 'transparent',
				textTransform: 'none',
				...sx,
			}}
			startIcon={startIcon && loading ? cirularProgress : startIcon}
			endIcon={endIcon && loading ? cirularProgress : endIcon}
			onClick={onClick}
		>

			{
				loading && (!startIcon && !endIcon)
					?
					cirularProgress
					:

					<Typography

						textAlign={textAlign}
						textTransform='initial'
						variant={textVariant}
						sx={{
							color: (theme) => theme.colors?.alpha.black[100],
							fontSize: { xs: fontSizeMovil, sm: fontSize },
							fontWeight: '700'
						}}
					>{text}</Typography>
			}
		</MyButton>)
};

export default CustomButton;