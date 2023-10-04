const Homepage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[38.9rem] bg-gray-900 text-gray-300">
      <img
        className="w-56 hover:animation-spin hover:rotate-180 transition-all duration-1000 cursor-pointer"
        src="./react.svg"
        alt="react-icon"
      />
      <h1 className="my-5 text-5xl font-bold">React Starter</h1>
    </div>
  );
};

export default Homepage;
