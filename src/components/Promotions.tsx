import React from "react";
import event1 from "/public/assets/images/event1.webp";
import event2 from "/public/assets/images/event2.webp";
import event3 from "/public/assets/images/event3.webp";
import Image from "next/image";


const Promotions = () => {
    return (
        <div className="py-10 mt-10">
            <div className="flex flex-col mb-8 space-y-3 text-center">
                <p className="text-sm font-bold text-blue-800">PROMOTIONS</p>
                <h1 className="text-3xl font-bold text-gray-800">
                    Our Promotions Events
                </h1>
            </div>
            <div className="grid grid-flow-col grid-cols-2 grid-rows-4 gap-4 px-4 mt-6 sm:grid-rows-4 lg:grid-rows-4 lg:grid-cols-2 md:px-10 lg:p-0">
                <div className="row-span-1 sm:row-span-2 rounded-md flex flex-col sm:flex-row justify-between col-span-2 sm:col-span-2 bg-[#d6d6d8]">
                    <div className="p-4 sm:p-4 sm:pr-0">
                        <h3 className="text-4xl font-bold text-gray-900 font-sora">
                            GET UP TO
                        </h3>
                        <h3 className="text-4xl font-bold text-gray-900 font-sora">60%</h3>
                        <p className="mt-3 text-xl text-gray-900 ">
                            For the summer season
                        </p>
                    </div>
                    <Image src={event1} alt="event 1" className="float-right lg:w-60 md:w-60" />
                </div>

                <div className="row-span-1 sm:row-span-2 rounded-md text-center flex justify-center align-middle flex-col col-span-2 sm:col-span-2 bg-[#212121] ">
                    <h2 className="text-4xl font-bold text-slate-50">GET 30% Off</h2>
                    <h4>USE PROMO CODE</h4>
                    <button className="block px-3 py-2 mx-auto mt-2 font-sans text-lg font-medium tracking-widest text-center text-white bg-gray-700 rounded-md md:px-8 md:text-xl w-fit">
                        DINEWEEKENDSAlE
                    </button>
                </div>

                <div className=" row-span-1 h-fit sm:row-span-2 lg:row-span-4 rounded-md  bg-[#efe1c7]  relative overflow-hidden flex flex-col col-span-2 sm:col-span-1 md:col-span-1">
                    <div className="flex-1 p-4 text-gray-900">
                        <p>Flex Sweatshirt</p>
                        <p>
                            $100.00<b>$75.00</b>
                        </p>
                    </div>
                    <Image src={event2} alt="event 3" className="bottom-0 mx-auto flex-2" />
                </div>

                <div className="row-span-1 h-fit  sm:row-span-2 lg:row-span-4 rounded-md  bg-[#d7d7d9] relative overflow-hidden flex flex-col col-span-2 sm:col-span-1 md:col-span-1 ">
                    <div className="flex-1 p-4 text-gray-900">
                        <p>Flex Push Button Bomber</p>
                        <p>
                            $225.00 <b>$190.00</b>
                        </p>
                    </div>
                    <Image src={event3} alt="event 3" className="bottom-0 mx-auto flex-2" />
                </div>
            </div>
        </div>
    );
};

export default Promotions;