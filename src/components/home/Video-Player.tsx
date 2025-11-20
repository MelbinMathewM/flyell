import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function VideoPlayerSection() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="w-full">
            <div className="max-w-8xl mx-auto relative overflow-hidden shadow-lg">

                {/* Show Thumbnail */}
                {!isPlaying && (
                    <div
                        className="relative cursor-pointer"
                        onClick={() => setIsPlaying(true)}
                    >
                        <img
                            src="/video-cover.png"
                            alt="Travel Video"
                            className="w-full h-[350px] md:h-[420px] object-cover"
                        />

                        {/* Invisible clickable play button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0">
                            <div className="w-20 h-20 bg-white/70 rounded-full flex items-center justify-center">
                                <FaPlay className="text-gray-800 text-3xl ml-1" />
                            </div>
                        </div>
                    </div>
                )}

                {/* Show Video Player */}
                {isPlaying && (
                    <video
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        autoPlay
                        controls
                        onPause={() => setIsPlaying(false)}   // 👈 KEY PART
                        className="w-full h-[350px] md:h-[420px] object-cover"
                    />
                )}
            </div>
        </section>
    );
}
