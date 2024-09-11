import Link from "next/link";

const ButtonRed = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="hover:buttonRedShadow rounded-full bg-red-600 px-[1.563rem] py-[0.75rem]"
    >
      {children}
    </Link>
  );
};

export default ButtonRed;
