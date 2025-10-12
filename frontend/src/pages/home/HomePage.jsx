import { Link } from "react-router";
import Hero from "../../components/home/Hero";
import Services from "../../components/home/Services";
import OwnerSection from "../../components/home/OwnerSection";
import Guid from "../../components/home/Guid";
import FreelancerSection from "../../components/home/FreelancerSection";
import FAQSection from "../../components/home/FAQSection";

const HomePage = () => {
  return (
    <div className="bg-secondary-50">
      <Hero />
      <Services />
      <OwnerSection />
      <Guid />
      <FreelancerSection />
      <FAQSection />
      {/* <Link to={"/freelancer"}>فریلنسر</Link>
      <Link to={"/owner"}>کارفرما</Link>
      <Link to={"/admin"}>ادمین</Link> */}
    </div>
  );
};

export default HomePage;
