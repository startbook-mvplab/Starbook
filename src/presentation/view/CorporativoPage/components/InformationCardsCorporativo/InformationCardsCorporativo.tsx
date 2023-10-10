import { CustomIcon, InformationCard } from "@/presentation/components";
// import { InformationCardAcademia } from "../InformationCardAcademia";
import { InformationCardCorporativo } from "../InformationCardCorporativo";
import { Stack, Grid, Typography } from "@mui/material";

export interface InformationsCardAcademiaProps {}

const cardStyles = {
  //   minHeight: "200px",
};

const minHeight = "200px";

const InformationCardsCorporativo: React.FC<
  InformationsCardAcademiaProps
> = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      width="100%"
      pt={3}
    >
      <Grid item xs={12} sm={6} md={4} lg={4} sx={{ ...cardStyles }}>
        <InformationCardCorporativo
          title="Modelo de negocio"
          titleBold
          minHeight={minHeight}
          //   width={400}
        >
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            condimentum dapibus sodales. Cras id porta risus. Praesent
            pellentesque nulla id justo pharetra, non aliquet urna ultricies.
          </Typography>
        </InformationCardCorporativo>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={4} sx={{ ...cardStyles }}>
        <InformationCardCorporativo
          title="Tesis de inversión"
          titleBold
          minHeight={minHeight}
          //  width={400}
        >
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            condimentum dapibus sodales. Cras id porta risus. Praesent
            pellentesque nulla id justo pharetra, non aliquet urna ultricies.
          </Typography>
        </InformationCardCorporativo>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={4} sx={{ ...cardStyles }}>
        <InformationCardCorporativo
          title="Intereses"
          titleBold
          minHeight={minHeight}
          //  width={400}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={0}
          >
            <Typography variant="body1" fontSize={16} fontWeight={400}>
              Inversión
            </Typography>

            <Typography variant="body1" fontSize={16} fontWeight={400}>
              Alianzas
            </Typography>

            <Typography variant="body1" fontSize={16} fontWeight={400}>
              Retos
            </Typography>
          </Stack>
        </InformationCardCorporativo>
      </Grid>
    </Grid>
  );
};

export default InformationCardsCorporativo;
