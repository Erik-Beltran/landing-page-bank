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
import favico from "../../public/favicon.ico";

export default function Home() {
  return (
    <main className="h-screen overflow-auto md:snap-y md:snap-mandatory">
      <link rel="shortcut icon" href={favico.src} type="image/x-icon" />
      <Header />
      <div className="pt-16  md:pt-0 h-screen snap-center flex justify-center items-center relative">
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
      <div className="snap-center pt-16 md:pt-0 md:h-screen flex items-center justify-center relative  ">
        <BestBusiness />
      </div>
      <div className="snap-center pt-16 md:pt-0 md:h-screen flex flex-col justify-center relative">
        <ChooseCard />
      </div>
      <div className="snap-center pt-16 md:pt-0 md:h-screen flex items-center relative justify-center">
        <ControlBilling />
      </div>
      <div className="snap-center pt-16 md:pt-0 md:h-screen flex flex-col justify-center relative">
        <Testimonials />
      </div>
      <div className="snap-center pt-16 md:pt-0 md:h-screenflex flex-col justify-center">
        <PaymentMethods />
        <Footer />
      </div>
    </main>
  );
}
