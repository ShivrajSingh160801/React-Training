import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/login";
import Register from "../components/Register/register";

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