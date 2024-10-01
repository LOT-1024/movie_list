const SkeletonItem = () => (
  <div className="w-fit flex flex-col justify-center items-center animate-pulse">
    <div className="w-[9rem] aspect-[9/14] md:w-[12.5rem] lg:w-[13.5rem] rounded-2xl bg-gray-300"></div>
    <div className="w-3/4 h-4 bg-gray-300 rounded mt-2"></div>
  </div>
);

export default SkeletonItem