import React, { useState } from 'react';

const Button = ({ children, primary, className, showTooltip = false }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative flex flex-col items-center">
            <button
                className={`px-6 py-2 rounded-md font-medium transition duration-300 relative overflow-hidden
                    ${primary
                        ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:brightness-110'
                        : 'bg-white text-primary hover:bg-gray-100'}
                    ${className || ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {children}
            </button>

            {showTooltip && (
                <div
                    className={`absolute top-14 left-1/2 transform -translate-x-1/2 z-20
                    opacity-0 scale-95 transition-opacity transition-transform duration-500 ease-out
                    ${isHovered ? 'opacity-100 scale-105' : ''}`}
                >
                    <div className="relative bg-white/30 backdrop-blur-lg px-4 py-2 rounded-lg shadow-xl border border-white/20">
                        <span className="text-white font-semibold text-sm tracking-wide whitespace-nowrap">
                            🚀 Coming Soon!
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Button;