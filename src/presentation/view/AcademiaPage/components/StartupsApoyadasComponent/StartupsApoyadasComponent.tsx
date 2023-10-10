
import CompanyRowInfo from "@/presentation/components/CompanyRowInfo/CompanyRowInfo";
import { Stack, Grid, Typography } from "@mui/material";

const StartupsApoyadasComponent = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      spacing={2}
      width="100%"
    >
      {/* <TitleWithButtonAndDivider title="Portafolio" /> */}

      <Grid
        item
        sx={
          {
            //   bgcolor: "",
            //   borderTop: "solid 1px",
            //   borderColor: (theme) => theme.colors.primary.dark,
          }
        }
        xs={12}
      >
        <Typography
          variant="body1"
          fontSize={20}
          fontWeight={true ? 700 : undefined}
        >
          Startups apoyadas
        </Typography>
      </Grid>
      <CompanyRowInfo />
      <CompanyRowInfo />
      <CompanyRowInfo />
      <CompanyRowInfo />
      <CompanyRowInfo />
    </Stack>
  );
};

export default StartupsApoyadasComponent;
