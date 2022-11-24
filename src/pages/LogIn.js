import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoX } from 'react-icons/go';
import { UserManagement } from '../Context/AuthContext';
import { async } from '@firebase/util';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LogIn() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [err, setErr] = useState('');
    const { LogIn, user } = UserManagement();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pw)
            .then(() => {
                alert('thành công');
                navigate('/');
            })
            .catch((error) => {
                setErr(error.message);
            });
    };
    return (
        <div className="max-w-full object-cover relative">
            <div className="fixed z-[100] w-full py-[100px] px-4 ">
                <div className="max-w-[450px] mx-auto bg-black/75 text-white rounded absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[40%]">
                    <Link to="/">
                        <GoX className="text-white absolute right-4 top-4 hover:opacity-50" />
                    </Link>
                    <div className="p-4">
                        <h1 className="font-bold text-3xl text-orange-600 text-center">SIGN IN</h1>
                        {err ? <p className="p-3 bg-red-400 my-2">{err}</p> : null}
                        <form className="w-[400px] flex flex-col py-10 px-5 m-auto">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                className="py-3 my-2 rounded bg-gray-700"
                                type="email"
                                placeholder="    Email"
                            />
                            <input
                                onChange={(e) => setPw(e.target.value)}
                                className="py-3 my-2 rounded bg-gray-700"
                                type="password"
                                placeholder="     PassWord"
                            />
                            <button
                                onClick={handleSubmit}
                                className="text-2xl my-6 font-bold mt-5 border-white bg-white text-orange-600 hover:bg-orange-600 hover:text-white"
                            >
                                SIGN IN
                            </button>
                            <div>
                                <div className="text-[#b3b3b3] flex justify-between items-center text-sm">
                                    <p className="text-[13px] text-[#b3b3b3]">
                                        <input type="checkbox" className="mr-[5px]" />
                                        Remember me
                                    </p>
                                    <a href="/">Need help?</a>
                                </div>
                                <div className="text-[14px] flex mt-3">
                                    <p className="text-cyan-400">New To Foods Delivered?</p>
                                    <a href="/signup" className="px-2">
                                        SIGN UP
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <img
                className="object-cover w-full h-screen "
                src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <div className="bg-black/60 fixed top-0 left-0 right-0 w-full h-screen "></div>
        </div>
    );
}
