import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import College from "../pages/Home/College/College";
import Admission from "../pages/Home/Admission/Admission";
import MyCollege from "../pages/Home/myCollege/MyCollege";
import CartDetails from "../pages/Home/CartDetails/CartDetails";
import Register from "../pages/Home/Registration/Register";
import Login from "../pages/Home/Login/Login";
import Profile from "../pages/Home/Profile/Profile";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:"College",
                element: <College></College>
            },
            {
                path:"Admission",
                element: <Admission></Admission>
            },
            {
                path:"MyCollege",
                element: <MyCollege></MyCollege>
            },
            {
                path:"CartDetails/:id",
                element: <CartDetails ></CartDetails>,
                loader: ({ params }) => params.id
            },
            {
                path: "Register",
                element: <Register></Register>
            },
            {
                path: "Login",
                element: <Login></Login>
            },
            {
                path: "Profile",
                element: <Profile></Profile>
            }

        ]
    }
])

export default router;