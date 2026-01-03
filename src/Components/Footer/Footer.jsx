import React from 'react';
import { Link } from 'react-router';
import { Facebook, Twitter, Youtube, Instagram, Mail, ArrowRight, Globe } from 'lucide-react';

const Footer = () => {
    const categories = ["National", "International", "Sports", "Technology", "Business", "Science"];

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 ">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-black text-white tracking-tighter">
                                THE GLOBAL <span className="text-blue-500">INSIGHT</span>
                            </h2>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-1">
                                Truth In Every Perspective
                            </p>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Leading the way in digital journalism. We bring you the latest updates from Bangladesh and across the globe with integrity and speed.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-red-500 transition-colors"><Youtube size={20} /></a>
                            <a href="#" className="hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links / Categories */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b border-blue-500 w-fit pb-1">
                            Categories
                        </h4>
                        <ul className="grid grid-cols-2 gap-3">
                            {categories.map((cat) => (
                                <li key={cat}>
                                    <Link to={`/category/${cat}`} className="text-sm hover:text-blue-400 hover:translate-x-1 transition-all inline-block">
                                        {cat}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Important Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b border-blue-500 w-fit pb-1">
                            Resources
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="hover:text-blue-400">About Us</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">Editorial Guidelines</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">Contact Support</Link></li>
                            <li><Link href="#" className="hover:text-blue-400">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Subscription */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 border-b border-blue-500 w-fit pb-1">
                            Newsletter
                        </h4>
                        <p className="text-sm text-gray-400 mb-4">
                            Get the latest headlines delivered to your inbox daily.
                        </p>
                        <form className="relative group">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-blue-500 transition-all"
                            />
                            <button className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700 p-1.5 rounded-md transition-colors">
                                <ArrowRight size={18} className="text-white" />
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
                    <div className="flex items-center gap-2">
                        <Globe size={14} />
                        <span>English (International)</span>
                    </div>
                    <p>© 2026 The Global Insight. All Rights Reserved. Developed with Passion.</p>
                    <div className="flex items-center gap-6">
                        <span className="cursor-pointer hover:text-white transition-colors">RSS Feed</span>
                        <span className="cursor-pointer hover:text-white transition-colors">Sitemap</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer

