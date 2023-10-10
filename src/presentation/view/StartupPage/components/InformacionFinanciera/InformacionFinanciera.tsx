
import { IChartInfo } from "@/data/interfaces";
import { ChartIndicatorWithArrow, CustomBox, CustomIcon, PercentNumberWithValidation, SalesTabChart, TitleWithButtonAndDivider } from "@/presentation/components";
import { Box, Grid, Skeleton, Stack, Typography } from "@mui/material";
import { FC, ReactNode, useContext } from "react";
import { StartupPageContext } from "../../context/StartupPageContext";
import Section from "@/presentation/components/Section/Section";
import { StartupSections, calculatePercentFormArray, formatNumber, getChartInfo } from "@/presentation/utilities";

const InformacionFinanciera: FC = () => {

    const {
        startup,
        loading,
        error,
        axisVentasPorMes,
        axisVentasPorYear,
        axisVentasPorQrt,
    } = useContext(StartupPageContext);



    const monthsData: IChartInfo = getChartInfo({
        title: "Ventas por meses (2023)",
        dataPoints: axisVentasPorMes,
    })


    const yearsData: IChartInfo = getChartInfo({
        title: "Ventas por años",
        dataPoints: axisVentasPorYear,
    });

    const qrtData: IChartInfo = getChartInfo({
        title: "Ventas por cuarto de año (2023)",
        dataPoints: axisVentasPorQrt,
    });

    console.log('axisVentasPorQrt: ', axisVentasPorQrt)

    return (
        <Section
            name={StartupSections.InformacionFinanciera}
            sx={{
                display: 'flex',
                width: '100%',
            }}
        >
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
                width='100%'
            >
                <TitleWithButtonAndDivider title="Información financiera" />
                <Grid
                    alignItems="center"
                    pb={2}
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: "space-between",
                        width: '100%'
                    }}
                >
                    <Grid item xs={12}>
                        <SalesTabChart
                            loading={loading}
                            monthsData={monthsData}
                            yearsData={yearsData}
                            qrt={qrtData}
                        />
                    </Grid>
                    <Cards />
                </Grid>

            </Stack>
        </Section>
    );
}


export default InformacionFinanciera;



const Cards: FC = () => {

    const { startup, loading, error, axisVentasPorMes, infoFinancieraLastYear } = useContext(StartupPageContext);

    const monthsData: IChartInfo = getChartInfo({
        title: "Ventas por meses (2023)",
        dataPoints: axisVentasPorMes,
    })

    const ventasTotales = axisVentasPorMes.reduce((accumulator, data) => accumulator + data.yAxis, 0);

    const porcientoFacturacion = calculatePercentFormArray(infoFinancieraLastYear.map(e => e.facturacion));

    return (
        <Stack
            sx={{
                flexDirection: { xs: "column", sm: "row", md: "row", lg: "column" },
                justifyContent: { xs: "space-between", sm: "flex-start", md: "flex-start", lg: "space-between" },
                alignItems: { xs: "flex-start", sm: "center", md: "center", lg: "flex-start" },
                height: { xs: null, sm: 180, md: 180, lg: 450 },
            }}


        >
            <CustomCard
                loading={loading}
                title="Ventas totales 2023"
                info={
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                        width='100%'
                    >
                        $
                        <Typography fontSize={25}>
                            {formatNumber(ventasTotales)}
                        </Typography>
                        USD
                        <CustomIcon
                            iconName='green_chart'
                            width={60}
                            height={40}
                        />
                    </Stack>
                }
            />
            <CustomCard
                loading={loading}
                title="% Ventas"
                info={
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={3}
                        width='100%'
                        pl={2}
                    >
                        <PercentNumberWithValidation
                            fontSize={25}
                            percent={monthsData.topPercent}
                        />
                        <ChartIndicatorWithArrow
                            width={25}
                            height={15}
                            isGreen={monthsData.topPercent > 0}
                        />
                    </Stack>
                }

            />

            <CustomCard
                loading={loading}
                title="% Facturación"
                info={
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={3}
                        width='100%'
                        pl={2}
                    >
                        <PercentNumberWithValidation
                            fontSize={25}
                            percent={porcientoFacturacion}
                        />
                        <ChartIndicatorWithArrow
                            width={25}
                            height={15}
                            isGreen={porcientoFacturacion > 0}
                        />
                    </Stack>
                }

            />

        </Stack>
    );
}



interface CustomCardProps {
    loading?: boolean
    title: string,
    info: ReactNode,
}

const CustomCard: FC<CustomCardProps> = ({ loading = false, title, info }) => {
    return (
        <CustomBox>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
                width='240px'
            // height={100}
            >
                <Typography
                    variant='body1'
                    fontSize={18}
                >
                    {title}
                </Typography>

                {
                    loading ?
                        <Skeleton animation="wave" width={180} height={30} />
                        :
                        info
                }
            </Stack>
        </CustomBox>
    )
}

