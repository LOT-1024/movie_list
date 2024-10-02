"use client";

import Image from "next/image";
import { useState } from "react";

const ImageSimilar = ({
  poster_path,
  name,
}: {
  poster_path: string;
  name: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <Image
        fill
        src={poster_path}
        sizes="100%"
        alt={`${name} Poster`}
        className="rounded-2xl"
        onLoad={() => setIsLoading(false)}
        style={{ display: isLoading ? "none" : "block" }}
        priority
      />
    </>
  );
};

export default ImageSimilar;
