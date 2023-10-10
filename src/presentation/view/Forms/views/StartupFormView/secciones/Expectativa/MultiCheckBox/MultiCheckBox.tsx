import { FormsStartupContext } from '@/presentation/contexts/FormsStartupContext/FormsStartupContext';
import { CssFormControlLabel } from '@/presentation/styles/styles';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material';
import React, { useContext, useEffect } from 'react';

export interface MultiCheckBoxProps {

}

const MultiCheckBox: React.FC<MultiCheckBoxProps> = () => {


	const {
		expectativaSelect, handleChangeExpectativas, disable,
	} = useContext(FormsStartupContext);

	// const {
	// 	inversion,
	// 	financiacion,
	// 	aceleracion_de_la_startup,
	// 	networking,
	// 	postulacion_a_retos } = expectativaSelect;


	return (
		<Box sx={{ display: 'flex' }}>
			<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
				{/* {(disable) ? <FormLabel component="legend">
					Al editar seleccione nuevamente los campos a seleccionar
				</FormLabel>
					: <></>} */}
				<FormGroup>
					<CssFormControlLabel
						control={
							<Checkbox
								disabled={disable}
								style={{ color: 'green' }}
								checked={expectativaSelect?.inversion!}
								onChange={handleChangeExpectativas}
								name="inversion" />
						}
						label="Inversión"
					/>
					<CssFormControlLabel
						control={
							<Checkbox
								disabled={disable}
								style={{ color: 'green' }}
								checked={expectativaSelect?.financiacion!}
								onChange={handleChangeExpectativas}
								name="financiacion" />
						}
						label="Financiación"
					/>
					<CssFormControlLabel
						control={
							<Checkbox
								disabled={disable}
								style={{ color: 'green', }}
								checked={expectativaSelect?.aceleracion_de_la_startup!}
								onChange={handleChangeExpectativas}
								name="aceleracion_de_la_startup" />
						}
						label="Aceleración de la startup"
					/>
					<CssFormControlLabel
						control={
							<Checkbox
								disabled={disable}
								style={{ color: 'green' }}
								checked={expectativaSelect?.networking!}
								onChange={handleChangeExpectativas}
								name="networking" />
						}
						label="Networking"
					/>
					<CssFormControlLabel
						control={
							<Checkbox
								disabled={disable}
								style={{ color: 'green' }}
								checked={expectativaSelect?.postulacion_a_retos!}
								onChange={handleChangeExpectativas}
								name="postulacion_a_retos" />
						}
						label="Postulación a retos corporativos"
					/>

				</FormGroup>
			</FormControl>

		</Box>);
};

export default MultiCheckBox;
