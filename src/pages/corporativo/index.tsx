import { LoginView } from "@/presentation/view/LoginPage"
import { NextPageWithLayout } from "../_app"
import { CorporativoView } from "@/presentation/view/CorporativoPage"
import { ReactElement } from "react"


const CorporativoPage: NextPageWithLayout = () => {


  return <CorporativoView />
}

CorporativoPage.getLayout = function getLayout(page: ReactElement) {

  return (
      <>
        {page}
      </>
  )
}

export default CorporativoPage
