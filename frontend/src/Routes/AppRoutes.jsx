import { Route, Routes } from "react-router-dom"
import { Login } from "../Pages/Login"
import { SignUp } from "../Pages/SignUp"
import { Admin } from "../Pages/admin"


export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    )
}