import React, { useRef } from 'react'
import GradientButton from '../components/GradientButton'
import projects from '../components/projectsData'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP,ScrollTrigger);

const Work = () => {

  const workRef = useRef(null);
  const projectsRef = useRef(null);

  useGSAP(() => {
    // Horizontal scroll
    const projectsWidth = projectsRef.current.scrollWidth;
    const scrollDistance = projectsWidth - window.innerWidth;

    gsap.to(projectsRef.current, {
      x: -scrollDistance,
      ease: "linear",
      scrollTrigger: {
        trigger: workRef.current,
        start: "center center",
        end: () => `+=${projectsWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1, // prevents flicker on fast scroll
        invalidateOnRefresh: true,
      },
    });
  }, { scope: workRef });


  return (
    <>
      <div ref={workRef} className="min-h-screen bg-white text-black py-10 lg:py-20 overflow-hidden">
        
        {/* Title Wrapper */}
        <div className='main-container pb-8 lg:pb-12 flex max-md:flex-col gap-6 justify-between items-start md:items-end'>
          <div className='max-w-xl'>
            <h3 className='mb-3'>My Projects</h3>
            <p className='text-lg lg:text-xl'>Learning by building—here’s a glimpse of the projects I’ve created.</p>
          </div>
          <GradientButton text="Explore All" link="/projects" className="btn-light" />
        </div>
        <div ref={projectsRef}>
          {/* Projects */}
          <div className='flex gap-4 lg:gap-8 ms-4 lg:ms-[40%] mt-6'>
            {projects.map(({ id, name, image, link }) => (
              <a
                key={id}
                href={link}
                className="relative rounded-2xl flex-shrink-0 w-[340px] lg:w-[400px] h-72 lg:h-96 block overflow-hidden group"
              >
                {/* Project Image */}
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 bg-white"
                />

                {/* Project Name */}
                <span className="absolute top-4 right-4 bg-black text-white text-sm lg:text-lg uppercase leading-[1.4] font-heading px-5 py-1 rounded-full">
                  {name}
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}

export default Work