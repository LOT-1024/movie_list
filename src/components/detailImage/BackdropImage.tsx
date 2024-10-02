'use client'
import Image from "next/image"
import { useState } from "react"

const BackdropImage = ({backdrop_path, title}:{backdrop_path:string, title:string}) => {
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
        />
    </>
  )
}

export default BackdropImage