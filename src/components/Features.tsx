'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import feature from '/public/assets/images/feature.webp';
import { Button } from "@/components/ui/button";

const Features = () => {
    const router = useRouter();

    const handleClick = () => router.push("/Products");

    const features = [
        {
            title: "Using Good Quality Materials",
            description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit."
        },
        {
            title: "100% Handmade Products",
            description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit."
        },
        {
            title: "Modern Fashion Design",
            description: "Lorem ipsum g elit.Lorem ipsum dolor sit amt, consectetur adipiscing elit."
        },
        {
            title: "Discount for bulk orders",
            description: "adipiscing elit.Lorem ipsum dolor sit amt, consectetur adipiscing elit."
        }
    ];

    return (
        <div className="py-6 text-gray-700 lg:py-16">
            <div className="flex justify-start py-4 text-4xl font-bold md:justify-end md:text-5xl">
            <h6 className="max-w-4xl px-4">Unique and Authentic Vintage Designer Jewellery</h6>
            </div>
            <div className="flex flex-col md:flex-row gap-5 py-4 mt-2">
                <div className="relative grid grid-cols-2 gap-10">
                    <div className="absolute inset-0 text-gray-200 -z-50">
                        <h6 className="text-5xl md:text-7xl lg:text-[7rem] leading-[3rem] font-bold">
                            Different <br/> from <br/> others
                        </h6>
                    </div>
                    {features.map((feature, index) => (
                        <div key={index} className="max-w-xs px-2 pt-6 space-y-2">
                            <h6 className="text-xl font-semibold">{feature.title}</h6>
                            <p className="text-lg leading-5">{feature.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col lg:flex-row basis-1/2">
                    <div className="w-full px-4 lg:px-0 lg:w-80">
                        <Image width={1000} height={1000} src={feature} alt="Designer Jewellery" />
                    </div>
                    <div className="p-6 space-y-6 md:space-y-4">
                        <p style={{ wordSpacing: "0.8rem" }} className="lg:max-w-xl">
                            This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
                        </p>
                        <Button className="bg-black rounded-none h-12 w-44" onClick={handleClick}>See All Products</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
