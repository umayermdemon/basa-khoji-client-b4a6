import styles from "./banner.module.css";
import BannerSearchSection from "./BannerSearchSection";

const BannerSection = () => {
  return (
    <div className={`${styles.banner} p-24`}>
      <BannerSearchSection />
    </div>
  );
};

export default BannerSection;
