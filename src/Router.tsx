import { Routes, Route } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Home } from "./pages/Home"
import { PostDetails } from "./pages/PostDetails"


export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/post/:id" element={<PostDetails />}/>
      </Route>
    </Routes>
  )
}