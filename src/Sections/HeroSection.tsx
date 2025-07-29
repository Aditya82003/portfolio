"use client"
import { FC, ForwardedRef, forwardRef } from "react"
import laptopImage from '@/assets/Group 8.png'
import Image from "next/image"
import { VscVscode } from 'react-icons/vsc';
import { RiReactjsLine } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiJavascriptFill } from 'react-icons/ri';
import { motion } from 'motion/react';
import { TypewriterEffect } from "@/components/TypewriterEffect";
import Link from "next/link";

const HeroSection = forwardRef<HTMLElement,{}>((_,ref: ForwardedRef<HTMLElement>)=>{
    return (
        <section ref={ref} className="relative h-[calc(100vh-2rem)]  w-full rounded-xl bg-gradient-to-b from-[#3778C2] to-[#A5CBF6] text-white overflow-hidden">
            <div className="max-h-full h-full px-2 flex justify-center items-center rounded-xl">
                <div className="flex flex-col  items-center gap-4 text-center max-w-[600px] space-y-2">
                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-7xl font-bold font-[Konkhmer Sleokchher]">Aditya Kashyap</h1>
                        <TypewriterEffect className="flex justify-end items-center"  words={[{ text: "Desiging", className: "text-xs md:text-2xl font-medium" }, { text: "/Developer", className: " text-xs md:text-2xl font-medium" }]} />
                    </div>
                    <p className="text-xs md:text-lg leading-tight">Hey there! I&apos;m Aditya — a web developer driven by curiosity and creativity. I specialize in building modern web applications using tools like React, TypeScript, and Node.js. Let&apos;s turn ideas into something amazing.</p>
                    <div className="flex  items-center justify-around w-full max-w-[350px]">
                        <button className="btn btn-md lg:btn-lg rounded-full hover:shadow-lg bg-black text-white ring-0 border-0 shadow-[#3778C2] hover:text-[#3778C2]">Resume</button>
                        <Link href="#project" className="btn btn-md lg:btn-lg rounded-full bg-white text-black ring-0  border-0 hover:shadow-lg shadow-[#3778C2]">My Work</Link>

                    </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[300px] xl:w-[400px]">
                    <div className="relative">
                        <div className="">
                            <Image className="object-contain" src={laptopImage} alt="laptopImage" />
                        </div>
                        <motion.div
                            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                            animate={{ x: -150, y: -10, opacity: 1, scale: 1 }}
                            transition={{ duration: 2, delay: 0.2, ease: "backInOut" }}
                            className="absolute top-1/2 left-1/2 w-12 h-12 -translate-1/2 "
                        >
                            <VscVscode className="w-full h-full" />
                        </motion.div>
                        <motion.div
                            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                            animate={{ x: 150, y: -10, opacity: 1, scale: 1 }}
                            transition={{ duration: 2, delay: 0.2, ease: "backInOut" }}
                            className="absolute top-1/2 left-1/2 w-12 h-12 -translate-1/2 "
                        >
                            <RiReactjsLine className="w-full h-full" />
                        </motion.div>
                        <motion.div
                            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                            animate={{ x: 150, y: -80, opacity: 1, scale: 1 }}
                            transition={{ duration: 2, delay: 0.2, ease: "backInOut" }}
                            className="absolute top-1/2 left-1/2 w-12 h-12 -translate-1/2 "
                        >
                            <BiLogoTypescript className="w-full h-full" />
                        </motion.div>
                        <motion.div
                            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                            animate={{ x: -150, y: -80, opacity: 1, scale: 1 }}
                            transition={{ duration: 2, delay: 0.2, ease: "backInOut" }}
                            className="absolute top-1/2 left-1/2  w-12 h-12 -translate-1/2 "
                        >
                            <RiJavascriptFill className="w-full h-full" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )

})

export default HeroSection