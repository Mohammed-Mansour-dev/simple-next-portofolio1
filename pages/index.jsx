import BannerSection from "@/components/BannerSection";
import CertifecateSection from "@/components/CertifecateSection";
import Footer from "@/components/Footer";
import PagesSlider from "@/components/PagesSlider";
import PremiumFeaturesSection from "@/components/PremiumFeaturesSection";
import StuningDemos from "@/components/StuningDemos";
import { useEffect, useState } from "react";

export default function Home() {
 
const [isVisi, setIsVisi] = useState(false)


useEffect(()=>{

const getScroll = ()=>{
if(window.scrollY > 200){
  setIsVisi(true)
} else{
  setIsVisi(false)
}}


window.addEventListener("scroll",()=>{
  getScroll()
  console.log("scrolling I ss",window.scrollY)
} )

return ()=>{
  window.removeEventListener("scroll",getScroll)
}

},[])

const scrollClick =()=>{
  window.scrollTo({top: 0, behavior: "smooth" });
}


const demos = [
  {
    href: "/",
    image: "https://www.codingwebstudio.com/img/portfolio/Portfolio.jpg",
    title: "Next.js 14 Portfolio App",
    category: "blog",
    label: "Premium",
  },
  {
    href: "/",
    image:
      "https://www.codingwebstudio.com/img/makmovie/next%20js%20movie%20app.jpg",
    title: "Next.js 14 Movie App",
    category: "movie",
    label: "Premium",
  },
  {
    href: "/",
    image:
      "https://www.codingwebstudio.com/img/blog/fullstack_blog/Fullstack%20Blog%20App%20Thumbnail%20com.jpg",
    title: "Full Stack Blog Website",
    category: "blog",
    label: "Premium",
  },
  {
    href: "/",
    image:
      "https://www.codingwebstudio.com/img/game/gaming%20website%20thumbnail.jpg",
    title: "Pro Gaming Website",
    category: "gaming",
    label: "Premium",
  },
  {
    href: "/",
    image:
      "https://www.codingwebstudio.com/img/ecommerce/digital%20website%20thumbnail.jpg",
    title: "Digital Service Website",
    category: "css",
    label: "Premium",
  },
  {
    href: "/",
    image:
      "https://www.codingwebstudio.com/img/resume/resume-website-thumbnail.jpg",
    title: "Personal Resume Website",
    category: "resume",
    label: "Premium",
  },
  {
    href: "/",
    image:
      "https://www.codingwebstudio.com/img/blog/problog/perosnal%20blog%20website.jpg",
    title: "Personal Blog Website",
    category: "blog",
    label: "Premium",
  },
  {
    href: "/",
    image:
      "https://www.codingwebstudio.com/img/blog/recipeblog/recipe%20blog%20website%20thumbnail.jpg",
    title: "Recipe Blog Website",
    category: "blog",
    label: "Premium",
  },
  {
    href: "/",
    image:
      "https://www.codingwebstudio.com/img/blog/problog/Pro%20Blog%20Website%20Thumbnail.jpg",
    title: "Pro Level Blog Website",
    category: "blog",
    label: "Premium",
  },
  {
    href: "/",
    image: "https://www.codingwebstudio.com/img/blog/blog1/bloghome.jpg",
    title: "Blog & portfolio Template",
    category: "resume",
    label: "Free",
  },
  {
    href: "/",
    image: "https://www.codingwebstudio.com/img/css/Loader%20Css.jpg",
    title: "Ipad Loader Animation",
    category: "css",
    label: "Free",
  },
  {
    href: "/",
    image:
      "https://www.codingwebstudio.com/img/css/social%20card%20hover%20design.jpg",
    title: "Social Icon Card",
    category: "css",
    label: "Free",
  },
  {
    href: "/",
    image:
      "https://www.codingwebstudio.com/img/css/Dark%20Mode%20Toggle%20Button%20Design%20Card.jpg",
    title: "Light & Dark Mode",
    category: "css",
    label: "Free",
  },
  {
    href: "/",
    image:
      "https://www.codingwebstudio.com/img/css/product%20check%20out.jpg",
    title: "E commerce Product Check Out Design",
    category: "css",
    label: "Free",
  },
  {
    href: "/",
    image:
      "https://www.codingwebstudio.com/img/css/toggle%20switch%20design.jpg",
    title: "Design Toggle Switch",
    category: "css",
    label: "Free",
  },
  {
    href: "/",
    image:
      "https://www.codingwebstudio.com/img/css/macbook%20air%20design.jpg",
    title: "Design MacBook Air",
    category: "css",
    label: "Free",
  },
  {
    href: "/",
    image:
      "https://www.codingwebstudio.com/img/css/5%20loading%20animation.jpg",
    title: "5 Website Loading Animation",
    category: "css",
    label: "Free",
  },
  {
    href: "/",
    image: "https://www.codingwebstudio.com/img/game/codexgame.jpg",
    title: "Codexgame gaming website",
    category: "Gaming",
    label: "Free",
  },
  {
    href: "/",
    image:
      "https://www.codingwebstudio.com/img/ecommerce/cwsfood/cwsfood-1.jpg",
    title: "Food, fruits & vegetables selling",
    category: "ecommerce",
    label: "Free",
  },
  {
    href: "/",
    image:
      "https://www.codingwebstudio.com/img/ecommerce/clothyfly/clothyfly.png",
    title: "Clothyfly E-commece Template",
    category: "ecommerce",
    label: "Free",
  },
  {
    href: "/",
    image:
      "https://www.codingwebstudio.com/img/ecommerce/trishaenterprise/trishaenterprise.png",
    title: "Trishaenterprise E-commece Template",
    category: "ecommerce",
    label: "Free",
  },
];

  return (
    <>
      <div className="pt-24  max-w-screen-2xl mx-auto text-white relative ">
        {/* banner wrapper */}
        <div className="relative  h-fit ">
          <BannerSection />
        </div>

        {/* certificate section */}
        <div id="Features">
          <CertifecateSection />
        </div>

        {/* premium features section */}
        <div id="Section" className="">
          <PremiumFeaturesSection />
        </div>

        {/* Stuning demos*/}
        <div id="Performance">
          <StuningDemos demos={demos} />
        </div>

        {/* pages Slider & rest of the content */}
        <div id="Store" className=" w-full overflow-">
          <PagesSlider />
        </div>

        {/* footer */}
        <div id="Contact" className="w-full overflow-hidden">
          <Footer />
        </div>

        {/* scroll button */}

  <div className={`
    ${isVisi ? "right-10 " : "-right-20"}
    fixed scrollButton duration-700 ease-in-out transition-all z-40 bottom-10 `}>
          <button onClick={scrollClick} className="buttonAnimation p-4 rounded-xl backdrop-blur-2xl " >
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7"></path></svg>
            <span className="span">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
