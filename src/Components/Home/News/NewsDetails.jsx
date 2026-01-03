import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Link, useParams } from "react-router";
import NewsCardSkeleton from "../../NewsCard/NewsCardSkeleton";


const NewsDetails = () => {

    const { id } = useParams()
    const { data: newsDetails = [], isLoading } = useQuery({
        queryKey: ["newsDetails"],
        queryFn: async () => {
            const res = await axios('/AllNews.json');

            return res.data
        }
    });

console.log(newsDetails)

    if (isLoading) return <NewsCardSkeleton></NewsCardSkeleton>

    const singleNews = [...newsDetails].find(s => s.id == id) || {}

  
    return (
        <div className="bg-white min-h-screen pb-20">

            <div className="max-w-4xl mx-auto px-4 py-6">
                <Link to="/" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition mb-6 group">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Back to Newsfeed</span>
                </Link>

                <div className="space-y-4">
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        {singleNews.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                        {singleNews.title}
                    </h1>
                    <p className="text-xl text-gray-500 italic leading-relaxed">
                        {singleNews.description}
                    </p>


                    <div className="flex flex-wrap items-center gap-6 py-6 border-y border-gray-100 text-gray-600 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold">
                                {singleNews.author.charAt(0)}
                            </div>
                            <span className="font-bold text-gray-900">{singleNews.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar size={16} /> {singleNews.date}
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock size={16} /> 5 min read
                        </div>
                        <button className="ml-auto flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition">
                            <Share2 size={16} /> Share
                        </button>
                    </div>
                </div>


                <div className="my-8">
                    <img
                        src={singleNews.image}
                        alt={singleNews.title}
                        className="w-full h-[400px] md:h-[550px] object-cover rounded-2xl shadow-lg"
                    />
                    <p className="text-xs text-gray-400 mt-3 text-center">
                        Photo: Global Insight Multimedia Team via Unsplash
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 mt-10">
                    <div className="w-full md:w-3/4">
                        <p className="text-lg md:text-xl text-gray-800 leading-loose first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
                            {singleNews.content}
                        </p>

                        <p className="mt-6 text-lg text-gray-800 leading-loose">
                            Industry experts suggest that this trend is likely to continue throughout the first half of 2026.
                            The integration of sustainable technologies and smarter fiscal policies has created a unique
                            environment for both institutional and retail investors. However, caution remains the
                            watchword as geopolitical tensions could still impact the global supply chain.
                        </p>
                    </div>

                    <div className="w-full md:w-1/4 border-l border-gray-100 pl-6 h-fit sticky top-24">
                        <h4 className="font-black text-gray-900 uppercase tracking-tighter mb-4 border-b-2 border-blue-600 pb-1">
                            Trending Now
                        </h4>
                        <div className="space-y-6">
                            {newsDetails?.filter(n => n.id !== singleNews.id).slice(0, 7).map(item => (
                                <Link key={item.id} to={`/NewsDetails/${item.id}`} className="block group">
                                    <p className="text-xs font-bold text-blue-600 uppercase mb-1">{item.category}</p>
                                    <h5 className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition line-clamp-2">
                                        {item.title}
                                    </h5>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;