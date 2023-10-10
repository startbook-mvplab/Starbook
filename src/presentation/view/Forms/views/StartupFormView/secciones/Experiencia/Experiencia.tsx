import { FormsStartupContext } from '@/presentation/contexts/FormsStartupContext/FormsStartupContext';
import { SubTitleIcon } from '@/presentation/layouts/FormsLayout/SidebarForm/components/SubTitleIcon';
import { CssFormControlLabel, CssTextField } from '@/presentation/styles/styles';
import { MenuItem, Radio, RadioGroup, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';

const currencies = [
	{ value: 'B2C', label: 'B2C', },
	{ value: 'B2B', label: 'B2B', },
	{ value: 'B2B2C', label: 'B2B2C', },
	{ value: 'SaaS', label: 'SaaS', },
	{ value: 'Otro', label: 'Otro', },
];

export interface ExperienciaProps { }

const Experiencia: React.FC<ExperienciaProps> = () => {

	const {
		disable,
		tiempoOp,
		handleTiempoOp,
		empleosGenerados,
		handleEmpleosGenerados,
		modelo_de_negocio,
		handleModelo_de_negocio,
		tipo_modelo_de_negocio,
		handleTipo_Modelo_de_negocio,
		primeraVez,
		handlePrimeraVez,
		programaDeApoyo,
		handleProgramaDeApoyo

	} = useContext(FormsStartupContext);

	return (
		<section id="Experiencia">
			<Stack direction={'column'} paddingTop={4}>
				<SubTitleIcon subtitle='Experiencia' img={''} />

				<Stack paddingLeft={5} paddingTop={4} direction={'column'}>
					<CssTextField
						disabled={disable}
						sx={{ input: { color: 'white' } }}
						onChange={handleTiempoOp}
						value={tiempoOp}
						label="¿Cuánto tiempo de operación tiene la Startup u organización en el mercado?"
						type="text"
						placeholder='¿Cuánto tiempo de operación tiene la Startup u organización en el mercado?'
						fullWidth
					/>
				</Stack >
				<Stack paddingLeft={5} paddingTop={2} paddingBottom={5} direction={'column'}>
					<CssTextField
						disabled={disable}
						sx={{ input: { color: 'white' } }}
						onChange={handleEmpleosGenerados}
						value={empleosGenerados}
						label="¿Cuántos empleos directos genera la Startup?"
						type="text"
						placeholder='¿Cuántos empleos directos genera la Startup?'
						fullWidth
					/>
				</Stack >
				<Stack maxWidth={'650px'} paddingTop={2} direction={'column'}>
					<SubTitleIcon
						subtitle='¿Qué modelo de negocio tiene la empresa en el momento?'
						img={''} />
				</Stack>

				<Stack maxWidth={'400px'} paddingLeft={5} paddingTop={4} direction={'column'}>
					<CssTextField
						disabled={disable}
						fullWidth
						sx={{ input: { color: 'white' } }}
						select
						label="Modelo de negocio"
						value={modelo_de_negocio}
						onChange={handleModelo_de_negocio}
					//helperText="Tipo de documento"
					>{currencies.map((option) => (
						<MenuItem
							style={{ background: 'primary', color: "white" }}
							key={option.value}
							value={option.label}
						>
							{option?.label!}
						</MenuItem>
					))}
					</CssTextField>
				</Stack >
				<Stack maxWidth={'650px'} paddingTop={2} direction={'column'}>
					<SubTitleIcon
						subtitle='¿Qué tipo de modelo negocio tiene la empresa en el momento?'
						img={''} />
				</Stack>
				<Stack maxWidth={'50%'} paddingLeft={5} paddingTop={4} direction={'column'}>
					<CssTextField
						disabled={disable}
						fullWidth
						sx={{ input: { color: 'white' } }}
						label="Tipo de modelo de negocio"
						value={tipo_modelo_de_negocio}
						onChange={handleTipo_Modelo_de_negocio}
						multiline
						rows={4}
					//helperText="Tipo de documento"
					/>
				</Stack >

				<Stack direction='column' paddingTop={5} width={'100%'} spacing={2}>
					<SubTitleIcon subtitle='¿Es la primera vez que establece una compañía?' img='' />

					<Stack direction='row' width={'100%'} paddingLeft={6} spacing={2}>
						<RadioGroup value={primeraVez} onChange={handlePrimeraVez}>
							<CssFormControlLabel disabled={disable} value="Si" control={<Radio style={{ color: 'green' }} />} label="Si" />
						</RadioGroup>
						<RadioGroup value={primeraVez} onChange={handlePrimeraVez}>
							<CssFormControlLabel disabled={disable} value="No" control={<Radio style={{ color: 'green' }} />} label="No" />
						</RadioGroup>
					</Stack>
				</Stack>

				<Stack maxWidth={'600px'} direction='column' paddingTop={5} width={'100%'} spacing={2}>
					<SubTitleIcon
						subtitle='¿Su Empresa/Startup ha participado en algún programa 
                              de aceleración o iniciativa de apoyo al emprendimiento?'
						img='' />

					<Stack direction='row' width={'100%'} paddingLeft={6} spacing={2}>
						<RadioGroup value={programaDeApoyo} onChange={handleProgramaDeApoyo}>
							<CssFormControlLabel disabled={disable} value="Si" control={<Radio style={{ color: 'green' }} />} label="Si" />
						</RadioGroup>
						<RadioGroup value={programaDeApoyo} onChange={handleProgramaDeApoyo}>
							<CssFormControlLabel disabled={disable} value="No" control={<Radio style={{ color: 'green' }} />} label="No" />
						</RadioGroup>
					</Stack>
				</Stack>

			</Stack >
		</section>
	)
};

export default Experiencia;



