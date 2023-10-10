import { LoginView } from "@/presentation/view/LoginPage"
import { NextPageWithLayout } from "../_app"
import { InversionistaView } from "@/presentation/view/InversionistaPage"
import { ReactElement } from "react"


const InversionistaPage: NextPageWithLayout = () => {


  return <InversionistaView />
}

InversionistaPage.getLayout = function getLayout(page: ReactElement) {

  return (
      <>
        {page}
      </>
  )
}

export default InversionistaPage
