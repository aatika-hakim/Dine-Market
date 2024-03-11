import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/assets/images/Logo.png";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { LinkGroupProps, NavLinkProps } from "@/utils/types";

const Footer = () => {
    return (
        <>
            <footer className="relative z-10 px-10 pb-10 pt-20 dark:bg-dark lg:pb-6 lg:px-0">
                <div className="container lg:px-32 lg:py-20">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 sm:w-2/3 lg:w-4/12">
                            <div className="mb-10 w-full">
                                <Link href="/#" className="block w-full py-5">
                                    <Image
                                        src={Logo}
                                        alt="logo"
                                        width={200}
                                        height={60}
                                        className=""
                                    />
                                </Link>
                                <p className="mb-7 text-base text-body-color dark:text-dark-6">
                                    Sed ut perspiciatis undmnis is iste natus error sit amet
                                    voluptatem totam rem aperiam.
                                </p>
                                <div className="flex items-center text-sm font-medium text-dark dark:text-white">
                                    <span className="mr-3 text-primary bg-gray-200 w-12 h-12 p-4 text-xl rounded-md">
                                        <FaFacebookF fill="black" />
                                    </span>
                                    <span className="mr-3 text-primary bg-gray-200 w-12 h-12 p-4 text-xl rounded-md">
                                        <FaTwitter fill="black" />
                                    </span>
                                    <span className="mr-3 text-primary bg-gray-200 w-12 h-12 p-4 text-xl rounded-md">
                                        <FaLinkedinIn fill="black" />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <LinkGroup header="Company">
                            <NavLink link="/#" label="About" />
                            <NavLink link="/#" label="Term of Use" />
                            <NavLink link="/#" label="Privacy Policy" />
                            <NavLink link="/#" label="How it works" />
                            <NavLink link="/#" label="Contact Us" />
                        </LinkGroup>
                        <LinkGroup header="Support">
                            <NavLink link="/#" label="Support Career" />
                            <NavLink link="/#" label="24h Service" />
                            <NavLink link="/#" label="Quick Chat" />
                        </LinkGroup>

                        <LinkGroup header="Contact">
                            <NavLink link="/#" label="Whatsapp" />
                            <NavLink link="/#" label="Support 24h" />
                        </LinkGroup>
                    </div>
                </div>

                <hr />
                <p className="text-base text-body-color dark:text-dark-6 text-center pt-6">
                    &copy; {new Date().getFullYear()} Dine Market. All rights reserved. Developed by Aatika Hakim
                </p>
            </footer>
        </>
    );
};

export default Footer;

const LinkGroup = ({ children, header }: LinkGroupProps) => {
    return (
        <>
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                <div className="mb-10 w-full">
                    <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
                        {header}
                    </h4>
                    <ul className="space-y-3">{children}</ul>
                </div>
            </div>
        </>
    );
};

const NavLink = ({ link, label }: NavLinkProps) => {
    return (
        <li>
            <Link
                href={link}
                className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
            >
                {label}
            </Link>
        </li>
    );
};
