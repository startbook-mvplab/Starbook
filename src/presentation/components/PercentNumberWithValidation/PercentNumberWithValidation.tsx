import { Typography } from '@mui/material'
import React, { FC } from 'react'

interface PercentNumberWithValidationProps {
    percent: number,
    fontSize?: number,
    variant?: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | undefined
}

const PercentNumberWithValidation: FC<PercentNumberWithValidationProps> = ({ percent, fontSize = 12, variant = undefined }) => {

    let color: string = "white";

    if (percent === 0) {
        color = "white";
    }
    else if (percent > 0) {
        color = "#02FBA8"; ///"#43D01A";
    }
    else {
        color = "#DB2E51";
    }

    return (
        <Typography
            variant={variant}
            fontSize={fontSize}
            sx={{ color: color }}
        >
            {percent > 0 && '+'}{percent}%
        </Typography>
    )
}

export default PercentNumberWithValidation