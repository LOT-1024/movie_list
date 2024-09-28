'use client'

import { getFirstVideoMovie } from "@/api/movieapiclient";
import { Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const YoutubeModal = ({ setFunction, id }: { setFunction: () => void, id:number }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState('QggJzZdIYPI')

  useEffect(() => {
    async function fetchdata() {
      try {
        const data = await getFirstVideoMovie(id)
        setYoutubeUrl(data.key)
      } catch (err) {
        console.error(err)
        throw new Error('Error Data Fetching')
      }
    }
    fetchdata()
  }, [])
  

  return (
    <div
      className="fixed z-[2] bg-black/50 w-screen h-screen top-0 scroll flex justify-center items-center fade-in-custom"
      onClick={setFunction}
    >
      <div
        className="bg-white/70 w-4/5 aspect-video max-w-[93.75rem] flex justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {!isLoaded && (
          <button
            className="w-full h-full flex justify-center items-center"
            onClick={() => setIsLoaded((prev) => !prev)}
          >
            <Image
              height={5000}
              width={5000}
              src={`https://img.youtube.com/vi/${youtubeUrl}/0.jpg`}
              alt="Teto MV Thumbnail"
              className="w-full aspect-video"
              priority
            />
            <Play
              fill="red"
              className="text-red-600 w-14 h-14 absolute border-4 border-red-600 rounded-full p-1 shadow-[0_0_23px_10px_rgba(204,0,0,0.89)]"
            />
          </button>
        )}

        {isLoaded && (
          <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${youtubeUrl}?autoplay=1`}
            title="Teto MV"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default YoutubeModal;
