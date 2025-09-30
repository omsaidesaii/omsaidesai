import React from 'react';
import Logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import GradientButton from './GradientButton';
import {   LinkedinIcon, GithubIcon, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* Divider */}
      <div className='max-w-[1500px] m-auto h-[1px] bg-white opacity-10'></div>
      

      {/* Contact Form Section */}
      {/* <section className="main-container py-12 ">
        <h2 className='text-2xl font-semibold mb-6 text-center'>Get In Touch</h2>
        <div className='flex justify-center'>
          <form 
            className="contact-form flex flex-col gap-4 w-full max-w-lg" 
            action="https://api.web3forms.com/submit" 
            method="POST"
          >
            <input  type="hidden" name="access_key" />

            <input type="text" name="name" placeholder="Name" required className="border rounded px-4 py-2" />
            <input type="email" name="email" placeholder="Email" required className="border rounded px-4 py-2" />
            <textarea name="message" placeholder="Message" required className="border rounded px-4 py-2 h-32"></textarea>

            <GradientButton
  text="Send Message"
  link="https://www.linkedin.com/in/omsai-desai"
  target="_blank"
/>
          </form>
        </div>
      </section> */}

      {/* Divider */}
      <div className='max-w-[1500px] m-auto h-[1px] bg-white opacity-10'></div>

      {/* Footer Bottom */}
      <div className='main-container grid md:grid-cols-2 gap-3 py-6 lg:py-8 max-md:text-center'>
  <div className='text-base lg:text-lg'>© 2025 Omsai Desai | All rights reserved</div>
  <div className='flex gap-3 justify-center md:justify-end'>
    {/* LinkedIn Icon */}
    <a href="https://www.linkedin.com/in/omsai-desai" target="_blank" rel="noopener noreferrer">
      <LinkedinIcon size={30} className="text-white" />
    </a>

    {/* X Icon */}
    <a href="https://x.com/omsaidesai/" target="_blank" rel="noopener noreferrer">
      <Twitter size={30} className="text-white" />
    </a>

    {/* Git Icon */}
    <a href="http://github.com/omsaidesaii/" target="_blank" rel="noopener noreferrer">
      <GithubIcon size={30} className="text-white" />
    </a>
  </div>
</div>
    </>
  );
};

export default Footer;
