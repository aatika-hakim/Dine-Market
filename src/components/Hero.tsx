import heroImg from "../../public/assets/images/header.webp"
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { Badge } from "./ui/badge";
import banner1 from "../../public/assets/images/banner-1.webp";
import banner2 from "../../public/assets/images/banner-2.webp";
import banner3 from "../../public/assets/images/banner-3.webp";
import banner4 from "../../public/assets/images/banner-4.webp";
import React from "react";

const Hero = () => {
    return (
        <>
            <div className="relative bg-white pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-5/12">
                            <div className="hero-content">
                                <Badge className="h-10 px-6 py-3 text-lg text-blue-700 bg-blue-100 rounded-lg ">
                                    Sale 70%
                                </Badge>
                                <h1 className="my-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                                    An Industrial Take on Streetwear
                                </h1>
                                <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                                    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                                </p>
                                <Button className="rounded-none inline-flex items-center h-12 px-8 mt-4 bg-black">
                                    <ShoppingCart className="mr-2" />
                                    Start Shopping
                                </Button>
                                <div className="pt-12">
                                    <div className="flex items-center space-x-4">
                                        <SingleImage
                                            img={banner1}
                                        />
                                        <SingleImage
                                            img={banner2}
                                        />
                                        <SingleImage
                                            img={banner3}
                                        />
                                        <SingleImage
                                            img={banner4}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="lg:ml-auto lg:text-right">
                                <div className="relative z-10 inline-block pt-11 lg:pt-0 rounded-full bg-orange-100">
                                    <Image
                                        src={heroImg}
                                        alt="hero"
                                        className="max-w-full lg:ml-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const SingleImage = ({ img }: any) => {
    return (
        <>
            <div className="flex w-full items-center pr-4 justify-center">
                <Image src={img} alt="brand image" className="h-10 w-full" width={120} />
            </div>
        </>
    );
};



export default Hero