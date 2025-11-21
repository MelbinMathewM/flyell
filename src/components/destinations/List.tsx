import DestinationsGrid from "./Grid";

const destinations = [
    {
        title: "Switzerland",
        category: "Europe",
        img: "/destinations/switzerland.jpg",
        packages: "20 Packages",
        price: "$1,500 – $2,300"
    },
    {
        title: "Japan",
        category: "Asia",
        img: "/destinations/japan.jpg",
        packages: "15 Packages",
        isLarge: true,
        desc: "Snowy mountains, lakes and scenic beauty await your next adventure.",
        price: "$2,000 – $2,700"
    },
    {
        title: "Thailand",
        category: "Asia",
        img: "/destinations/thailand.jpg",
        packages: "12 Packages",
        price: "$1,200 – $2,000"
    },
    {
        title: "South Korea",
        category: "Asia",
        img: "/destinations/south-korea.jpg",
        packages: "10 Packages",
        price: "$1,500 – $2,100"
    },
    {
        title: "Italy",
        category: "Europe",
        img: "/destinations/italy.jpg",
        packages: "18 Packages",
        price: "$1,800 – $2,600",
        isLarge: true
    },
    {
        title: "Australia",
        category: "Middle East",
        img: "/destinations/australia.jpg",
        packages: "14 Packages",
        price: "$1,000 – $1,900",
        isLarge: true
    },
    {
        title: "Finland",
        category: "Europe",
        img: "/destinations/finland.jpg",
        packages: "8 Packages",
        price: "$2,200 – $3,400"
    },
    {
        title: "Iceland",
        category: "Europe",
        img: "/destinations/iceland.jpg",
        packages: "22 Packages",
        price: "$2,000 – $3,000"
    },
    {
        title: "Greece",
        category: "Europe",
        img: "/destinations/greece.jpg",
        packages: "16 Packages",
        price: "$1,400 – $2,500"
    },
    {
        title: "Hungary",
        category: "Europe",
        img: "/destinations/hungary.jpg",
        packages: "25 Packages",
        price: "$900 – $1,700"
    },
    {
        title: "Indonesia",
        category: "Asia",
        img: "/destinations/indonesia.jpg",
        packages: "30 Packages",
        price: "$800 – $1,600"
    }
];


export default function DestinationsList() {
    return <DestinationsGrid items={destinations} />;
}
