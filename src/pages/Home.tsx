import React from 'react';
import Navbar from './Navbar';
import webpImage from '../assets/0940e15e8f0a12e83df28651e00abf27.webp';
import { Button } from "@/components/ui/button"



const Home = () => {
  return (
    <div className="h-[70rem] flex flex-col w-screen">
      <Navbar />
      <div className="flex w-full justify-center pt-[10rem]">
        <img src={webpImage} alt="Description of the image" className="w-auto max-w-full" />
      </div>
      <div className="flex flex-row justify-center pt-8">
        <Button>I'm Feeling Lucky!</Button>
      </div>
      <div className="flex flex-row justify-center pt-8">
        <Button>I'm Feeling Lucky!</Button>
      </div>
    </div>
  );
}


export default Home;