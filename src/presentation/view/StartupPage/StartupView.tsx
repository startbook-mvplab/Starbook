import { CompanyInfo, EconomicCards, LineChart, SalesTabChart } from '@/presentation/components';
import { Grid, Stack, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { InformationsCardStartup } from './components/InformationsCardStartup';
import ChartExample from '@/presentation/components/ChartExample/ChartExample';
import { InformacionFinanciera } from './components/InformacionFinanciera';
import { InformacionEmpleados } from './components/InformacionEmpleados';
import { InformacionInversion } from './components/InformacionInversion';
import { InformacionTraccion } from './components/InformacionTraccion';
import { StartupPageProvider } from './context/StartupPageProvider';
import { StartupPageContext } from './context/StartupPageContext';
import { RolEnum } from '@/presentation/utilities';

export interface StartupViewProps { }

const StartupView: React.FC<StartupViewProps> = () => {

	// const { companySelected } = useContext(BuscadorEmpresasContext);
	// console.log('companySelected: ', companySelected);

	return (
	
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={2}
			>
				<StartupViewContent />
			</Stack>
	)
};

export default StartupView;



const StartupViewContent = () => {
	const { startup, loading } = useContext(StartupPageContext);


	return (
		<>
			<CompanyInfo rol={RolEnum.startup} startup={startup!} />
			<InformationsCardStartup />
			{/* <ChartExample /> */}
			
			<InformacionFinanciera />
			<EconomicCards />
			<InformacionEmpleados />
			<InformacionInversion />
			<InformacionTraccion />
		</>
	)
}
