import ContactSection from "../components/contact/Main";
import NewsletterSection from "../components/Newsletter";
import PageHeader from "../components/Page-Header";

export default function Contact() {
    return (
        <div>
            <PageHeader
                title="CONTACT"
                backgroundImage="/contact-header.jpg"
                currentPage="Contact"
            />
            <ContactSection />
            <NewsletterSection />
        </div>
    )
}