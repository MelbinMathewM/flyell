export default function QualitySection() {
    return (
        <section className="w-full py-12 px-4">

            <div className="relative max-w-6xl mx-auto rounded-[28px] overflow-hidden">

                {/* Background Image */}
                <img
                    src="/quality-bg.png"
                    alt="Quality Background"
                    className="w-full h-[520px] object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 p-20 flex flex-col justify-between">

                    {/* Top Left Title + Main Paragraph */}
                    <div className="text-white max-w-xl">
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
                            ONLY THE BEST QUALITY FOR YOU
                        </h2>

                        <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                            You deserve the ultimate best quality<br />
                            for your memorable experiences.
                        </p>
                    </div>

                    {/* Right Paragraph (placed below main text, above stats, aligned right) */}
                    <div className="text-white/90 text-lg md:text-xl leading-relaxed max-w-xs ml-auto text-right">
                        Take a look at our numbers for our<br />
                        credibility. Let's have an adventure!
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 text-white text-center">

                        {[
                            { value: "20+", label: "years of experience" },
                            { value: "100+", label: "destination countries" },
                            { value: "10+", label: "tours & travel awards" },
                            { value: "2,237,216", label: "delighted clients" },
                        ].map((stat, index, arr) => (
                            <div key={index} className="relative px-4">

                                {/* Vertical Divider (hide on last item) */}
                                {index !== arr.length - 1 && (
                                    <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-white/40"></div>
                                )}

                                <h3 className="text-3xl font-semibold mb-2">{stat.value}</h3>
                                <p className="text-md text-white/80">{stat.label}</p>
                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}
