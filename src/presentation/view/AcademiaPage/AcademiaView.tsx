import { CompanyInfo } from "@/presentation/components";
import { Stack, Grid } from "@mui/material";
import React from "react";
import { InformationsCardAcademia } from "./components/InformationsCardAcademia";

import { Portafolio } from "../InversionistaPage/components/Portafolio";
import { StartupsApoyadasComponent } from "./components/StartupsApoyadasComponent";
import { SectoresInteresAcademia } from "./components/SectoresInteresAcademia";
import { RetosCardsAcademia } from "./components/RetosCardsAcademia";
import { ICompanyInfo } from "@/data/models";
import { RolEnum } from "@/presentation/utilities";

export interface AcademiaViewProps extends ICompanyInfo {

}

const AcademiaView: React.FC<AcademiaViewProps> = ({ company }) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      minHeight="90vh"
      pb={10}
    >
      <Grid sx={{ pl: { xs: 2, sm: 2, md: 0 }, width: "100%" }}>
        <CompanyInfo rol={RolEnum.academia} />
      </Grid>
      <InformationsCardAcademia />
      <StartupsApoyadasComponent />
      {/* <SectoresInteresAcademia />
      <RetosCardsAcademia /> */}

      {/* Hacer sectores de interes */}
    </Stack>
  );
};

export default AcademiaView;
