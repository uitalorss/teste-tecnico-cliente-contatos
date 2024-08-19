import { Route, Routes } from "react-router-dom"
import { Login } from "../Pages/Login"
import { SignUp } from "../Pages/SignUp"


export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}