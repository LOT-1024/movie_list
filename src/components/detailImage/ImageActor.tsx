"use client";

import Image from "next/image";
import { useState } from "react";

const ImageActor = ({profile_path, name}:{profile_path:string,name:string}) => {
  const [loading, setLoading] = useState(true)
  return (
    <>
      <Image
        width={5000}
        height={5000}
        src={profile_path}
        alt={`Actor ${name} Image`}
        onLoad={() => setLoading(false)}
        className={`w-[6.75rem] aspect-[9/14] rounded-xl hover:rotate-3 cursor-pointer ${loading ? "none" : "block"}`}
      />
    </>
  );
};

export default ImageActor;
