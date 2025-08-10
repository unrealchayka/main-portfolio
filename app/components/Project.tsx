import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  src: string;
  alt: string;
  description: string;
  tags: string[];
  link: string;
  w?: number;
  h?: number;
}

export const Project: React.FC<ProjectProps> = ({
  src, 
  w = 800, 
  h = 600, 
  alt = '',
  description,
  tags,
  link
}) => {
  return (
    <article className="w-full border-b border-gray-300 pb-6 last:border-b-0">
      <div className="flex flex-col lg:flex-row justify-between gap-4 md:gap-6 lg:gap-8 pb-4">
        <div className="w-full lg:w-1/4 xl:w-1/5">
          <Image 
            className="w-full h-auto rounded-lg shadow-md"
            src={src} 
            width={w} 
            height={h} 
            alt={alt}
            priority={false}
          />
        </div>
        
        <p className="w-full lg:w-2/4 text-base md:text-lg text-gray-700 flex items-center">
          {description}
        </p>
        
        <div className="w-full lg:w-1/4 flex flex-wrap lg:flex-col justify-start lg:justify-center gap-2 md:gap-3">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="inline-block bg-gray-900 text-white px-3 py-1 text-sm md:text-base rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center md:justify-end mt-4">
        <Link 
          href={link} 
          className="bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 text-sm md:text-base rounded-sm transition-colors duration-200"
        >
          Preview
        </Link>
      </div>
    </article>
  );
}

export default Project;