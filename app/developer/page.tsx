import React from 'react';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import python from '../../public/python.png';
import html from '../../public/html.png';
import css from '../../public/css.png';
import js from '../../public/js.png';
import react from '../../public/react.png';
import Mysql from '../../public/Mysql.png';
import java from '../../public/java.png';
import footer from '../../components/footer';

export const developer = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center mt-10 md:mt-20 mx-5 md:mx-20 text-center md:text-left">
        <div className="lg:w-4/5">
          <p className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl">U N D E R G R A D U A T E</p>
          <p className="text-xl md:text-2xl mt-5">UI-UX Developer</p>
          <p className="text-5xl mt-5">Hi, I'm <span className='text-red-400'>Anuda Gunarathna</span></p>
          <p className="text-3xl md:text-4xl mt-5">from Sri Lanka</p>
        </div>
        <div className="md:w-2/3">
          <Image src="/anuda.png" alt="Anuda" width={350} height={350} className="md:mt-20 float-right" />
        </div>
      </div>
      <div className="text-justify mx-5 md:mx-20 -mt-40 md:mt-20">
        <p className='text-sm'>
          <span className='text-blue-400 text-9xl'>"</span>
          <span className='text-5xl md:text-9xl'>Studying </span>Computer Science under the University of Westminster at the Informatics Institute Of Technology. As a passionate and ambitious computer science undergraduate, I have a hunger for knowledge that knows no bounds. I believe in learning from every facet of life and exploring various avenues to showcase my creativity. While my academic pursuits lie in computer science, I am not confined to just one area of interest.
          I have a keen eye for photography and videography, and I often leverage these skills to bring my creativity to life. Wildlife photography is a particular passion of mine, capturing the beauty of nature and the essence of the wild in every shot.
          Beyond my visual talents, I am a versatile musician, skilled in singing and playing the violin. Music has always been a means for me to express myself and explore new creative horizons. With each song I sing or every melody I play, I strive to infuse my unique touch of creativity and beauty.
          As a computer science student, I find innovative ways to integrate my diverse talents into my creations. Whether it's incorporating technology into my photography or blending my music with digital art, I never shy away from pushing the boundaries of creativity.
          In every project, I pour my heart and soul, showcasing my multifaceted abilities as a CS undergraduate, photographer, and musician. I take pride in my creations as they represent not only my talents but also my unwavering passion for exploring and expressing my creative ideas in the most unique and impactful ways.
          Through my journey as a lifelong learner and a multi-talented individual, I aim to inspire others to embrace their passions fearlessly and make their mark in the world through their creative endeavors.
        </p>
      </div>
      <div className='flex flex-col items-center justify-center text-5xl text-red-400 mt-20 sm:mt-40 lg:mt-40 xl:mt-60'>
  M Y &nbsp; S K I L L S
</div>
<div className='flex flex-col items-center justify-center mt-10 lg:mt-20'>
  <div className='flex flex-wrap justify-center gap-10'>
    <Image src={python} alt="python" width={100} height={100} />
    <Image src={html} alt="html" width={100} height={100} />
    <Image src={css} alt="css" width={100} height={100} />
    <Image src={js} alt="js" width={100} height={100} />
    <Image src={react} alt="react" width={100} height={100} />
    <Image src={Mysql} alt="Mysql" width={100} height={100} />
    <Image src={java} alt="java" width={100} height={100} />
  </div>
</div>
<div> <footer /></div>
    </div>

  
  );
}

export default developer;
