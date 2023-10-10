import { LoginView } from "@/presentation/view/LoginPage"
import { NextPageWithLayout } from "../_app"
import VerifyPasswordView from "@/presentation/view/VerifyPasswordPage/VerifyPasswordView"
import { ReactElement } from "react"


const VerifyPasswordPage: NextPageWithLayout = () => {


  return <VerifyPasswordView />
}

VerifyPasswordPage.getLayout = function getLayout(page: ReactElement) {

  return (
      <>
        {page}
      </>
  )
}

export default VerifyPasswordPage
