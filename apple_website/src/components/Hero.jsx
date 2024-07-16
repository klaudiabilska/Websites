import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";


const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", {
      duration: 1,
      opacity: 1,
      delay: 1.5
    })
  }, [])
 
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video>
            <source src="{videoSrc}" />
          </video>
        </div>
      </div>

    </section>
  )
}

export default Hero

//https://www.youtube.com/watch?v=RbxHZwFtRT4&t=2887s kontynuowac w 1:14:50, dodajemy video do Hero