'use client'
import React from 'react'
import Image from 'next/image'

const product = [
    {
        title: 'Product 1',
        image: '/images/product1.jpg',
    },
    {
        title: 'Product 2',
        image: '/images/product2.jpg',
    },
    {
        title: 'Product 3',
        image: '/images/product3.jpg',
    },
]

export default function Products() {
  return (
    <div className="container my-20">
        <h2 className="text-3xl text-center mb-6">Products</h2>
           <div className=" w-full flex justify-evenly">
       {product.map((prod, index) => (
           <div 
           onClick={(e)=>{
          e.preventDefault()
        }} 
           key={index} className="border w-80 px-6  h-80 hover:bg-yellow-300 hover:scale-110 hover:cursor-pointer transition-all border-red-400">
                <h1 className='text-xl my-5 text-center'>{prod.title}</h1>
                <Image className='rounded mb-3' alt='product' width={128} height={128} src={prod.image} />
                <h3 className="text-md flex hover:gap-2 gap-0 transition-all "> Read More<span>-&gt;</span></h3>
            </div>
         ))}
    </div> 
    </div>
  )
}
