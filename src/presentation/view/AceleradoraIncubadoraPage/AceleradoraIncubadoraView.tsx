import { CompanyInfo } from '@/presentation/components';
import { Stack } from '@mui/material';
import React from 'react';
import { InformationsCardAceleradora } from './components/InformationsCardAceleradora';
import { StartupsEncubacion } from './components/StartupsEncubacion';
import { RolEnum } from '@/presentation/utilities';


export interface AceleradoraIncubadoraViewProps { }

const AceleradoraIncubadoraView: React.FC<AceleradoraIncubadoraViewProps> = () => {
	return (
		<Stack
			direction="column"
			justifyContent="center"
			alignItems="center"
			spacing={2}
		>
			<CompanyInfo rol={RolEnum.aceleradora} />
			<InformationsCardAceleradora />
			<StartupsEncubacion/>
		</Stack>
	);
};

export default AceleradoraIncubadoraView;
