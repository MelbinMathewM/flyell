import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.7) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`
                w-full fixed top-0 z-50 py-4 transition-all duration-300
                ${scrolled ? "bg-white shadow-sm" : "bg-transparent backdrop-blur-md"}
            `}
        >

            {/* MOBILE — stacked layout */}
            <div className="md:hidden px-6 flex flex-col gap-4">

                {/* TOP ROW: Logo + Contact */}
                <div className="flex items-center justify-between">
                    <Link
                        to="/"
                        className={`
                            font-semibold text-lg transition-all
                            ${scrolled ? "text-[#4997D3]" : "text-white"}
                        `}
                    >
                        Logo
                    </Link>

                    <Link
                        to="/contact"
                        className={`
                            text-sm px-4 py-1.5 rounded-full border transition-all
                            ${scrolled ?
                                "text-[#4997D3] border-[#4997D3] hover:bg-[#4997D3]/10" :
                                "text-white border-white hover:bg-white/10"
                            }
                        `}
                    >
                        Contact
                    </Link>
                </div>

                {/* SECOND ROW — MENU LINKS */}
                <div className="flex justify-center gap-6 text-sm font-medium">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `
                                transition-all 
                                ${scrolled ? "text-[#4997D3]" : "text-white"} 
                                ${!isActive && (scrolled ? "opacity-60 hover:opacity-100" : "opacity-50 hover:opacity-100")}
                            `
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/destinations"
                        className={({ isActive }) =>
                            `
                                transition-all 
                                ${scrolled ? "text-[#4997D3]" : "text-white"} 
                                ${!isActive && (scrolled ? "opacity-60 hover:opacity-100" : "opacity-50 hover:opacity-100")}
                            `
                        }
                    >
                        Destinations
                    </NavLink>
                </div>
            </div>

            {/* DESKTOP */}
            <div className="hidden md:flex max-w-6xl mx-auto px-6 items-center justify-between">

                <Link
                    to="/"
                    className={`
                        font-semibold text-lg transition-all
                        ${scrolled ? "text-[#4997D3]" : "text-white"}
                    `}
                >
                    Logo
                </Link>

                <div className="flex gap-10 text-sm font-medium">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `
                                transition-all 
                                ${scrolled ? "text-[#4997D3]" : "text-white"} 
                                ${!isActive && (scrolled ? "opacity-60 hover:opacity-100" : "opacity-50 hover:opacity-100")}
                            `
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/destinations"
                        className={({ isActive }) =>
                            `
                                transition-all 
                                ${scrolled ? "text-[#4997D3]" : "text-white"} 
                                ${!isActive && (scrolled ? "opacity-60 hover:opacity-100" : "opacity-50 hover:opacity-100")}
                            `
                        }
                    >
                        Destinations
                    </NavLink>
                </div>

                <Link
                    to="/contact"
                    className={`
                        text-sm px-6 py-2 rounded-full border transition-all
                        ${scrolled ?
                            "text-[#4997D3] border-[#4997D3] hover:bg-[#4997D3]/10" :
                            "text-white border-white hover:bg-white/10"
                        }
                    `}
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
}
