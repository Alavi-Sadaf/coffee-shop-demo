import React from 'react';
import Img1 from "../../assets/espresso.png";
import Img2 from "../../assets/cappuccino.png";
import Img3 from "../../assets/latte.png";

const ServicesData = [
  {
    id:1,
    img: Img1,
    name: "Espresso",
    description: "A bold and concentrated shot of finely-ground coffee brewed with hot water pressure. Packs a punch with a strong coffee flavor.",
    aosDelay: "100",    
  },
  {
    id:2,
    img: Img2,
    name: "Cappuccino",
    description: "Equal parts espresso, steamed milk, and foamed milk create a delicious balance of bold and smooth.",
    aosDelay: "100",    
  },
  {
    id:3,
    img: Img3,
    name: "Latte",
    description: "Creamy latte. Espresso and steamed milk mix for a larger, smooth coffee with a hint of sweetness.",
    aosDelay: "100",    
  }
]

const Services = () => {
  return  (
  <>
    <span id='services'></span>
    <div className='py-10'>
      <div className="container">
        {/*header title*/}
        <div className='text-center mb-20'>
          <h1 className='text-4xl font-bold font-cursive text-gray-800'>
            Best Coffee For You
          </h1>
        </div>
        {/* Services card section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
          {
          ServicesData.map((data, index) => {
            return (
              <div 
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={index}
              className='rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative'
              >
                {/* image section */}
                <div className='h-[122px]'>
                  <img src={data.img} alt="" 
                  className='max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300'
                  />
                </div>
                {/* text content */}
              <div className='p-4 text-center'>
                <h1 className='text-xl font-bold'>{data.name}</h1>
                <p className='text-gray-500 group-hover:text-white duration-300 text-sm '>{data.description}</p>
              </div>
              </div>
            );
          })
          };
          <div>

          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Services