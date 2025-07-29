import { FC } from "react"
import DotBackgroundDemo from "./ui/DottedBackground"
import { cn } from "@/lib/utils"
import { FiGithub } from "react-icons/fi"
import { GlowingEffect } from "./ui/GlowingEffext"
import Link from "next/link"


type CardPorps = {
  title: string
  description: string
  github: string
}

const ProjectCard: FC<CardPorps> = ({ title, description, github }) => {
  return (
    <div className="relative w-[300px] h-[300px]  rounded-2xl mt-4  p-4 border-1 border-gray-400 hover:shadow-lg shadow-blue-400  ">
      <GlowingEffect
        blur={0}
        borderWidth={3}
        spread={80}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div
        className={cn(
          "absolute inset-0 ",
          "[background-size:20px_15px]",
          "[background-image:radial-gradient(#d4d4d4_0.5px,transparent_1.5px)]",
          "dark:[background-image:radial-gradient(#404040_0.5px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] rounded-2xl"></div>
      <div className="relative z-40 flex flex-col justify-center items-center gap-4 w-full h-full ">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm font-medium  text-center  text-gray-500 tracking-wider">{description}</p>
        <div className="flex gap-2 items-center">
          <Link href={github} className="w-10 h-10 flex items-center justify-center border-2 rounded-full bg-white ">
            <FiGithub size="24" className="object-cover text-black " />
          </Link>
        </div>
      </div>

    </div>
  )
}

export default ProjectCard