import { CssSelect } from '@/presentation/styles/styles';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';

export interface MultiSelectorProps {
	value?:string|string[],
	onChange?: ((event: SelectChangeEvent<any>, child: React.ReactNode) => void) | undefined
     list?:string[],
}

const MultiSelector: React.FC<MultiSelectorProps> = ({
	value,onChange,list,
}) => {

	return <div>
		<FormControl sx={{ m: 1, width: 300 }}>
			<InputLabel id="Cargo">Cargo</InputLabel>
			<CssSelect
				labelId="Cargo"
				id="Cargo"
				multiple
				value={Array.isArray(value)?value:[]}
				onChange={onChange}
				input={<OutlinedInput label="Cargo" />}
				// MenuProps={MenuProps}
			>
				{list!.map((list) => (
					<MenuItem
						key={list}
						value={list}
						// style={getStyles(name, personName, theme)}
					>
						{list}
					</MenuItem>
				))}
			</CssSelect>
		</FormControl>
	</div>;
};

export default MultiSelector;
