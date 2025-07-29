"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'
import spider from '@/assets/spider.png'
import { FaFileCode } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa';

const NavBar = () => {
  return (
    <header className='fixed w-[calc(100vw-2rem)]  top-4 left-4  z-20  rounded-xl backdrop-blur-md'>
      <nav className=" container mx-auto ">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className='relative '>
            <h1 className="font-bold text-lg">TheDevAditya</h1>
            <motion.div
              whileHover={{ opacity: 0, top: -30 }}
              transition={{ ease: 'easeInOut' }}
              className='hidden md:block absolute -left-16 top-4 w-[200px] h-10 -z-10'>
              <Image className='object-contain' src={spider} alt='Spider' />
            </motion.div>
          </div>
          <div className='flex gap-6 text-sm font-medium '>
            <Link href="#project" className='flex gap-2 items-center'>
              <FaFileCode className='size-4 ' />
              <span className='hidden md:inline'>Projects</span>
            </Link>
            <Link href="" className='flex gap-2 items-center'>
              <FaLinkedin className='size-4' />
              <span className='hidden md:inline'>LinkedIn</span>
            </Link>
            <Link href="https://github.com/Aditya82003" className=' flex gap-2 items-center'>
              <FaGithub className='size-4' />
              <span className='hidden md:inline'>GitHub</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar