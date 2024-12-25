


import React, { useState, useRef, useEffect } from "react";
import {  Autoplay, FreeMode } from "swiper/modules";
import {Swiper,  SwiperSlide } from "swiper/react";
import { GoArrowRight } from "react-icons/go";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';


const PagesSlider = () => {
  const [activeScrollBtn, setActiveScrollBtn] = useState("Product Pages");
const responsiveSection = useRef(null)
const [responsiveVisibility , setResponsiveVisibility ] = useState(70)


useEffect(() => {
  const element = responsiveSection.current;

  const observer = new IntersectionObserver(
    ([entry]) => {
      // Calculate visibility percentage
      if (entry.intersectionRatio > 0) {
        const visibleHeight = entry.intersectionRect.height;
        const totalHeight = entry.boundingClientRect.height;
        setResponsiveVisibility(Math.round((visibleHeight / totalHeight) * 100));
      } else {
        setResponsiveVisibility(0);
      }
    },
    {
      root: null, // Observing in the viewport
      threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Check at every percentage
    }
  );

  if (element) observer.observe(element);

  return () => {
    if (element) observer.unobserve(element); // Cleanup observer
  };
}, []);



  const scrollNavs = [
    { title: "Product Pages" },
    { title: "Inner Pages" },
    { title: "Portfolio" },
    { title: "Shop Pages" },
    { title: "Blog Pages" },
  ];

  const scrollingImages = [
    { section: "productPages", imgs: ["./img/1.jpeg", "./img/2.jpeg", "./img/3.jpeg", "./img/4.jpeg"] },
    { section: "innerPages", imgs: ["./img/10.jpeg", "./img/9.jpeg", "./img/3.jpeg", "./img/4.jpeg"] },
    { section: "portfolio", imgs: ["./img/12.jpeg", "./img/17.jpeg", "./img/3.jpeg", "./img/13.jpeg"] },
    { section: "shopPages", imgs: ["./img/5.jpeg", "./img/2.jpeg", "./img/3.jpeg", "./img/4.jpeg"] },
    { section: "blogPages", imgs: ["./img/1.jpeg", "./img/14.jpeg", "./img/4.jpeg", "./img/4.jpeg"] },
  ];

  const sectionRefs = useRef({}); // Store refs dynamically

  // Handle button click scroll
  const handleScroll = (title) => {
    setActiveScrollBtn(title);
    const refKey = title.toLowerCase().replace(" ", "");
    if (sectionRefs.current[refKey]) {
      sectionRefs.current[refKey].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Set up Intersection Observer to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.dataset.section;
            const matchedNav = scrollNavs.find((nav) => nav.title.toLowerCase().replace(" ", "") === sectionName);
            if (matchedNav) setActiveScrollBtn(matchedNav.title);
          }
        });
      },
      { threshold: 0.6 } // Adjust threshold for better detection
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      // Cleanup observer
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);


