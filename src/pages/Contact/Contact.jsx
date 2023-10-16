import {Helmet} from "react-helmet-async";
import {toast} from "sonner";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully");
    e.target.reset();
  };
  return (
    <section>
      <Helmet>
        <title>Contact Us - ReactStarter</title>
      </Helmet>
      <div className="min-h-screen bg-[#181A1B]  p-5 md:p-10 lg:px-20  flex flex-col items-center">
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-10 my-5">
          <div className="w-1/2 hidden lg:block h-[29rem] p-10">
            <h1 className="font-bold capitalize text-3xl text-blue-500 w-fit">
            Let&#39;s Chat!
            </h1>
            <p className="font-bold text-white text-5xl my-10">
            Connect with Our Team
            </p>
            <p className="text-xl text-slate-300 text-opacity-60">
              Whether you have a question, a suggestion, or simply want to say
              hello, we would love to hear from you. Our dedicated team is here
              to assist you and provide the information you need. Feel free to
              reach out to us through the contact form below or directly via
              email or phone. We value your feedback and strive to respond to
              all inquiries promptly. Don&#39;t hesitate to get in touch - we&#39;re
              looking forward to hearing from you!
            </p>
          </div>
          <form
            className="bg-black bg-opacity-50 text-slate-300 p-8 rounded-2xl shadow-xl w-full  lg:w-1/2"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium ">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 p-2 w-full border-2 rounded-2xl input focus:outline-none focus:border-blue-500 border-transparent "
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium ">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 p-2 w-full border-2 rounded-2xl input focus:outline-none focus:border-blue-500 border-transparent "
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium ">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="mt-1 p-2 w-full border-2 rounded-2xl focus:outline-none focus:border-blue-500 border-transparent textarea overflow-hidden resize-none"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-2xl hover:bg-blue-700 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
