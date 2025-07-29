
import ProjectCard from "@/components/ProjectCard"
import { ColourfulText } from "@/components/ui/colourful-text"
import { GlowingEffect } from "@/components/ui/GlowingEffext"
import Orb from "@/components/ui/Orb"
import { backendProjects } from "@/constants/backend"
import { frontendProjects } from "@/constants/frontend"
import { motion, useInView, useScroll, useTransform } from 'motion/react'
import { FC, useRef } from "react"

const MyWork: FC = () => {
    const workRef = useRef<HTMLElement>(null)
    const inView = useInView(workRef, { amount: 0.3, once: true })
    const { scrollYProgress } = useScroll({
        target: workRef,
        offset: ["start end", "end start"]
    })
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
    console.log(inView)
    return (
        <section id="project" ref={workRef} className="relative  min-h-screen py-4 md:py-12 px-2 overflow-hidden ">
            <div className="absolute inset-0 z-10 w-1/2 h-1/2 top-1/2 left-1/2 -translate-1/2 ">
                <div className="w-full h-full">
                    <Orb
                        hoverIntensity={0.2}
                        rotateOnHover={true}
                        hue={0}
                        forceHoverState={false}
                    />
                </div>
            </div>
            <div className="bg-black  w-full  h-[100px] flex items-center justify-center overflow-hidden" >
                <motion.h1 className="text-white font-medium text-3xl md:text-5xl tracking-wider"
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 }:{}}
                    transition={{ duration: 1 }}
                >
                    My Work
                </motion.h1>
            </div>
            <motion.h1 className="text-4xl text-center font-medium py-12"
            initial={{opacity:0,x:-50}}
            animate={inView?{opacity:1,x:0}:{}}
            transition={{duration:0.5}}
            >
                <ColourfulText text={"Frontend"} />
            </motion.h1>
            <div className="relative z-30 container mx-auto  flex flex-col lg:flex-row  items-center  gap-4 lg:gap-12 justify-center  my-10">
                {frontendProjects.map((project) => (
                    <ProjectCard key={project.title} title={project.title} description={project.description} github={project.github} />
                ))}
            </div>
            <motion.h1 className="text-4xl text-center font-medium py-12"
                initial={{opacity:0,x:50}}
            animate={inView?{opacity:1,x:0}:{}}
            transition={{duration:0.5}}
                >
                <ColourfulText text={"Backend"} />
            </motion.h1>
            <div className="relative z-30 container mx-auto  flex flex-col lg:flex-row  items-center  gap-4 lg:gap-12 justify-center  my-10 ">
                {backendProjects.map((project) => (
                    <ProjectCard key={project.title} title={project.title} description={project.description} github={project.github} />
                ))}
            </div>


        </section >
    )
}

export default MyWork