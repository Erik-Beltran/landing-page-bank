"use client";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { dataPaymentMethods } from "./PaymentMethods.data";
import Image from "next/image";
import CtaDark from "../CtaDark/CtaDark";

export default function PaymentMethods() {
  return (
    <div id="services" className="relative py-20 md:py-64 px-6">
      <Image
        src="/assets/background-floated-right.png"
        alt="banner image"
        width={850}
        height={650}
        className="absolute right-0 -z-50 top-0"
      />
      <div className="relative w-full overflow-hidden   max-w-5xl mx-auto">
        <Swiper
          slidesPerView={6}
          spaceBetween={15}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <div className="absolute flex">
            {dataPaymentMethods.map(({ id, image }) => (
              <SwiperSlide key={id}>
                <Image
                  src={image}
                  alt="payment"
                  width="76"
                  height="76"
                  className="h-[60px] w-[120px] object-contain"
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <CtaDark />
    </div>
  );
}
