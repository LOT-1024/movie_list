import Image from "next/image";
import HeaderTitle from "./HeaderTitle";
import headerImage from "@/assets/footer.png";

const Header = () => {
  return (
    <div className="relative flex justify-center aspect-[16/4] items-center">
      <Image src={headerImage} fill alt="Header Background Image" />
      <div className="bg-black absolute h-6 md:h-8 w-full bottom-0 shadow-[0_-5px_20px_15px_rgba(0,0,0,0.9)]"></div>
      <HeaderTitle />
    </div>
  );
};

export default Header;
