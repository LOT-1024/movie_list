"use client";

import Image from "next/image";
import { useState } from "react";

const ImagePoster = ({ poster_path = 'https://placehold.co/600x400' }: { poster_path: string | undefined }) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Image
        fill
        src={poster_path}
        sizes="100%"
        alt="Movie Poster"
        onLoad={() => setLoading(false)}
        className={`rounded-2xl ${loading ? "none" : "block"}`}
        priority
        unoptimized
      />
    </>
  );
};

export default ImagePoster;
