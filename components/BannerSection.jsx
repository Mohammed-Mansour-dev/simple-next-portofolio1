import React from 'react'
import { MdKeyboardArrowRight  } from "react-icons/md";
import { IoSparklesSharp } from "react-icons/io5";
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { SliderBoxData } from "@/constants/data";
import { FaOpencart } from "react-icons/fa";
import { useState } from "react";

import {EffectCreative, Autoplay ,FreeMode ,Pagination} from "swiper/modules"

// import Swiper styles
import "swiper/css"
import "swiper/css/effect-creative"
import "swiper/css/pagination";
import "swiper/css/free-mode";



const BannerSection = () => {
    

const [activeSlideNav , setActiveSlideNav ] = useState(0)
  return (
    <div>
        <div  className="banner w-full  px-4  h-fit relative py-36 ">

{/* ---------------------------------------
--------------SCREEN BG
-------------------------------------------*/}

{/* img bg */}
<div className="absolute w-full h-full   -z-30 inset-0">
  <img loading="lazy" className="w-full h-full " src="./img/bg.jpeg" />
</div>
{/* shadow bg */}
<div className="absolute w-full h-full -z-20 overflow-hidden  inset-0" >
<svg
                  width={1240}
                  height={1200}
                  viewBox="0 0 1240 1252"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    background: "transparent",
                  }}
                >
                  <g className="eff-1 eff" filter="url(#filter0_f_1390_2298)">
                    <path
                      d="M885.857 160.25L1024.14 911.075C1026.99 926.564 1042.13 936.591 1057.5 933.177V933.177C1072.87 929.763 1082.34 914.271 1078.37 899.031L885.857 160.25Z"
                      fill="url(#paint0_linear_1390_2298)"
                    />
                  </g>
                  <g className="eff-2 eff" filter="url(#filter1_f_1390_2298)">
                    <path
                      d="M353.786 160.25L215.507 911.075C212.655 926.564 197.517 936.591 182.143 933.177V933.177C166.768 929.763 157.298 914.271 161.269 899.031L353.786 160.25Z"
                      fill="url(#paint1_linear_1390_2298)"
                    />
                  </g>
                  <g className="eff-3 eff" filter="url(#filter2_f_1390_2298)">
                    <path
                      d="M620 163L648.095 1063.01C648.59 1078.87 635.868 1092 620 1092V1092C604.132 1092 591.41 1078.87 591.905 1063.01L620 163Z"
                      fill="url(#paint2_linear_1390_2298)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_1390_2298"
                      x={725.857}
                      y={0.249634}
                      width={513.422}
                      height={1093.6}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation={80}
                        result="effect1_foregroundBlur_1390_2298"
                      />
                    </filter>
                    <filter
                      id="filter1_f_1390_2298"
                      x={0.363525}
                      y={0.249634}
                      width={513.422}
                      height={1093.6}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation={80}
                        result="effect1_foregroundBlur_1390_2298"
                      />
                    </filter>
                    <filter
                      id="filter2_f_1390_2298"
                      x={431.891}
                      y={3}
                      width={376.218}
                      height={1249}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation={80}
                        result="effect1_foregroundBlur_1390_2298"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1390_2298"
                      x1={857.643}
                      y1={178}
                      x2={1057.5}
                      y2={933.177}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="rgba(255,255,255,0.5)" />
                      <stop offset={1} stopColor="rgba(255,255,255,0.5)" stopOpacity={0.95} />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1390_2298"
                      x1={382}
                      y1={178}
                      x2={182.143}
                      y2={933.177}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="rgba(255,255,255,0.5)" />
                      <stop offset={1} stopColor="rgba(255,255,255,0.5)" stopOpacity={0.95} />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_1390_2298"
                      x1={651.578}
                      y1={176.155}
                      x2={608.641}
                      y2={1091.47}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="rgba(255,255,255,0.5)" />
                      <stop offset={1} stopColor="rgba(255,255,255,0.5)" stopOpacity={0.95} />
                    </linearGradient>
                    <style>
                      {
                        "\n                  g.eff {\n                    animation: line-eff 3s infinite;\n                    transform-origin: 50% 100%;\n                    filter: blur(70px)\n                  }\n\n                  .eff-1 {\n                    animation-delay: 0.3s;\n                  }\n\n                  .eff-2 {\n                    animation-delay: 0.5s;\n                  }\n\n                  .eff-3 {\n                    animation-delay: 0.7s;\n                  }\n\n                  @keyframes line-eff {\n\n                    0%,\n                    100% {\n                      opacity: 0;\n                      transform: rotate(0) scale(1) translate3d(0, 0, 0);\n                    }\n\n                    50% {\n                      opacity: 1;\n                      transform: rotate(0) scale(1) translate3d(0, 0, 300px);\n                    }\n                  }\n                "
                      }
                    </style>
                  </defs>
                </svg>
