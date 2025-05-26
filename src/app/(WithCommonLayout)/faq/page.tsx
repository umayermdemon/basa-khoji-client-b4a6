import styles from "./contact.module.css";

export default function FAQPage() {
  const faqs = [
    {
      question: "What services does Basa Khoji provide?",
      answer:
        "Basa Khoji is an online platform that helps users find and list apartments, houses, and office spaces for rent or sale.",
    },
    {
      question: "How do I register on Basa Khoji?",
      answer:
        "Click on the Sign Up button and fill in the required information to create your account.",
    },
    {
      question: "How can I post a property on Basa Khoji?",
      answer:
        "After registering and logging in, go to your dashboard and click on 'Add New Listing' to post your property details.",
    },
    {
      question: "Is there any charge for posting a property?",
      answer:
        "Basic property listings are free. However, premium features such as highlighted or featured listings may require a fee.",
    },
    {
      question: "How do I contact Basa Khoji support?",
      answer:
        "You can reach us via the Contact page, email us at support@basakhoji.com, or use our live chat feature.",
    },
    {
      question: "How can I ensure safe transactions on Basa Khoji?",
      answer:
        "Always communicate directly with property owners or authorized agents and avoid making payments before verifying the property.",
    },
    {
      question: "How do I use search filters?",
      answer:
        "Use the search bar on the homepage to filter properties by location, price range, property type, and other criteria.",
    },
    {
      question: "How can I edit or delete my property listing?",
      answer:
        "Go to your dashboard, find your listing, and use the edit or delete options next to the property.",
    },
    {
      question: "How do I upgrade to a premium membership?",
      answer:
        "Select the premium membership option from your dashboard and follow the payment instructions.",
    },
    {
      question: "How can I get customer support?",
      answer:
        "Customer support is available via live chat, email, and phone. Visit our Contact page for more details.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className={`${styles.contact} relative w-full h-64 bg-cover bg-center`}>
        <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
          <p className="text-sm">Home / FAQ</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-8 text-[#ed6e5a] text-center">
          Find answers to the most common questions about Basa Khoji
        </h2>
        <div className="flex flex-col gap-6">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="bg-white rounded-2xl shadow p-6 group border border-gray-100"
              open={idx === 0}>
              <summary className="cursor-pointer font-semibold text-lg text-[#ed6e5a] flex items-center justify-between outline-none group-open:mb-2">
                <span>{faq.question}</span>
                <svg
                  className="ml-2 h-5 w-5 text-[#ed6e5a] transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="text-gray-700 mt-3">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
