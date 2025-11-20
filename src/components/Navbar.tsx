import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 z-50 backdrop-blur-md bg-transparent py-4">

            {/* Centered container */}
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <div className="text-white font-semibold text-lg">
                    <Link to="/">
                        <p>Logo</p>
                    </Link>
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex gap-10 text-white text-sm font-medium">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/destinations"
                        className={({ isActive }) =>
                            isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
                        }
                    >
                        Destinations
                    </NavLink>
                </div>

                {/* Contact Button */}
                <Link
                    to="/contact"
                    className="text-white text-sm border border-white px-6 py-2 rounded-full hover:bg-white/10 transition"
                >
                    Contact
                </Link>

            </div>

        </nav>
    );
}
