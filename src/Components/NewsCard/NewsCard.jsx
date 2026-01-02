import React from 'react';
import { Link } from 'react-router';
import { Calendar, User, ArrowRight } from 'lucide-react';

const NewsCard = ({ news }) => {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full">
            {/* Image Section */}
            <div className="relative overflow-hidden h-56">
                <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-widest shadow-lg">
                        {news.category}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-gray-400 text-[11px] font-semibold mb-3 uppercase tracking-tight">
                    <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-blue-500" />
                        {news.date}
                    </div>
                    <div className="flex items-center gap-1">
                        <User size={14} className="text-blue-500" />
                        {news.author}
                    </div>
                </div>

                {/* Title */}
                <div>
                    <h3 className="text-xl font-extrabold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 mb-3">
                        {news.title}
                    </h3>
                </div>

                {/* Short Description */}
                <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed mb-6">
                    {news.description}
                </p>

                {/* Footer Link */}
                <div className="mt-auto pt-4 border-t border-gray-50">
                    <Link
                        to={`/NewsDetails/${news.id}`}
                        className="flex items-center gap-2 text-blue-600 font-bold text-[11px] uppercase tracking-wider group/btn"
                    >
                        Read Full Story
                        <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;