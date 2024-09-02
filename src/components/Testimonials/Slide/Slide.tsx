import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { dataTestimonials } from "../Testimonials.data";
import Reveal from "@/components/Reveal/Reveal";

import REVIEW_ICON from "@icons/review.svg";
import Image from "next/image";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

export default function Slide() {
  return (
    <Swiper
      className="max-w-5xl mx-auto"
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        678: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    >
      {dataTestimonials.map(({ id, name, occupation, testimonial, image }) => (
        <SwiperSlide key={id} className="my-5 cursor-pointer md:px-10">
          <Reveal>
            <div className="text-secondary">
              <REVIEW_ICON />
            </div>
            <p className="my-5">{testimonial}</p>
            <div className="flex mb-4">
              <div className="flex items-center">
                <Image
                  src={image}
                  alt="profile image"
                  height={50}
                  width={50}
                  className="mr-5 aspect-square w-12 h-12"
                />
                <div>
                  <h4>{name}</h4>
                  <p className="text-primaryDark">{occupation}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
