import React from "react";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";

const PremiumFeaturesSection = () => {
  return (
    // wrapper
    <div className="px-5 xl:px-32 py-20">
      {/* titles top part */}
      <div className="md:flex my-20 max-md:text-center flex-row items-center">
        {/* left side */}
        <div className="">
          <h1 className="flex text-xl items-center  max-md:justify-center font-semibold bg-gradient-to-r from-fuchsia-500 to-teal-300 bg-clip-text text-transparent ">
            <img src="./svg/whychoose.svg" className="w-6" />
            WHY CHOOSE VBMCODER THEME?
          </h1>
          <h1 className="text-4xl lg:text-5xl max-md:text-3xl font-medium mt-3 max-md:text-center ">
            Stand Out From The Crowd <br />
            With Premium Features
          </h1>
        </div>

        {/* right text */}
        <p className="text-base max-md:my-3 text-gray-300  md:w-1/3 ml-auto ">
          Enjoy the exclusive features that make building your web pages a
          joyful moment. All in one theme!
        </p>
      </div>

      {/* boxes */}

   

<div className="rounded-md p-[0.51px] z-20 bg-gradient-to-br from-[#eeeeee60] via-transparent to to-transparent  relative   overflow-hidde  " >
<div className="w-full h-full m-[1px]  gap-5 shadow-md   bg-black rounded-md  p-5 lg:p-10 grid grid-cols-3 max-md:grid-cols-2 max-sm:flex flex-col ">
  {/* First row */}
  <div className="col-span-2 overflow-hidden  ">
     {/* left box */}
     <div className="w-full bg-[#3f3e3e33] rounded-xl items-center py-10 relative gap-10 px-10 space-y-7 sm:flex h-full max-lg:text-center ">
          {/* box bg */}
          <div className="FirstBoxBg " />

          {/* text and button side */}
          <div className=" space-y-3 lg:space-y-6 max-lg:items-center  flex flex-col">
            <h1
              className="bg-gradient-to-r from-fuchsia-600
to-orange-400 w-fit max-md:mx-auto
bg-clip-text text-transparent text-6xl lg:text-8xl font-medium
"
            >
              50+
            </h1>
            <p className="lg:text-5xl textxl font-light whitespace-nowrap ">
              {" "}
              High-quality <br className="max-lg:hidden" />
              demos
            </p>

            {/* explore demos button */}
            <button className="buttonAnimation w-fit whitespace-nowrap px-4 py-3 border-slate-500 !border-[1px] rounded-lg items-center gap-2 text-xl ">
              <BiSolidCategoryAlt className="text-2xl" />
              Explore Demos
              <span className="span">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>

          {/* img side */}
          <div className="h-full  rounded-xl  ">
            <img
              src="https://www.codingwebstudio.com/img/game/gaming%20website%20thumbnail.jpg"
              className="h-full w-full  min-h-72 object-cover  !rounded-xl "
            />
          </div>
        </div>
  </div>

  {/* second box */}
  <div className="col-span-1 overflow-hidden min-h-96 flex rounded-lg bg-[#3f3e3e33] relative  ">  
  {/* BOX Bg     */}
   <div className="absolute  overflow-hidden w-full h-full  inset-0">
<img src="./img/item2.png" className="w-full  h-full object-cover" />
<img src="./img/item2_i.png" className="w-full absolute object-cover inset-0 h-full" />

   </div>
   {/* text */}
   <div className=" z-30 flex-1 mt-auto  ">
            <h1 className="text-2xl text-center font-medium px-2">
              Developed by{" "}
              <span className="bg-gradient-to-r from-purple-500  to-cyan-500 bg-clip-text text-transparent">
                Mohammed
              </span>{" "}
              <br />
              on Youtube Video
            </h1>

            {/* btns */}
            <div className="pt-7 flex gap-3  py-5 w-fit mx-auto px-4 ">
              <button className="flex items-center gap-1 p-2 rounded-full
              bg-gradient-to-r  from-[#3f3e3ea6] to-[#3f3e3e07]
              " >
              <FcSalesPerformance color="green" />
                30,000+ Sales</button>
              <button className="flex  gap-1 items-center p-2 rounded-full
              bg-gradient-to-r from-[#3f3e3ea6]  to-[#3f3e3e07]
              " >
                <FaStar color="#ca8a04" size={20} />
                5.0 Stars Ratings</button>
            </div>
          </div>
          

        </div>


  {/* Second row */}
  {/* first box */}
  <div  className="rounded-xl w-full overflow-hidden justify-end min-h-96 lg:min-h-[450px]  col-span-1  flex flex-col relative">
    {/* card bg */}
<img src="./img/item3.png" alt="" className=" 
absolute  w-full h-full
object-cover" />

{/* text */}
<div className="z-30 px-3 lg:px-7 pb-7">
<p className="text-sm text-gradient font-semibold ">
<span className="bg-clip-text text-transparent text-lg md:text-xl bg-gradient-to-r from-purple-500 to-cyan-300">
          Supported By
        </span>
      </p>
      <h2 className="text-2xl md:text-3xl font-medium">Commerce Coach</h2>
      <p className="text-base md:text-lg font-light text-gray-400 mt-1">
        Server <span className="font-semibold text-white text-lg md:text-xl">100k+</span> customers
      </p>
</div>

  </div>
  {/* second box */}
  <div className=" rounded-md relative">
    {/* bg image */}
<img src="./img/item4.png" className="absolute rounded-xl   w-full h-full inset-0 object-cover" />
  
  {/* text */}
  <div className="text-white relative z-30 min-h-96 rounded-xl lg:min-h-[450px] w-full h-full pt-10 px-8 text-2xl font-medium text-center capitalize">
    <p><span className="w-fit relative text-center " >
    One Click
    <svg xmlns="http://www.w3.org/2000/svg" className="w-32 absolute left-0 -bottom-1" height="12" viewBox="0 0 470 12" fill="none">
<path d="M470 1.77181C467.607 1.69128 465.414 1.69128 463.021 1.69128C460.628 1.69128 458.434 1.61074 456.042 1.5302C450.857 1.36913 445.872 1.12752 440.687 0.966443C430.916 0.644295 420.946 0.322148 411.175 0.241611C402.202 0.0805369 393.029 0 384.056 0C381.663 0 379.27 0 377.077 0C368.104 0.0805369 359.13 0.0805369 350.157 0.161074C329.219 0.402685 308.082 0.644295 287.145 1.04698C266.606 1.44966 246.067 1.85235 225.728 2.33557C215.757 2.57718 205.588 2.81879 195.617 3.0604C184.65 3.46309 173.683 3.7047 162.915 4.02685C140.382 4.75168 118.048 5.39597 95.5155 6.12081C75.9737 6.7651 56.6313 7.65101 37.2889 8.77852C24.9258 9.58389 12.3632 10.4698 0 11.3557C14.1578 11.7584 28.5151 11.9195 42.8723 12C52.2444 12 61.6165 11.9195 70.7891 11.8389C76.7713 11.7584 82.7535 11.5973 88.9351 11.4362C92.7238 11.3557 96.3131 11.1946 99.9024 11.0336C109.673 10.6309 119.644 10.3087 129.415 9.90604C140.781 9.50336 151.947 9.02013 163.314 8.61745C174.879 8.21476 186.644 7.81208 198.21 7.4094C208.579 7.08725 219.147 6.7651 229.716 6.44295C239.885 6.12081 250.255 5.87919 260.424 5.63758C270.793 5.39597 280.963 5.15436 291.332 4.91275C301.901 4.67114 312.27 4.5906 322.838 4.42953C341.981 4.10738 361.124 4.02685 380.467 3.94631C391.235 3.94631 401.803 3.78523 412.571 3.62416C423.14 3.46309 433.708 3.30201 444.077 3.0604C448.265 2.97987 452.652 2.89933 456.839 2.73826C458.833 2.65772 461.027 2.57718 463.021 2.41611C464.815 2.25503 466.61 2.01342 468.405 1.93289C469.003 1.85235 469.402 1.77181 470 1.77181Z" fill="url(#paint0_linear_761_34)"/>
<defs>
<linearGradient id="paint0_linear_761_34" x1="59.4937" y1="12" x2="69.5017" y2="-53.1054" gradientUnits="userSpaceOnUse">
<stop stopColor="#CE1BFB"/>
<stop offset="1" stopColor="#35E6CC"/>
</linearGradient>
</defs>
</svg>
    </span> Import demo
    and more...</p>
  </div>
  </div>


  {/* last box */}
  <div className=" min-h-96 flex justify-center items-end relative lg:min-h-[450px] rounded-md ">

{/* img bg */}
<img className="absolute  inset-0 w-full h-full object-cover rounded-md " src="./img/item5.png"  />

{/* text */}
<div className="text-center text-xl z-30 pb-10 lg:text-2xl  text-white">
  <p className="font-semibold">
    Optimized For <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent ">SEO</span>
  </p>
  <p className=" font-semibold bg-gradient-to-r to-cyan-500 from-purple-600 bg-clip-text text-transparent ">
   & <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent ">High</span> <br/> <span className="text-teal-400">Performance</span>
  </p>
</div>

</div>

</div>
</div>


    </div>
  );
};

export default PremiumFeaturesSection;
