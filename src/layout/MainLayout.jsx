import { Outlet } from "react-router";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";


const MainLayout = () => {
    return (
        <div>
            <TopNav />
            <Outlet />
            <BottomNav />
        </div>
    );
};

export default MainLayout;