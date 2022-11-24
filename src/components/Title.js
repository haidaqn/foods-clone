import React from 'react';

export default function Title() {
    return (
        <div className="absolute h-full w-full text-gray-200 h-screen bg-black/40 flex flex-col justify-center">
            <h1 className="px-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl ">
                The <span className="text-orange-500">Best</span>
            </h1>
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="text-orange-500">Foods </span>Delivered
            </h1>
        </div>
    );
}
