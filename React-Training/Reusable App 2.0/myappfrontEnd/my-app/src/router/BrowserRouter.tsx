import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import SettingsPage from "../pages/settings";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Login></Login>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path: '/settings',
        element : <SettingsPage></SettingsPage>
    }

])

export default router;