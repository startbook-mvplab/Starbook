import { CustomBox, CustomIcon, SalesTabChart, TitleWithButtonAndDivider } from "@/presentation/components";
import { Grid, Stack, Typography } from "@mui/material";
import { ReactNode, FC } from "react";


const InversionesChart = () => {
    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            width='100%'
        >
            <TitleWithButtonAndDivider title="" />

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
                        loading={false}
                        monthsData={{
                            dataPoints: [],
                            title: 'Ventas',
                            topPercent: 0,
                            topValue: 0,
                        }}
                    />
                </Grid>
                <Cards />
            </Grid>

        </Stack>
    );
}


export default InversionesChart;




const Cards = () => {
    return (
        <Stack
            spacing={2}
            height={450}
            // sx={{bgcolor:'red'}}
            sx={{
                flexDirection: "column",//{ xs: "row", md: "column" },
                justifyContent: "flex-start",
                alignItems: "flex-start",
            }}
        >
            <CustomCard
                title="Ventas totales 2022"
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
                            630.000
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
                        <Typography
                            fontSize={25}
                            sx={{ color: '#02FBA8' }}
                        >
                            +3.8%
                        </Typography>
                        <CustomIcon
                            iconName='subida1'
                            width={25}
                            height={15}
                        />
                    </Stack>
                }

            />
        </Stack>
    );
}



interface CustomCardProps {
    title: string,
    info: ReactNode,
}

const CustomCard: FC<CustomCardProps> = ({ title, info }) => {
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

                {info}



            </Stack>
        </CustomBox>
    )
}

