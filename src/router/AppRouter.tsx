import { Navigate, Route, Routes } from "react-router-dom"
import { ComponentsPage, FrontedPage, BackendPage } from "../pages"
import { Navbar } from "../components"

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/fronted" element={<FrontedPage />} />
        <Route path="/backend" element={<BackendPage />} />

        <Route path="/" element={<Navigate to="/components" />} />
      </Routes>
    </>
  )
}