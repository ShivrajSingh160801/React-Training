import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/login";
import Register from "../pages/Register/register";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Login></Login>
    },
    {
        path : '/register',
        element : <Register></Register>
    }
])

export default router;