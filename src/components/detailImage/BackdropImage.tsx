'use client'
import Image from "next/image"
import { useState } from "react"

const BackdropImage = ({backdrop_path = 'https://placehold.co/600x400', title}:{backdrop_path:string | undefined, title:string | undefined}) => {
    const [loading, setLoading] = useState(true)
  return (
    <>
        <Image
          fill
          src={backdrop_path}
          onLoad={() => setLoading(false)}
          className={`${loading ? 'none' : 'block'}`}
          alt={`Backdrop Image ${title}`}
          sizes="100%"
          priority
          unoptimized
        />
    </>
  )
}

export default BackdropImage