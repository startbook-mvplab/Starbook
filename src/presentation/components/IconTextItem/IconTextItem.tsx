import { Stack, Typography } from "@mui/material";
import { FC } from "react"
import { CustomIcon } from "../CustomIcon";

interface IconTextItemProps {
    iconName: string,
    iconHeight?: number,
    iconWidth?: number,
    text: string,
    fontSize?: number
}

const IconTextItem: FC<IconTextItemProps> =
    ({ iconName, text, iconHeight = 12, iconWidth = 12, fontSize = 14 }) => {
        return (
            <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
            >
                <CustomIcon
                    iconName={iconName}
                    height={iconHeight}
                    width={iconWidth}
                />
                <Typography fontSize={fontSize}>
                    {text}
                </Typography>

            </Stack>
        )
    }

export default IconTextItem;