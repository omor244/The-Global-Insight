import { Outlet } from "react-router";
import Navber from "../Components/Navber/Navber";


const MainLayout = () => {
    return (
        <div>
            <header className="sticky top-0 z-50 ">
                <Navber></Navber>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default MainLayout;