import { StaticImageData } from "next/image";

export interface ProductCardProps {
    title: string;
    price: number;
    img: StaticImageData;
    category: string;
    id: number;
}

export interface ListItemProps {
    NavLink: string;
    children: React.ReactNode;
}
export interface LinkGroupProps {
    children: React.ReactNode;
    header: string;
}

export interface NavLinkProps {
    link: string;
    label: string;
}

export type Product = {
    id: number;
    name: string;
    tag?: string;
    price: number;
    category: string;
    image: StaticImageData;
    qty: number;
    slug: string;
};

export type Cart = {
    id: number;
    name: string;
    tag: string;
    price: number;
    category: string;
    image: StaticImageData;
    qty: number;
    slug: string;
};

