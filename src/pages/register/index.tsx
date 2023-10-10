import { RegisterView } from "@/presentation/view/RegisterPage"
import { NextPageWithLayout } from "../_app"
import { ReactElement } from "react"



const RegisterPage: NextPageWithLayout = () => {


  return <RegisterView />
}

RegisterPage.getLayout = function getLayout(page: ReactElement) {

  return (
      <>
        {page}
      </>
  )
}

export default RegisterPage
