import { LoginView } from "@/presentation/view/LoginPage"
import { NextPageWithLayout } from "../_app"
import { StartupView } from "@/presentation/view/StartupPage"
import { ReactElement } from "react"
import { StartupPageProvider } from "@/presentation/view/StartupPage/context/StartupPageProvider"
import { SidebarLayout } from "@/presentation/layouts/SidebarLayout"
import { BaseLayout } from "@/presentation/layouts/BaseLayout"


const StartupPage: NextPageWithLayout = () => {

  return (
    <SidebarLayout>
      <StartupView />
    </SidebarLayout>
  )
}

StartupPage.getLayout = function getLayout(page: ReactElement) {

  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}

export default StartupPage
