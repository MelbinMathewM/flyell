import AchievementsSection from "../components/home/Achievements";
import AdventuresSection from "../components/home/Adventures";
import DestinationSection from "../components/home/Destination";
import EscapagesSection from "../components/home/Escapages";
import Hero from "../components/home/Hero";
import FeaturesSection from "../components/home/Points";
import QualitySection from "../components/home/Quality";
import FAQSection from "../components/home/Questions";
import TestimonialsSection from "../components/home/Testimonials";
import VideoPlayerSection from "../components/home/Video-Player";
import NewsletterSection from "../components/Newsletter";

export default function Home() {
    return (
        <div>
            <Hero />
            <DestinationSection />
            <FeaturesSection />
            <QualitySection />
            <TestimonialsSection />
            <EscapagesSection />
            <VideoPlayerSection />
            <AdventuresSection />
            <AchievementsSection />
            <FAQSection />
            <NewsletterSection />
        </div>
    )
}