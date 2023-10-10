import { Footer } from "@/presentation/components";
import { GlobalProvider } from "@/presentation/contexts/GlobalContext/GlobalProvider";
import ThemeProvider from "@/presentation/theme/ThemeProvider";
import { BuscadorEmpresasProvider } from "@/presentation/view/BuscadorEmpresasPage/context/BuscadorEmpresasProvider";
import { Box} from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

export interface BaseLayoutInterface {
  children: ReactNode;
}

const BaseLayout: React.FC<BaseLayoutInterface> = ({ children }) => {

  const router = useRouter();

  return (
    // <GlobalProvider>
    <BuscadorEmpresasProvider>
      <ThemeProvider>
        <>
          <Head>
            <title>Starbook</title>
            <meta name="description" content="Starbook" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {/* <Box
          sx={{ paddingTop:{xs:"5px",sm:"20px",md:"10px",lg:"10px",xl:"10px",},}}>
        </Box> */}

          <Box sx={{ flex: 1, height: '100%' }}>
            {children || <Outlet />}
          </Box>

          {/* <Footer /> */}

        </>
      </ThemeProvider>
    </BuscadorEmpresasProvider>
    // </GlobalProvider>

  );
};

export default BaseLayout;
