
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';


const Hero = () => {
    const [videroSrc, setvideroSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
    const handleVideoSrcSet = () =>{
        if(window.innerWidth < 760){
            setvideroSrc(smallHeroVideo)
        }
        else{
            setvideroSrc(heroVideo)
        }
    }
    useEffect(() => {
      window.addEventListener('resize', handleVideoSrcSet);
      return () =>{
        window.removeEventListener('resize', handleVideoSrcSet)
      }
    
     
    }, [])
    
    useGSAP(() =>{
        gsap.to(
            '#hero',{
                opacity:1,
                delay:1.5

            }
        ),
        gsap.to('#cta', {
            opacity:1,
            y:-50,
            delay:2
        })
    })
  return (
   <>
    <section className='w-full nav-height bg-black relative'>
        <div className='h-full w-full flex-center flex-col'>
            <p className='hero-title' id="hero">iPhone 15 Pro</p>
            <div className='md:w-10/12 w-9/12 '>
                <video autoPlay muted playsInline key={videroSrc}>
                    <source src={videroSrc}  type='video/mp4' />
                </video>
            </div>
            <div className='flex flex-col items-center opacity-0 translate-y-20' id='cta'>
                <a href="#highlights" className='btn'>Buy</a>
                <p className='font-normal text-xl'>From $199/month or $999</p>
            </div>
        </div>
    </section>
   </>
  )
}

export default Hero