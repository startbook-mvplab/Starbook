import { SubTitleButton } from '@/presentation/layouts/FormsLayout/SidebarForm/components/SubTitleButton';
import { SubTitleIcon } from '@/presentation/layouts/FormsLayout/SidebarForm/components/SubTitleIcon';
import { Stack } from '@mui/material';
import React from 'react';
export interface InformacionPeriodicaProps { }

const InformacionPeriodica: React.FC<InformacionPeriodicaProps> = () => {
	return (
		<section id="Información periódica">
			<Stack  paddingTop={4} direction={'column'}>
				<SubTitleIcon subtitle='Información periódica' paddingLeft='20px' />
			</Stack>
		</section>
	)
};

export default InformacionPeriodica;
