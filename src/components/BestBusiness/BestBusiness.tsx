"use client";

import { useEffect, useRef, useState } from "react";
import Banner from "../Banner/Banner";
import CounterData from "../CounterData/CounterData";
import Reveal from "../Reveal/Reveal";
import { dataFeaturesBusiness } from "./BestBusiness.data";

export default function BestBusiness() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div id="features" ref={ref}>
      {isVisible && <CounterData />}
      <Banner
        subtitle
        underlined="You do the business"
        text2="We handle the money"
        leftBG="/assets/background-floated-left.png"
        description="With the right credit card, you can improve your financial life by building credit, 
        earning rewards and saving money."
        buttonLabel="Choose your plan"
        buttonLink="#clients"
      >
        <div className="grid items-center py-5 md:p-8">
          {dataFeaturesBusiness.map(
            ({ id, title, description, icon: IconComponent }) => (
              <Reveal key={id}>
                <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-radialBlack text-secondary">
                  <IconComponent />
                  <div className="text-primary">
                    <h4> {title}</h4>
                    <p>{description}</p>
                  </div>
                </div>
              </Reveal>
            )
          )}
        </div>
      </Banner>
    </div>
  );
}
