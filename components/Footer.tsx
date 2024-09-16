import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/static/logo/old-removebg-preview.pngold.png'


const menuItems = [
  { title: "Home", path: "/" },
  { title: "Products", path: "/products" },
  { title: "About Us", path: "/about" },
];
export default function Footer() {
  return (
    <div className="border-t-2  border-t-black justify-evenly items-center flex  gap-5 py-10 px-10">

  
 
  <div className='flex flex-col gap-2'>
    <h6 className="font-bold text-center">Useful Links</h6>
    {menuItems.map((item) => (
          <li className='list-none' key={item.title}>
            <Link href={item.path}>
              <p className="block pb-1 text-center hover:scale-95 hover:text-tertiary transition-all">{item.title}</p>
            </Link>
          </li>
        ))}  </div>
  <div className='flex flex-col items-center '>
   <Image alt="logo" src={logo} height={256} width={256}/>
    <p className='text-center -mt-10'>
Taj Cables and Conductors      <br />
Tagline
    </p>
  </div>
  <div className='flex flex-col gap-2'>
    <h6 className="font-bold">Most Visted Links</h6>
    {menuItems.map((item) => (
          <li className='list-none' key={item.title}>
            <Link href={item.path}>
              <p className="block pb-1 text-center hover:scale-95 hover:text-tertiary transition-all">{item.title}</p>
            </Link>
          </li>
        ))}
  </div>
</div>
  )
}
