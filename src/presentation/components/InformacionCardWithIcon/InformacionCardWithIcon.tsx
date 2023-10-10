import { Stack, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { CustomBox } from "../CustomBox";
import { CustomIcon } from "../CustomIcon";

interface InformationCardProps {
  title: string;
  titleBold?: boolean;
  children: ReactNode;
  width?: number;
  iconName?: string;
}

const InformacionCardWithIcon: FC<InformationCardProps> = ({
  title,
  titleBold = false,
  children,
  width,
  iconName = "subida2",
}) => {
  return (
    <CustomBox>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
        width={!width ? undefined : width}
        minHeight={165}
      >
        <CustomIcon iconName={iconName} width={40} height={40} />
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

export default InformacionCardWithIcon;
