import { TitleWithButtonAndDivider } from "@/presentation/components";
import CompanyRowInfo from "@/presentation/components/CompanyRowInfo/CompanyRowInfo";
import { Stack } from "@mui/material";


const Portafolio = () => {
    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            width='100%'
        >
            <TitleWithButtonAndDivider title="Portafolio" />
            <CompanyRowInfo />
            <CompanyRowInfo />

        </Stack>
    );
}

export default Portafolio;