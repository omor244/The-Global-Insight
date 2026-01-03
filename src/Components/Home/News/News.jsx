import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import NewsCardSkeleton from "../../NewsCard/NewsCardSkeleton";
import NewsCard from "../../NewsCard/NewsCard";
import { Context } from "../../../Contex/Provider";
import { use } from "react";

const News = () => {
     const { searchQuery, setSearchQuery } = use(Context);
    const { data: news = [], isLoading } = useQuery({
        queryKey: ['AllNews'],
        queryFn: async () => {
            const res = await axios('/AllNews.json')
     
           return  res.data 
        }
    })


    const filteredNews = news?.filter((news) =>
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) 
       
    );


    if (isLoading) return <>
        <div className=" max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
            {[...Array(20)]?.map((_, idx) => <NewsCardSkeleton key={idx}></NewsCardSkeleton> )  } 
       </div>
    </>
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                 filteredNews?.map(item => <NewsCard key={item.id} news={item} ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default News;