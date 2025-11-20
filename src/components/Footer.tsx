import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-[#111111] text-gray-300 pt-10 pb-4 px-6">

            {/* Top Section */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Logo */}
                <div className="text-lg font-semibold tracking-wide text-white">
                    LOGO
                </div>

                {/* Nav Links */}
                <div className="flex items-center gap-10 text-sm">
                    <a href="/destinations" className="hover:text-white transition">Destinations</a>
                    <a href="/contact" className="hover:text-white transition">Contact</a>
                    <a href="/about" className="hover:text-white transition">About Us</a>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                    <FaFacebookF className="text-xl hover:text-white cursor-pointer transition" />
                    <FaTwitter className="text-xl hover:text-white cursor-pointer transition" />
                    <FaInstagram className="text-xl hover:text-white cursor-pointer transition" />
                </div>
            </div>


            {/* Divider */}
            <div className="max-w-6xl mx-auto border-t border-gray-700 my-8" />


            {/* Middle Content */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">

                {/* Left - Reach Us */}
                <div>
                    <h3 className="text-gray-400 text-sm tracking-wide uppercase mb-4 flex items-center gap-3">
                        Reach Us
                        <span className="h-4 w-px bg-gray-500" />
                    </h3>

                    <p className="mb-2 text-sm">flynote@gmail.com</p>
                    <p className="mb-2 text-sm">Connect Over Whatsapp</p>
                    <p className="mb-2 text-sm">800 155 2202</p>
                </div>

                {/* Right - Policy Links */}
                <div className="flex flex-col items-start md:items-end gap-2 text-sm">
                    <a href="#" className="hover:text-white transition">Privacy policy</a>
                    <a href="#" className="hover:text-white transition">Terms & Condition</a>
                </div>
            </div>

            {/* Bottom Text */}
            <p className="text-center text-sm text-gray-500 mt-10">
                Copyright © 2025 Flyell. All rights reserved.
            </p>
        </footer>
    );
}
