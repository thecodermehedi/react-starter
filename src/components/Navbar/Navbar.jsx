import PropTypes from "prop-types";
import {IoSettingsOutline, IoLogOutOutline} from "react-icons/io5";
import {CgMenuLeft} from "react-icons/cg";
import {Link, NavLink} from "react-router-dom";
import {useContext} from "react";
import userPlaceholder from "../../assets/images/user.png";
import { toast } from "sonner";
import { AuthContext } from "../../context/AuthProvider";
const Navbar = ({buttonText, buttonLink}) => {
  const {user, signOutUser} = useContext(AuthContext);
  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const NavLinks = (
    <>
      <NavLink
        to={"/"}
        className={({isActive, isPending}) =>
          isPending
            ? "pending"
            : isActive
            ? "active  lg:border-b-2 font-semibold px-2 py-1 lg:border-blue-500 text-blue-500"
            : "font-semibold px-2 py-1 border-transparent hover:border-blue-500 hover:text-blue-500 border-b-2"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        className={({isActive, isPending}) =>
          isPending
            ? "pending"
            : isActive
            ? "active  lg:border-b-2 font-semibold px-2 py-1 lg:border-blue-500 text-blue-500"
            : "font-semibold px-2 py-1 border-transparent hover:border-blue-500 hover:text-blue-500 border-b-2"
        }
      >
        About
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({isActive, isPending}) =>
          isPending
            ? "pending"
            : isActive
            ? "active  lg:border-b-2 font-semibold px-2 py-1 lg:border-blue-500 text-blue-500"
            : "font-semibold px-2 py-1 border-transparent hover:border-blue-500 hover:text-blue-500 border-b-2"
        }
      >
        Contact
      </NavLink>
    </>
  );
  return (
    <nav className="w-full bg-[#181A1B] px-2 py-2 md:px-5 md:py-5 lg:px-20">
      <div className="navbar bg-transparent text-slate-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn bg-transparent hover:bg-transparent border-none hover:border-none text-white lg:hidden text-2xl"
            >
              <CgMenuLeft />
            </label>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content z-[1] bg-black text-white rounded-box w-52"
            >
              {NavLinks}
            </ul>
          </div>
          <Link
            to={"/"}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
          >
            REACT STARTER
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-16">{NavLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-sm border-transparent md:btn-md hover:bg-transparent bg-transparent  hover:border-white btn-circle avatar mt-[0.4rem]"
              >
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL || userPlaceholder} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="p-2 shadow menu dropdown-content z-[1] bg-black text-white rounded-box w-40 lg:w-52"
              >
                <p className="text-sm lg:text-base ml-5">
                  <Link className="font-semibold" to={"#"}>
                    {user?.displayName || "Your Name"}
                  </Link>
                </p>
                <li className="pt-3">
                  <Link to={"/settings"}>
                    {" "}
                    <IoSettingsOutline /> Account
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>
                    {" "}
                    <IoLogOutOutline /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to={buttonLink}
              className="btn rounded-3xl px-5 md:px-8 lg:px-10 bg-transparent border-white text-white min-h-0 h-8 md:h-10 lg:h-12 hover:bg-blue-500 hover:text-white hover:border-blue-500"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
};

export default Navbar;