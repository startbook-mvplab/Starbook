import { ICompanyInfo } from "@/data/models";
import { Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { NameAndRol, SocialNetworks, DateAndUserName, WebAndEmail, Partners, Category, Sector } from "../CompanyInfo/CompanyInfo";
import { CustomIcon } from "../CustomIcon";
import { IconTextItem } from "../IconTextItem";
import { showFieldWithValidation } from "@/presentation/utilities";




const CompanyRowInfo: FC<ICompanyInfo> = ({ company }) => {

    const fontSize = 11;

    return (
        <Grid
            alignItems="center"
            // pr='50px'
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: "space-between",
                width: '100%'
            }}
        >

            <NameAndRol
                titleVariant="h3"
                subtitlefontSize={fontSize}
                company={company}
            />
            <Sector
                titlefontSize={fontSize}
                subtitleVariant='h5'
                company={company}
            />
            <SocialNetworks
                fontSize={fontSize}
                company={company}
            />
            <DateAndUserName
                fontSize={fontSize}
                company={company}
            />
            <WebAndEmail
                fontSize={fontSize}
                company={company}
            />
            <Partners
                fontSize={fontSize}
                company={company}
            />
            <MercadoPotencial />
        </Grid>
    );
}

export default CompanyRowInfo



export const CompanySimpleRowInfo: FC<ICompanyInfo> = ({ company }) => {
    const fontSize = 11;

    return (
        <Grid
            alignItems="center"
            // pr='50px'
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: "space-between",
                width: { xs: '90%', sm: '100%' }
            }}>

            <NameAndRol
                titleVariant="h3"
                subtitlefontSize={fontSize}
                company={company}
            />
            <Sector titlefontSize={fontSize} subtitleVariant='h5' company={company}

            />
            <SocialNetworks
                fontSize={fontSize}
                company={company}
            />
            {/* <DateAndUserName
                fontSize={fontSize}
                company={company}
            /> */}
            <IconTextItem
                iconName='user'
                text={showFieldWithValidation(company?.nombre_contacto_principal)}
                fontSize={fontSize}
            />
            <WebAndEmail
                fontSize={fontSize}
                company={company}
            />
            {/* <Partners
                fontSize={fontSize}
                company={company}
            /> */}
        </Grid>
    );
}


const MercadoPotencial = () => {
    return (
        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            pt='10px'
        >
            <Typography variant='h4'>
                Mercado Potencial
            </Typography>
            <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
            // width='100%'
            >
                $
                <Typography variant='h3'>
                    630.000
                </Typography>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <CustomIcon
                        iconName='subida1'
                        width={15}
                        height={10}
                    />
                    USD
                </Stack>
                <CustomIcon
                    iconName='green_chart'
                    width={100}
                    height={50}
                />
            </Stack>
        </Stack>
    );
}
