import React, { useState } from 'react';
import { Search, Menu, X, Globe, Facebook, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

 

    const { data: categories = []  } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await axios('/public/categories.json')

            return res.data
        },
    })

    return (
        <header className="w-full bg-white border-b border-gray-200  shadow-sm">
            {/* --- Top Bar --- */}
            <div className="hidden md:block bg-gray-50  border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-xs font-medium text-gray-500">
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center gap-1">
                            <Globe size={14} /> { new Date().toLocaleDateString()}
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="#" className="hover:text-blue-600"><Facebook size={16} /></Link>
                        <Link href="#" className="hover:text-blue-400"><Twitter size={16} /></Link>
                        <Link href="#" className="hover:text-red-600"><Youtube size={16} /></Link>
                        <button className="bg-blue-900 text-white px-3 py-1 rounded-sm hover:bg-blue-800 transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Main Navbar --- */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Logo Area */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex flex-col leading-none">
                            <span className="text-2xl md:text-3xl font-black text-blue-900 tracking-tighter">
                                THE GLOBAL <span className="text-blue-600">INSIGHT</span>
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mt-1">
                                Truth in Every Perspective
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {categories.map((cat) => (
                            <Link
                                key={cat.name}
                                href={cat.path}
                                className="text-gray-700 hover:text-blue-700 font-semibold text-sm uppercase tracking-wide transition"
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Search Icon */}
                    <div className="flex items-center">
                        <button className="p-2 text-gray-500 hover:text-blue-600 transition">
                            <Search size={22} />
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Mobile Menu (Slide Down) --- */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {categories.map((cat) => (
                            <Link
                                key={cat.name}
                                href={cat.path}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 text-base font-bold text-gray-700 hover:bg-gray-50 hover:text-blue-700 rounded-md"
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;