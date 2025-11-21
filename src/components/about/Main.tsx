export default function AboutSection() {
    return (
        <section className="w-full py-20 px-6">
            <h2 className="text-center text-3xl font-bold mb-12">About Us</h2>

            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                {/* LEFT IMAGE */}
                <div className="w-full border border-gray-200 rounded-2xl">
                    <div className="p-4">
                        <img
                        src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1000&q=80"
                        alt="About"
                        className="w-full h-[380px] object-cover rounded-2xl shadow-md"
                    />
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="w-full">
                    <p className="text-gray-500 tracking-widest text-xs font-semibold mb-2">
                        WELCOME TO OUR SITE!
                    </p>

                    <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
                        We Are The Best Of Travel To Offer You <br />
                        The Best
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
                        We are right in the center of the city to offer you the real city life!
                        With years of experience in practically every tourism sector, with us
                        you can find complete packages at the lowest price, to travel and learn
                        and have fun all without worries and without stress. 
                        What are you waiting for, book a bright evening, a trip to beautiful Tuscany 
                        or a personal tour for you!
                    </p>

                    {/* STATS ROW */}
                    <div className="grid grid-cols-2 w-90 sm:grid-cols-4 gap-3 mt-4">

                        <div className="text-center">
                            <h4 className="text-[#4997D3] text-2xl font-bold">20+</h4>
                            <p className="text-gray-600 text-sm">Years Experience</p>
                        </div>

                        <div className="text-center">
                            <h4 className="text-[#4997D3] text-2xl font-bold">100+</h4>
                            <p className="text-gray-600 text-sm">Happy Customer</p>
                        </div>

                        <div className="text-center">
                            <h4 className="text-[#4997D3] text-2xl font-bold">15+</h4>
                            <p className="text-gray-600 text-sm">Choice of Services</p>
                        </div>

                        <div className="text-center">
                            <h4 className="text-[#4997D3] text-2xl font-bold">10+</h4>
                            <p className="text-gray-600 text-sm">Professional Guides</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
