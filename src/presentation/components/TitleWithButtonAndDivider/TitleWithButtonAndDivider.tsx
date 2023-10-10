import { Stack, Typography, Button, Divider, Box } from "@mui/material";
import { FC } from "react";


interface TitleWithButtonAndDividerProps {
    title?: string,
}

const TitleWithButtonAndDivider: FC<TitleWithButtonAndDividerProps> = ({title}) => {
    return (
        <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
            spacing={2}
            width='100%'
            // pb={2}
            py={2}
        >
            <Typography variant="h3" fontSize={22}>
                {title}
            </Typography>
            {/* <Button
                variant="contained"

                sx={{
                    bgcolor: '#02FBA8',
                    borderRadius: 14,
                    height: 27,
                    width: 90,
                }}
            >
                <Typography fontSize={12} sx={{ color: 'black' }}>
                    Ver mas
                </Typography>
            </Button> */}
           <Divider
            
            // variant="fullWidth"
            orientation="horizontal"
            sx={{
                display: 'flex',
                flexGrow: 1,
                // width: (theme) => `calc(100% - ${theme.sidebar.width} - 150px )`,
                height: '0.5px',
                bgcolor: (theme) => theme.colors.primary.dark,
            }}
        />
        </Stack>
    );
}

export default TitleWithButtonAndDivider;