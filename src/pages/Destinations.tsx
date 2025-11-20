import DestinationsList from "../components/destinations/List";
import PageHeader from "../components/Page-Header";

export default function Destinations() {
    return (
        <div>
            <PageHeader
                title="DESTINATIONS"
                backgroundImage="/destination-header.jpg"
                currentPage="Destinations"
            />
            <DestinationsList />
        </div>
    )
}