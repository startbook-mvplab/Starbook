import { CompanyInfo, EconomicCards } from '@/presentation/components';
import { Stack } from '@mui/material';
import React from 'react';
import { EtapaInversion } from './components/EtapaInversion';
import { InformationsCardInversionista } from './components/InformationsCardInversionista';
import InversionesChart from './components/InversionesChart/InversionesChart';
import { Portafolio } from './components/Portafolio';
import { RolEnum } from '@/presentation/utilities';


export interface InversionistaViewProps { }

const InversionistaView: React.FC<InversionistaViewProps> = () => {
	return (
		<Stack
			direction="column"
			justifyContent="center"
			alignItems="center"
			spacing={2}
		>
			<CompanyInfo rol={RolEnum.inversionista} />
			<InformationsCardInversionista />
			<InversionesChart />
			<EconomicCards />
			<Portafolio />
			<EtapaInversion />
			
		</Stack>
	)
};

export default InversionistaView;
