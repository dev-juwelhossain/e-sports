import { createBrowserRouter } from "react-router";
import MainLayout from "../src/layout/MainLayout";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Blogs from "../src/pages/Blogs";
import Contacts from "../src/pages/Contacts";
import Forums from "../src/pages/Forums";
import News from "../src/pages/News";
import Tournaments from "../src/pages/Tournaments";


const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element:
        <MainLayout />
        ,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/contact',
                element: <Contacts/>
            },
            {
                path: '/forums',
                element: <Forums/>
            },
            {
                path:'/news',
                element: <News/>
            },
            {
                path:'/tournaments',
                element: <Tournaments/>
            },
           
        ]
    

}]);

export default MainRoutes;