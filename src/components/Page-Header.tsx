import { Link } from "react-router-dom";

interface PageHeroProps {
    title: string;
    backgroundImage: string;
    currentPage: string;
}

export default function PageHeader({ title, backgroundImage, currentPage }: PageHeroProps) {
    return (
        <section className="relative h-[350px] md:h-[420px] w-full flex items-center justify-center text-center">

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={backgroundImage}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-4">

                {/* Breadcrumb */}
                <p className="text-white/80 text-sm md:text-base tracking-wide mb-2">
                    <Link
                        to="/"
                        className="hover:text-white transition"
                    >
                        Home
                    </Link>

                    <span className="mx-2">|</span>

                    <span className="text-white">
                        {currentPage}
                    </span>
                </p>


                {/* Page Title */}
                <h1 className="text-white font-extrabold text-5xl md:text-8xl tracking-wide">
                    {title}
                </h1>
            </div>
        </section>
    );
}
