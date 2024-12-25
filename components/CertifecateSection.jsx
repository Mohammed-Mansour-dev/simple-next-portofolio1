import React from 'react'
import ParticleAnimation from "@/components/ParticlesAnimation";
import Link from 'next/link';

const CertifecateSection = () => {


    const SkillsData=[
        {img:"./svg/mongodb.svg",title:"MongoDB"},
        {img:"./svg/firebase.svg",title:"Firebase"},
        {img:"./svg/python.svg",title:"Python"},
        {img:"./svg/redux.svg",title:"Redux"},
        {img:"./svg/react.svg",title:"react"},
        {img:"./svg/js.svg",title:"JavaScript"},
      ]

  return (
    <div><div className="w-full mb-3 h-[62vh] bg-black px-5 md:px-7 lg:px-16   pt-14" >

    {/* inner contaier */}
    <div className="bg-black certificateSection  relative h-full w-full ">
    {/* animation bg */}
    <div className="absolute h-1/5 !top-1/4 left-0 right-0 z-10 ">
    
    <svg data-name="Layer 1" className="bg-gradient-to-t  w-full h-1/4  from-transparent  to-transparent absolute  "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" fill="black" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
    
    
      <ParticleAnimation /> 
    
      <svg data-name="Layer 1" className="bg-gradient-to-t w-full h-1/3 from-black bottom-0  to-transparent absolute  "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" fill="transparent" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
    
    
    </div>
    
    
    {/* -------------------------------
    ---- content
    -------------------------------*/}
    
    <div className="absolute z-20 inset-0   ">
    
    <div className=" flex-col items-center py-7 flex  h-full w-full">
    {/* card */}
    <div className="bg-gray-800 px-6 py-4 rounded-md shadow-md text-white">
              <p className="italic text-lg md:text-xl font-medium ">Commerce Coach</p>
    
          <p className="text-xs text-center uppercase">Trusted Affiliate Partner</p>
            </div>
    
    <h1 className="text-3xl text-center font-semibold mt-5 " >Commerce Coach Certificate</h1>
    
    {/* from */}
      <h1 className="flex my-5 flex-row items-center text-2xl font-semibold " >
    <span className="mt-2" >
    From
    </span>
    <img src="https://www.freeiconspng.com/thumbs/youtube-logo-png/white-youtube-logo-png-28.png" className="w-32" />
      </h1>
    
    {/* learn more */}
    <div className="">
      <Link href="/" className="underline text-lg hover:text-blue-500 my-3" >
    
      Learn more
      </Link>
    </div>
    
    {/* skills  list */}
    <div className="">
      <ul className="flex mt-9 justify-center flex-wrap gap-7">
     
    
    
     {
    SkillsData.map((item ,index) => (
      <li key={index} className="transition-all cursor-pointer items-center flex flex-col group duration-200 skills-li" >
      <img src={item?.img} className="w-12  duration-200" />
      <p className="text-sm text-center   duration-200 group-hover:opacity-100 ">{item.title}</p>
    </li>
    ))
    
    
    
     }
        
    
    
        
    
    
    
      </ul>
    </div>
    </div>
    
    
    
    </div>
    
    </div>
    
    
    </div></div>
  )
}

export default CertifecateSection