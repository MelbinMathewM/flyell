import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) setVisible(true);
            else setVisible(false);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {visible && (
                <button
                    onClick={scrollToTop}
                    className="
                        cursor-pointer fixed bottom-6 right-6 
                        bg-white hover:bg-gray-50 
                        text-[#4997D3] p-3 rounded-sm shadow-xl
                        transition-all duration-300 
                        animate-fade-in
                        z-50
                    "
                >
                    <FaArrowUp size={18} />
                </button>
            )}
        </>
    );
}
