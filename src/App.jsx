
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Mynev from './components/Mynev';
import Ready from './components/Ready';
import True from './components/True';
import Websites from './components/Website';
import Story from './components/Story';
import BackToTop from './components/Backtop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';


function App() {
  useEffect(() => {
    AOS.init({
      duration:1500,
      once:true,
    });
  }, [])

  return (
    <>
    <Mynev/>
     <Hero/> 
     <True/>
     <Ready/>
     <Story/>
     <Websites/>
     <Footer/>
     <BackToTop/>
     <Loader/>
    </>
  )
}

export default App
