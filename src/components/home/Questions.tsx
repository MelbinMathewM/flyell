import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

export default function FAQSection() {
    const faqs = [
        {
            question: "What type of travel packages does Flyell offer?",
            answer:
                "Flyell offers a wide range of travel packages to destinations around the world including customized tours, group tours, luxury travel, adventure travel and more. Our travel specialists work with you to create an itinerary that meets your specific needs and preferences."
        },
        {
            question: "How do I book a trip with Flyell?",
            answer:
                "Booking with Flyell is very easy. Simply visit our website, choose your destination, and select your preferred package. You can also contact our support team for custom travel planning."
        },
        {
            question: "What is the payment process for Flyell?",
            answer:
                "You can pay using credit card, debit card, or PayPal. Flexible installment options are available for select packages."
        },
        {
            question: "How to cancel my booking in Flyell?",
            answer:
                "You can cancel your booking via your account dashboard. Refunds depend on the cancellation policy of your specific travel package."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index: number) => {
        setActiveIndex((prev) => (prev === index ? -1 : index));
    };

    return (
        <section
            className="w-full py-12 bg-cover bg-center"
            style={{ backgroundImage: "url('/question-bg.jpg')" }}
        >
            <div className="max-w-5xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-wider">
                        FREQUENTLY ASKED QUESTIONS
                    </h2>
                    <p className="text-gray-700 mt-1">
                        What our clients usually asked about our services and tours.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="flex flex-col gap-4">

                    {faqs.map((faq, i) => {
                        const isOpen = activeIndex === i;

                        return (
                            <div
                                key={i}
                                className="bg-white rounded-xl shadow-md overflow-hidden"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(i)}
                                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                                >
                                    <span className="font-semibold text-xl text-gray-900">
                                        {faq.question}
                                    </span>

                                    <BiChevronDown
                                        size={26}
                                        className={`border rounded-2xl transition-transform duration-300 ${isOpen ? "rotate-180 bg-blue-400 text-white" : "text-blue-400"
                                            }`}
                                    />
                                </button>

                                {/* Answer */}
                                <div
                                    className={`px-6 pb-5 text-gray-600 text-sm leading-relaxed transition-all duration-300 ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}
