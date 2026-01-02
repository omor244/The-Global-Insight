import { createBrowserRouter } from "react-router";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Components/Home/Home";
import HeroDetailspage from "../Components/Home/HeroSection/HeroDetailspage";
import NewsDetails from "../Components/Home/News/NewsDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home/>
            }, 
            {
                path: 'Details/:id',
                element: <HeroDetailspage></HeroDetailspage>
            },
            {
                path: 'NewsDetails/:id',
                element: <NewsDetails></NewsDetails>
            },
        ]
    },
]);