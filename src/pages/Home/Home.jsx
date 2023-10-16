const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img
            className="w-full hover:animation-spin hover:rotate-180 transition-all duration-1000 cursor-pointer"
            src="./react.svg"
            alt="react-icon"
          />
          <h1 className="my-5 text-5xl font-bold">React Starter</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
