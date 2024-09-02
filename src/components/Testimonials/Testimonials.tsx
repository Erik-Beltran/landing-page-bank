"use client";
import Banner from "../Banner/Banner";
import Reveal from "../Reveal/Reveal";
import Slide from "./Slide/Slide";

export default function Testimonials() {
  return (
    <div id="testimonials" className="py-2">
      <Banner
        text1="What customers"
        subtitle
        text2="say about us"
        leftBG="/assets/background-floated-left.png"
      >
        <div>
          <Reveal>
            <p className="text-primaryDark">
              Everything you need to accept card payments and grow your business
              anywhere in the world grow your business anywhere in the world
            </p>
          </Reveal>
        </div>
      </Banner>
      <div className="max-w-5xl mx-auto p-6">
        <Slide />
      </div>
    </div>
  );
}
