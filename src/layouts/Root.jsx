import {Outlet} from "react-router-dom";
import {Toaster} from "sonner";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <>
      <Navbar buttonText={"login"} buttonLink={"/login"} />
      <Outlet />
      <Footer />
      <Toaster richColors position="top-center" duration={2000}/>
    </>
  );
};

export default Root;
