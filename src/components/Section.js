import React from 'react';
import Title from './Title';

const Section = () => {
    return (
        <div className="max-w-[1640px] mx-auto px-4">
            <div className="max-h-[500px] relative">
                <Title />
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
