import { IChartInfo } from "@/data/interfaces";
import { ChartIndicatorWithArrow, CustomBox, CustomIcon, LineChart, PercentNumberWithValidation, TitleWithButtonAndDivider } from "@/presentation/components";
import { Box, Grid, Skeleton, Stack, Typography } from "@mui/material";
import { FC, ReactNode, useContext, useEffect, useState } from "react";
import { StartupPageContext } from "../../context/StartupPageContext";
import { SimpleLineChart } from "../SimpleLineChart";
import { calculatePercentFormArray, getChartInfo } from "@/presentation/utilities";

const InformacionEmpleados: FC = () => {
    const { startup, loading, axisEmpleados, empleosLastYear } = useContext(StartupPageContext);

    const [empleadosUltimoMes, setEmpleadosUltimoMes] = useState<number>(0);
    const [porcientoEmpleadosUltimoMes, setPorcientoEmpleadosUltimoMes] = useState<number>(0);
    const [porcientoEmpleadosUltimoMesSubio, setPorcientoEmpleadosUltimoMesSubio] = useState<boolean>(false);

    // console.log('axisEmpleados: ', axisEmpleados);



    const chartInfo: IChartInfo = getChartInfo({
        title: "Ventas por años",
        dataPoints: axisEmpleados,
    });

    const getEmpleadosUltimoMes = () => {
        // console.log(axisEmpleados.map(e => e.yAxis));
        let lastNonZeroElement = 0;
        if (axisEmpleados.length > 0) {
            const yAxis = axisEmpleados.map(e => e.yAxis);
            for (let i = yAxis.length - 1; i >= 0; i--) {
                if (yAxis[i] !== 0) {
                    lastNonZeroElement = yAxis[i];
                    break;
                }
            }
        }
        setEmpleadosUltimoMes(lastNonZeroElement);
    }


    const getPorcientoEmpleadosUltimoMes = () => {

        const empleadosList = axisEmpleados.map(e => e.yAxis);
        const total = empleadosList.length;

        if (total > 0) {
            const percent = calculatePercentFormArray(empleadosList);
            setPorcientoEmpleadosUltimoMes(percent);
            setPorcientoEmpleadosUltimoMesSubio(percent > 0);
        }
    }

    useEffect(() => {
        getEmpleadosUltimoMes();
        getPorcientoEmpleadosUltimoMes();
    }, [axisEmpleados])


    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            width='100%'
        >
            <TitleWithButtonAndDivider title="Información de empleados" />
            <Grid
                alignItems="center"
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: "space-between",
                    width: '100%'
                }}
            >
                <CustomCard
                    title="Empleados actuales"
                    subtitle="Total de colaboradores"
                    info={
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="end"
                            spacing={2}
                        >
                            <Box pb='2px'>
                                <CustomIcon iconName="people" height={30} width={40} />
                            </Box>
                            {
                                loading ?
                                    <Skeleton animation="wave" height={40} width={30} />
                                    :
                                    <Typography variant="h2" fontSize={40} fontWeight={400}>
                                        {empleadosUltimoMes}
                                    </Typography>
                            }

                            <Typography variant="body1" pb='3px'>
                                Último mes
                            </Typography>
                        </Stack>

                    }
                />

                <CustomBox sxProps={{ mb: { xs: '0px' } }}>
                    <Box
                        sx={{
                            width: { xs: '300px', sm: '600px' },
                            height: { xs: '100px', sm: '100px' },
                        }}
                    >
                        <SimpleLineChart
                            loading={loading}
                            type="ventas"
                            minValue={chartInfo.minValue}
                            maxValue={chartInfo.maxValue}
                            stepSize={chartInfo.stepSize}
                            dataPoints={chartInfo.dataPoints}
                        />


                    </Box>
                </CustomBox>

                <CustomCard
                    loading={loading}
                    title="% incorporaciones"
                    subtitle="Desde el último mes"
                    info={
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={2}
                        >
                            <PercentNumberWithValidation
                                fontSize={35}
                                percent={porcientoEmpleadosUltimoMes}
                            />

                            <ChartIndicatorWithArrow
                                width={25}
                                height={15}
                                isGreen={porcientoEmpleadosUltimoMesSubio}
                            />

                        </Stack>

                    }
                />

                {/* </Stack> */}
            </Grid>

        </Stack>
    );
}


export default InformacionEmpleados;




interface CustomCardProps {
    loading?: boolean,
    title: string,
    subtitle?: string,
    info: ReactNode,
}

const CustomCard: FC<CustomCardProps> = ({ loading = false, title, subtitle, info }) => {
    return (
        <CustomBox sxProps={{ mb: { xs: '10px' } }}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={1}
                width='200px'
                height={100}
            >
                <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={0}
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
                </Stack>

                {
                    loading ?
                        <Skeleton animation="wave" height={50} width={100} />
                        :
                        info
                }
            </Stack>
        </CustomBox>
    )
}

