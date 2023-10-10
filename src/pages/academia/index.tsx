import { LoginView } from "@/presentation/view/LoginPage"
import { NextPageWithLayout } from "../_app"
import { AcademiaView } from "@/presentation/view/AcademiaPage"
import { ReactElement } from "react"


const AcademiaPage: NextPageWithLayout = () => {


  return <AcademiaView />
}

AcademiaPage.getLayout = function getLayout(page: ReactElement) {

  return (
      <>
        {page}
      </>
  )
}

export default AcademiaPage
