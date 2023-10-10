import { CustomIcon, InformationCard } from "@/presentation/components";
import { Stack, Grid, Box, Typography } from "@mui/material";
import { InformacionCardWithIcon } from "@/presentation/components/InformacionCardWithIcon";

const data = [
  {
    title: "Nombre del reto 1",
    sectorText:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat placerat sem mi per, enim aliquet vestibulum condimentum mollis imperdiet feugiat euismod fringilla hendrerit. Hendrerit egestas tincidunt at ullamcorper per et, nec tempor sed consequat.",
    retribucionText:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat placerat sem mi per, enim aliquet vestibulum condimentum mollis imperdiet feugiat euismod. ",
  },
  {
    title: "Nombre del reto 2",
    sectorText:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat placerat sem mi per, enim aliquet vestibulum condimentum mollis imperdiet feugiat euismod fringilla hendrerit. Hendrerit egestas tincidunt at ullamcorper per et, nec tempor sed consequat.",
    retribucionText:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat placerat sem mi per, enim aliquet vestibulum condimentum mollis imperdiet feugiat euismod. ",
  },
  {
    title: "Nombre del reto 3",
    sectorText:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat placerat sem mi per, enim aliquet vestibulum condimentum mollis imperdiet feugiat euismod fringilla hendrerit. Hendrerit egestas tincidunt at ullamcorper per et, nec tempor sed consequat.",
    retribucionText:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat placerat sem mi per, enim aliquet vestibulum condimentum mollis imperdiet feugiat euismod. ",
  },
  // {
  //   title: "Nombre del reto 4",
  //   sectorText:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum dapibus sodales. Cras id porta risus.",
  //   retribucionText: "user_green",
  // },
  // {
  //   title: "Nombre del reto 5",
  //   sectorText:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum dapibus sodales. Cras id porta risus.",
  //   retribucionText: "user_green",
  // },
  // {
  //   title: "Nombre del reto 6",
  //   sectorText:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum dapibus sodales. Cras id porta risus.",
  //   retribucionText: "user_green",
  // },
];

export interface InformationsCardAcademiaProps {}

const RetosCardsCorporativo: React.FC<InformationsCardAcademiaProps> = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      width="100%"
      // pt={3}
      pb={3}
      sx={{ bgcolor: "" }}
    >
      <Grid
        item
        sx={{
          bgcolor: "",
          // borderTop: "solid 1px",
          // borderColor: (theme) => theme.colors.primary.dark,
        }}
        xs={12}
      >
        <Typography
          variant="body1"
          fontSize={18}
          fontWeight={true ? 700 : undefined}
        >
          Retos
        </Typography>
      </Grid>

      {data.map((data,index) => (
        <Grid key={index} item sx={{ bgcolor: "" }} xs={12} sm={12} md={6} lg={4} xl={4}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                // position: 'absolute',
                top: 0,
                zIndex: 1,
                // borderRadius: "13px",
                border: "1px solid",
                borderColor: (theme) => theme.colors.primary.dark,
                pt: "15px",
                px: "20px",
                pb: "30px",
              }}
            >
              <Typography
                variant="body1"
                fontSize={18}
                fontWeight={true ? 700 : undefined}
              >
                {data.title}
              </Typography>

              <Typography
                variant="body1"
                fontSize={18}
                fontWeight={true ? 700 : undefined}
              >
                Sector
              </Typography>

              <Typography variant="body1">{data.sectorText}</Typography>
              <Typography
                variant="body1"
                fontSize={18}
                fontWeight={true ? 700 : undefined}
              >
                Retribución
              </Typography>

              <Typography variant="body1">{data.retribucionText}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default RetosCardsCorporativo;
