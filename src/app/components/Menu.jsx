import React from 'react'
import Link from "next/link";
import MenuLink from "./MenuLink";

const menuLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Experience",
        path: "#experience",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }
]//flex flex-row items-center justify-between mx-auto p-8
const Menu = () => {
    return (
        <nav class="">
            <div className="top-bar items-center mx-auto ">
                <Link href={"/"} className="gradient-color logo h-10">Junting</Link>
                <div className="menu">
                    <nav>
                        <div className="menu hidden md:block md:w-auto" id="menu">
                            <ul class="text-xl nav-links flex flex-row space-x-5 sm:space-x-6 md:space-x-8 mx:5 md:p-0">
                                {menuLinks.map((link, index) => (
                                    <li key={index}>
                                        <MenuLink href={link.path} title={link.title} />
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    </nav>
                    <nav id="mobile-nav">
                        <div class="mobile-menu">
                            <div class="mobile-icon" onClick="toggleMenu()" >
                                <span class="line1"></span>
                                <span class="line2"></span>
                                <span class="line3"></span>
                            </div>
                        </div>

                    </nav>
                </div>
            </div>
        </nav>
    )
}

export default Menu;