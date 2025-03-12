import React from 'react';
import Button from '../common/Button';

const Hero = () => {
    return (
        <div
            className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-center"
            style={{ backgroundImage: "url('/src/assets/images/mountain-bg.jpg')" }}
        >
            {/* Darker overlay with blur */}
            <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"></div>

            <div className="z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">TravelPulse</h1>
                <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                    AI-powered insights, group planning, and eco-friendly travel at your fingertips
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button primary>Get Started</Button>
                    <Button showTooltip={true}>Download Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;