"use client"
import Image from "next/image"
import clsx from "clsx"
import { useState } from "react"
export default function Hero() {
  const [isImagesInvisible, setIsImageInvisible] = useState({image1: false, image2: false, image3: false})

  function handleMouseEnter (imageNumber: number) {
    return function handler() {
      if (imageNumber === 1) {
        setIsImageInvisible({...isImagesInvisible, image1: true})
      } else if (imageNumber === 2) {
        setIsImageInvisible({...isImagesInvisible, image2: true})
      } else {
        setIsImageInvisible({...isImagesInvisible, image3: true})
      }
    }
  }
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="w-3/4 md:w-1/2 border-solid flex flex-row mt-12 gap-4">
        <div className="h-[70vh] flex flex-col justify-center items-center w-1/2">
          <h1 className="text-4xl">
            Verify health professionals instantly
          </h1>
          <p className="mt-4">Automate the verification of documents provided by health professional candidates and determine your new employees quicker</p>
        </div>
        <div className="h-[70vh] m-20">

          <div onMouseEnter={handleMouseEnter(1)} className={clsx(
            "absolute transition-opacity bg-slate-700 p-1 rounded-md transform -translate-x-20 rotate-6",
            {
              "opacity-0" : isImagesInvisible.image1
            }
          )}
          ><Image src={"/documentation-3.png"} alt="image of medical documentation" width={500} height={700}/></div>


          <div onMouseEnter={handleMouseEnter(2)} className={clsx(
            "absolute transition-opacity bg-slate-700 p-1 rounded-md transform -rotate-6",
            {
              "opacity-0" : isImagesInvisible.image2
            }
          )}
          ><Image src={"/documentation1.png"} alt="image of medical documentation" width={500} height={700}/></div>

          <div onMouseEnter={handleMouseEnter(3)} className={clsx(
            "absolute transition-opacity bg-slate-700 p-1 rounded-md transform translate-x-20",
            {
              "opacity-0": isImagesInvisible.image3
            }
          )}
          ><Image src={"/documentation-2.png"} alt="image of medical documentation" width={500} height={700}/></div>
        </div>
      </div>
    </div>
  )
}