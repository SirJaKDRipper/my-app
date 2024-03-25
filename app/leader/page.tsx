import React from 'react';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import leader1 from '../../public/leader1.jpeg';
import leader2 from '../../public/leader2.jpeg';
import leader3 from '../../public/leader3.jpeg';
import kuweni from '../../public/kuweni.png';
import LEO from '../../public/LEO.png.webp';
import leader4 from '../../public/leader4.jpeg';
import sivali from '../../public/sivali.png';

export const Performer = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className='flex flex-col md:flex-row items-center mt-10 md:mt-20 mx-5 md:mx-20 text-center md:text-left'>
        <div className="Greeting md:w-1/2">
          <p className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl">L E A D E R</p>
          <p className="text-xl md:text-2xl mt-5">Patron & Co-Ordinator</p>
          <p className="text-5xl mt-5">Hi, I'm <span className='text-blue-400'>Anuda Gunarathna</span></p>
          <p className="text-3xl md:text-4xl mt-5"> from Sri Lanka</p>
        </div>
        <div className="md:w-1/2">
          <Image src={leader3} alt="wallpaper" width={400} height={400} className='mx-auto mt-5 md:-mt-10'/>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:gap-20 mt-10 md:mt-20 mx-10 md:mx-40">
         <div className="md:w-1/2 md:text-left mt-5 md:mt-40">
          <h1 className='text-4xl text-left mt-5'>Volunteering at Kuweni The Final Act</h1>
        </div>
        <Image src={leader2} alt="wallpaper" width={300} height={300} className="md:w-1/2"/>
       
      </div>

      <div className="flex flex-col md:flex-row md:gap-20 mt-10 md:mt-20 mx-10 md:mx-40">
        <div className="md:w-1/2 md:text-left mt-5 md:mt-40">
          <h1 className='md:text-3xl text-4xl text-left mt-5'>Event Co-Ordinator of LEO Club Of IIT</h1>
        </div>
        <Image src={leader1} alt="wallpaper" width={300} height={300} className="md:w-1/2"/>
      </div>

      <div className="flex flex-col md:flex-row md:gap-20 mt-10 md:mt-20 mx-10 md:mx-40">
      <div className="md:w-1/2 md:text-left mt-5 md:mt-40">
          <h1 className='text-4xl  text-left mt-5'>Senior & Junior perefect</h1>
        </div>
        <Image src={leader4} alt="wallpaper" width={300} height={300} className="md:w-1/2"/>
    
      </div>
      
    </div>
  );
}

export default Performer;
