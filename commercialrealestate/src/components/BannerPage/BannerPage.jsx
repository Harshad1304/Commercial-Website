import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function BannerPage() {
   
        const settings = {
            dots: true, 
            infinite: true, 
            speed: 500, 
            slidesToShow: 1, 
            slidesToScroll: 1, 
            autoplay: true, 
            autoplaySpeed: 4000,
            pauseOnHover: false,
          };
     


  return (
    <div className='h-screen w-full overflow-hidden'>

            {/*Sliding Banner  */}
        <Slider {...settings}>

            <div className='bg-[url("https://images.stockcake.com/public/8/f/b/8fb0595a-9537-4bb4-9160-c778c2994110/modern-office-building-stockcake.jpg")] h-screen w-full bg-no-repeat bg-cover bg-center '> 
            {/* headings inside image */}
            <div className=' pt-80 px-5 xl:pt-80 xl:px-32'>
            <h1 className='text-4xl xl:text-8xl leading-none text-white font-bold'>Heading Text-1</h1>
            <p className='text-white text-xl xl:text-2xl pt-8 font-normal xl:w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid totam nihil praesentium placeat aperiam reprehenderit incidunt eveniet impedit alias.</p>
            </div>
            </div>
            <div className='bg-[url("https://images.stockcake.com/public/2/d/6/2d6b5a73-0118-491b-8c3f-cee28381df2b_large/modern-green-building-stockcake.jpg")] bg-center h-screen w-full bg-no-repeat bg-cover '>
            {/* headings inside image */}
            <div className=' pt-80 px-5 xl:pt-80 xl:px-32'>
            <h1 className='text-4xl xl:text-8xl leading-none text-white font-bold'>Heading Text-1</h1>
            <p className='text-white text-xl xl:text-2xl pt-8 font-normal xl:w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid totam nihil praesentium placeat aperiam reprehenderit incidunt eveniet impedit alias.</p>
            </div>
            </div>
            <div className='bg-[url("https://images.stockcake.com/public/9/b/b/9bb0180a-8334-4171-b159-3791080a109e_large/morning-commute-scene-stockcake.jpg")] h-screen w-full bg-no-repeat bg-cover bg-center'>
            
            {/* headings inside image */}
            <div className=' pt-80 px-5 xl:pt-80 xl:px-32'>
            <h1 className='text-4xl xl:text-8xl leading-none text-white font-bold'>Heading Text-1</h1>
            <p className='text-white text-xl xl:text-2xl pt-8 font-normal xl:w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid totam nihil praesentium placeat aperiam reprehenderit incidunt eveniet impedit alias.</p>
            </div> 
            </div>
        </Slider>
    
    </div>
  )
}

export default BannerPage