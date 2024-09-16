'use client'
import React from 'react'
import Image from 'next/image'


const product = [
    {
        title: 'Weasel',
        image: '/static/products/weasel.png',
    },
    {
        title: 'Rabbit',
        image: '/static/products/rabit.png',
    },
    {
        title: 'Dog',
        image: '/static/products/dog.png',
    },
    {
        title:'Raccoon',
        image: '/static/products/raccoon.png',
    }
]

export default function Products() {
  return (
    <div className="container my-20">
        <h2 className="text-3xl text-center font-bold mb-6">Products</h2>
           <div className=" w-full flex justify-center gap-20">
       {product.map((prod, index) => (
           <div 
           
           onClick={(e)=>{
          e.preventDefault()
        }} 
           key={index} className=" w-80 flex flex-col justify-center items-center px-6  h-80 hover:bg-blue-500 hover:scale-110 hover:cursor-pointer transition-all ">
                <h1 className='text-xl my-5 text-center'>{prod.title}</h1>
                <Image className='rounded mb-3' alt='product' width={200} height={200} src={prod.image} />
                <h3 className="text-md flex hover:gap-2 gap-0 transition-all "> Read More<span>-&gt;</span></h3>
            </div>
         ))}
    </div> 
    </div>
  )
}
