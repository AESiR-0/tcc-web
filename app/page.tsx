// Import React and Next.js Link component
import { Hero } from "@/components/Hero";
import About from '@/components/sections/about'
import { Navbar } from "@/components/Navbar";
import DirectorNotes from '@/components/sections/director-note'
import Footer from '@/components/Footer'
import Products from '@/components/sections/product'

export default function Home() {
  return (
    <>
    <Navbar/>
      <div className="h-screen w-full">
        <Hero />  
      </div>
      <div className="h-full w-full">
      <About/>
        </div>
        <div className="container">
          <DirectorNotes/>
        </div> 
        <div className="container">
          <Products />
        </div>
      <Footer />
    </>
  );
}