</div>


{/* ---------------------------------------
-------------- content
-------------------------------------------*/}


<div className="lg:grid flex flex-col !pb-10  gap-y-14 grid-cols-5 w-full max-w-screen-2xl mx-auto " >  

{/* text side left */}
<div className=" text-white col-span-2 max-lg:text-center max-md:px-7 flex flex-col justify-center h-full   ">
  {/* text */}
<div>
<h1 className="bg-gradient-to-r text-center lg:text-left font-semibold text-lg from-[#ce1bfb] to-[#24ffdf] bg-clip-text text-transparent" >One-Stop Mohammed Theme</h1>
<p className="pt-3 text-5xl font-medium tracking-wide " >Prime Quality <br/>
Premium Design</p>
<p className="pt-5 text-gray-400 text-base " >
Craft a beautiful and high-converting vbmcoder store with a versatile shop multipurpose theme, optimized for eCommerce, speed, user experiences, and seamless mobile responsiveness.
</p>
</div>



{/* btns */}
<div className="flex max-sm:flex-col items-center max-lg:justify-center gap-5 h-fit mt-7">
{/* explore demos button */}
<button className="border-[.5px] items-center gap-3 border-neutral-700 rounded  px-5  py-3 buttonAnimation " >
  <IoSparklesSharp size={20} />
  Explore Demos
  {/* animated balls */}
  <span className="span" >
    <span></span><span></span><span></span>
  </span>
</button>

{/* open demos button */}
<button className="flex items-center gap-2 " >
<FaOpencart size={25}  color="#fff"  />
Open Your store
</button>

</div>



<p className="mt-5 text-gray-400 font-medium text-base " >
Get 3 months trial vbmcoder with 9$/month, exclusive Theme deal for The4's customers
</p>


</div>


{/* Card Side right */}
<div className=" perspective col-span-3 lg:mx-10 shrink-0 min-h-[450px] max-sm:hidden max-lg:mx-10 ">
{/* wrapper */}

{/* card */}
<div className="p-3 flex sliderContainer
backdrop-blur-xl  
flex-col gap-2 relative rounded-3xl
 h-fit  bg-[#6c757d47]">

{/* three dots */}
<div className="boxThreeDots ">
  <span></span><span></span><span></span>
</div>
{/* box */}
<div className="bg-gradient-to-b p-4 border border-[#9191912a] relative rounded-3xl h-full w-full from-[#1a1a1a] to-[rgba(26,26,26,0.00)] ">

<h1 className="font-semibold text-xl " >Mohammed </h1>


{/* container box */}
<div className=" flex overflow-hidden w-full h-full">
  
  {/* left side NAVS */}
<div className=" w-fit " >
  {
    SliderBoxData.map((item, index)=>(
      // listah
<div key={index} onClick={()=>setActiveSlideNav(index)} 
className={`flex w-full group my-2 rounded-md ${activeSlideNav === index && "!border-slate-500 border"} border-transparent border hover:border-slate-500 cursor-pointer gap-4 px-2 py-2 items-center justify-between`}>
  <div className="flex items-center gap-2">

  <div className={`bg-[#1e20203d] group-hover:bg-gradient-to-r from-sky-500 to-blue-900 ${activeSlideNav === index && "bg-gradient-to-r from-sky-500 to-blue-900"}  text-2xl rounded-md  border-slate-600 border p-2`} >
    {item.navBoxIcon}
</div>

    <p className="whitespace-nowrap text-base  " >{item.navBoxTitle}</p>
  </div>
  <MdKeyboardArrowRight size={25} />

</div>
    ))
  }
</div>

{/* swiper side */}
<div className=" w-[55%]    mx-auto">
  
  <Swiper
  
  grabCursor={true}
  effect={"creative"}
creativeEffect={{
  prev:{
    shadow:true,
    translate:[0,0,-800],
    rotate:[-180,0,0]
  },
  next:{
    shadow:true,
    translate:[0,0,-800],
    rotate:[-180,0,0]
  }
}}
pagination={{clickable:true}}
navigation={true}
modules={[EffectCreative,Pagination]}
className="mySwiper4  "
  >




{
SliderBoxData[activeSlideNav].imgs.map((img,index) =>(
  <SwiperSlide key={index}>
    <div className="slider_img w-full h-full p-2  border border-slate-500 mt-2 rounded-2xl ">
      <img src={img} className="w-full  rounded-2xl h-full object-cover shadow-xl " />
    </div>
  </SwiperSlide>
))


}





  </Swiper>




</div>
</div>


</div>


</div>



</div>
{/* mobile slider image */}
<div className="hidden max-sm:flex ">
<img src="./img/mobileSliderImg.png" />

</div>

</div>








</div>

    </div>
  )
}

export default BannerSection