"use client";

const ButtonWhite = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      className="rounded-full border-2 border-solid border-white bg-transparent px-[1.563rem] py-[0.75rem]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonWhite;
