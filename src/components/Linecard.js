import React from 'react';

const Linecard = () => {
    return (
        <div className=" max-w-[1640px] m-auto px-4 py-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-xl relative">
                <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
                    <p className="text-2xl p-4 font-bold ">Chicken fried rice</p>
                    <p className="px-4">Through 11/12</p>
                    <button className="border-white bg-white text-black mx-4 absolute bottom-4 hover:opacity-90 hover:scale-105">
                        Order Now
                    </button>
                </div>
                <img
                    className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                    alt="food"
                    src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
            </div>
            <div className="rounded-xl relative">
                <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
                    <p className="text-2xl p-4 font-bold ">Chicken fried rice</p>
                    <p className="px-4">Through 11/12</p>
                    <button className="border-white bg-white text-black mx-4 absolute bottom-4 hover:opacity-90 hover:scale-105">
                        Order Now
                    </button>
                </div>
                <img
                    className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                    alt="food"
                    src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
            </div>
            <div className="rounded-xl relative">
                <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
                    <p className="text-2xl p-4 font-bold ">Chicken fried rice</p>
                    <p className="px-4">Through 11/12</p>
                    <button className="border-white bg-white text-black mx-4 absolute bottom-4 hover:opacity-90 hover:scale-105">
                        Order Now
                    </button>
                </div>
                <img
                    className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                    alt="food"
                    src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
            </div>
        </div>
    );
};

export default Linecard;
