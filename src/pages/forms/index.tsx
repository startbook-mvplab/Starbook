import { LoginView } from "@/presentation/view/LoginPage"
import { NextPageWithLayout } from "../_app"
import { StartupFormView } from "@/presentation/view/Forms/views/StartupFormView"
import { ReactElement } from "react"
import { FormsLayout } from "@/presentation/layouts/FormsLayout"


const FormsPage: NextPageWithLayout = () => {


  return <StartupFormView />
}

FormsPage.getLayout = function getLayout(page: ReactElement) {

  return (
      <FormsLayout>
        {page}
      </FormsLayout>
  )
}

export default FormsPage
