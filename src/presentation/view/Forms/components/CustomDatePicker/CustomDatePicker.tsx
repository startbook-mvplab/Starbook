import { Box } from '@mui/material';
import React from 'react';
import DatePicker from 'react-datepicker'

export interface CustomDatePickerProps {
	selected: Date | null | undefined
	endDate?: Date | null | undefined
	starDate?: Date | null | undefined
	showTimeSelect: boolean | undefined
	id?: string | undefined
	dateFormat: string | string[] | undefined
	onChange?: (date: Date | null, event: React.SyntheticEvent<any, Event> | undefined) => void;
	onSelect?: (date: Date, event: React.SyntheticEvent<any, Event> | undefined) => void;
	customInput?: React.ReactNode
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = (
	{ endDate,
		starDate,
		onChange,
		onSelect,
		customInput,
		id,
		dateFormat,
		showTimeSelect,
		selected
	}) => {

	return (
		<Box>
			{/* <DatePicker
				selectsStart
				id={id!}
				endDate={endDate}
				selected={selected}
				startDate={starDate}
				showTimeSelect={showTimeSelect}
				dateFormat={dateFormat}
				customInput={customInput}
				onChange={onChange!}
				onSelect={onSelect!}
			/> */}
		</Box>
	)

};

export default CustomDatePicker;
