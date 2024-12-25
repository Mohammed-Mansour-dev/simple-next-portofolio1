import Image from 'next/image'
import React, { useEffect } from 'react'
import {FaOpencart} from "react-icons/fa"
// import { Link } from 'react-scroll'
const Header = () => {

    const handleScrolling = () =>{
        const header = document.querySelector("header");
        if (window.scrollY >= 50) {
            header.classList.add("beSticky");
        } else {
            header.classList.remove("beSticky");
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScrolling);
        
        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("scroll", handleScrolling);
        }
    },[])


  return (
    <header className='flex absolute top-0 left-0 items-center backdrop-blur-lg h-auto w-full justify-between py-3 px-3' >
        
{/* logo */}
<div className="">
    <Image className='max-w-52 max-md:max-w-40' src="/img/darklogo-removebg-preview.png" alt='logo'  width={500} height={350} />
</div>

{/* navs */}
<div className="max-lg:hidden">
    <ul className="flex gap-4 text-white">
        {/* <li><Link className='cursor-pointer' to='Demos' >Demos</Link></li>
        <li><Link className='cursor-pointer' to='Section' >Pages Section</Link></li>
        <li><Link className='cursor-pointer' to='Features' >Features</Link></li>
        <li><Link className='cursor-pointer' to='Performance' >Performance</Link></li>
        <li><Link className='cursor-pointer' to='Contact' >Contact</Link></li>
        <li><Link className='cursor-pointer' to='Store' >Open Your Store</Link></li> */}
    </ul>
</div>

{/* button */}
<div className=" ">
  <button className='buttonAnimation whitespace-nowrap
  border-[0.1px] items-center px-4 py-2 rounded-md border-neutral-700
  text-white capitalize gap-2 text-base' >
<FaOpencart size={27} color='#fff' /> hire me now
    <span className="span"><span></span><span></span><span></span></span>
  </button>
</div>


    </header>
  )
}

export default Header