import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import About from "../Component/About";
import Career from "../Component/Career";
import MyHome from "../Component/MyHome";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '',
                        element: <MyHome/>,
                        loader: () => fetch('news.json'),
                    },
                    {
                        path: '/about',
                        element: <About/>
                    },
                    {
                        path: '/career',
                        element: <Career/>
                    },
                ]
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
                loader: () => fetch('news.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }    
]);

export default router;