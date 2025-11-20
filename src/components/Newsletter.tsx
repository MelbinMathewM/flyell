export default function NewsletterSection() {
    return (
        <section
            className="w-full py-20 bg-cover bg-center"
            style={{ backgroundImage: "url('/newsletter-1.jpg')" }}
        >
            <div className="max-w-5xl mx-auto text-center px-6">

                {/* Heading */}
                <h2 className="text-6xl font-bold text-[#222222]">
                    START YOUR ADVENTURE
                </h2>

                {/* Subtitle */}
                <p className="max-w-3xl mx-auto text-gray-700 mt-3 text-md md:text-lg">
                    Sign up for our newsletter and receive exclusive travel deals, insider tips,
                    and destination inspiration. Don't miss out on the adventure - join our mailing list today!
                </p>

                {/* Email Form */}
                <div className="mt-8 flex items-center justify-center">
                    <div className="flex w-full max-w-xl items-center gap-4">

                        {/* Underline Input */}
                        <input
                            type="email"
                            placeholder="Enter your email address here..."
                            className="
                flex-1 
                bg-transparent 
                border-b border-gray-800
                py-3 
                outline-none 
                text-gray-800 
                placeholder-gray-700
            "
                        />

                        {/* Button */}
                        <button className="px-6 py-3 bg-[#222222] text-white font-medium hover:bg-gray-800 transition rounded-sm">
                            Subscribe
                        </button>
                    </div>
                </div>


            </div>
        </section>
    );
}
