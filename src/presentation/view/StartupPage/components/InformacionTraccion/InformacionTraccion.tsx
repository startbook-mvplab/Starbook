import { ChartIndicatorCurve, CustomBox, PercentNumberWithValidation, TriangleIndicator, UserIndicator } from "@/presentation/components"
import { Box, Skeleton, Stack, Typography, useTheme } from "@mui/material"
import { FC, ReactNode, useContext } from "react";
import ReactApexcharts from "react-apexcharts";
import { StartupPageContext } from "../../context/StartupPageContext";
import { ApexOptions } from 'apexcharts'
import { InformacionTraccion } from "./InformacionTraccion.1";

export default InformacionTraccion;


interface InformacionTraccionProps {
    loading?: boolean,
    info: number | undefined,
    percent: number,
}


export const CacCard: FC<InformacionTraccionProps> = ({ loading = false, info, percent }) => {
    return (
        <CustomCard title="CAC" subtitle="Customer adquisition cost">
            {
                loading ?
                    <Box >
                        <Skeleton animation="wave" width={180} height={40} />
                        <Skeleton animation="wave" width={180} />
                    </Box>
                    :
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        spacing={0}
                    >
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="end"
                            spacing={0}
                        >
                            <Typography>$</Typography>
                            <Typography
                                variant="h3"
                                fontWeight={400}
                            >
                                {info}
                            </Typography>
                            <Typography pl='30px' pr='20px' fontSize={17}>USD</Typography>

                            {/* <CustomIcon iconName="green_chart" width={40} height={30} /> */}
                            <ChartIndicatorCurve
                                width={40}
                                height={30}
                                isGreen={percent > 0}
                            />
                        </Stack>

                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="end"
                            spacing={2}
                            pl='10px'
                        >
                            <Box pb='1px'>
                                <TriangleIndicator height={10} width={15} isGreen={percent > 0} />
                            </Box>
                            <PercentNumberWithValidation
                                variant="body1"
                                // fontSize={18}
                                percent={percent}
                            />
                            {/* <Typography sx={{ color: '#02FBA8' }}>+4%</Typography> */}
                            <Typography>mes anterior</Typography>
                        </Stack>
                    </Stack>
            }
        </CustomCard>
    )
}


export const LvtCard: FC<InformacionTraccionProps> = ({ loading = false, info, percent }) => {
    return (
        <CustomCard title="LTV" subtitle="Lifetime value">
            {
                loading ?
                    <Box >
                        <Skeleton animation="wave" width={180} height={40} />
                        <Skeleton animation="wave" width={180} />
                    </Box>
                    :
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        spacing={0}
                    >
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="end"
                            spacing={0}
                        >
                            <Typography>$</Typography>
                            <Typography
                                variant="h3"
                                fontWeight={400}
                            >
                                {info}
                            </Typography>
                            <Typography pl='30px' pr='20px' fontSize={17}>USD</Typography>

                            <ChartIndicatorCurve
                                width={40}
                                height={30}
                                isGreen={percent > 0}
                            />
                        </Stack>

                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="end"
                            spacing={2}
                            pl='10px'
                        >
                            <Box pb='1px'>
                                <TriangleIndicator height={10} width={15} isGreen={percent > 0} />
                            </Box>
                            {/* <Typography sx={{ color: '#DB2E51' }}>-4%</Typography> */}
                            <PercentNumberWithValidation
                                variant="body1"
                                // fontSize={18}
                                percent={percent}
                            />
                            <Typography>mes anterior</Typography>
                        </Stack>
                    </Stack>
            }
        </CustomCard>
    );
}


export const BurnRateCard: FC<InformacionTraccionProps> = ({ loading = false, info, percent }) => {
    return (
        <CustomCard title="Burn rate" subtitle="">
            {
                loading ?
                    <Box >
                        <Skeleton animation="wave" width={180} height={40} />
                        <Skeleton animation="wave" width={180} />
                    </Box>
                    :
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        spacing={0}
                    >
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="end"
                            spacing={0}
                        >
                            <Typography>$</Typography>
                            <Typography
                                variant="h3"
                                fontWeight={400}
                            >
                                {info}
                            </Typography>
                            <Typography pl='30px' pr='20px' fontSize={17}>USD/mes</Typography>

                        </Stack>

                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="end"
                            spacing={2}
                            pl='10px'
                        >
                            <Box pb='1px'>
                                <TriangleIndicator height={10} width={15} isGreen={percent > 0} />
                            </Box>
                            <PercentNumberWithValidation
                                variant="body1"
                                // fontSize={18}
                                percent={percent}
                            />
                            <Typography>mes anterior</Typography>
                        </Stack>
                    </Stack>
            }
        </CustomCard>
    );
}



