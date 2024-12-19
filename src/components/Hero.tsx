import React from 'react';
import { getContent } from '../utils/content';
import { Button } from './Button';

export const Hero = () => {
  const { hero } = getContent();

  return (
    <div className="relative h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          data-sb-field-path="hero.image"
          src={hero.image}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 
            data-sb-field-path="hero.title"
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            {hero.title}
          </h1>
          <p 
            data-sb-field-path="hero.description"
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            {hero.description}
          </p>
          <Button>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};