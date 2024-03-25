import React from 'react';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import Anuda1 from '../../public/anuda1.jpeg';
import Anuda2 from '../../public/anuda2.jpeg';
import Anuda3 from '../../public/anuda3.jpeg';
import Anuda4 from '../../public/anuda4.jpeg';
import Anuda5 from '../../public/anuda5.jpeg';
import Anuda6 from '../../public/anuda6.jpeg';
import Anuda7 from '../../public/anuda7.jpeg';
import Anuda8 from '../../public/anuda8.jpeg';
import stagecraft from '../../public/Stagecraft.png';

export const Performer = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center mt-10 md:mt-20 mx-5 md:mx-20 text-center md:text-left">
        <div className="lg:w-4/5">
          <p className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl">P E R F O R M E R</p>
          <p className="text-xl md:text-2xl mt-5">Singer & Violinist</p>
          <p className="text-5xl mt-5">Hi, I'm <span className='text-green-400'>Anuda Gunarathna</span></p>
          <p className="text-3xl md:text-4xl mt-5">from Sri Lanka</p>
        </div>
        <div className="md:w-1/2">
          <Image src={Anuda1} alt="wallpaper" width={400} height={400} className='mx-auto mt-5 md:-mt-20'/>
        </div>
      </div>

      <div className="ml-10 md:ml-20 mt-20 flex flex-col md:flex-row md:gap-2">
        <Image src={Anuda2} alt="wallpaper" width={300} height={300} className="md:w-1/2"/>
        <div className="md:w-1/2 text-center md:text-left mt-5 md:mt-40 mr-20">
          <h1 className='text-4xl lg:text-5xl xl:text-8xl italic ml-10 mt-10 lg:-mt-10 xl:mt-20 md:-mt-20'> <span className='text-9xl'>"</span>Try it, or else you won't know how good it will be."</h1>
        </div>
      </div>

      <div className="md:ml-20 md:mr-20  mt-20 flex flex-col gap-20 items-center text-center md:text-left md:items-start">
  <div>
    <h1 className='text-4xl lgtext-4xl xl:text-6xl mt-10 md:mt-20 lg:mt-40'>Stage Craft 2024</h1>
    <p className='text-xl md:text-2xl lg:text-3xl mt-20'>Stage Craft is one of the Informatics Institute Of Technology's Student Union's annual signature events that fuse together drama, music and dancing, producing one of the most artistic nights of the year. </p>
  </div>
  <div className='flex flex-col md:flex-row gap-2 lg:gap-3 xl:gap-20 justify-center md:justify-start'>
    <Image src={Anuda4} alt="wallpaper" width={300} height={300} className="md:w-1/3" />
    <Image src={Anuda5} alt="wallpaper" width={300} height={300} className="md:w-1/3" />
    <Image src={Anuda6} alt="wallpaper" width={300} height={300} className="md:w-1/3" />
  </div>
</div>

      <div className="md:ml-20 md:mr-20 mt-20 flex flex-col gap-20 items-center text-center md:text-left md:items-start md:justify-center">
        <div>
          <h1 className='ext-4xl lgtext-4xl xl:text-6xl mt-10 md:mt-20 lg:mt-40'>Spandana 2023</h1>
          <p className='text-xl md:text-2xl lg:text-3xl mt-20'>Spandana 2.0 is a Musical event which conducted by Leo Club Of IIT for the second time fetauring their very own band known as Vortex</p>
        </div>
        <div className='flex flex-col md:flex-row gap-2 lg:gap-3 xl:gap-20'>
          <Image src={Anuda7} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
          <Image src={Anuda3} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
          <Image src={Anuda8} alt="wallpaper" width={300} height={300} className="md:w-1/3"/>
        </div>
      </div>
    </div>
  );
}

export default Performer;
