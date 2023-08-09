"use client";

import { logo } from "@/assets";
import Loading from "@/components/Loading";
import { useCreateRegisterMutation } from "@/redux/auth/authApi";
import { setCredentials } from "@/redux/auth/authSlice";
import { registerUserSchema } from "@/types";
import { ErrorMessage, Field, Form, Formik, FormikValues } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

type Props = {};

export default function RegisterPage({}: Props) {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const router = useRouter();

  const [createRegister, { data, error, isLoading }] =
    useCreateRegisterMutation();

  const handleSubmit = (
    values: FormikValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    const object = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    try {
      dispatch<any>(createRegister(object));
    } catch (err) {}
    resetForm();
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    toast.error("Something Wrong!");
  }
  if (data) {
    dispatch(setCredentials({ ...data }));
    router.push("/inbox");
    toast.success("Register Success!");
  }

  return (
    <>
      <div className="h-[100vh] bg-gradient-to-bl from-emerald-50 via-red-50 to-orange-50 flex justify-center items-center">
        <div className="bg-gradient-to-bl from-lime-50/70 overflow-hidden via-sky-50/70 bg-opacity-20 to-cyan-50/70 shadow-sm rounded-md px-6 md:px-12 lg:px-20 m-4 py-6  w-fit lg:w-1/2 2xl:w-[30%]    border">
          <div className="text-center mb-12 flex justify-center items-center">
            <Image src={logo} alt="logo" />
          </div>
          <div className=" flex justify-between items-center ">
            <div className=" w-full ">
              <div>
                <h5 className="text-xl font-medium">Welcome Back!</h5>
                <p className="text-xs  leading-5 my-2">
                  Enter your email address and password to Register your account
                  and access admin panel.
                </p>
              </div>

              {/*  */}
              <Formik
                initialValues={initialValues}
                validationSchema={registerUserSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  {/* Full Name */}
                  <div className="flex flex-col mb-2">
                    <label htmlFor="name">Full Name </label>
                    <Field
                      className="border outline-none px-1 text-sm py-2 rounded"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Jon Do"
                    />
                    <ErrorMessage
                      className="text-red-500 text-xs"
                      name="name"
                      component="div"
                    />
                  </div>

                  {/* Email address */}
                  <div className="flex flex-col mb-2">
                    <label htmlFor="email">Email Address</label>
                    <Field
                      className="border outline-none px-1 text-sm py-2 rounded"
                      type="text"
                      id="email"
                      name="email"
                      placeholder="example@mail.com"
                    />
                    <ErrorMessage
                      className="text-red-500 text-xs"
                      name="email"
                      component="div"
                    />
                  </div>
                  {/* Password */}
                  <div className="flex flex-col mb-2">
                    <label htmlFor="password">Password</label>
                    <Field
                      className="border outline-none px-1 text-sm py-2 rounded"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="password"
                    />
                    <ErrorMessage
                      className="text-red-500 text-xs"
                      name="password"
                      component="div"
                    />
                  </div>
                  {/*  confirm  Password */}
                  <div className="flex flex-col mb-2">
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <Field
                      className="border outline-none px-1 text-sm py-2 rounded"
                      type="password"
                      id="confirm_password"
                      name="confirm_password"
                      placeholder="password"
                    />
                    <ErrorMessage
                      className="text-red-500 text-xs"
                      name="confirm_password"
                      component="div"
                    />
                  </div>

                  <button
                    className="bg-blue-500 w-full py-1 rounded text-white my-4"
                    type="submit"
                  >
                    Register
                  </button>
                </Form>
              </Formik>
            </div>
          </div>

          {/* <p className="text-center  text-xs ">Or Login with</p> */}
          {/* <div className="flex  justify-center items-center space-x-4 mt-6">
            <button className="bg-white border shadow-sm text-gray-600 text-xs duration-300 ease-linear px-4 py-[5px] rounded hover:bg-gray-100">
              Google
            </button>
            <button className="bg-white border shadow-sm text-gray-600 text-xs duration-300 ease-linear px-4 py-[5px] rounded hover:bg-gray-100">
              Facebook
            </button>
            <button className="bg-white border shadow-sm text-gray-600 text-xs duration-300 ease-linear px-4 py-[5px] rounded hover:bg-gray-100">
              Github
            </button>
          </div> */}
          <div className=" text-xs flex justify-center items-center mt-12">
            Do not have an account?{" "}
            <Link
              className="pl-2 text-blue-500 font-semibold underline"
              href={"/"}
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
