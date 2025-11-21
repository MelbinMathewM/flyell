import PackageDetails from "../components/explore/Detail";
import NewsletterSection from "../components/Newsletter";
import PageHeader from "../components/Page-Header";

export default function Explore() {
    return (
        <div>
            <PageHeader
                title="EXPLORE"
                backgroundImage="/contact-header.jpg"
                currentPage="Explore"
            />
            <PackageDetails />
            <NewsletterSection />
        </div>
    )
}