"use client";
import * as React from "react";
import jaigarhFort from "@/public/static/caraousel/jaigarh-fort.jpg";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const content = [
  {
    image: jaigarhFort,
    title: "Taj Cables and Conductors",
    tagline: "Tagline",
  },
  {
    image: jaigarhFort,
    title: "Taj Cables and Conductors",
    tagline: "Tagline",
  },
  {
    image: jaigarhFort,
    title: "Taj Cables and Conductors",
    tagline: "Tagline",
  },
  {
    image: jaigarhFort,
    title: "Taj Cables and Conductors",
    tagline: "Tagline",
  },
  {
    image: jaigarhFort,
    title: "Taj Cables and Conductors",
    tagline: "Tagline",
  },
];
export function Hero() {
  return (
    <div>
      <Carousel
        // plugins={[Autoplay({ delay: 5000 })]}
        className="w-full h-[80vh] overflow-hidden max-w-full"
      >
        <CarouselContent>
          {content.map((obj, index) => (
            <CarouselItem key={index}>
              <Image
                src={obj.image}
                style={{
                  width: "100%",
                  height: "100%",
                  zIndex: -1,
                }}
                alt="Jaigarh Fort in Jaipur on a sunny day with a lot "
              />
              <div className="text-3xl uppercase tracking-tight absolute z-10 left-[50%] top-[25%] -translate-x-[50%] -translate-y-[25%]">
                <div className="flex justify-center items-center z-10 flex-col gap-4">
                  <span className="font-bold text-4xl z-10 drop-shadow-xl text-white">
                    {obj.title}
                  </span>
                  <span className="w-[80%] bg-white z-10 h-[2px] "></span>
                  <span className="text-white text-xl z-10 capitalize drop-shadow-lg">
                    {obj.tagline}
                  </span>
                  <button className="text-xl capitalize z-10 p-2 px-5 rounded  bg-white text-tertiary hover:bg-tertiary transition-colors hover:text-white ">
                    Know More
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
