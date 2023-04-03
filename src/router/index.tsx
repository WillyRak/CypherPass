import Auth from "@/pages/auth";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/pages/login/index";


export const Router = createBrowserRouter([
    {
        path: "",
        element: <Auth/>,
        children: [
            {
                element: <Login/>,
                index: true
                
            },
            {
                path: "",
            }
        ]
    },
])