import { HiOutlineLocationMarker } from "react-icons/hi";


export default function DestinationSection() {
    return (
        <section className="w-full py-12 px-4">

            <div className="text-center mb-6">
                <h2 className="text-[28px] md:text-[34px] font-bold tracking-wide">
                    POPULAR DESTINATIONS
                </h2>

                <p className="text-gray-600 mt-1 max-w-xl mx-auto text-md md:text-lg">
                    Explore our top destinations right from our beloved clients' reviews.
                </p>
            </div>

            {/* Cards Row */}
            <div className="flex flex-col md:flex-row items-start justify-center gap-6">

                {/* LEFT CARD */}
                <div className="w-[240px]">
                    <img
                        src="/destination-1.png"
                        className="w-full h-[360px] object-cover rounded-[26px]"
                    />

                    <h3 className="text-2xl font-semibold mt-3">Italy</h3>
                    <div className="flex items-center gap-2 text-white/90 mt-2">
                        <HiOutlineLocationMarker className="text-[#4997D3] text-xl" />
                        <span className="text-base text-black">20 Packages</span>
                    </div>
                </div>

                {/* CENTER LARGE CARD */}
                <div className="relative w-[520px]">
                    <img
                        src="/destination-2.png"
                        className="w-full h-[440px] object-cover rounded-[28px]"
                    />

                    {/* DARK GRADIENT OVERLAY */}
                    <div className="absolute inset-0 rounded-[28px] bg-gradient-to-b from-transparent to-black/70 p-8 flex flex-col justify-end">

                        {/* Title */}
                        <h3 className="text-white text-2xl font-bold">Italy</h3>

                        {/* Packages */}
                        <div className="flex items-center gap-2 text-white/90 mt-2">
                            <HiOutlineLocationMarker className="text-[#4997D3] text-xl" />
                            <span className="text-base">20 Packages</span>
                        </div>


                        {/* Description */}
                        <p className="text-white/80 text-sm mt-3 leading-relaxed max-w-md">
                            Switzerland, officially the Swiss Confederation, is a landlocked
                            country located at the northern part of Europe.
                        </p>

                        {/* Button */}
                        <button className="cursor-pointer mt-5 w-30 bg-transparent self-center border border-white/50 text-white px-4 py-2 rounded-sm text-sm hover:bg-white/20 transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* RIGHT CARD */}
                <div className="w-[240px]">
                    <img
                        src="/destination-3.png"
                        className="w-full h-[360px] object-cover rounded-[26px]"
                    />

                    <h3 className="text-2xl font-semibold mt-3">Greece</h3>
                    <div className="flex items-center gap-2 text-white/90 mt-2">
                        <HiOutlineLocationMarker className="text-[#4997D3] text-xl" />
                        <span className="text-base text-black">30 Packages</span>
                    </div>

                </div>
            </div>

            <div className="text-right w-full px-12 max-w-6xl mx-auto mt-6"> 
                <button className="cursor-pointer text-[#4997D3] font-semibold text-sm hover:underline">See More</button> 
            </div>
        </section>
    );
}
