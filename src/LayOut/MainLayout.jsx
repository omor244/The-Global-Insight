import { Outlet } from "react-router";
import Navber from "../Components/Navber/Navber";
import Footer from "../Components/Footer/Footer";


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
          <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;