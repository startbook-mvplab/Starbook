import { FormsStartupContext } from '@/presentation/contexts/FormsStartupContext/FormsStartupContext';
import { SubTitleButton } from '@/presentation/layouts/FormsLayout/SidebarForm/components/SubTitleButton';
import { SubTitleIcon } from '@/presentation/layouts/FormsLayout/SidebarForm/components/SubTitleIcon';
import { Checkbox, FormLabel, Grid, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { MultiCheckBox } from './MultiCheckBox';


export interface ExpectativaProps { }

const Expectativa: React.FC<ExpectativaProps> = () => {

	return (
		<section id="Expectativa">
			<Stack paddingTop={4} direction={'column'}>
				<SubTitleIcon subtitle='Expectativa' img={''} />

				<Stack paddingLeft={5} paddingTop={4} direction={'column'}>
					<Typography
						maxWidth={550}
						fontSize={20}
						fontWeight={600} >
						¿Qué buscas principalmente en la comunidad Starter, cuál
						es tu principal interés al postularte? (Marca las que apliquen)
					</Typography>
					<Stack >

						<Stack paddingY={2} direction={'row'} spacing={3}>
							<MultiCheckBox />
						</Stack>

					</Stack>

				</Stack>

			</Stack>
		</section>
	)
};

export default Expectativa;
