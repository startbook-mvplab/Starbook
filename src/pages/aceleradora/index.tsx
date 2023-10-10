import { LoginView } from "@/presentation/view/LoginPage"
import { NextPageWithLayout } from "../_app"
import { AceleradoraIncubadoraView } from "@/presentation/view/AceleradoraIncubadoraPage"
import { ReactElement } from "react"


const AceleradoraPage: NextPageWithLayout = () => {


  return <AceleradoraIncubadoraView />
}

AceleradoraPage.getLayout = function getLayout(page: ReactElement) {

  return (
      <>
        {page}
      </>
  )
}

export default AceleradoraPage
