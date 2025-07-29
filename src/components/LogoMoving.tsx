"use client"
import React from 'react'
import { RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { motion } from 'motion/react'
import { DiJavascript1, DiMongodb, DiNodejs } from 'react-icons/di'
import { SiExpress, SiMongoosedotws, SiTypescript } from 'react-icons/si'
import { FiFigma } from 'react-icons/fi'

const LogoMoving = () => {
    return (
        <section className='mt-4  py-6 h-[200px] rounded-2xl '>
            <p className="font-semibold text-neutral-400 text-center mb-10">
                Can be trusted with these technologies
            </p>
            <div className='container mx-auto flex justify-center'>
                <div className="flex overflow-x-hidden max-w-[1000px] py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <motion.div
                        className="flex items-center gap-20 flex-none pr-14"
                        animate={{
                            translateX: "-50%",
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                    >
                    <RiReactjsFill size="70"  className='w-12 text-gray-400 ' />
                    <DiJavascript1 size="70" className='w-12 text-gray-400'/>
                    <SiTypescript size="70" className='w-12 text-gray-400'/>
                    <RiTailwindCssFill size="70" className='w-12 text-gray-400'/>
                    <FiFigma size="70" className='w-12 text-gray-400'/>
                    <DiMongodb size="70" className='w-12 text-gray-400'/>
                    <DiNodejs size="70" className='w-12 text-gray-400'/>
                    <SiExpress size="70" className='w-12 text-gray-400'/>
                    <RiReactjsFill size="70"  className='w-12 text-gray-400 ' />
                    <DiJavascript1 size="70" className='w-12 text-gray-400'/>
                    <SiTypescript size="70" className='w-12 text-gray-400'/>
                    <RiTailwindCssFill size="70" className='w-12 text-gray-400'/>
                    <FiFigma size="70" className='w-12 text-gray-400'/>
                    <DiMongodb size="70" className='w-12 text-gray-400'/>
                    <DiNodejs size="70" className='w-12 text-gray-400'/>
                    <SiExpress size="70" className='w-12 text-gray-400'/>
                   
                    </motion.div>

                </div>
            </div>
        </section >
    )
}

export default LogoMoving