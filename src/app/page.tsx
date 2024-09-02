import Banner from "@/components/Banner/Banner";
import BestBusiness from "@/components/BestBusiness/BestBusiness";
import ChooseCard from "@/components/ChooseCard/ChooseCard";
import ControlBilling from "@/components/ControlBilling/ControlBilling";
import CounterData from "@/components/CounterData/CounterData";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PaymentMethods from "@/components/PaymentMethods/PaymentMethods";
import Testimonials from "@/components/Testimonials/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mt-16 -z-0">
        <Banner
          text1="Boost"
          underlined="Your Financial Life"
          text2="with Us!"
          description="Explore our credit cards with exclusive benefits, attractive rewards and flexible terms. Enjoy financial freedom and the support of a bank that understands your needs"
          buttonLabel="Get Started"
          buttonLink="#clients"
          rightBG="/assets/background-floated-right.png"
        >
          <Image
            src="/assets/test5.png"
            width={450}
            height={450}
            alt="card images"
          />
        </Banner>
      </div>
      <BestBusiness />
      <ChooseCard />
      <ControlBilling />
      <Testimonials />
      <PaymentMethods />
      <Footer />
    </div>
  );
}
