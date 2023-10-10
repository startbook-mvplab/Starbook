import { FormsStartupContext } from '@/presentation/contexts/FormsStartupContext/FormsStartupContext';
import { SubTitleButton } from '@/presentation/layouts/FormsLayout/SidebarForm/components/SubTitleButton';
import { SubTitleIcon } from '@/presentation/layouts/FormsLayout/SidebarForm/components/SubTitleIcon';
import { CssFormControlLabel } from '@/presentation/styles/styles';
import { FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';
import React, { useContext } from 'react';
export interface SociedadProps { }

const Sociedad: React.FC<SociedadProps> = () => {

	const {
		disable,
		porcentajeAccionario,
		handlePorcentajeAccionario,
		involucradosAl100,
		handleInvolucradosAl100,
	} = useContext(FormsStartupContext);

	return (
		<section id="Sociedad">
			<Stack paddingTop={4} direction={'column'}>
				<SubTitleIcon subtitle='Sociedad' img={''} />
				<Stack direction='column' paddingTop={5} width={'100%'} spacing={2}>

					<SubTitleIcon
						subtitle='¿El porcentaje accionario, funciones y roles de los socios o founders 
                               está definido detalladamente? (califique de 1 a 5 siendo 5 totalmente definido)?'
						img='' />

					<Stack direction='row' width={'100%'} paddingLeft={6} spacing={2}>
						<RadioGroup value={porcentajeAccionario} onChange={handlePorcentajeAccionario}>
							<CssFormControlLabel disabled={disable} value="1" control={<Radio style={{ color: 'green' }} />} label="1" />
						</RadioGroup>

						<RadioGroup value={porcentajeAccionario} onChange={handlePorcentajeAccionario}>
							<CssFormControlLabel disabled={disable} value="2" control={<Radio style={{ color: 'green' }} />} label="2" />
						</RadioGroup>
						<RadioGroup value={porcentajeAccionario} onChange={handlePorcentajeAccionario}>
							<CssFormControlLabel disabled={disable} value="3" control={<Radio style={{ color: 'green' }} />} label="3" />
						</RadioGroup>
						<RadioGroup value={porcentajeAccionario} onChange={handlePorcentajeAccionario}>
							<CssFormControlLabel disabled={disable} value="4" control={<Radio style={{ color: 'green' }} />} label="4" />
						</RadioGroup>
						<RadioGroup value={porcentajeAccionario} onChange={handlePorcentajeAccionario}>
							<CssFormControlLabel disabled={disable} value="5" control={<Radio style={{ color: 'green' }} />} label="5" />
						</RadioGroup>
					</Stack>
				</Stack>
				{/* 
				<Stack maxWidth={'800pxP} direction='column' paddingTop={5} width={'100%'} spacing={2}>
					<SubTitleIcon
						subtitle='¿El porcentaje accionario, funciones y roles de los socios o founders 
						está definido detalladamente? (califique de 1 a 5 siendo 5 totalmente definido)'
						img='' />

					<Stack direction='row' width={'100%'} paddingLeft={6} spacing={2}>
						<RadioGroup value={programaDeApoyo} onChange={handleProgramaDeApoyo}>
							<CssFormControlLabel disabled={disable} value="No" control={<Radio style={{ color: 'green' }} />} label="Si" />
						</RadioGroup>
						<RadioGroup value={programaDeApoyo} onChange={handleProgramaDeApoyo}>
							<CssFormControlLabel disabled={disable} value="Si" control={<Radio style={{ color: 'green' }} />} label="No" />
						</RadioGroup>
					</Stack>
				</Stack> */}

				<Stack maxWidth={'800px'} direction='column' paddingTop={5} width={'100%'} spacing={2}>
					<SubTitleIcon
						subtitle='¿Están todos los socios involucrados 100% para trabajar en la Startup por al menos los siguientes 3 años?'
						img='' />

					<Stack direction='row' width={'100%'} paddingLeft={6} spacing={2}>
						<RadioGroup value={involucradosAl100} onChange={handleInvolucradosAl100}>
							<CssFormControlLabel disabled={disable} value="Todos" control={<Radio style={{ color: 'green' }} />} label="Todos" />
						</RadioGroup>
						<RadioGroup value={involucradosAl100} onChange={handleInvolucradosAl100}>
							<CssFormControlLabel disabled={disable} value="Algunos" control={<Radio style={{ color: 'green' }} />} label="Algunos" />
						</RadioGroup>
						<RadioGroup value={involucradosAl100} onChange={handleInvolucradosAl100}>
							<CssFormControlLabel disabled={disable} value="Ninguno" control={<Radio style={{ color: 'green' }} />} label="Ninguno" />
						</RadioGroup>
					</Stack>
				</Stack>

			</Stack>
		</section>
	)
};

export default Sociedad;
