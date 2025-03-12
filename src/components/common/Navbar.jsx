import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-20 px-6 py-4 flex justify-between items-center transition-all duration-500 ease-in-out
            ${isScrolled
                ? 'bg-black/50 backdrop-blur-lg shadow-lg'
                : 'bg-black/30 backdrop-blur-md'}`}
        >
            <div className="text-white text-2xl font-extrabold tracking-widest transition-transform duration-500">
                TravelPulse
            </div>

            <div className="hidden md:flex space-x-6">
                {['Home', 'Search', 'Recommendations', 'Blog', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                        className="relative text-white font-medium tracking-wide uppercase transition-all duration-300 
                        hover:scale-105 hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
                    >
                        {item}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 
                        transition-all duration-500 ease-in-out hover:w-full"></span>
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;