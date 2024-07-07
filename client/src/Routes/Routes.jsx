import {
    createBrowserRouter,
} from "react-router-dom";
import Main from '../layout/Main.jsx';
import Contact from "../pages/Contact/Contact.jsx";
import Dashboard from '../pages/Dashboard/Dashboard';
import Home from "../pages/Home/Home/Home";
import OurMenu from '../pages/OurMenu/OurMenu';
import OurShop from '../pages/OurShop/OurShop';
import SignIn from "../pages/SignIn/SignIn.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children:[
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: 'ourMenu',
                element: <OurMenu/>,
            },
            {
                path: 'dashboard',
                element: <Dashboard/>,
            },
            {
                path: 'contact',
                element: <Contact/>,
            },
            {
                path: 'ourShop',
                element: <OurShop/>,
            },
            {
                path: 'signIn',
                element: <SignIn/>,
            },
        ]
    }
])
