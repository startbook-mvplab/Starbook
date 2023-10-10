import React from "react";
export interface CorporativoViewInterface {}
import { Stack, Grid } from "@mui/material";
import { CompanyInfo } from "@/presentation/components";
import { InformationCardsCorporativo } from "./components/InformationCardsCorporativo";
import { SectoresInteresCorporativo } from "./components/SectoresInteresCorporativo";
import { RetosCardsCorporativo } from "./components/RetosCardsCorporativo";
import { RolEnum } from "@/presentation/utilities";
// import { RetosCardsAcademia } from '../AcademiaPage/components/RetosCardsAcademia';

const CorporativoView: React.FC<CorporativoViewInterface> = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid sx={{ pl: { xs: 2, sm: 2, md: 0 }, width: "100%" }}>
        <CompanyInfo rol={RolEnum.corporativo} />
      </Grid>
      <InformationCardsCorporativo />
      <SectoresInteresCorporativo />
      <RetosCardsCorporativo />

      {/* Hacer sectores de interes */}
    </Stack>
  );
};

export default CorporativoView;
