import React from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <div className="max-w-full object-cover relative">
            <Title />
            <img
                className="object-cover w-full h-screen"
                src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <div className="absolute top-[50%] right-[25%] text-white">
                <Link to="/login">
                    <button className="text-[20px] font-semibold m-1 border-white bg-white text-orange-600 hover:bg-orange-600 hover:text-white">
                        SIGN IN
                    </button>
                </Link>
                <Link to="/signup">
                    <button className="text-[20px] font-semibold m-1 border-white bg-white text-orange-600 hover:bg-orange-600 hover:text-white">
                        SIGN UP
                    </button>
                </Link>
            </div>
        </div>
    );
}
