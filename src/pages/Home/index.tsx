import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ServiceSection />
      <AboutSection />
    </div>
  );
};

export default Home;
