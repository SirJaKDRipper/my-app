import React from "react"; 
import Image from "next/image";
import wallpaper from "../public/wallpaper1.jpg";
import Link from "next/link";


export default function Home() {
  return (

    <div className="absolute inset-0 text-white ">

      <div className="absolute inset-0 z-0">
        <Image src={wallpaper} alt="wallpaper" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute inset-0 text-white flex flex-col justify-center  z-10 float-left  ml-20 gap-10 ">
   
        <h1 className="text-xl md:text-5xl lg:text-7xl">M Y _ P O R T F O L I O</h1>

        <Link className="mt-10 text-sm lg:text-lg" href="/developer"> 1. &nbsp;&nbsp;&nbsp;U I - U X&nbsp;&nbsp;&nbsp;D e v e l o p e r</Link>
        <Link  className="text-sm" href="/performer">2. &nbsp;&nbsp;&nbsp;P e r f o r m e r</Link>
        <Link className="text-sm" href="/photographer">3.&nbsp;&nbsp;&nbsp; W i l d l i f e &nbsp;&nbsp;&nbsp; P h o t o g r a p h e r</Link>
        <Link className="text-sm" href="/leader">4.&nbsp;&nbsp;&nbsp; C o m m u n i t y &nbsp;&nbsp;&nbsp; L e a d e r</Link>
        <Link className="text-sm" href="/vortex">5.&nbsp;&nbsp;&nbsp; V O R T E X &nbsp;&nbsp;&nbsp; /&nbsp;&nbsp;&nbsp;  H 3 6</Link>
    
      </div>
     
    </div>
  );
}
