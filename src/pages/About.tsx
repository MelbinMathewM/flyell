import AboutSection from "../components/about/Main";
import NewsletterSection from "../components/Newsletter";
import PageHeader from "../components/Page-Header";

export default function About() {
    return (
        <div>
            <PageHeader
                title="ABOUT"
                backgroundImage="/about-header.jpg"
                currentPage="About"
            />
            <AboutSection />
            <NewsletterSection />
        </div>
    )
}