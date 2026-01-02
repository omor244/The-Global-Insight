import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import NewsCardSkeleton from "../../NewsCard/NewsCardSkeleton";
import NewsCard from "../../NewsCard/NewsCard";

const News = () => {

    const { data: news = [], isLoading } = useQuery({
        queryKey: ['AllNews'],
        queryFn: async () => {
            const res = await axios('/public/AllNews.json')
     
           return  res.data 
        }
    })



    if (isLoading) return <>
        <div className=" max-w-7xl mx-auto grid grid-cols-3 gap-4">
            {[...Array(20)].map((_, idx) => <NewsCardSkeleton key={idx}></NewsCardSkeleton> )  } 
       </div>
    </>
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            

            <div className="grid grid-cols-3 gap-4">
                {
                 news.map(item => <NewsCard key={item.id} news={item} ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default News;