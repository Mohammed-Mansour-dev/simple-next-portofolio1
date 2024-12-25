import React, { useState } from "react";
import { FaCss3 } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { IoLogoGameControllerB } from "react-icons/io";
import { PiFilmReelLight } from "react-icons/pi";
import { ImProfile } from "react-icons/im";
import { TbBrandBlogger } from "react-icons/tb";
const StuningDemos = ({demos}) => {
  const [activeBtn, setActiveBtn] = useState("All Demos");

const [cardsData , setCardsData ] = useState(demos)

// filter the cards

const handleFilterChange = (val) => {
  // filter the cards based on the selected filter

if(val === "All"){
  setCardsData(demos);
  return;
}
if(val === "premium"){
  setCardsData(demos.filter(card => card.label.toLowerCase() === "premium"));
  return;
}


  setCardsData(demos.filter(demo => demo.category === val ))
  console.log(val)
}


  return (
    <div className="py-10 px-5">
      {/* trial card */}
      <div className="flex w-fit max-md:flex-col mx-auto gap-7 items-center justify-between px-8 py-4  text-white rounded-md border border-gray-800 shadow-md">
        {/* Left Section */}
        <div className="flex max-md:flex-col max-md:text-center space-y-1 items-center space-x-4">
          <span className="text-lg md:text-xl  italic font-medium">
            Mohammeedoz
          </span>
          <span className="text-base md:text-lg ">
            Enjoy 3 months of theme for
          </span>
          <span className="text-lg pl-14 ml-10">- Start your free trial</span>
        </div>

        {/* Right Section - Button */}
        <button className="buttonAnimation py-3 px-4 rounded-lg border border-slate-600">
          Start Free Trial
          <span className="span">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* middle text */}
      <div className="bg-black text-white py-16 px-4 my-7 text-center">
        {/* Main Title */}
        <h1 className="text-6xl text-white font-medium">
          <span className="text-transparent font-mono font-medium text-7xl bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">
            50+
          </span>{" "}
          Stunning Demos
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 px-5 text-sm mt-4 max-w-2xl mx-auto">
          All home pages, inner pages and elements are included with the
          purchase. Mix and blend elements from different demos as per your
          preference and create awesome store with <strong>Mohammed</strong>!
        </p>
      </div>

      {/*--------------------------- 

---------------------------*/}
{/*  filter buttons & cards */}
<div className="relative parentCards" >
{/* filter buttons */}
      <nav className="px-4 my-10 py-3">
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { fv:"All" ,icon: "", label: "All Demos" },
            { fv:"premium" , icon: <MdOutlineWorkspacePremium className="mx-2"  size={18} />, label: "Premium" },
            { fv:"css" , icon: <FaCss3 className="mx-2"  size={18} />, label: "CSS Design" },
            { fv:"ecommerce" , icon: <BsShop className="mx-2"  size={18} />, label: "E-commerce" },
            { fv:"movie" , icon: <PiFilmReelLight className="mx-2"  size={18} />, label: "Movies" },
            { fv:"gaming" , icon: <IoLogoGameControllerB className="mx-2"  size={18} />, label: "Gaming" },
            { fv:"resume" , icon: <ImProfile className="mx-2"  size={18} />, label: "Resume" },
            { fv:"blog" , icon: <TbBrandBlogger className="mx-2"  size={18} />, label: "Blog" },
          ].map((item,index) => (
            <button
            key={index}
              onClick={(e) =>{ setActiveBtn(item.label);handleFilterChange(item.fv);}}
              className={`relative rounded-lg p-[1px] ${
                activeBtn == item.label &&
                "bg-gradient-to-r from-cyan-700  to-cyan-500"
              } duration-200 group shadow-xl
              `}
            >
              <div className="rounded-lg bg-[#122e36] text-slate-300 px-6 py-2 flex items-center justify-center  duration-200  hover:bg-opacity-90 transition-all group-hover:!text-cyan-500 ">
               {item.icon}
                {item.label}
              </div>
            </button>
          ))}
        </div>
      </nav>



      {/* cards */}
     
     <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:grid-cols-3 xl:grid-cols-4">


{/* single card */}
{
    cardsData.map((item,index)=>(
        <div key={index} className=" group cursor-pointer demoCard relative 
        overflow-hidden
         hover:after:opacity-100
           hover:before:!top-1/3
             hover:after:!bottom-1/3
              hover:before:opacity-100
        bg-gradient-to-t from-[#0b0c0d] via-slate-800 to-slate-900 p-4 rounded-md
        ">
{/* the image */}
<div className="relative imgEffect group-hover:before:opacity-100 ">
    <img src={item.image} className="w-full h-60 object-cover rounded-md" />
</div>
{/* text */}
<div className="flex justify-between playFairFont items-center">
    {/* title */}
    <div className="">
        <h3 className="lg:text-xl text-lg ">{item.title}</h3>
        {/* label */}
        <p className="text-neutral-300 font-serif lg:text-lg text-base" >{item.label}</p>
    </div>

{/* category */}
<p className="bg-gradient-to-br text-xs  from-cyan-500 px-3 py-1 rounded-full via-sky-600 to-cyan-600 " >{item.category}</p>

</div>


        </div>
    ))
}


     </div>

</div>






    </div>
  );
};

export default StuningDemos;
