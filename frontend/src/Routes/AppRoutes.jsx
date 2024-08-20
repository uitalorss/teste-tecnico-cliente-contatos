import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login } from "../Pages/Login"
import { SignUp } from "../Pages/SignUp"
import { Admin } from "../Pages/admin"
import { Dashboard } from "../Pages/Dashboard"


export const AppRoutes = () => {
    const routes = [
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/signup",
            element: <SignUp />
        },
        {
            path: "/admin",
            element: <Admin />
        },
        {
            path: "/user/:userId",
            element: <Dashboard />
        }
    ]

    const router = createBrowserRouter([
        ...routes
    ])

    return <RouterProvider router={router} />
}