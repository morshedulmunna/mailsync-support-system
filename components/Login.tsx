import { Lock, Mail } from "lucide-react";
import Link from "next/link";

type Props = {};

export default function Login({}: Props) {
  return (
    <div className="bg-gradient-to-bl from-lime-50/70 overflow-hidden via-sky-50/70 bg-opacity-20 to-cyan-50/70 shadow-sm rounded-md px-24 m-4 py-6   w-fit    border">
      <div className="text-center mb-12">Logo Here</div>
      <div className=" flex justify-between items-center ">
        <div className=" w-full ">
          <div>
            <h5 className="text-base font-medium">Welcome Back!</h5>
            <p className="text-xs leading-5 my-2">
              Enter your email address and password to access admin panel.
            </p>
          </div>
          <form className="text-gray-700" action="">
            {/* Email Filed */}
            <div className="mt-6">
              <label className="text-xs font-medium mb-1 block" htmlFor="email">
                Email Address
              </label>
              <div className="flex">
                <div className="py-[7px] px-4 bg-white border rounded-l">
                  <Mail size={18} color="#9b9b9b" />
                </div>
                <input
                  type="text"
                  id="email"
                  autoComplete="off"
                  autoCorrect="off"
                  placeholder="example@gmail.com"
                  className="border w-full placeholder:text-xs px-2 text-xs py-[7px] rounded-r outline-none"
                />
              </div>
            </div>

            {/* password */}
            <div className="mt-4">
              <label
                className="text-xs font-medium flex justify-between mb-1 "
                htmlFor="password"
              >
                <span> Password</span>
                <span className="font-normal underline hover:text-blue-500 cursor-pointer decoration-dashed">
                  Forgot your password?
                </span>
              </label>
              <div className="flex">
                <div className="py-[7px] px-4 bg-white border rounded-l">
                  <Lock size={18} color="#9b9b9b" />
                </div>
                <input
                  autoComplete="off"
                  autoCorrect="off"
                  type="password"
                  id="password"
                  placeholder="password"
                  className="border w-full placeholder:text-xs px-2 text-xs py-[7px] rounded-r outline-none"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="text-xs flex  mt-4 space-x-2 ">
              <input type="checkbox" id="remember" className="bg-blue-500" />
              <label htmlFor="remember">Remember me</label>
            </div>

            {/* submit button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded  text-sm mt-6"
            >
              Log In
            </button>
          </form>
        </div>
      </div>

      <p className="text-center mt-4 md:mt-12 text-xs ">Or Login with</p>
      <div className="flex  justify-center items-center space-x-4 mt-6">
        <button className="bg-white border shadow-sm text-gray-600 text-xs duration-300 ease-linear px-4 py-[5px] rounded hover:bg-gray-100">
          Google
        </button>
        <button className="bg-white border shadow-sm text-gray-600 text-xs duration-300 ease-linear px-4 py-[5px] rounded hover:bg-gray-100">
          Facebook
        </button>
        <button className="bg-white border shadow-sm text-gray-600 text-xs duration-300 ease-linear px-4 py-[5px] rounded hover:bg-gray-100">
          Github
        </button>
      </div>
      <div className=" text-xs flex justify-center items-center mt-12">
        Don't have an account?{" "}
        <Link
          className="pl-2 text-blue-500 font-semibold underline"
          href={"/register"}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
