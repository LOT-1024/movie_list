    import { Play } from "lucide-react";
    import Image from "next/image";
    import { useState } from "react";

    const YoutubeModal = ({ setFunction }: { setFunction: () => void }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <div
        className="fixed z-[2] bg-black/50 w-screen h-screen top-0 scroll flex justify-center items-center fade-in-custom"
        onClick={setFunction}
        >
        <div
            className="bg-white/70 w-4/5 h-52 max-w-[93.75rem] sm:h-[20rem] md:h-[35rem] lg:h-[50rem] flex justify-center items-center"
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
                src="https://img.youtube.com/vi/1xEfMnXyGkA/0.jpg"
                alt="Teto MV Thumbnail"
                className="w-full h-full"
                priority
                />
                <Play
                fill="red"
                className="text-red-600 w-14 h-14 absolute border-2 border-red-600"
                />
            </button>
            )}

            {isLoaded && (
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/1xEfMnXyGkA?autoplay=1"
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
