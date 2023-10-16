import {Link} from "react-router-dom";
import {FaFacebook, FaLinkedin, FaXTwitter, FaInstagram} from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <section className="hidden lg:block">
        <footer className="footer p-10 bg-black bg-opacity-50 text-base-content">
          <aside>
            <Link
              to={"/"}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500"
            >
              REACT STARTER
            </Link>
            <p>TheCoderMehedi&#39;s Starter Template</p>
            <div className="flex justify-between items-center gap-4 text-4xl mt-3 ">
              <FaFacebook className="hover:text-blue-500 cursor-pointer" />
              <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
              <FaInstagram className="hover:text-blue-500 cursor-pointer" />
              <FaXTwitter className="hover:text-blue-500 cursor-pointer" />
            </div>
          </aside>
          <nav>
            <header className="footer-title">Services</header>
            <a className="hover:text-blue-500 cursor-pointer">Branding</a>
            <a className="hover:text-blue-500 cursor-pointer">Design</a>
            <a className="hover:text-blue-500 cursor-pointer">Marketing</a>
            <a className="hover:text-blue-500 cursor-pointer">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="hover:text-blue-500 cursor-pointer">About us</a>
            <a className="hover:text-blue-500 cursor-pointer">Contact</a>
            <a className="hover:text-blue-500 cursor-pointer">Jobs</a>
            <a className="hover:text-blue-500 cursor-pointer">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="hover:text-blue-500 cursor-pointer">Terms of use</a>
            <a className="hover:text-blue-500 cursor-pointer">Privacy policy</a>
            <a className="hover:text-blue-500 cursor-pointer">Cookie policy</a>
          </nav>
          <form onSubmit={(e) => e.preventDefault()}>
            <header className="footer-title">Newsletter</header>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="input focus:outline-none input-bordered w-full pr-16 rounded-2xl"
                />
                <button className="btn bg-blue-500 border-none text-black font-bold hover:bg-blue-600 hover:text-white absolute top-0 right-0 rounded-2xl rounded-l-none">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
        <footer className="footer footer-center p-4 bg-black bg-opacity-80 text-base-content">
          <aside>
            <p>
              Design &amp; Developed by{" "}
              <Link
                to={"https://github.com/thecodermehedi"}
                className="font-bold hover:text-red-500 text-blue-500 hover:underline custom-cursor"
              >
                TheCoderMehedi
              </Link>
            </p>
          </aside>
        </footer>
      </section>
      <footer className="footer footer-center p-10 bg-black bg-opacity-80 text-primary-content lg:hidden">
        <aside>
          <Link
            to={"/"}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500"
          >
            REACT STARTER
          </Link>
          <p>TheCoderMehedi&#39;s Starter Template</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4 text-4xl">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-blue-500 cursor-pointer" />
            <FaXTwitter className="hover:text-blue-500 cursor-pointer" />
          </div>
        </nav>
        <p>
          Design &amp; Developed by{" "}
          <Link
            to={"https://github.com/thecodermehedi"}
            className="font-bold hover:text-red-500 text-blue-500 custom-cursor"
          >
            TheCoderMehedi
          </Link>
        </p>
      </footer>
    </>
  );
};

export default Footer;
