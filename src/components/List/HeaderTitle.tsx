'use client'
import { usePathname } from "next/navigation"

const HeaderTitle = () => {
    const pathname = usePathname()

    return (
        <h1 className="absolute text-white text-lg font-bold">{pathname === '/movies' ? 'Movies' : 'TV Series'}</h1>
    )
  }

  export default HeaderTitle