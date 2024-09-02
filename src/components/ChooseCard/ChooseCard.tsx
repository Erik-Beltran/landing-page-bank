"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-cards";

import { MotionTransition } from "../MotionTransition";
import Banner from "../Banner/Banner";
import { dataCards } from "./ChooseCard.data";
import "./style.css";

export default function ChooseCard() {
  return (
    <div id="cards">
      <Banner
        subtitle
        text1="Choose the card that"
        underlined="best suits your needs"
        description="Select a card that matches your spending habits and goals. Look for benefits like cash back, rewards,
       or low fees to find the best fit for your needs."
        buttonLabel="Get Started"
        buttonLink="#clients"
        rightBG="/assets/background-floated-right.png"
      >
        <div className="px-5">
          <MotionTransition>
            <Swiper
              grabCursor={true}
              modules={[Autoplay, EffectCards]}
              autoplay={{
                delay: 1000,
              }}
              effect={"cards"}
            >
              {dataCards.map(({ id, image }) => (
                <SwiperSlide key={id}>
                  <Image
                    src={image}
                    width="400"
                    height="300"
                    alt="card image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </MotionTransition>
        </div>
      </Banner>
    </div>
  );
}
