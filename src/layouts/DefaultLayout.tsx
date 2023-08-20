import { Header } from "../components/Header"
import { Outlet } from "react-router-dom"

export const DefaultLayout = () => {
  return (
    <div className="bg-base-background h-screen">
      <Header />
      <Outlet />
    </div>
  )
}