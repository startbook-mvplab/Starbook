import { IInformacionTraccion } from "@/data/models";
import { CustomBox, LineChart, TitleWithButtonAndDivider } from "@/presentation/components";
import { Grid, Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { StartupPageContext } from "../../context/StartupPageContext";
import { IChartInfo } from "@/data/interfaces";
import { calculatePercentFormArray, getChartInfo, grayLineDataYValues } from "@/presentation/utilities";
import { CacCard, LvtCard, BurnRateCard, UsuariosActivosCard, ChurnCard, ApexRadialBarChart } from "./InformacionTraccion";

export const InformacionTraccion = () => {
    const {
        loading, infoTracionLastYear, axisClientesPorMes,
    } = useContext(StartupPageContext);


    const chartInfo: IChartInfo = getChartInfo({
        title: "Clientes por mes",
        dataPoints: axisClientesPorMes,
    });


    const [infoTraccion, setInfoTraccion] = useState<IInformacionTraccion | null>(null);
    const [percentCAC, setPercentCAC] = useState<number>(0);
    const [percentLVT, setPercentLVT] = useState<number>(0);
    const [percentBurnRate, setPercentBurnRate] = useState<number>(0);
    const [percentUsuariosActivos, setPercentUsuariosActivos] = useState<number>(0);
    const [percentChurn, setPercentChurn] = useState<number>(0);

    const getPorcientosUltimoMes = (list: IInformacionTraccion[]) => {

        const cacList = list.map(e => e.CAC);
        const ltvList = list.map(e => e.LTV);
        const burnRateList = list.map(e => e.burn_rate);
        const usuariosActivosList = list.map(e => e.usuarios_activo);
        const churnList = list.map(e => e.churn_rate);

        setPercentCAC(calculatePercentFormArray(cacList));
        setPercentLVT(calculatePercentFormArray(ltvList));
        setPercentBurnRate(calculatePercentFormArray(burnRateList));
        setPercentUsuariosActivos(calculatePercentFormArray(usuariosActivosList));
        setPercentChurn(calculatePercentFormArray(churnList));
    };



    useEffect(() => {
        const size = infoTracionLastYear.length;

        if (size > 0) {
            setInfoTraccion(infoTracionLastYear[size - 1]);
            getPorcientosUltimoMes(infoTracionLastYear);
        }
    }, [infoTracionLastYear]);


    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            width='100%'
            pb={2}
        >
            <TitleWithButtonAndDivider title="Información de tracción" />
            <Grid
                alignItems="center"
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: "space-between",
                    width: '100%'
                }}
            >
                <CacCard loading={loading} info={infoTraccion?.CAC} percent={percentCAC} />
                <LvtCard loading={loading} info={infoTraccion?.LTV} percent={percentLVT} />
                <BurnRateCard loading={loading} info={infoTraccion?.burn_rate} percent={percentBurnRate} />
                <UsuariosActivosCard loading={loading} info={infoTraccion?.usuarios_activo} percent={percentUsuariosActivos} />
                <ChurnCard loading={loading} info={infoTraccion?.churn_rate} percent={percentChurn} />
            </Grid>

            <Grid
                alignItems="center"
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: "space-between",
                    width: '100%'
                }}
            >
                <LineChart
                    chartTitle={chartInfo.title}
                    // width={800}
                    topValue={chartInfo.topValue}
                    topPercent={chartInfo.topPercent}
                    loading={loading}
                    type="clientes"
                    maxValue={chartInfo.maxValue}
                    stepSize={chartInfo.stepSize}
                    xAxisData={chartInfo.dataPoints.map(e => e.xAxis as string)}
                    yDataGreenLine={chartInfo.dataPoints.map(e => e.yAxis)}
                    yDataGrayLine={grayLineDataYValues} />

                <CustomBox>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        height='400px'
                        // width='350px'
                        spacing={2}
                    >
                        <Typography
                            variant='body1'
                            fontSize={18}
                        >
                            Clientes
                        </Typography>
                        {/* <Typography
                variant='body1'
                fontSize={14}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing
            </Typography> */}
                        <br />
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            width='350px'
                        >
                            <ApexRadialBarChart />
                        </Stack>
                    </Stack>
                </CustomBox>
            </Grid>
        </Stack>

    );
};
