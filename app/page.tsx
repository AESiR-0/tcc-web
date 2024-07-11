// Import React and Next.js Link component
import { Hero } from "@/components/Hero";
import About from '@/components/sections/about'
import { Navbar } from "@/components/Navbar";
import Footer from '@/components/Footer'

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
      <Footer />
    </>
  );
}
