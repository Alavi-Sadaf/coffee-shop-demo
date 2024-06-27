import React from 'react'
import Slider from "react-slick"

const TestimonialData = [
  {
    id: 1,
    name: "Sarah Jones",
    text: "This coffee shop is my happy place! The coffee is always delicious, and the staff are so friendly. I love coming here to relax and catch up with friends.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "David Lee",
    text: "This is the best coffee I've ever had! They use high-quality beans and roast them to perfection. Plus, their pastries are amazing. I highly recommend this coffee shop.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Emily Garcia",
    text: "Such a cozy and inviting atmosphere! I love working here with a cup of coffee and a pastry. The free Wi-Fi is a lifesaver, and the staff are always happy to help.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Michael Chen",
    text: "This coffee shop is a hidden gem! They have a great selection of drinks and snacks, and the prices are very reasonable. The staff are super friendly and knowledgeable",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Olivia Brown",
    text: "The perfect place to start my day! Their coffee is strong and flavorful, just the way I like it. Plus, they have a variety of plant-based milk options, which is great for me. I love their avocado toast too!",
    img: "https://picsum.photos/105/105",
  },
]

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='py-14 mb-10'>
      <div data-aos="zoom-in" className="container">
        {/* header section */}
        <div className='text-center mb-10'>
          <h1 className='text-4xl font-bold font-cursive text-gray-800'>
            Testimonials
          </h1>
        </div>
        
        {/* testimonial section  */}
        <div>
          <Slider{...settings}>
            {
              TestimonialData.map((data, index) => {
                return <div className="my-6" key={data.id}>
                  <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative'>
                    {/* image section */}
                    <div className='mb-4'>
                      <img src={data.img} alt=""
                      className='rounded-full w-20 h-20'
                      />
                    </div>
                    {/* content section */}
                    <div className='flex flex-col items-center gap-4'>
                      <div className='space-y-3'>
                        <p className='text-xs text-gray-500'>{data.text}</p>
                        <h1 className='text-xl font-bold text-black/60 font-cursive'>{data.name}</h1>
                      </div>
                    </div>
                    <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                  </div>
                </div>
              })
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonial