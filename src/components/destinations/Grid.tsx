import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdAttachMoney } from "react-icons/md";

export default function DestinationsGrid({ items }: { items: any }) {
    const categories = ["All", "Asia", "Africa", "Europe", "America", "Australia", "Other"];
    const [active, setActive] = useState("All");
    const [search, setSearch] = useState("");

    // FILTER + SEARCH
    const filtered = items.filter((item: any) => {
        const matchCategory = active === "All" || item.category === active;
        const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
        return matchCategory && matchSearch;
    });

    return (
        <section className="w-full max-w-[1200px] mx-auto px-4 py-16">

            {/* Top Filter Row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-4">

                <h3 className="text-lg font-bold mb-6">
                    DESTINATIONS ({filtered.length})
                </h3>


                {/* Search */}
                <div className="relative w-60">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="px-4 py-2 w-full rounded-md shadow-sm outline-none 
                   focus:ring-2 focus:ring-blue-400 pr-10 placeholder-gray-800"
                    />

                    {/* Search Icon */}
                    <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
                </div>

            </div>

            <div className="flex flex-wrap gap-3 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition
                                ${active === cat
                                ? "bg-[#4997D3] text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }
                            `}
                    >
                        {cat}
                    </button>
                ))}
            </div>


            {/* Cards Grid */}
            <DestinationMasonry items={items} />
        </section>
    );
}

export function DestinationMasonry({ items }: { items: any }) {
    return (
        <div className="grid grid-cols-3 gap-4 auto-rows-[300px]">

            {/* Row 1 */}
            <div className="col-span-1 row-span-1">
                <Card item={items[0]} />
            </div>

            <div className="col-span-2 row-span-1">
                <Card item={items[1]} />
            </div>

            {/* Row 2 */}
            <div className="col-span-1 row-span-1">
                <Card item={items[2]} />
            </div>

            <div className="col-span-1 row-span-1">
                <Card item={items[3]} />
            </div>

            {/* Tall card spanning row 2 & 3 */}
            <div className="col-span-1 row-span-2">
                <Card item={items[4]} />
            </div>

            {/* Row 3 */}
            <div className="col-span-2 row-span-1">
                <Card item={items[5]} />
            </div>

            {/* Row 4 */}
            <div className="col-span-1 row-span-2">
                <Card item={items[6]} />
            </div>

            <div className="col-span-1 row-span-1">
                <Card item={items[7]} />
            </div>

            <div className="col-span-1 row-span-1">
                <Card item={items[8]} />
            </div>

            {/* Row 5 */}
            <div className="col-span-1 row-span-1">
                <Card item={items[9]} />
            </div>

            <div className="col-span-1 row-span-1">
                <Card item={items[10]} />
            </div>

        </div>
    );
}

function Card({ item }: { item: any }) {
    return (
        <div className="relative w-full h-full rounded-xl overflow-hidden group cursor-pointer">
            <img
                src={item.img}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex flex-col justify-end">

                {/* Title */}
                <h3 className="text-white font-semibold text-lg mb-1">
                    {item.title}
                </h3>

                {/* Packages + Price */}
                <div className="flex items-center text-white text-sm gap-3">

                    <span className="flex items-center gap-1">
                        <HiOutlineLocationMarker className="text-white text-lg" />
                        {item.packages}
                    </span>

                    <span className="h-4 w-px bg-white/50"></span>

                    <span className="flex items-center gap-1">
                        <MdAttachMoney className="text-white text-base" />
                        {item.price}
                    </span>
                </div>

                {/* Only show description if big card */}
                {item.isLarge && (
                    <p className="text-white/80 text-sm my-2 leading-snug">
                        {item.desc ??
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae."}
                    </p>
                )}
            </div>
        </div>
    );
}

