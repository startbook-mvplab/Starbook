import { CustomIcon, InformationCard } from "@/presentation/components";
import { Stack, Grid, Typography } from "@mui/material";
import { InformacionCardWithIcon } from "@/presentation/components/InformacionCardWithIcon";

const data = [
  {
    title: "Selección fintech",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum dapibus sodales. Cras id porta risus.",
    iconName: "fintech-icon",
  },
  {
    title: "Legaltech",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum dapibus sodales. Cras id porta risus.",
    iconName: "legal-tech-icon",
  },
  {
    title: "Healthtech",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum dapibus sodales. Cras id porta risus.",
    iconName: "health-tech-icon",
  },
  {
    title: "Agricultura",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum dapibus sodales. Cras id porta risus.",
    iconName: "agricultura-icon",
  },
  {
    title: "Apps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum dapibus sodales. Cras id porta risus.",
    iconName: "apps-icon",
  },
  {
    title: "SAS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum dapibus sodales. Cras id porta risus.",
    iconName: "SAAS-icon",
  },
];

export interface InformationsCardAcademiaProps {}

const SectoresInteresAcademia: React.FC<InformationsCardAcademiaProps> = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      width="100%"
      pt={3}
      //   pb={3}
      sx={{ bgcolor: "", pr: { xs: 0, sm: 0, md: 5, lg: 6, xl: 10 } }}
    >
      <Grid
        item
        sx={{
          bgcolor: "",
          borderTop: "solid 1px",
          borderColor: (theme) => theme.colors.primary.dark,
        }}
        xs={12}
      >
        <Typography
          variant="body1"
          fontSize={18}
          fontWeight={true ? 700 : undefined}
        >
          Sectores de interés
        </Typography>
      </Grid>

      {data.map((data,index) => (
        <Grid key={index} item sx={{ bgcolor: "" }} xs={12} sm={12} md={6} lg={4} xl={4}>
          <InformacionCardWithIcon
            title={data.title}
            iconName={data.iconName}
            titleBold
            // width={380}
          >
            <Typography variant="body1">{data.description}</Typography>
          </InformacionCardWithIcon>
        </Grid>
      ))}
    </Grid>
  );
};

export default SectoresInteresAcademia;
