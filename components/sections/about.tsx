'use client'
import React from 'react'
import Image from 'next/image'
import {images} from '@/components/assets/images'

export default function About() {
  return (
    <div className='relative'>
        <div className='flex absolute flex-col w-full justify-center gap-10 items-center'>
            <h1 className="text-4xl font-bold uppercase tracking-tighter ">About Us</h1>
            <span className="text-lg px-96 tracking-wide leading-8 text-center"> Assumenda quaerat labore at harum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nobis rem ex animi ipsa illum enim accusamus distinctio temporibus. Ut quaerat inventore eos saepe veritatis animi accusamus possimus voluptas accusantium.</span>
            <button
          type="button"
          className="rounded  px-7 pb-[8px] pt-[10px] text-sm drop-shadow opacity-70 font-medium uppercase leading-normal  transition duration-150 ease-in-out hover:bg-white hover:text-tertiary bg-tertiary text-white hover:bg-opacity-85 "
          data-twe-ripple-init
          data-twe-ripple-color="light">
Read More        </button>
        </div>
        <div className="flex justify-center items-center">
      <Image width={1920} height={1080} src={images.factoryOut} alt='factory'></Image>
      </div>
    </div>
  )
}
