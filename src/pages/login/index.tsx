import { LoginView } from "@/presentation/view/LoginPage"
import { NextPageWithLayout } from "../_app"
import { ReactElement } from "react"


const LoginPage: NextPageWithLayout = () => {


  return <LoginView />
}

LoginPage.getLayout = function getLayout(page: ReactElement) {

  return (
      <>
        {page}
      </>
  )
}

export default LoginPage
