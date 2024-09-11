"use client";
import Image from "next/image";
import { useState } from "react";

const YoutubeModal = ({
  videoId,
  title,
  onClick,
}: {
  videoId: string;
  title: string;
  onClick: () => void;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div
      className={`fixed left-0 top-0 z-[51] flex h-full w-full items-center justify-center bg-black/50`}
      onClick={onClick}
    >
      {!isLoaded && (
        <div
          className="flex h-fit w-fit items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            width={960}
            height={540}
            src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
            alt={`${title} thumbnail`}
            className="h-[15.125rem] max-h-[33.75rem] w-full max-w-[60rem] cursor-pointer md:h-full"
            onClick={() => setIsLoaded(true)}
            priority
          />
          <button
            className="absolute text-[3rem] text-red-600"
            onClick={() => setIsLoaded(true)}
            aria-label="Play video"
          >
            ▶
          </button>
        </div>
      )}
      {isLoaded && (
        <iframe
          className="h-[15.125rem] max-h-[33.75rem] w-full max-w-[60rem] md:h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={`${title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default YoutubeModal;
