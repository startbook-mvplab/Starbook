import { IInformacionInversion } from "@/data/models";
import { CustomBox, IconTextItem, PersonAvatarInfo, TitleWithButtonAndDivider } from "@/presentation/components";
import { Box, Divider, Grid, Skeleton, Stack, Typography } from "@mui/material";
import { FC, ReactNode, useContext, useEffect, useState } from "react";
import { StartupPageContext } from "../../context/StartupPageContext";
import Section from "@/presentation/components/Section/Section";
import { StartupSections, formatNumber, showFieldWithValidation, showFieldWithValidation2 } from "@/presentation/utilities";


const InformacionInversion: FC = () => {
    const { startup, loading } = useContext(StartupPageContext);


    const [infoInversion, setInfoInversion] = useState<IInformacionInversion[]>([]);

    useEffect(() => {
        if (startup !== null) {
            setInfoInversion(startup.financiacion);
        }

    }, [startup])


    return (
        <Section
            name={StartupSections.Inversion}
            sx={{
                width: '100%'
            }}>

            <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
                width='100%'
            >
                <TitleWithButtonAndDivider title="Información de inversión" />
                {
                    infoInversion.length !== 0 &&

                    infoInversion.slice(-2).map(e =>
                        <CustomCard key={e.id} loading={loading} inversion={e} />
                    )
                }
                <BottomInfo />
            </Stack>
        </Section>
    );
}

export default InformacionInversion;

interface CustomCardProps {
    loading?: boolean,
    inversion: IInformacionInversion,
}


const CustomCard: FC<CustomCardProps> = ({ loading = false, inversion }) => {

    // const fecha = inversion.fecha;
    // const dia = fecha.getDate().toString().padStart(2, '0');
    // const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    // const ano = fecha.getFullYear();

    // const fechaFormateada = dia + '/' + mes + '/' + ano;

    // const fechaFormateada = inversion.fecha.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });

    const fechaFormateada = inversion.fecha.toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' });


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
                    }}>
                        
                    <Typography variant="body1" pr='10px'>
                        Ronda
                    </Typography>
                    <Typography variant="h3" fontWeight={400}>
                        {inversion.ronda}
                    </Typography>
                    <Box sx={{ width: { xs: '30px', sm: '50px' } }} />
                    <IconTextItem
                        iconName='calendar'
                        text={fechaFormateada}
                    // text='1 de Julio de 2022'
                    />
                </Grid>

                {/* ------------------------------------- */}
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    sx={{ display: { xs: 'none', sm: 'flex' }, width: '70vw' }}
                 >
                    <CapitalLevantado loading={loading} info={formatNumber(inversion.cant)} />

                    <VerticalDivider />

                    <Valoracion loading={loading} info={formatNumber(inversion.valoracion)} />

                    <VerticalDivider />

                    <Notas loading={loading} info={showFieldWithValidation(inversion.nota)} />

                    <VerticalDivider />

                    <Inversionistas loading={loading} inversion={inversion} />
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
                    <CapitalLevantado loading={loading} info={formatNumber(inversion.cant)} />
                    <Box pt='30px'>
                        <Valoracion loading={loading} info={formatNumber(inversion.valoracion)} />
                    </Box>
                    <Box pt='30px'>
                        <Notas loading={loading} info={showFieldWithValidation2(inversion.nota)} />
                    </Box>

                    <Inversionistas loading={loading} inversion={inversion} />
                </Grid>

            </Stack>
        </CustomBox>
    );
}


interface InversionInfoProps {
    loading: boolean
    info: string | number,
}

const CapitalLevantado: FC<InversionInfoProps> = ({ loading = false, info }) => {


    return (
        <Info title="Capital levantado">
            {
                loading ?
                    <Skeleton animation="wave" width={200} height={60} />
                    :
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="end"
                        spacing={2}
                        width='260px'
                    >
                        <Typography>$</Typography>
                        <Typography
                            variant="h1"
                            fontWeight={400}
                            sx={{ color: '#02FBA8' }}
                        >
                            {info}
                        </Typography>
                        <Typography pl='10px' fontSize={17}>USD</Typography>
                    </Stack>
            }
        </Info>
    );
}


const Valoracion: FC<InversionInfoProps> = ({ loading = false, info }) => {
    return (
        <Info title="Valoración">
            {
                loading ?
                    <Skeleton animation="wave" width={250} height={60} />
                    :
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="end"
                        spacing={2}
                        width='250px'
                    >
                        <Typography>$</Typography>
                        <Typography
                            variant="h1"
                            fontWeight={400}
                            sx={{ color: '#E4E200' }} //(theme)=>theme.colors.primary.dark}}
                        >
                            {info}
                        </Typography>
                        <Typography pl='10px' fontSize={17}>USD</Typography>
                    </Stack>
            }
        </Info>
    );
}


const Notas: FC<InversionInfoProps> = ({ loading = false, info }) => {
    return (
        <Info title="Notas">
            {
                loading ?
                    <Box sx={{ width: 240 }}>
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                    </Box>
                    :
                    <Box width='240px'>
                        <Typography>
                            {typeof info === 'string' ? showFieldWithValidation(info) : info}
                        </Typography>
                    </Box>
            }
        </Info>
    );
}


const Inversionistas: FC<CustomCardProps> = ({ loading = false, inversion }) => {
    return (
        <Info title="Inversionistas">
            <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="end"
                spacing={2}
            >
                <PersonAvatarInfo
                    loading={loading}
                    avatar='/avatar1.png'
                    name={inversion.nombre_inversionista}
                    workPosition={inversion.cargo_inversionista}
                    email={inversion.correo_inversionista}
                />
                {/* <PersonAvatarInfo
                    loading={loading}
                    avatar='/avatar2.png'
                    name='Andrea Estrada'
                    workPosition='COO'
                    email='info@suprier.co'

                /> */}
            </Stack>
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


const BottomInfo = () => {
    return (
        <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="end"
            spacing={2}
        >
            <Typography>Ronda puente</Typography>
            <Typography sx={{ color: '#DB2E51' }}>N/A</Typography>

            <Typography pl='20px'>Ronda Serie A</Typography>
            <Typography sx={{ color: '#DB2E51' }}>N/A</Typography>
        </Stack>
    );
}