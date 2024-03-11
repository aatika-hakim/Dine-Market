'use client'
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import Logo from "../../public/assets/images/Logo.png";
import { ListItemProps } from "@/utils/types";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className={`absolute left-0 top-0 z-20 flex w-full items-center`}>
            <div className="container">
                <div className="px-4 container">
                    <div className="relative -mx-4 flex items-center justify-between">
                        <div className="min-w-32 lg:max-w-full px-4">
                            <Link href="/#" className="block w-full py-5">
                                <Image
                                    src={Logo}
                                    alt="logo"
                                    width={200}
                                    height={60}
                                    className=""
                                />
                            </Link>
                        </div>
                        <div className="flex w-full items-center justify-between px-4">
                            <div>
                                <button
                                    onClick={() => setOpen(!open)}
                                    id="navbarToggler"
                                    className={` ${open && "navbarTogglerActive"
                                        } absolute right-4 top-1/2 block -translate-y-1/2 rounded-sm place-items-center px-3 py-3 ring-primary focus:ring-2 lg:hidden`}
                                >
                                    {open ? (
                                        // Show X icon when open
                                        <span className="relative my-[6px] block h-[6px] w-[30px] bg-body-color dark:bg-white">X</span>
                                    ) : (
                                        // Show ☰ icon when closed
                                        <span className="relative my-[6px] block h-[6px] w-[30px] bg-body-color dark:bg-white">☰</span>
                                    )}
                                </button>
                                <nav
                                    id="navbarCollapse"
                                    className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"
                                        } `}
                                >
                                    <ul className="block lg:flex">
                                        <ListItem NavLink="/Category/female">Female</ListItem>
                                        <ListItem NavLink="/Category/male">Male</ListItem>
                                        <ListItem NavLink="/Category/kids">Kids</ListItem>
                                        <ListItem NavLink="/Products">All Products</ListItem>
                                    </ul>
                                </nav>
                            </div>
                            <div className="hidden justify-end pr-16 sm:flex lg:pr-0 space-x-16">
                                <div className="border border-gray-300 space-x-2 flex h-7 justify-between my-3">
                                    <Search size={18} className="mt-[3px]" />
                                    <Input className="h-5 mt-[3px] mx-[2px] w-80 rounded-sm border-white" placeholder="What you are looking for?" />
                                </div>
                                <div className="relative">
                                    <div className="bg-gray-300 rounded-full px-3 py-3">
                                        <ShoppingCart />
                                    </div>
                                    <div className="absolute top-[-10px] right-0 bg-red-500 text-white w-6 h-6 flex justify-center items-center rounded-full">0
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

const ListItem = ({ children, NavLink }: ListItemProps) => {
    return (
        <>
            <li>
                <Link
                    href={NavLink}
                    className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-5 lg:inline-flex"
                >
                    {children}
                </Link>
            </li>
        </>
    );
};

export default Navbar;
