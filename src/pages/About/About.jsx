const About = () => {
  return (
    <div className="min-h-screen lg:h-[40rem] bg-[#181A1B]  p-5 md:p-10 lg:px-20  flex flex-col items-center">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-10 my-5">
        <div className="w-full text-center p-10 ">
          <h1 className="font-bold uppercase text-3xl text-blue-500">
            About us
          </h1>
          <p className="font-bold text-white text-5xl my-10">
            Welcome to React Starter
          </p>
          <p className="text-xl text-slate-300 text-opacity-60">
            Our React Starter Template is the perfect solution for developers
            looking to quickly and easily set up a new React project. This
            template includes all the essential components and features needed
            to get started, including a pre-configured webpack setup, a
            hot-reloading development server, and a variety of pre-built
            components and styles. With our template, you can save time and
            effort by avoiding the hassle of setting up a new project from
            scratch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
