import React, { useState } from 'react';

import { data } from '../data/data.js';

const Foods = () => {
    const [foods, setFoods] = useState(data);

    // Trả về những món ăn có type là burgres/pizza/salad/chiken

    const typeFoods = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            }),
        );
    };
    // trả về các mặt hàng có giá là $/$$/$$$/$$$$
    const priceFoods = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            }),
        );
    };

    return (
        <div className="m-auto px-4 max-w-[1640px]">
            <h1 className="text-orange-600 font-bold text-4xl text-center">Menu Items</h1>
            <div className="flex flex-col lg:flex-row justify-between">
                {/* type */}
                <div>
                    <p className="font-bold text-gray-700">Filter Type All</p>
                    <div className="flex justify-between flex-wrap">
                        <button
                            onClick={() => setFoods(data)}
                            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                        >
                            All
                        </button>
                        <button
                            onClick={() => typeFoods('burger')}
                            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                        >
                            Burgers
                        </button>
                        <button
                            onClick={() => typeFoods('pizza')}
                            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                        >
                            Pizza
                        </button>
                        <button
                            onClick={() => typeFoods('salad')}
                            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                        >
                            Salad
                        </button>
                        <button
                            onClick={() => typeFoods('chicken')}
                            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                        >
                            chicken
                        </button>
                    </div>
                </div>
                {/* price */}
                <div>
                    <p className="font-bold text-gray-700">Filter Price</p>
                    <div className="flex justify-between max-w-[390px] w-full">
                        <button
                            onClick={() => priceFoods('$')}
                            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                        >
                            $
                        </button>
                        <button
                            onClick={() => priceFoods('$$')}
                            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                        >
                            $$
                        </button>
                        <button
                            onClick={() => priceFoods('$$$')}
                            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                        >
                            $$$
                        </button>
                        <button
                            onClick={() => priceFoods('$$$$')}
                            className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                        >
                            $$$${' '}
                        </button>
                    </div>
                </div>
            </div>

            {/* items */}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {foods.map((food, index) => (
                    <div key={index} className=" shadow-lg hover:scale-105 duration-300">
                        <img alt={food.name} src={food.image} className="w-full h-[200px] object-cover rounded-t-lg" />
                        <div className="flex justify-between px-4 py-4">
                            <p className="font-bold">{food.name}</p>
                            <p>
                                <span className="bg-orange-500 text-[20px] text-white p-2 rounded-full">
                                    {food.price}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Foods;
