import Image from "next/image";

const Home = () => {
    return (
        <main className="flex-grow">
            <div className="w-full h-screen relative">
                <Image
                    src="https://image.tmdb.org/t/p/original/tbgIhYwQ5IAgNaFU1SBBxxNXCmm.jpg"
                    alt="Movie backdrop"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="bg-black/50 w-full h-screen absolute top-0"></div>
        </main>
    );
};

export default Home;
