import CardSlider from "../Card-Slider";

const adventureCards = [
    {
        img: "/destination-1.png",
        title: "Iceland",
        packages: "20 Packages",
        price: "2,000 – 2,500",
    },
    {
        img: "/destination-2.png",
        title: "Iceland",
        packages: "20 Packages",
        price: "2,000 – 2,500",
    },
    {
        img: "/card-1.png",
        title: "Iceland",
        packages: "20 Packages",
        price: "2,000 – 2,500",
    },
];

export default function AdventuresSection() {
    return (
        <CardSlider
            title="AFFORDABLE ADVENTURES"
            items={adventureCards}
        />
    )
}

