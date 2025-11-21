import { packageData } from "../../data/packageData";
import { PackageHero } from "./Hero";
import { ItinerarySection } from "./Itinerary";
import { InfoSection } from "./Info";

export default function PackageDetails() {
    return (
        <>
            <PackageHero data={packageData} />
            <ItinerarySection data={packageData} />
            <InfoSection data={packageData} />
        </>
    );
}
