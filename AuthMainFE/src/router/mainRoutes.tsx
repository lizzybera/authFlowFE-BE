import {createBrowserRouter} from "react-router-dom"
import Register from "../pages/auth/Register"
import SignIn from "../pages/auth/SignIn"
import LandingPage from "../pages/screen/LandingPage"
import HomePage from "../pages/screen/HomePage"
import PrivateRouter from "./PrivateRouter"
import Errors from "../error/Errors"

export const mainRoutes = createBrowserRouter([
    {
        path : "/reg",
        element : <Register />
    },
    {
        path : "/sign",
        element : <SignIn />
    },
    {
        path : "/land",
        element : <LandingPage />
    },
    {
        path : "*",
        element : <Errors />
    },
    {
        path : "/",
        element : 
        <PrivateRouter>
        <HomePage />
        </PrivateRouter>
    },
])