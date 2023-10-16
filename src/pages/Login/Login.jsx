import {toast} from "sonner";
import {Helmet} from "react-helmet-async";
import {useContext, useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa6";
import googleIcon from "../../assets/images/google.svg";
import loginImage from "../../assets/images/login.svg";
import {AuthContext} from "./../../context/AuthProvider";
import {Link, useLocation, useNavigate} from "react-router-dom";
const Login = () => {
  const location = useLocation();
  const {signInWithEmail, signInWithGoogle, setLoading} =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    setShowPassword(false);
    signInWithEmail(email, password)
      .then(() => {
        toast.success("Logged in successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(
          error.message === "Firebase: Error (auth/invalid-login-credentials)."
            ? "Incorrect email or password"
            : error.message
        );
        console.log(error);
      });
    setLoading(false);
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Logged in successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error?.message);
        console.log(error);
      });
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href="/icon/login.svg" type="image/x-icon" />
        <title>Login - ReactStarter</title>
      </Helmet>
      <section className="min-h-screen bg-[#181A1B] text-slate-300">
        <div className="container h-full px-6 py-24">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="mb-12 md:mb-0 hidden lg:block md:w-8/12 lg:w-6/12">
              <img
                src={loginImage}
                className="w-full scale-x-[-1]"
                alt="login-image"
              />
            </div>

            <div className="md:w-8/12 lg:ml-6 lg:w-5/12 pb-10">
              <h1 className="text-center text-4xl font-bold text-blue-500 mb-6">
                Welcome back!
              </h1>
              <form onSubmit={handleSignIn} className="flex flex-col gap-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="input bg-blue-500 bg-opacity-10 rounded-2xl border-none focus:outline-none mb-2 text-lg"
                  required
                />
                <div className="flex relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="input bg-blue-500 bg-opacity-10 rounded-2xl border-none focus:outline-none mb-2 text-lg w-full pr-10"
                    required
                  />
                  {showPassword ? (
                    <FaEyeSlash
                      className="absolute right-4 top-4 cursor-pointer text-lg"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <FaEye
                      className="absolute right-4 top-4 cursor-pointer text-lg"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>

                <p className="text-center text-blue-500 ">
                  <Link to="#">Forgot password?</Link>
                </p>
                <button
                  type="submit"
                  className="btn bg-blue-500 hover:bg-blue-600 rounded-2xl border-none transition-all duration-300 cursor-pointer text-white capitalize text-xl"
                >
                  Sign in
                </button>
                <p className="text-center">
                  Don&apos;t have an account?{" "}
                  <span className="text-blue-500 ">
                    <Link to="/signup">Sign up</Link>
                  </span>{" "}
                </p>
              </form>
              <div className="divider">Or</div>
              <button
                onClick={handleGoogleSignIn}
                type="submit"
                className="btn rounded-2xl transition-all w-full text-white text-xl normal-case hover:bg-black border-none bg-black bg-opacity-50"
              >
                <img src={googleIcon} alt="G" />
                <span>Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
