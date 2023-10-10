import { CustomBox, IconTextItem, PersonAvatarInfo, TitleWithButtonAndDivider } from "@/presentation/components";
import { Category, NameAndRol } from "@/presentation/components/CompanyInfo/CompanyInfo";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";


const EtapaInversion = () => {

    const fontSize = 11;


    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            width='100%'
        >
            <TitleWithButtonAndDivider title="Etapa de inversión" />

            <Grid
                alignItems="center"
                // pr='50px'
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: "space-between",
                    width: '100%'
                }}
            >

                <NameAndRol titleVariant="h3" subtitlefontSize={fontSize} />
                <Category textfontSize={fontSize} />
                <CustomCard />

            </Grid>

            <Grid
                alignItems="center"
                // pr='50px'
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: "space-between",
                    width: '100%'
                }}
            >

                <NameAndRol titleVariant="h3" subtitlefontSize={fontSize} />
                <Category textfontSize={fontSize} />
                <CustomCard />

            </Grid>



            <Grid
                alignItems="center"
                // pr='50px'
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: "space-between",
                    width: '100%'
                }}
            >

                <NameAndRol titleVariant="h3" subtitlefontSize={fontSize} />
                <Category textfontSize={fontSize} />
                <CustomCard />

            </Grid>

        </Stack>

    );
}


export default EtapaInversion;





const CustomCard = () => {

    return (
        <CustomBox>
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
                width='100%'

            >
                <Grid
                    alignItems="center"
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: "flex-start",

                        // width: '100%'
                    }}
                >
                    <Typography variant="body1" pr='10px'>
                        Ronda
                    </Typography>
                    <Typography variant="h3" fontWeight={400}>
                        Pre-seed
                    </Typography>
                    <Box sx={{ width: { xs: '30px', sm: '50px' } }} />
                    <IconTextItem
                        iconName='calendar'
                        text='1 de Julio de 2022'
                    />
                </Grid>

                {/* ------------------------------------- */}
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                    sx={{ display: { xs: 'none', sm: 'flex' } }}
                >
                    <CapitalLevantado />

                    <VerticalDivider />

                    <Valoracion />

                    <VerticalDivider />

                    <Notas />
                </Stack>
                <Grid
                    alignItems="center"
                    sx={{
                        display: { xs: 'flex', sm: 'none' },
                        flexWrap: 'wrap',
                        justifyContent: "flex-start",

                        // width: '100%'
                    }}
                >
                    <CapitalLevantado />
                    <Box pt='30px'>
                        <Valoracion />
                    </Box>
                    <Box pt='30px'>
                        <Notas />
                    </Box>

                </Grid>

            </Stack>
        </CustomBox>
    );
}


const CapitalLevantado = () => {
    return (
        <Info title="Capital levantado">
            <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="end"
                spacing={2}
            >
                <Typography>$</Typography>
                <Typography
                    variant="h1"
                    fontWeight={400}
                    sx={{ color: '#02FBA8' }}
                >
                    120.000
                </Typography>
                <Typography pl='10px' fontSize={17}>USD</Typography>
            </Stack>
        </Info>
    );
}

const Valoracion = () => {
    return (
        <Info title="Valoración">
            <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="end"
                spacing={2}
            >
                <Typography>$</Typography>
                <Typography
                    variant="h1"
                    fontWeight={400}
                    sx={{ color: '#E4E200' }} //(theme)=>theme.colors.primary.dark}}
                >
                    8’315.000
                </Typography>
                <Typography pl='10px' fontSize={17}>USD</Typography>
            </Stack>
        </Info>
    );
}


const Notas = () => {
    return (
        <Info title="Notas">
            <Box width='280px'>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam condimentum dapibus sodales. Cras id porta risus.
                </Typography>
            </Box>
        </Info>
    );
}


interface InfoProps {
    title: string,
    children: ReactNode,
}

const Info: React.FC<InfoProps> = ({ title, children }) => {
    return (
        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
        >
            <Typography variant="body1">{title}</Typography>
            {children}
        </Stack>
    );
}




const VerticalDivider = () => {
    return (
        <Divider
            orientation="vertical"
            sx={{
                display: { xs: 'none', sm: 'flex' },
                height: 100,
                width: '0.5px',
                bgcolor: 'white'
            }}
        />
    );
}
