import BannerSection from "@/components/modules/home/Banner/BannerSection";
import FeaturedBlog from "@/components/modules/home/FeaturedBlog/FeaturedBlog";
import FeaturedRentalHouse from "@/components/modules/home/FeaturedRentalHouse/FeaturedRentalHouse";
import HowItWorks from "@/components/modules/home/HowItWorks/HowItWorks";
import OfferSection from "@/components/modules/home/OfferSection/OfferSection";
import WhyChooseUs from "@/components/modules/home/WhyChooseUs/WhyChooseUs";
import { getBlogData } from "@/services/Blog";
import { getAllRentalHouse } from "@/services/RentalHouse";

const HomePage = async () => {
  const { data } = await getAllRentalHouse();
  const res = await getBlogData();
  const blogs = res?.data;
  return (
    <div>
      <BannerSection numberOfData={data?.length} />
      {/* <CategoriesSection /> */}
      <FeaturedRentalHouse featuredHouses={data} />
      <OfferSection />
      <HowItWorks />
      <FeaturedBlog blogs={blogs} />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      {/* <NewsletterSection /> */}
      {/* <FAQSection /> */}
      {/* <ContactSection /> */}
    </div>
  );
};

export default HomePage;
