import React from 'react';

const GradientButton = ({ text, link, className, target = "" }) => {
  return (
    <a
      href={link}
      target={target} 
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`btn uppercase font-heading border-2 border-transparent text-center min-w-[205px] px-12 py-2 lg:py-3 rounded-full max-sm:text-lg ${className}`}
    >
      {text}
    </a>
  );
};

export default GradientButton;
