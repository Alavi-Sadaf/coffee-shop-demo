import React from 'react';
import BannerImg from "../../assets/banner-coffee.png";
import BgIexture from "../../assets/website/coffee-texture.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const bgImage = {
  backgroundImage: `url(${BgIexture})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
}

const Banner = () => {
  return (
    <>
    <span id='about'></span>
     <div style={bgImage}>
      <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* image section */}
          <div data-aos="zoom-in" >
            <img src={BannerImg} alt="" className='
            max-w-[540px] w-full mx-auto spin
            drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]
            '/>
          </div>
          {/* text section */}
          <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold font-cursive'>Premium Blend Coffee</h1>
            <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-5'>Rich, flavorful coffee. Crafted from high-quality beans for a smooth and satisfying cup.
            </p>
            <div className='grid grid-cols-2 gap-6'>
              <div data-aos="fade-right" className='space-y-5'>
                <div className='flex items-center gap-3'>
                  <GrSecure
                  className='text-2xl h-12 w-14 shadow-sm p-3 rounded-full bg-red-100'/>
                  <span>Premium Coffee</span>  
                </div>
                <div className='flex items-center gap-3'>
                  <IoFastFood
                  className='text-2xl h-12 w-14 shadow-sm p-3 rounded-full bg-orange-100'/>
                  <span>Hot Coffee</span>  
                </div>
                <div className='flex items-center gap-3'>
                  <GiFoodTruck
                  className='text-2xl h-12 w-14 shadow-sm p-3 rounded-full bg-yellow-100'/>
                  <span>Cold Coffee</span>  
                </div>
              </div>
              <div className='border-l-4 border-primary/50 pl-6 space-y-3'>
                <h1 data-aos="fade-left" className='text-2xl font-semibold font-cursive'>Tea Lover</h1>
                <p data-aos="fade-left" className='text-sm text-gray-500 traking-wide leading-5'>
                  {" "}
                  Much like writing code, brewing the perfect cup of tea requires patience, precision, and a dash of passion to create a comforting blend of flavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default Banner