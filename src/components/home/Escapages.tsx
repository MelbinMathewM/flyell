import CardSlider from "../Card-Slider";

const visaFreeCards = [
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

export default function EscapagesSection() {
    return (
        <CardSlider
            title="VISA-FREE ESCAPAGES"
            items={visaFreeCards}
        />
    )
}