export const UsuariosActivosCard: FC<InformacionTraccionProps> = ({ loading = false, info, percent }) => {
    return (
        <CustomCard title="Usuarios activos" subtitle="">
            {
                loading ?
                    <Box >
                        <Skeleton animation="wave" width={180} height={40} />
                        <Skeleton animation="wave" width={180} />
                    </Box>
                    :
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        spacing={0}
                    >
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="end"
                            spacing={0}
                        >
                            {/* <CustomIcon iconName="user_green" width={30} height={30} /> */}
                            <UserIndicator
                                width={30}
                                height={30}
                                isGreen={percent > 0}
                            />
                            <Typography
                                variant="h1"
                                // fontSize={30}
                                fontWeight={400}
                                pr='30px'
                            >
                                {info}
                            </Typography>

                            <ChartIndicatorCurve
                                width={40}
                                height={30}
                                isGreen={percent > 0}
                            />
                        </Stack>

                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="end"
                            spacing={2}
                            pl='10px'
                        >
                            <PercentNumberWithValidation
                                variant="body1"
                                // fontSize={18}
                                percent={percent}
                            />
                            <Box pb='1px'>
                                <TriangleIndicator height={10} width={15} isGreen={percent > 0} />
                            </Box>
                            <Typography>mes anterior</Typography>
                        </Stack>
                    </Stack>
            }
        </CustomCard>
    )
}


export const ChurnCard: FC<InformacionTraccionProps> = ({ loading = false, info, percent }) => {
    return (
        <CustomCard title="Churn" subtitle="">
            {
                loading ?
                    <Box >
                        <Skeleton animation="wave" width={180} height={40} />
                        <Skeleton animation="wave" width={180} />
                    </Box>
                    :
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        spacing={0}
                    >
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="end"
                            spacing={0}
                        >
                            {/* <CustomIcon iconName="user_red" width={30} height={30} /> */}
                            <UserIndicator
                                width={30}
                                height={30}
                                isGreen={percent > 0}
                            />

                            <Typography
                                variant="h1"
                                // fontSize={30}
                                fontWeight={400}
                                pr='30px'
                            >
                                {info}%
                            </Typography>
                            <ChartIndicatorCurve
                                width={40}
                                height={30}
                                isGreen={percent > 0}
                            />
                        </Stack>

                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="end"
                            spacing={2}
                            pl='10px'
                        >
                            <PercentNumberWithValidation
                                variant="body1"
                                // fontSize={18}
                                percent={percent}
                            />
                            <Box pb='1px'>
                                <TriangleIndicator
                                    height={10}
                                    width={15}
                                    isGreen={percent > 0}
                                />
                            </Box>
                            <Typography>mes anterior</Typography>
                        </Stack>
                    </Stack>
            }
        </CustomCard>
    )
}



interface CustomCardProps {
    title: string,
    subtitle?: string,
    children: ReactNode,
}

const CustomCard: FC<CustomCardProps> = ({ title, subtitle, children }) => {
    return (
        <CustomBox sxProps={{ mb: { xs: '10px' } }}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
                width='240px'
                height={130}
            >
                <Typography
                    variant='body1'
                    fontSize={18}
                >
                    {title}
                </Typography>
                <Typography
                    variant='body1'
                >
                    {subtitle}
                </Typography>

                {children}

            </Stack>
        </CustomBox>
    )
}




export const ApexRadialBarChart = () => {
    const {
        loading,
        infoTracionLastYear,
    } = useContext(StartupPageContext);


    let clientesRecurrentesPorciento = 0;
    let clientesInactivosPorciento = 0;
    let clientesNuevosPorciento = 0;



    let clientesTotales = 0;

    const size = infoTracionLastYear.length;
    if (size > 0) {
        const clientesRecurrentes = infoTracionLastYear[size - 1].clientes_recurrentes;
        const clientesInactivos = infoTracionLastYear[size - 1].clientes_inactivos;
        const clientesNuevos = infoTracionLastYear[size - 1].nuevos_clientes;

        clientesTotales = infoTracionLastYear[size - 1].usuarios_activo;

        clientesRecurrentesPorciento = (clientesRecurrentes / clientesTotales) * 100;
        clientesInactivosPorciento = (clientesInactivos / clientesTotales) * 100;
        clientesNuevosPorciento = (clientesNuevos / clientesTotales) * 100;
    }

    const theme = useTheme();

    const radialBarColors = {
        series1: '#02FBA8',
        series2: theme.colors.primary.light,
        series3: '#7367f0',
        // series4: '#7367f0',
        // series5: '#FFA1A1'
    }

    const options: ApexOptions = {

        stroke: { lineCap: 'round' },
        labels: ['Clientes Recurrentes', 'Clientes inactivos', 'Nuevos clientes'],
        // dataLabels: {
        //     textAnchor: "start",
        //     style: { fontSize: '15',  }
        // },
        legend: {
            show: true,
            position: 'bottom',
            labels: {
                colors: theme.palette.text.secondary
            },
            markers: {
                offsetX: -3
            },
            itemMargin: {
                vertical: 3,
                horizontal: 10
            }
        },
        colors: [radialBarColors.series1, radialBarColors.series2, radialBarColors.series3],
        plotOptions: {

            radialBar: {
                hollow: { size: '30%' },
                track: {
                    margin: 15,
                    // background: hexToRGBA(theme.palette.customColors.trackBg, 1)
                },
                dataLabels: {
                    // name: {
                    //     fontSize: '18px'
                    // },
                    name: {
                        show: false, // Ocultar el nombre (etiqueta) en las leyendas
                    },
                    value: {
                        fontSize: '1rem',
                        color: theme.palette.text.secondary
                    },
                }
            }
        },
        grid: {
            padding: {
                top: -35,
                bottom: -30
            }
        }
    }

    return (
        <ReactApexcharts
            type='radialBar'
            height={350}
            width={350}
            options={options}
            series={[clientesRecurrentesPorciento, clientesInactivosPorciento, clientesNuevosPorciento]}
        />
    )
}