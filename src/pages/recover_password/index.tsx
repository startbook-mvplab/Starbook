import RecoverPasswordView from "@/presentation/view/RecoverPasswordPage/RecoverPasswordView"
import { NextPageWithLayout } from "../_app"
import { ReactElement } from "react"



const RecoverPasswordPage: NextPageWithLayout = () => {


  return <RecoverPasswordView />
}

RecoverPasswordPage.getLayout = function getLayout(page: ReactElement) {

  return (
      <>
        {page}
      </>
  )
}

export default RecoverPasswordPage
