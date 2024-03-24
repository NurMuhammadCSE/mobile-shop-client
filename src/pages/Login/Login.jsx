import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    setDisabled(!validateCaptcha(user_captcha_value));
  };

  return (
    <>
      <Helmet>
        <title>Mobile Shop | Login</title>
      </Helmet>
      <div className=" flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
          <div className="px-6 py-4">
            <h2 className="text-3xl font-semibold text-center mb-4">Log In</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <Link
                  className="text-sm text-indigo-600 hover:underline"
                  to="/forgot-password"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="captcha"
                >
                  Captcha
                </label>
                <LoadCanvasTemplate />
                <input
                  onBlur={handleValidateCaptcha}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                  id="captcha"
                  type="text"
                  name="captcha"
                  placeholder="Enter the captcha above"
                />
              </div>
              <button
                disabled={disabled}
                className="w-full px-3 py-4 text-white rounded-md bg-indigo-600 focus:outline-none"
                type="submit"
              >
                Login
              </button>
            </form>
            <p className="text-center mt-4">
              New Here?{" "}
              <Link className="text-indigo-600 hover:underline" to="/signup">
                Create an account
              </Link>
            </p>
          </div>
          <SocialLogin />
        </div>
      </div>
    </>
  );
};

export default Login;
