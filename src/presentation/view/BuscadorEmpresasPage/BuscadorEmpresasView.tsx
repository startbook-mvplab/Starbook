import { CustomBox, Footer, Logo } from "@/presentation/components";
import { CompanySimpleRowInfo } from "@/presentation/components/CompanyRowInfo/CompanyRowInfo";
import { Box, Button, Card, CardActionArea, CircularProgress, Container, Grid, Skeleton, Stack, Typography } from "@mui/material";

import { BuscadorEmpresasContext } from "./context/BuscadorEmpresasContext";
import { IStartup } from "@/data/models";
import { ModelosNegociosTabs } from "./components/ModelosNegociosTabs";
import { SectoresSelect } from "./components/SectoresSelect";
import { useContext } from "react";
import { useRouter } from "next/router";
import { mainRoutes } from "@/presentation/routes/routes";
import { SearchBar } from "./components/SearchBar";
import { Header } from "@/presentation/components/Header";

const BuscadorEmpresasView = () => {

    return (
        <Stack direction={'column'} >
            <Header />
            <Container maxWidth={false}>
                <ContentView />
            </Container>
            <Footer position='fixed' />
        </Stack>
    );
}

export default BuscadorEmpresasView;


function CustomCircularProgress() {
    return (
        <CircularProgress
            thickness={6}
            size='18px'
            sx={{ color: (theme) => theme.colors.primary.dark }}
        />
    )
}


const ContentView = () => {
    const { companies, loading } = useContext(BuscadorEmpresasContext);

    return (
        <Stack

            direction="column"
            justifyContent="center"
            alignItems="center"
            height='100vh'
            width='100%'
            paddingBottom={'60px'}
            spacing={2}

            sx={{
                display: 'block',
                flex: 1,
                pt: '100px',
                px: { xs: '20px', sm: '150px' }
                // px: { xs: '0px', sm: '0px' }
            }}>

            <Typography variant="h3">Busca una empresa</Typography>
            <SearchDesktop />
            <SearchMovil />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={9}>
                    <ModelosNegociosTabs />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <SectoresSelect />
                </Grid>
            </Grid>

            {
                loading ?
                    <Skeleton animation="wave" width={200} /> :
                    <Typography variant="h4">
                        Se han encontrado {companies.length} empresas
                    </Typography>
            }

            {loading ? <SkeletonLoading /> : <CompanyList />}

        </Stack>
    );
}


const SearchDesktop = () => {
    const { loading,searchCompanies } = useContext(BuscadorEmpresasContext);
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width='100%'
            spacing={4}
            pb='10px'
            sx={{
                display: { xs: 'none', sm: 'flex' }
            }}
        // bgcolor='red'
        >
            <Box sx={{
                display: 'block',
                flex: 1,

            }}>
                <SearchBar />
            </Box>
            <Button

                size="small"
                variant="outlined"
                onClick={() => searchCompanies()}
                endIcon={loading && <CustomCircularProgress />}
                sx={{ minWidth: '100px' }}

            >
                Buscar
            </Button>
        </Stack>
    )
}


const SearchMovil = () => {
    return (
        <Box
            sx={{
                display: { xs: 'block', sm: 'none' },
                flex: 1,
            }}
        >
            <SearchBar />
        </Box>
    )
}


const CompanyList = () => {
    const { companies, handleCompanySelected } = useContext(BuscadorEmpresasContext);

    const router = useRouter();

    const navigateAndSelectCompay = (company: IStartup) => {
        router.push(mainRoutes.startup);
        handleCompanySelected(company);
    }

    return (
        <Box paddingBottom={'150px'}>
            {
                companies.map(company => (
                    <Box key={company._id} pb='20px' width='100%' >
                        <Card
                            // fullWidth
                            onClick={() => navigateAndSelectCompay(company)}
                            sx={{
                                borderRadius: '15px', p: 0, m: 0,
                                bgcolor: 'transparent'
                            }}>
                            <CardActionArea>
                                <CustomBox sxProps={{
                                    //    width:'280px',
                                    pl: '20px'
                                }}>
                                    <CompanySimpleRowInfo company={company} />

                                </CustomBox>
                            </CardActionArea>

                        </Card>
                    </Box>
                ))
            }

        </Box>
    )
}


const SkeletonLoading = () => {
    const list: number[] = [0, 1, 2, 3, 4, 5];
    return (
        <Stack spacing={2}>
            {
                list.map(e => <CompanyCardSkeleton key={e} />)
            }
        </Stack>
    );
}

const CompanyCardSkeleton: React.FC = () => {
    return (
        <CustomBox sxProps={{
            //    width:'280px',
            pl: '20px',
            py: '30px'
        }}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                <Box sx={{ width: 180 }}>
                    <Skeleton animation="wave" height={40} />
                    <Skeleton animation="wave" width={100} />
                </Box>

                <Box sx={{ width: 50 }}>
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                </Box>

                <Box sx={{ width: 150 }}>
                    <Skeleton animation="wave" width={100} />
                    <Skeleton animation="wave" />
                </Box>

                <Box sx={{ width: 150, height: 40 }}>
                    <Skeleton animation="wave" />

                    {/* <Skeleton animation="wave" width={100} /> */}
                </Box>

                <Box sx={{ width: 150 }}>
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                </Box>
            </Stack>

        </CustomBox>


    )
}





