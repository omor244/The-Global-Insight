import { createBrowserRouter } from "react-router";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Components/Home/Home";
import HeroDetailspage from "../Components/Home/HeroSection/HeroDetailspage";
import NewsDetails from "../Components/Home/News/NewsDetails";
import ErrorPage from "../Components/Error/ErrorPage";
import Technology from "../Pages/Technology";
import Sports from "../Pages/Sports";
import International from "../Pages/international";
import Business from "../Pages/Business";
import NationalPage from "../Pages/National";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
            {
                path: 'national',
                element: <NationalPage></NationalPage>
            },
            {
                path: 'international',
                element: <International></International>
            },
            {
                path: 'sports',
                element: <Sports></Sports>
            },
            {
                path: 'technology',
                element: <Technology></Technology>
            },
            {
                path: 'business',
                element: <Business></Business>
            },
        ]
    },
]);