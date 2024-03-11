import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { ProductCardProps } from "@/utils/types";

const ProductCard = (props: ProductCardProps) => {
    return (
        <Link href={`/Products/${props.id}`}>
            <div className="mb-8 duration-300 cursor-pointer hover:scale-105">
                <Image src={props.img} alt="product" className="rounded w-80" />
                <h3 className="mt-3 text-lg font-bold">{props.title}</h3>
                <p className="text-lg font-bold">${props.price}</p>
                <p className="text-lg font-bold">
                    Category:
                    <span className="text-base font-normal text-black capitalize">
                        {props.category}
                    </span>
                </p>
                <Link href={"/AddtoCart"}>
                    <Button className="bg-black">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                    </Button>
                </Link>
            </div>
        </Link>
    );
};

export default ProductCard;
