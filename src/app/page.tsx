"use client"
import LogoMoving from "@/components/LogoMoving"
import NavBar from "@/components/NavBar"
import ExperienceSection from "@/Sections/Experience"
import HeroSection from "@/Sections/HeroSection"
import { FC, useRef } from "react"
import { motion, useInView } from 'motion/react'
import MyWork from "@/Sections/MyWork"
import FooterTag from "@/components/FooterTag"



const Home: FC = () => {
  const heroSectionRef = useRef<HTMLElement| null>(null)
  const heroInView = useInView(heroSectionRef, { amount: 0.1 })

  return (
    <main className="p-4" data-theme="light">
      <motion.div className={heroInView ? "text-white":"text-black"}>
        <NavBar />
      </motion.div>
      <HeroSection ref={heroSectionRef} />
      <LogoMoving />
      <ExperienceSection />
      <MyWork/>
      <FooterTag/>

    </main>
  )
}

export default Home
