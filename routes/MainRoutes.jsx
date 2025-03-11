import { createBrowserRouter } from "react-router";
import MainLayout from "../src/layout/MainLayout";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Blogs from "../src/pages/Blogs";
import Contacts from "../src/pages/Contacts";
import Forums from "../src/pages/Forums";
import News from "../src/pages/News";
import Tournaments from "../src/pages/Tournaments";
import PlayStation from "../src/pages/PlayStation";
import Xbox from "../src/pages/Xbox";
import Android from "../src/pages/Android";
import Apple from "../src/pages/Apple";
import Windows from "../src/pages/Windows";


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
            {
                path:'/ps5',
                element: <PlayStation/>
            },
            {
                path:'/xbox',
                element: <Xbox/>
            },
            {
                path:'/android',
                element: <Android/>
            },
            {
                path:'/ios',
                element: <Apple/>
            },
            {
                path:'/windows',
                element: <Windows/>
            }

           
        ]
    

}]);

export default MainRoutes;