import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";

export default function ContactSection() {
    return (
        <section className="w-full py-20 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* LEFT FORM (2/3 width on large screens) */}
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold mb-1">SEND US MAIL</h2>
                    <p className="text-gray-500 text-base mb-6">
                        Your email address will not be published. Required fields are marked *
                    </p>

                    <form className="space-y-5">

                        {/* Name Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700">FIRST NAME</label>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full px-4 py-3 bg-gray-100 rounded-md outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">LAST NAME</label>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full px-4 py-3 bg-gray-100 rounded-md outline-none"
                                />
                            </div>
                        </div>

                        {/* Email + Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700">EMAIL ADDRESS</label>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 bg-gray-100 rounded-md outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">PHONE NUMBER</label>
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-3 bg-gray-100 rounded-md outline-none"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="text-sm font-medium text-gray-700">ENTER TEXT</label>
                            <textarea
                                placeholder="Enter Text"
                                rows={7}
                                className="w-full px-4 py-3 bg-gray-100 rounded-md outline-none resize-none"
                            />
                        </div>

                        {/* Button */}
                        <button className="px-6 py-3 bg-[#4997D3] text-white rounded-md font-medium hover:bg-blue-600 transition">
                            Send Message
                        </button>

                    </form>
                </div>

                {/* RIGHT MAP (1/3 width on large screens) */}
                <div className="lg:col-span-1 rounded-xl overflow-hidden shadow-lg">
                    <MapContainer
                        center={[-37.8136, 144.9631]}
                        zoom={11}
                        scrollWheelZoom={false}
                        zoomControl={false}
                        style={{ height: "100%", width: "100%" }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; OpenStreetMap contributors'
                        />

                        <Marker position={[-37.8136, 144.9631]}>
                            <Popup>Melbourne, Australia</Popup>
                        </Marker>
                        <LocationControl position={[-37.8136, 144.9631]} />
                    </MapContainer>
                </div>

            </div>
        </section>
    );
}

function LocationControl({ position }: { position: any }) {
    const map = useMap();
    const [locationName, setLocationName] = useState("Loading...");

    useEffect(() => {
        // Fetch location name from coordinates
        async function fetchLocation() {
            try {
                const res = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?lat=${position[0]}&lon=${position[1]}&format=json`
                );
                const data = await res.json();
                setLocationName(data.display_name || "Unknown Location");
            } catch (e) {
                setLocationName("Unknown Location");
            }
        }

        fetchLocation();
    }, [position]);

    useEffect(() => {
        const LocationLabel = L.Control.extend({
            onAdd: () => {
                const div = L.DomUtil.create("div");
                div.className = "location-control";
                div.style.padding = "6px 12px";
                div.style.background = "white";
                div.style.borderRadius = "6px";
                div.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
                div.style.fontSize = "12px";
                div.style.cursor = "pointer";
                div.innerHTML = locationName;
                return div;
            }
        });

        const control = new LocationLabel({ position: "topright" });
        control.addTo(map);

        return () => {
            control.remove();
        };
    }, [map, locationName]);


    return null;
}
