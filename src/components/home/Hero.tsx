export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center text-center">

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/home_hero.png"
                    alt="Hero"
                    className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-black/10" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-24 mb-12">

                {/* Subtitle */}
                <h3 className="text-white tracking-[8px] text-lg md:text-2xl mt-4">
                    UNFORGETTABLE TRAVEL AWAITS THE
                </h3>

                {/* Main Title */}
                <h1 className="text-white font-bold text-5xl md:text-7xl lg:text-9xl">
                    ADVENTURE
                </h1>

                {/* Description */}
                <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
                    Experience the thrill of exploring the world's most fascinating destinations
                    with our expertly curated travel packages.
                </p>

                {/* Search Box */}
                <div
                    className="bg-white rounded-2xl shadow-xl mt-10 p-6 
                    max-w-4xl mx-auto
                    flex flex-col md:flex-row items-center justify-between gap-6"
                >

                    {/* Destination */}
                    <div className="flex flex-col flex-1 items-start">
                        <label className="text-gray-900 text-sm mb-1 font-medium">Destination</label>
                        <div className="flex items-center justify-between w-full cursor-pointer">
                            <span className="text-gray-900">New York, USA</span>
                            <span className="text-gray-500 text-xs">▼</span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block h-10 w-px bg-gray-200"></div>

                    {/* Date */}
                    <div className="flex flex-col flex-1 items-start">
                        <label className="text-gray-900 text-sm mb-1 font-medium">Date</label>
                        <input
                            type="text"
                            placeholder="Select Date"
                            className="text-gray-500 outline-none w-full"
                            readOnly
                        />
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block h-10 w-px bg-gray-200"></div>

                    {/* Price */}
                    <div className="flex flex-col flex-1 items-start">
                        <label className="text-gray-900 text-sm mb-1 font-medium">Price</label>
                        <span className="text-gray-900">$1,000 - $2,000</span>
                    </div>

                    {/* Search Button */}
                    <button className="cursor-pointer bg-[#4997D3] hover:bg-blue-400 text-white px-8 py-3 rounded-sm text-sm transition">
                        Search
                    </button>
                </div>

                {/* Logos / Bottom Graphic */}
                <div className="mt-10 flex items-center justify-center -ms-6">
                    <img src="/hero-list.png" alt="List" className="max-w-4xl object-contain" />
                </div>

            </div>
        </section>
    );
}
