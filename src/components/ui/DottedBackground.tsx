import { cn } from "@/lib/utils";
import React, { FC } from "react";

type DotBackgroundProps = {
    title: string
}

 const DotBackgroundDemo:FC<DotBackgroundProps> =({title})=> {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-blue-300 rounded-2xl overflow-hidden">
        <div
            className={cn(
                "absolute inset-0",
                "[background-size:20px_20px]",
                "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
            )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-blue-600 "></div>
        <h1>{title}</h1>
    </div>
    );
}

export default DotBackgroundDemo
