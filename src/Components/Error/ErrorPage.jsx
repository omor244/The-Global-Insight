import React from 'react';
import { Link, useRouteError } from 'react-router';
import { Home, ArrowLeft, Search, AlertCircle } from 'lucide-react';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-24">
            <div className="max-w-2xl w-full text-center">
                {/* Visual Element */}
                <div className="relative mb-8">
                    <h1 className="text-[150px] md:text-[200px] font-black text-gray-200 leading-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <AlertCircle size={80} className="text-blue-600 animate-bounce" />
                    </div>
                </div>

                {/* Text Content */}
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight uppercase">
                    Headline Missing!
                </h2>
                <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20"
                    >
                        <Home size={20} />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all"
                    >
                        <ArrowLeft size={20} />
                        Go Back
                    </button>
                </div>

                {/* Suggested Categories for a News Site */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
                        Try searching these instead
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["National", "International", "Sports", "Technology"].map((tag) => (
                            <Link
                                key={tag}
                                to={`/${tag.toLowerCase()}`}
                                className="bg-white border border-gray-100 px-4 py-2 rounded-full text-sm font-semibold text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm"
                            >
                                #{tag}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;