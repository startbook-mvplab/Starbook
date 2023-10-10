import { DashboardView } from "@/presentation/view/DashboardPage"
import { NextPageWithLayout } from "./_app"
import { ReactElement } from "react"
import { BaseLayout } from "@/presentation/layouts/BaseLayout"
import { BuscadorEmpresasView } from "@/presentation/view/BuscadorEmpresasPage"
import { BuscadorEmpresasProvider } from "@/presentation/view/BuscadorEmpresasPage/context/BuscadorEmpresasProvider"


const BuscadorPage: NextPageWithLayout = () => {
  // return < HomeView />
  return (

      <BuscadorEmpresasView />
  )
}


BuscadorPage.getLayout = function getLayout(page: ReactElement) {

  return (
    <BaseLayout >
      {page}
    </BaseLayout>
  )
}

export default BuscadorPage
