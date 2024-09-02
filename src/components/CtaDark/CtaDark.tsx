import Link from "next/link";
import Reveal from "../Reveal/Reveal";

export default function CtaDark() {
  return (
    <div className="px-6 my-20 md:mt-36">
      <div className="max-w-5xl px-4 py-6 mx-auto border-transparent bg-radialBlack md:px-16 md:py-12 rounded-3xl">
        <div className="grid items-center md:grid-cols-2">
          <div className="my-8">
            <Reveal>
              <h3 className="text-3xl font-bold mb-2">
                Come to try our services
              </h3>
            </Reveal>
            <Reveal>
              <p>
                Everything you need to accept card payments and grow your
                business anywhere in the world
              </p>
            </Reveal>
          </div>
          <Link href="#" className="px-4 py-3 mx-auto rounded-lg bg-blueRadial">
            <Reveal>Get Started</Reveal>
          </Link>
        </div>
      </div>
    </div>
  );
}
