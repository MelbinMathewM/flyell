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
            image: "/destination-1.png",
            // description: "Arrive in Bali and check-in to Golden Tulip. Spend the day at leisure.",

            arrival: {
                label: "Arrival",
                text: "Arrive in Bali and check-in to your hotel."
            },

            accommodation: {
                label: "Accommodation",
                place: "Golden Tulip Jineng Resort"
            }
        },

        {
            day: "Day 2",
            location: "Kuta",
            title: "Explore Nusa Penida",
            image: "/destination-2.png",
            // description: "Experience a full-day tour of beautiful Nusa Penida Island.",

            arrival: {
                label: "Activity",
                text: "Full-day island exploration including beaches and viewpoints."
            },

            accommodation: {
                label: "Accommodation",
                place: "Kuta - Hotel/Resort"
            }
        },

        {
            day: "Day 3",
            location: "Ubud",
            title: "UlunDanu Temple and Transfer to Kampung Villa",
            image: "/destination-3.png",
            // description: "Visit the iconic Ulun Danu Temple before checking in at Kampung Villa.",

            arrival: {
                label: "Temple Visit",
                text: "Explore Ulun Danu Beratan Temple with scenic lake views."
            },

            accommodation: {
                label: "Accommodation",
                place: "Kampung Villa, Ubud"
            }
        },

        {
            day: "Day 4",
            location: "Ubud",
            title: "Ubud Kintamani Tour and Floating Breakfast",
            image: "/destination-1.png",
            // description: "Enjoy a scenic Kintamani tour followed by a relaxing floating breakfast.",

            arrival: {
                label: "Activity",
                text: "Visit Kintamani Highlands, coffee plantation, and enjoy floating breakfast."
            },

            accommodation: {
                label: "Accommodation",
                place: "Kampung Villa, Ubud"
            }
        },

        {
            day: "Day 5",
            location: "Ubud",
            title: "Departure",
            image: "/destination-2.png",
            // description: "Check out from the villa and depart from Bali.",

            arrival: {
                label: "Departure",
                text: "Check out from your villa and proceed to the airport."
            },

            accommodation: {
                label: "Note",
                place: "End of the trip."
            }
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
