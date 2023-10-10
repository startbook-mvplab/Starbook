import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useContext, useState } from 'react';
import { BuscadorEmpresasContext } from '../../context/BuscadorEmpresasContext';
import { modelosNegocios } from '@/presentation/utilities';

const ModelosNegociosTabs = () => {


    const { modeloNegocioIndex, changeModeloNegocioIndex } = useContext(BuscadorEmpresasContext);

    return (
        <Box sx={{ width: '100%', pb: '20px' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs

                    variant="scrollable"
                    scrollButtons="auto"
                    value={modeloNegocioIndex}
                    onChange={changeModeloNegocioIndex}
                    aria-label="basic tabs example"
                    sx={{ padding: 0 }}
                >
                    {/* <Tab

                        label='Todos'
                        {...a11yProps(0)}
                    /> */}
                    {
                        modelosNegocios.map((label, index) => {
                            return <Tab
                                key={index}
                                label={label}
                                {...a11yProps(index)}
                            />
                        })
                    }
                </Tabs>
            </Box>
            {/* <TabPanel
                value={modeloNegocio}
                index={0}
            >
                Todos
            </TabPanel> */}
            {/* {

                modelosNegocios.map((mn, index) => {
                    return <TabPanel
                        key={index}
                        value={index}
                        index={modeloNegocio}
                    >
                        {mn}
                    </TabPanel>
                })
            } */}

        </Box>
    );
}


export default ModelosNegociosTabs;



// interface TabPanelProps {
//     children?: React.ReactNode;
//     index: number;
//     value: number;
// }

// const TabPanel = (props: TabPanelProps) => {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 1 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}