const imgsWebData =[
  "/img/ex1.png",
  "/img/ex2.png",
  "/img/ex3.png",
  "/img/ex4.png",
  "/img/ex5.jpg",
]


  return (

    <div>

      {/* pages slider */}
      <div className="flex px-5 my-14 flex-col py-20 gap-5 md:grid grid-cols-3 justify-between h-[80vh]">
        {/* nav section */}
        <div className="col-span-1 kkkk w-full h-full">
          <div 
       
          className="flex flex-row md:flex-col sliderNavsScrollBar overflow-x-auto   px-5 py-7 whitespace-nowrap gap-7 md:h-full w-full">
            {scrollNavs.map((item, index) => (
              <button
              
                key={index}
                className={`pagesSliderBtns  max-w-72 relative text-3xl font-semibold lg:text-4xl py-4 px-1
                  bg-gradient-to-b text-left from-[#000000a2] to-gray-400 bg-clip-text text-transparent
                  ${activeScrollBtn === item.title && "before:flex bg-gradient-to-r from-purple-600 via-cyan-300 to-cyan-600 "}`}
                onClick={() => handleScroll(item.title)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* scrolling section */}
        <div className="col-span-2 duration-500 transition-all snap-y scrollingContainer p-[1px] rounded-xl min-h-96 overflow-auto">
          {/* expo pages imgs */}
          <div className="h-full w-full">
            {scrollingImages.map((item, index) => (
              <div
                key={index}
                ref={(el) => (sectionRefs.current[item.section.toLowerCase()] = el)} // Assign ref dynamically
                data-section={item.section.toLowerCase()} // Add section identifier
                className="p-5 rounded-xl mb-7 grid grid-cols-2 gap-4 sContainer bg-black"
              >
                {/* cards */}
                {item.imgs.map((itemc, index) => (
                  <div key={index} className="imgContainer pb-3 rounded-xl px-3 h-full w-full">
                    <div className="cardDots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <img src={itemc} alt="img" className="w-full rounded-xl h-2/3 object-cover" />
                    <h1 className="capitalize my-2 text-center text-xl lg:text-2xl">
                      {item.section} {index + 1}
                    </h1>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>



    {/* Ready to use */}
    <div className="flex py-14 flex-col relative justify-center w-full  px-5">


{/* ready to use card */}
<div className="bg-[#00000054] backdrop-blur-md rounded-2xl sticky !top-24  w-fit mx-auto my-14 py-7 px-10 flex items-center"> {/* Adjust padding as needed */}
      <div className="flex items-center mr-6"> {/* Space between number and text */}
        <span className="text-6xl md:text-7xl lg:text-9xl font-mono font-medium bg-gradient-to-r from-purple-500 to-orange-400 text-transparent bg-clip-text">
          25+
        </span>
      </div>
      <div>
        <p className="text-2xl md:text-3xl lg:text-5xl max-md:text-center  font-light  text-white "> {/* Adjust leading as needed */}
          Ready to use<br />
          Sections
        </p>
      </div>
    </div>

{/*  images */}
<div>
<div className="w-full columns-2 md:columns-3 lg:columns-4 gap-5 ">
{
[
 "./img/1.jpeg",
 "./img/2.jpeg",
 "./img/3.jpeg",
 "./img/4.jpeg",
 "./img/5.jpeg",
 "./img/6.jpeg",
 "./img/7.jpeg",
 "./img/8.jpeg",
 "./img/9.jpeg",
 "./img/10.jpeg",
 "./img/11.jpeg",
 "./img/12.jpeg",
 "./img/13.jpeg",
 "./img/14.jpeg",
 "./img/15.jpeg",
 "./img/16.jpeg",
 "./img/17.jpeg",

 ].map((item,index)=>(
  <img key={index} className="rounded-xl h-fit my-4  " src={item} />
 ))
}
</div>
</div>






</div>


{/* clean responsive */}

<div ref={responsiveSection} className="py-14 overflow-x-hidden w-full px-5">
  {/* Clean and Logo */}
  <div   style={{
          transform: `translateX(calc(${responsiveVisibility >= 70 && responsiveVisibility}% - 100% ))`,
        }} className="flex w-full  transition-transform delay-75 duration-700 ease-out items-center justify-between px-40">
    {/* Clean */}
    <div className=""> {/* Add transition */}
      <h1
     
        className="text-7xl md:text-9xl  [background:-webkit-linear-gradient(81.01deg,_#5c39b3_-1.5%,_#bb4190_44.74%,_#de6475_71.64%,_#f9b05e_111.84%)] font-medium bg-gradient-to-t text-black !bg-clip-text stroke-zinc-300 [-webkit-text-stroke:3px_transparent]"
      >
        Clean
      </h1>
    </div>

    {/* Hamburger Logo */}
    <div className="relative  w-28 h-28 md:w-44 md:h-44 flex items-center justify-center">
      <img
        className="burgerLogo"
        src="https://www.kirupa.com/icon/1f354.svg"
        alt="Burger Logo"
      />
      <svg
        id="rotatingText"
        viewBox="0 0 200 200"
        className="w-full h-full"
      >
        <defs>
          <path
            id="circle"
            d="M 100, 100 m -75,0 a 75,75 0 1 , 0 150,0 a 75,75 0 1 ,0 -150,0"
          />
        </defs>
        <text className="tracking-widest text-lg">
          <textPath
            fill="white"
            alignmentBaseline="bottom"
            xlinkHref="#circle"
            className="text"
          >
            {"Mohammed Dev 2.0 😎  Mohammed Dev 2.0 😎 "}
          </textPath>
        </text>
      </svg>
    </div>
  </div>

  {/* Responsive & Versatile Text */}
  <div  className="text-center py-14">
    {/* Responsive */}
    <h1 
     style={{
      transform: `translateX(calc(${ -responsiveVisibility}% + 100%))`,
    }} className="
    text-7xl md:text-9xl my-7 [background:-webkit-linear-gradient(0.01deg,_#5c39b3_-1.5%,_#bb4190_44.74%,_#de6475_71.64%,_#f9b05e_111.84%)] font-medium bg-gradient-to-t text-transparent !bg-clip-text stroke-zinc-300
   transition-transform delay-75 duration-700 ease-out  "
    >
      Responsive
    </h1>
    {/* Versatile */}
<div className=" transition-transform delay-75 duration-700
ease-out flex items-end w-fit flex-row-reverse
"  style={{
      transform: `translateX(calc(${ responsiveVisibility}% - 100%))`,
    }} >
    <h1
    className="
     text-7xl md:text-9xl 
      [background:-webkit-linear-gradient(81.01deg,_#5c39b3_-1.5%,_#bb4190_44.74%,_#de6475_71.64%,_#f9b05e_111.84%)]
       font-medium bg-gradient-to-t text-black !bg-clip-text
          [-webkit-text-stroke:3px_transparent]">
 
      Versatile
    </h1>     <img
        className="w-44 mb-5 max-md:hidden "
        src="https://design.vbmcoder.in/svg/line_svg.svg"
        alt="Line Icon"
      />
</div>
  </div>
</div>



{/* pages cards slider */}
<div className="pt-20 cardsSliderWrapper ">
  <Swiper
   slidesPerView={"auto"}
   spaceBetween={30}
   freeMode={true}
   loop={true}
   loopfillgroupwithblank={true} // Ensure loop works with fewer slides
   autoplay={{
     delay: 0,
     disableOnInteraction: false,
   }}
   speed={7000}
   modules={[FreeMode, Autoplay]}
   className="mySwiper"
  >
{
  imgsWebData.map((img,index)=>(
    
<SwiperSlide key={index} >
  <div className="websCard w-full h-[540px] overflow-hidden p-4 rounded-2xl z-[5] text-white backdrop-blur-md border border-x-neutral-800 ">
<img src={img} className="w-full h-[420px] rounded-2xl   " alt="slider img" />

<div className="flex justify-between ">
<div className="">
  <h3 className="text-2xl font-normal mt-1" >Digital Websites</h3>
  <p className="text-xl text-gray-500 font-normal" >Mohammed Dev</p>
</div>
<div className="arrowImg w-10 h-10 border border-neutral-700 flex items-center rounded-lg mr-4 justify-center "> <GoArrowRight  /> </div>
</div>

  </div>
</SwiperSlide>
  ))
}
  </Swiper>
</div>

{/* second one */}
<div className="py-7 cardsSliderWrapper ">
  <Swiper
   slidesPerView={"auto"}
   spaceBetween={30}
   freeMode={true}
   loop={true}
   
   loopfillgroupwithblank={true} // Ensure loop works with fewer slides
   autoplay={{
     delay: 0,
     disableOnInteraction: false,
     reverseDirection:true
   }}
   speed={7000}
   modules={[FreeMode, Autoplay]}
   className="mySwiper"
  >
{
  imgsWebData.map((img,index)=>(
    
<SwiperSlide key={index} >
  <div className="websCard w-full h-[540px] overflow-hidden p-4 rounded-2xl z-[5] text-white backdrop-blur-md border border-x-neutral-800 ">
<img src={img} className="w-full h-[420px] rounded-2xl   " alt="slider img" />

<div className="flex justify-between ">
<div className="">
  <h3 className="text-2xl font-normal mt-1" >Digital Websites</h3>
  <p className="text-xl text-gray-500 font-normal" >Mohammed Dev</p>
</div>
<div className="arrowImg w-10 h-10 border border-neutral-700 flex items-center rounded-lg mr-4 justify-center "> <GoArrowRight  /> </div>
</div>

  </div>
</SwiperSlide>
  ))
}
  </Swiper>
</div>



    </div>
  );
};

export default PagesSlider;
