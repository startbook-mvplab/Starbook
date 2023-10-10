import { TitleWithButtonAndDivider } from "@/presentation/components";
import CompanyRowInfo from "@/presentation/components/CompanyRowInfo/CompanyRowInfo";
import { Stack } from "@mui/material";

const StartupsEncubacion = () => {
    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            width='100%'
        >
            <TitleWithButtonAndDivider title="Startups en encubacion" />
            <CompanyRowInfo />
            <CompanyRowInfo />
            <CompanyRowInfo />
            <CompanyRowInfo />

        </Stack>
    );
}

export default StartupsEncubacion;