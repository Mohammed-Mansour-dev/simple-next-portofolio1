import { IoHome, IoLogoDropbox  } from "react-icons/io5";
import {BiCategory} from "react-icons/bi"
import {RiBloggerFill } from "react-icons/ri"
import {FiMoreHorizontal } from "react-icons/fi"

export const SliderBoxData =[
{
    navBoxTitle:"Home Page",
    navBoxIcon:<IoHome  />,
imgs:["./img/home1.png","./img/home2.png","./img/home3.png"],
},
{
    navBoxTitle:"Product Page",
    navBoxIcon:<IoLogoDropbox  />,
imgs:["./img/prod1.jpg","./img/prod2.jpg","./img/prod3.jpg"],
},{
    navBoxTitle:"Collection Page",
    navBoxIcon:<BiCategory  />,
imgs:["./img/colle1.png","./img/colle2.png"],
},

{
    navBoxTitle:"Blog",
    navBoxIcon:<RiBloggerFill  />,
imgs:["./img/blog1.png","./img/blog2.png"],
},
{
    navBoxTitle:"More",
    navBoxIcon:<FiMoreHorizontal  />
    ,
imgs:["./img/more1.png","./img/more2.png"],
},




]

















