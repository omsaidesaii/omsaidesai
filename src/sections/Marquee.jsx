import React from 'react'
import star from '../assets/images/star.svg'

const Marquee = () => {
  return (
    <>
      <div className="overflow-hidden bg-white text-black pb-10 lg:pb-15">

        {/* Row 1 */}
        <div className="whitespace-nowrap animate-marquee text-6xl lg:text-[7vw] font-heading font-semibold leading-[1] tracking-tight">
          <span className="flex gap-4 lg:gap-8 mx-8 ">
            HTML5 <img src={star} alt="" className="marquee-star1 w-[7vw] " /> 
            CSS3 <img src={star} alt="" className="marquee-star1 w-[7vw]" /> 
            JavaScript <img src={star} alt="" className="marquee-star1 w-[7vw]" /> 
            React.js <img src={star} alt="" className="marquee-star1 w-[7vw]" /> 
            Tailwind CSS <img src={star} alt="" className="marquee-star1 w-[7vw]" /> 
            Next.js <img src={star} alt="" className="marquee-star1 w-[7vw]" /> 
          </span>
        </div>

        {/* Row 2 (reverse) */}
        <div className="whitespace-nowrap animate-marquee-reverse text-6xl lg:text-[7vw] font-heading font-semibold leading-[1] tracking-tight ">
          <span className="flex gap-4 lg:gap-8 mx-8 [color:transparent] [-webkit-text-stroke:2px_black]">
            Node.js <img src={star} alt="" className="marquee-star2 w-[7vw]" /> 
            Express.js <img src={star} alt="" className="marquee-star2 w-[7vw]" /> 
            MongoDB <img src={star} alt="" className="marquee-star2 w-[7vw]" />
            MySQL <img src={star} alt="" className="marquee-star2 w-[7vw]" /> 
           Git <img src={star} alt="" className="marquee-star2 w-[7vw]" /> 
            Postman <img src={star} alt="" className="marquee-star2 w-[7vw]" /> 
          </span>
        </div>
        
      </div>
    </>
  )
}

export default Marquee