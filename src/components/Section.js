import React from 'react';

const Section = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4">
            <div className="max-h-[500px] relative">
                <div className="absolute h-full w-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                        The <span className="text-orange-500">Best</span>
                    </h1>
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                        <span className="text-orange-500">Foods </span>Delivered
                    </h1>
                </div>
                <img
                    className=" object-cover w-full max-h-[500px] "
                    alt="foods"
                    src="https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
            </div>
        </div>
    );
};

export default Section;
