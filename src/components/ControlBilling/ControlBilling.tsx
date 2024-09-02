"use client";
import React from "react";
import { MotionTransition } from "../MotionTransition";
import { transactionsData } from "./Transactions.data";
import Reveal from "../Reveal/Reveal";

export default function ControlBilling() {
  return (
    <div className="p-6">
      <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row items-center gap-4">
        <div className="flex flex-col md:max-w-[60%]">
          <MotionTransition className="p-6 md:p-8">
            <div className="rounded-2xl bg-blueRadial p-4">
              <h3 className="text-3xl text-black font-semibold mb-2">
                Inmediate Transactions
              </h3>
              <span>
                Benefit from immediate transactions with no limits or
                unnecessary delays. Enjoy seamless and instant processing for
                all your financial activities, ensuring quick access and
                efficiency.
              </span>
              <div className="flex flex-col mx-auto md:w-[50%] mt-4">
                {transactionsData.map(
                  ({ id, company, type, icon: Icon, value }) => (
                    <div
                      key={id}
                      className="bg-white rounded-lg p-2 text-black flex mb-3 justify-between items-center "
                    >
                      <div className="bg-secondary rounded-lg p-1">
                        <Icon />
                      </div>
                      <div>
                        <h4 className="font-semibold">{company}</h4>
                        <span className="text-slate-700 text-sm">{type}</span>
                      </div>
                      <span>{value}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </MotionTransition>
        </div>
        <div>
          <Reveal>
            <h3 className="text-3xl font-semibold">
              Easily control your billing
            </h3>
          </Reveal>
          <Reveal>
            <p className="mt-10 max-w-md">
              With the right credit card you can improve your financial life by
              building credit, earning financial life by generating credit,
              earning rewards and saving money. But with hundreds of credit
              cards on the market.
            </p>
          </Reveal>
        </div>
      </div>
      {/* <Image
        className="w-full rounded-2xl h-14"
        src="/assets/paymentSilder.jpg"
        alt="slider"
        width={500}
        height={20}
      /> */}
    </div>
  );
}
