import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    return (
        <div className="flex justify-between max-w-[1640px] mx-auto items-center p-4">
            {/* life side */}

            <div className="flex items-center">
                <div className="cursor-pointer">
                    <AiOutlineMenu size={30} onClick={() => setNav(!nav)} />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                    Best <span className="font-bold">Eats</span>
                </h1>
                <div className="hidden lg:flex items-center bg-gray-300 rounded-full p-2 text-[14px]">
                    <p className="bg-black text-white p-2 rounded-full">Delivery</p>
                    <p className="p-2">Pickup</p>
                </div>
            </div>
            {/* search input */}
            <div
                className="flex rounded-full 
                        bg-gray-200 items-center px-2 
                        w-[200px] sm:w-[400px] lg:w-[500px]"
            >
                <AiOutlineSearch size={30} />
                <input
                    type="text"
                    className="bg-transparent p-2 w-full focus:outline-none"
                    placeholder="Search foods.."
                />
            </div>
            {/* Cart */}
            <div>
                <button className="bg-black text-white hidden sm:flex items-center py-2 rounded-full">
                    <BsFillCartFill size={25} />
                    Cart
                </button>
            </div>
            {/* Mobile */}
            {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ''}
            {/* Menu mobile */}
            <div
                className={
                    nav
                        ? 'fixed h-screen w-[300px] top-0 left-0 bg-white z-20 duration-300'
                        : 'fixed h-screen w-[300px] top-0 left-[-100%] bg-white z-20 duration-300'
                }
            >
                <div>
                    <AiOutlineClose
                        size={25}
                        className="absolute top-4 
                                right-4 cursor-pointer "
                        onClick={() => setNav(!nav)}
                    />
                    <h2 className="text-2xl p-4">
                        Best <span className="font-bold">Eats</span>
                    </h2>
                    <nav>
                        <ul className="flex flex-col p-4 text-gray-800">
                            <li className="text-xl py-4 flex">
                                <TbTruckDelivery size={25} className="mr-4" /> Orders
                            </li>
                            <li className="text-xl py-4 flex">
                                <MdFavorite size={25} className="mr-4" /> Favorites
                            </li>
                            <li className="text-xl py-4 flex">
                                <FaWallet size={25} className="mr-4" /> Wallet
                            </li>
                            <li className="text-xl py-4 flex">
                                <MdHelp size={25} className="mr-4" /> Help
                            </li>
                            <li className="text-xl py-4 flex">
                                <AiFillTag size={25} className="mr-4" /> Promotions
                            </li>
                            <li className="text-xl py-4 flex">
                                <BsFillSaveFill size={25} className="mr-4" /> Best Ones
                            </li>
                            <li className="text-xl py-4 flex">
                                <FaUserFriends size={25} className="mr-4" /> Invite Friends
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
