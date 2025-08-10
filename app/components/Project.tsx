import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
interface ProjectProps {
    src: string,
    w?: number,
    h?: number,
    alt: string
}

export const Project: React.FC<ProjectProps> = ({
    src, w = 700, h = 700, alt = ''
}) => {

    return (
        <>
            <div className='w-full flex justify-between gap-10 pb-3 pr-[5%]'>
                <Image className='w-[20%]' src={`${src}`} width={w} height={h} alt={alt}></Image>
                <p className='w-[50%] text-[20px] text-center flex items-center justify-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptas non beatae eveniet, dolore delectus architecto modi molestias sit pariatur.</p>
                <div className='flex flex-col justify-center gap-3 text-[20px] font-bold'>
                    <span className='bg-[#111] text-white px-3 rounded-sm'>django</span>
                    <span className='bg-[#111] text-white px-3 rounded-sm'>next js</span>
                    <span className='bg-[#111] text-white px-3 rounded-sm'>celery</span>
                </div>
            </div>
            <div>
                <p className='text-[20px] flex justify-center gap-5 border-b-1 pb-5'>Prewiev: <Link className='bg-[#111] text-white px-3 py-1 rounded-sm' href="#">click !</Link></p>
            </div>
        </>
    );
}


export default Project;
