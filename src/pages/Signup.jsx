import React, { useState } from "react";
import {
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import googleLogo from "/assets/google.png";
import closeIcon from "/assets/close.png";

const Signup = ({ show, handleClose }) => {
  const [onLogin, setOnlogin] = useState(false);

  const handleLogin = () => {
    setOnlogin((prev) => !prev);
  };

  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(4).max(25).required("Name is required"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const loginSchema = Yup.object().shape({
    name: Yup.string()
      .required("Please enter your email or phone number")
      .matches(
        /^(?:\d{10})$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email or phone number"
      ),
  });

  const loginFormik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      console.log(values);
      setTimeout(() => {
        setLoading(false);
        resetForm();
      }, 1000 * 2);
    },
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        resetForm();
      }, 1000 * 2);
    },
  });

  return (
    <>
      <Dialog
        size="xs"
        open={show}
        handler={handleClose}
        className="bg-transparent shadow-none w-full max-h-full  overflow-y-auto"
      >
        <Card className="mx-auto w-full p-3 max-w-[28rem] ">
          <div
            className="cursor-pointer right-5 top-4 absolute"
            onClick={handleClose}
          >
            <img src={closeIcon} alt="closeicon" />
          </div>
          <div className={`${onLogin ? "block" : "hidden"}`}>
            <form noValidate onSubmit={formik.handleSubmit}>
              <CardBody className="flex flex-col gap-4">
                <Typography
                  variant="h5"
                  className="text-center text-sm sm:text-2xl text-[#292D32]"
                >
                  Looks like you are new here
                </Typography>
                <Typography
                  className="font-normal text-[12px] sm:text-sm text-center"
                  variant="paragraph"
                  color="gray"
                >
                  Please fill your information below.
                </Typography>
                <Typography className="-mb-2 text-sm sm:text-lg" variant="h6">
                  Name
                </Typography>
                <Input
                  required
                  autoComplete="off"
                  label="Name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  type={"text"}
                  helpertext={formik.errors.name ? formik.errors.name : ""}
                  size="lg"
                />

                {formik.touched.name && formik.errors.name && (
                  <Typography className="text-sm text-red-400">
                    {formik.errors.name}
                  </Typography>
                )}
                <Typography className="-mb-2 text-sm sm:text-lg" variant="h6">
                  Phone Number
                </Typography>
                <Input
                  required
                  autoComplete="off"
                  label="Number"
                  type={"text"}
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  helpertext={
                    formik.errors.phoneNumber ? formik.errors.phoneNumber : ""
                  }
                  size="lg"
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                  <Typography className="text-sm text-red-400">
                    {formik.errors.phoneNumber}
                  </Typography>
                )}
                <Typography className="-mb-2 text-sm sm:text-lg" variant="h6">
                  Your Email
                </Typography>
                <Input
                  required
                  autoComplete="off"
                  label="Email"
                  type={"email"}
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  helpertext={formik.errors.email ? formik.errors.email : ""}
                  size="lg"
                />
                {formik.touched.email && formik.errors.email && (
                  <Typography className="text-sm text-red-400">
                    {formik.errors.email}
                  </Typography>
                )}
              </CardBody>
              <CardFooter className="pt-0">
                <button
                  type={"submit"}
                  className="bg-[#FF7900] w-full text-white text-sm font-bold p-2 rounded-[56px]"
                >
                  {loading ? "Loading..." : "Register"}
                </button>
              </CardFooter>
            </form>
          </div>
          <div className={`${onLogin ? "hidden" : "block"}`}>
            <form noValidate onSubmit={loginFormik.handleSubmit}>
              <CardBody className="flex flex-col gap-4">
                <Typography
                  variant="h4"
                  className="text-center text-sm sm:text-2xl text-[#292D32]"
                >
                  Sign In / Register
                </Typography>
                <Typography
                  className="mb-3 font-normal text-[12px] sm:text-sm text-center"
                  variant="paragraph"
                  color="gray"
                >
                  Please enter your phone number or email below
                </Typography>
                <Typography className="-mb-2 text-sm sm:text-lg" variant="h6">
                  Enter phone number or email
                </Typography>
                <Input
                  required
                  autoComplete="off"
                  label="Email / Number"
                  name="name"
                  onChange={loginFormik.handleChange}
                  value={loginFormik.values.name}
                  type={"text"}
                  size="lg"
                />

                {loginFormik.touched.name && loginFormik.errors.name && (
                  <Typography className="text-sm" color="red">
                    {loginFormik.errors.name}
                  </Typography>
                )}
              </CardBody>
              <CardFooter className="pt-0">
                <button
                  type={"submit"}
                  className="bg-[#FF7900] w-full text-white text-sm font-bold p-2 rounded-[56px]"
                >
                  {loginFormik.isSubmitting ? "Loading..." : "Continue"}
                </button>
                <Typography
                  className="p-2 m-2 text-center text-sm text-[#292D32] font-normal"
                  variant="h6"
                >
                  or Continue with
                </Typography>
                <div className="md:flex justify-evenly">
                  <div className="flex items-center justify-center mb-2 md:mb-0">
                    <button className="px-4 py-2 w-full md:w-[150px] border justify-center items-center rounded-3xl flex gap-2 border-[#D8D8D8] border-solid text-slate-700 hover:border-slate-800 hover:shadow transition duration-150">
                      <img
                        className="w-6 h-6"
                        src={googleLogo}
                        loading="lazy"
                        alt="google logo"
                      />
                      <span>Google</span>
                    </button>
                  </div>
                  <div className="flex items-center justify-center">
                    <button className="px-4 py-2 w-full md:w-[150px] border justify-center items-center rounded-3xl flex gap-2 border-[#D8D8D8] border-solid text-slate-700 hover:border-slate-800 hover:shadow transition duration-150">
                      <svg
                        className="mr-2 -ml-1 w-6 h-6 text-black"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="apple"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path
                          fill="currentColor"
                          d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                        ></path>
                      </svg>

                      <span>Apple</span>
                    </button>
                  </div>
                </div>
              </CardFooter>
            </form>
          </div>
          <div className="flex justify-center items-center mb-4">
            <p className="text-sm md:text-[16px]">
              {onLogin ? "Already " : "Don't  "}have an account?
              <span
                className="ml-1 font-bold cursor-pointer text-center  "
                onClick={handleLogin}
              >
                {onLogin ? "Sign in" : "Sign up"}
              </span>
            </p>
          </div>
          <div className="mb-4 text-center text-xs flex justify-center">
            By continuing, you agree to our Terms of Use and Privacy & Cookie
            Policy.
          </div>
        </Card>
      </Dialog>
    </>
  );
};

export default Signup;
