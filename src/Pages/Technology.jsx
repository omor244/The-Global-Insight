import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import NewsCard from '../Components/NewsCard/NewsCard';

const Technology = () => {
    
    const category = {
        name: "Technology",
    }

    const { data: national = [], isLoading } = useQuery({
        queryKey: ["nationalItem"],
        queryFn: async () => {
            const res = await axios('/AllNews.json')

            return res.data
        },


    })



    if (isLoading) return <>
        <div className="flex min-h-screen justify-center items-center ">
            <h2 className="text-5xl font-bold">Loading...</h2>
        </div>
    </>

    const filterdata = [...national].filter(items => items.category == category.name)




    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    filterdata?.map(item => <NewsCard key={item.id} news={item} ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default Technology;