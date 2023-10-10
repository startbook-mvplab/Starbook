import { LoginView } from "@/presentation/view/LoginPage"
import { NextPageWithLayout } from "../_app"
import { BuscadorEmpresasView } from "@/presentation/view/BuscadorEmpresasPage"
import { ReactElement } from "react"
import { BuscadorEmpresasProvider } from "@/presentation/view/BuscadorEmpresasPage/context/BuscadorEmpresasProvider"
import { BaseLayout } from "@/presentation/layouts/BaseLayout"


const BuscadorPage: NextPageWithLayout = () => {


  return (
    <BuscadorEmpresasView />
  )
}

BuscadorPage.getLayout = function getLayout(page: ReactElement) {

  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}

export default BuscadorPage
