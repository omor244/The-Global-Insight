import { Link } from 'react-router';
import newsData from '../../../../public/newdata.json';

const Banner = () => {

    const featuredNews = newsData.find(item => item.isFeatured);
    const sideNews = newsData.filter(item => !item.isFeatured).slice(0, 3);

    return (
        <section className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto ">

                {/* --- Main Featured News (Big Left Block) --- */}
                {featuredNews && (
                    <Link
                        to={`Details/${featuredNews.id}`}
                        className="md:col-span-2 relative group overflow-hidden rounded-xl bg-gray-900 cursor-pointer"
                    >
                        <img
                            src={featuredNews.image}
                            alt={featuredNews.title}
                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-6 flex flex-col justify-end">
                            <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 w-fit rounded-full uppercase tracking-wider mb-4">
                                {featuredNews.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-black text-white leading-[1.1] mb-3">
                                {featuredNews.title}
                            </h1>
                            <p className="text-gray-300 text-sm md:text-base line-clamp-2 max-w-xl">
                                {featuredNews.description}
                            </p>
                        </div>
                    </Link>
                )}

                {/* --- Right Side Grid (Small Blocks) --- */}
                <div className="md:col-span-2 grid grid-rows-2 gap-4">

                    {/* Top Small Block (SideNews[0]) */}
                    {sideNews[0] && (
                        <Link
                            to={`Details/${sideNews[0].id}`}
                            className="relative group overflow-hidden rounded-xl bg-gray-900 cursor-pointer"
                        >
                            <img
                                src={sideNews[0].image}
                                alt={sideNews[0].title}
                                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
                                <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                                    {sideNews[0].category}
                                </span>
                                <h3 className="text-xl font-bold text-white leading-tight">
                                    {sideNews[0].title}
                                </h3>
                            </div>
                        </Link>
                    )}

                    {/* Bottom Row Two Columns (SideNews[1] and SideNews[2]) */}
                    <div className="grid grid-cols-2 gap-4">
                        {sideNews.slice(1, 3)?.map((item) => (
                            <Link
                                to={`Details/${item.id}`}
                                key={item.id}
                                className="relative group overflow-hidden rounded-xl bg-gray-800 cursor-pointer"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent">
                                    <h4 className="text-sm font-bold text-white line-clamp-2 leading-snug">
                                        {item.title}
                                    </h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;