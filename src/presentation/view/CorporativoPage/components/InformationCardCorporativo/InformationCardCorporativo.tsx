import { Stack, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { CustomBox } from "@/presentation/components";

interface InformationCardProps {
  title: string;
  titleBold?: boolean;
  children: ReactNode;
  width?: {
    mobile: number;
    desktop: number;
  };
  height?: {
    mobile: number;
    desktop: number;
  };
  minHeight?: any;
}

const InformationCardCorporativo: FC<InformationCardProps> = ({
  title,
  titleBold = false,
  children,
  height = { mobile: undefined, desktop: undefined },
  width = { mobile: undefined, desktop: undefined },
  minHeight = undefined,
}) => {
  return (
    <CustomBox
      sxProps={{
        mb: { xs: "10px", minHeight: minHeight },
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
        sx={{
          width: {
            xs: width.mobile,
            sm: width.desktop,
          },
          height: {
            xs: height.mobile,
            sm: height.desktop,
          },
        }}
      >
        <Typography
          variant="body1"
          fontSize={18}
          fontWeight={titleBold ? 700 : undefined}
        >
          {title}
        </Typography>

        {children}
      </Stack>
    </CustomBox>
  );
};

export default InformationCardCorporativo;
