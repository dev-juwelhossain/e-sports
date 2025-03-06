import { createBrowserRouter } from "react-router";
import MainLayout from "../src/layout/MainLayout";
import Home from "../src/pages/Home";
import About from "../src/pages/About";


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
           

        ]
    

}]);

export default MainRoutes;