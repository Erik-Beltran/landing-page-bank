"use client";
import Link from "next/link";
import { BannerProps } from "./Banner.types";
import Image from "next/image";
import { MotionTransition } from "../MotionTransition";
import Reveal from "../Reveal/Reveal";

export default function Banner(props: BannerProps) {
  const {
    text1,
    underlined,
    text2,
    description,
    buttonLabel,
    buttonLink,
    leftBG,
    rightBG,
    children,
    subtitle,
  } = props;
  return (
    <div className="relative p-6">
      {rightBG && (
        <div className="absolute right-0 -z-50 top-0">
          <Image src={rightBG} alt="banner image" width={850} height={650} />
        </div>
      )}
      {leftBG && (
        <div className="absolute left-0 -z-50 top-0">
          <Image src={leftBG} alt="banner image" width={850} height={650} />
        </div>
      )}
      <div className="block max-w-5xl mx-auto md:grid md:grid-cols-2 gap-4">
        <div>
          <Reveal>
            {!subtitle ? (
              <h1 className="text-5xl font-semibold">
                {text1}
                {underlined && (
                  <span className="block text-transparent bg-clip-text bg-blueLight">
                    {underlined}
                  </span>
                )}
                <span className="block">{text2}</span>
              </h1>
            ) : (
              <h3 className="text-3xl font-semibold">
                {text1}
                {underlined && (
                  <span className="block text-transparent bg-clip-text bg-blueLight">
                    {underlined}
                  </span>
                )}
                <span className="block">{text2}</span>
              </h3>
            )}
          </Reveal>
          {description && (
            <Reveal>
              <p className="max-w-md mt-10">{description}</p>
            </Reveal>
          )}
          {buttonLabel && (
            <Reveal>
              <div className="my-8">
                <Link
                  href={buttonLink || "#"}
                  className="px-4 py-3 rounded-md bg-blueRadial"
                >
                  {buttonLabel}
                </Link>
              </div>
            </Reveal>
          )}
        </div>

        <MotionTransition>
          {/* <Image src={image} width={450} height={450} alt="card images" /> */}
          {children}
        </MotionTransition>
      </div>
    </div>
  );
}
