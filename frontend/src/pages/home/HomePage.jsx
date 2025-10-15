import { Link } from "react-router";
import Hero from "../../components/home/Hero";
import Services from "../../components/home/Services";
import OwnerSection from "../../components/home/OwnerSection";
import Guid from "../../components/home/Guid";
import FreelancerSection from "../../components/home/FreelancerSection";
import FAQSection from "../../components/home/FAQSection";
import Footer from "../../components/home/Footer";
import Header from "../../components/home/Header";

const HomePage = () => {
  return (
    <div className="bg-secondary-50 pt-5">
      <Header />
      <Hero />
      <Services />
      <OwnerSection />
      <Guid />
      <FreelancerSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default HomePage;
