"use client";
import * as React from "react";
// import jaigarhFort from "@/public/static/caraousel/jaigarh-fort.jpg";
import Autoplay from "embla-carousel-autoplay";
import {images} from './assets/images'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const content = [
  {
    image: images.factoryCenter,
    title: "Taj Cables and Conductors",
    tagline: "Tagline",
  },
  {
    image: images.factoryPov,
    title: "Taj Cables and Conductors",
    tagline: "Tagline",
  },
  {
    image: images.wireTopViewDark,
    title: "Taj Cables and Conductors",
    tagline: "Tagline",

  },
  {
    image: images.workerWorkingWide,
    title: "Taj Cables and Conductors",
    tagline
    : "Tagline",
  },
  {
    image:images.blurWorkerLookingAway,
    title: "Taj Cables and Conductors",
    tagline: "Tagline",
  }
    

];
export function Hero() {
  return (
    <>
      <Carousel
        plugins={[Autoplay({ delay: 3500 })]}
        className="w-full bg-black h-[90vh] overflow-hidden max-w-full"
      >
        <CarouselContent>
          {content.map((obj, index) => (
            <CarouselItem key={index}>
<div
  className={`relative overflow-hidden opacity-80 bg-black  h-[100vh] bg-cover bg-no-repeat p-12 text-center`}
  style={{ backgroundImage: `url(${obj.image})`, backgroundPosition:'center center' }}
  >
  <div
    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
    style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
    <div className="flex h-full items-center justify-center">
      <div className="text-white">
        <h2 className="mb-4 text-5xl font-semibold">{obj.title}</h2>
        <hr className="px-3 h-2" />
        <h4 className="mb-6 text-2xl font-semibold">{obj.tagline}</h4>
        <button
          type="button"
          className="rounded  px-7 pb-[8px] pt-[10px] text-md drop-shadow font-medium uppercase leading-normal  transition duration-150 ease-in-out hover:bg-white hover:text-tertiary bg-tertiary text-white hover:bg-opacity-85 "
          data-twe-ripple-init
          data-twe-ripple-color="light">
          About us
        </button>
      </div>
    </div>
  </div>
</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
