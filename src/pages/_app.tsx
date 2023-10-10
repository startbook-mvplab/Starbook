import { GlobalProvider } from "@/presentation/contexts/GlobalContext/GlobalProvider";
import { SidebarProvider } from "@/presentation/contexts/SidebarContext";
import ThemeProvider from "@/presentation/theme/ThemeProvider";
import { BuscadorEmpresasProvider } from "@/presentation/view/BuscadorEmpresasPage/context/BuscadorEmpresasProvider";
import { CssBaseline } from "@mui/material";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import '@/presentation/styles/globals.css'


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps, }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);


  return <>
    {
      getLayout(
        <GlobalProvider>
          <HelmetProvider>
            <SidebarProvider>
              <ThemeProvider>
                {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
                <CssBaseline />
                {/* <BuscadorEmpresasProvider> */}
                  <Component {...pageProps} />
                {/* </BuscadorEmpresasProvider> */}
                {/* </LocalizationProvider> */}
              </ThemeProvider>
              {/* <BrowserRouter>
          <App />
        </BrowserRouter> */}
            </SidebarProvider>
          </HelmetProvider>
        </GlobalProvider >
      )
    }
  </>
  // return (
  // <Provider store={store}>

  // {
  //   getLayout(
  //     <ThemeProvider theme={theme}>
  //       <CssBaseline />
  //       <Component {...pageProps} />
  //     </ThemeProvider>
  //   )
  // }
  // </Provider>)

}



