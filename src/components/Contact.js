import React from 'react';
import { CiFacebook, CiMail, CiTwitter } from 'react-icons/ci';
const Contact = () => {
    return (
        <div className="max-w-[1640px] m-auto p-4 flex justify-between ">
            <ul className="flex ">
                <li className="text-3xl lg:text-8xl text-red-600">
                    <CiFacebook />
                </li>
                <li className=" text-3xl lg:text-8xl text-rose-900">
                    <CiMail />
                </li>
                <li className=" text-3xl lg:text-8xl text-cyan-500">
                    <CiTwitter />
                </li>
            </ul>
            <div className="font-bold text-[18px] lg:text-3xl lg:mr-[30px]">
                <p>+129387</p>
                <p>bestEats@gmail.com</p>
            </div>
        </div>
    );
};

export default Contact;
