"use client";
import React from "react";
import Image from "next/image";
import factoryImage from "@/public/static/factory/VBV01111 E.jpg";

export default function About() {
  return (
    <div className="relative">
      <div className="flex absolute py-20 flex-col w-full justify-center gap-10 items-center">
        <h1 className="text-4xl font-bold uppercase tracking-tighter ">
          About Us
        </h1>
        <span className="text-xl px-80 shadow  leading-8 text-center">
          TCC is an establishment where three generations have come together,
          each enriching the company with their mindfulness, unrestrained
          potential, and vigor. Our journey is fueled by the combined experience
          and innovation of a family committed to excellence.
        </span>
        <button
          type="button"
          className="rounded  px-7 pb-[8px] pt-[10px] text-sm drop-shadow opacity-70 font-medium uppercase leading-normal  transition duration-150 ease-in-out hover:bg-white hover:text-tertiary bg-tertiary text-white hover:bg-opacity-85 "
          data-twe-ripple-init
          data-twe-ripple-color="light"
        >
          Read More{" "}
        </button>
      </div>
      <div className="flex justify-center items-center">
        <Image
          width={1920}
          height={1080}
          src={factoryImage}
          alt="factory"
        ></Image>
      </div>
    </div>
  );
}
