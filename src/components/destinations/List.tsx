import DestinationsGrid from "./Grid";

const destinations = [
    {
        title: "Switzerland",
        category: "Europe",
        img: "/d1.png",
        packages: "20 Packages",
        price: "$1,500 – $2,300"
    },
    {
        title: "Japan",
        category: "Asia",
        img: "/d2.png",
        packages: "15 Packages",
        price: "$2,000 – $2,700"
    },
    // ...add all the items
];

export default function DestinationsList() {
    return <DestinationsGrid items={destinations} />;
}
