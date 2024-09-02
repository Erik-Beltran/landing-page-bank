"use client";
import CountUp from "react-countup";

import { MotionTransition } from "../MotionTransition";
import { dataCounter } from "./CounterData.data";

export default function CounterData() {
  return (
    <MotionTransition className="max-w-5xl mx-auto p-6">
      <div className="justify-between md:flex">
        {dataCounter.map(({ id, endNumber, startNumber, text }) => (
          <div key={id} className="py-5 text-2xl text-center md:text-left ">
            +
            <CountUp
              start={startNumber}
              end={endNumber}
              duration={1.8}
              enableScrollSpy
            />{" "}
            <span className="bg-blueLight text-transparent bg-clip-text">
              {text}
            </span>
          </div>
        ))}
      </div>
    </MotionTransition>
  );
}
