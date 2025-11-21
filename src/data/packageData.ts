export const packageData = {
    name: "Bali",
    description:
        "Experience the beauty of Bali with pristine beaches, lush forests, spiritual temples and unforgettable sunsets.",
    mainImage: "/destination-1.png",
    images: [
        "/destination-1.png",
        "/destination-2.png",
        "/destination-3.png",
    ],

    form: {
        price: "$499/person",
        duration: "5 Days / 4 Nights",
    },

    itinerary: [
        {
            day: "Day 1",
            location: "Kuta",
            title: "Arrival and Leisure Day at Golden Tulip",
            image: "/bali-it-1.jpg",
            description: "Arrive in Bali and check-in to Golden Tulip. Spend the day at leisure.",
            details: [
                { label: "Arrival", text: "Arrive in Bali and check-in to your hotel." },
                { label: "Accommodation", text: "Golden Tulip Jineng Resort" }
            ]
        },
        {
            day: "Day 2",
            location: "Kuta",
            title: "Explore Nusa Penida",
            image: "/bali-it-2.jpg",
            description: "",
            details: []
        },
        {
            day: "Day 3",
            location: "Ubud",
            title: "UlunDanu Temple and Transfer to Kampung Villa",
            image: "/bali-it-3.jpg",
            description: "",
            details: []
        },
        {
            day: "Day 4",
            location: "Ubud",
            title: "Ubud Kintamani Tour and Floating Breakfast",
            image: "/bali-it-4.jpg",
            description: "",
            details: []
        },
        {
            day: "Day 5",
            location: "Ubud",
            title: "Departure",
            image: "/bali-it-5.jpg",
            description: "",
            details: []
        }
    ],
    inclusions: [
        "4 Nights accommodation",
        "Daily breakfast",
        "Airport pickup & drop",
        "Private transportation",
        "All sightseeing tours"
    ],

    exclusions: [
        "Airfare",
        "Personal expenses",
        "Travel insurance",
        "Meals not mentioned"
    ],

    policies: [
        {
            title: "Flexible Cancellation",
            description: "Cancellation charges may apply. Please refer to the cancellation policy for details."
        }
    ]
};
