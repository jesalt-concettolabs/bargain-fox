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
import iosLogo from "/assets/iOS.png";

const Signup = () => {
  const [open, setOpen] = useState(false);
  const [onLogin, setOnlogin] = useState(false);

  const handleLogin = () => {
    setOnlogin((prev) => !prev);
  };
  const handleOpen = () => setOpen((cur) => !cur);

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

  const [loading, setLoading] = useState(false);

  const validateSchema = Yup.object().shape({
    name: Yup.string().min(4).max(25).required("This field is required"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("This field is required"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10)
      .max(10),
  });

  const validateLoginSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"), // Assuming 'name' is the correct field
  });

  const loginFormik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: validateLoginSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setLoading(true);
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
    validationSchema: validateSchema,
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
      <button
        onClick={handleOpen}
        className="bg-[#FF7900] text-white text-sm font-bold p-2 rounded-[56px]"
      >
        Login/Register
      </button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full p-3 max-w-[28rem]">
          <div className={`${onLogin ? "hidden" : "block"}`}>
            <form onSubmit={formik.handleSubmit}>
              <CardBody className="flex flex-col gap-4">
                <Typography
                  variant="h4"
                  className="text-center text-2xl text-[#292D32]"
                >
                  Looks like you are new here
                </Typography>
                <Typography
                  className="mb-3 font-normal text-center"
                  variant="paragraph"
                  color="gray"
                >
                  Please fill your information below.
                </Typography>
                <Typography className="-mb-2" variant="h6">
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
                  <Typography className="text-sm" color="red">
                    {formik.errors.name}
                  </Typography>
                )}
                <Typography className="-mb-2" variant="h6">
                  Phone Number
                </Typography>
                <Input
                  required
                  autoComplete="off"
                  label="Number"
                  type={"number"}
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  helpertext={
                    formik.errors.phoneNumber ? formik.errors.phoneNumber : ""
                  }
                  size="lg"
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                  <Typography className="text-sm" color="red">
                    {formik.errors.phoneNumber}
                  </Typography>
                )}
                <Typography className="-mb-2" variant="h6">
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
                  <Typography className="text-sm" color="red">
                    {formik.errors.email}
                  </Typography>
                )}
              </CardBody>
              <CardFooter className="pt-0">
                <button
                  disabled={loading}
                  type={"submit"}
                  className="bg-[#FF7900] w-full text-white text-sm font-bold p-2 rounded-[56px]"
                  // onClick={handleOpen}
                >
                  {loading ? "Loading..." : "Register"}
                </button>
              </CardFooter>
            </form>
          </div>
          <div className={`${onLogin ? "block" : "hidden"}`}>
            <form onSubmit={loginFormik.handleSubmit}>
              <CardBody className="flex flex-col gap-4">
                <Typography
                  variant="h4"
                  className="text-center text-2xl text-[#292D32]"
                >
                  Sign In / Register
                </Typography>
                <Typography
                  className="mb-3 font-normal text-center"
                  variant="paragraph"
                  color="gray"
                >
                  Please enter your phone number or email below
                </Typography>
                <Typography className="-mb-2" variant="h6">
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
                  helpertext={
                    loginFormik.errors.name ? loginFormik.errors.name : ""
                  }
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
                  disabled={loading}
                  type={"submit"}
                  className="bg-[#FF7900] w-full text-white text-sm font-bold p-2 rounded-[56px]"
                  // onClick={handleOpen}
                >
                  {loading ? "Loading..." : "Continue"}
                </button>
                <Typography
                  className="p-2 mt-2 text-center text-sm text-[#292D32] font-normal"
                  variant="h6"
                >
                  or Continue with
                </Typography>
                <div className="flex justify-evenly">
                  <div class="flex items-center justify-center dark:bg-gray-800">
                    <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                      <img
                        class="w-6 h-6"
                        src={googleLogo}
                        loading="lazy"
                        alt="google logo"
                      />
                      <span>Google</span>
                    </button>
                  </div>
                  <div class="flex items-center justify-center dark:bg-gray-800">
                    <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                      <svg
                        class="mr-2 -ml-1 w-6 h-6 text-black"
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

          <Typography variant="small" className="mt-1 mb-4 flex justify-center">
            Already have an account?
            <Typography
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold cursor-pointer"
              onClick={handleLogin}
            >
              {onLogin ? "Sign up" : "Sign in"}
            </Typography>
          </Typography>
          <Typography
            variant="small"
            className="mb-4 text-center text-xs flex justify-center"
          >
            By continuing, you agree to our Terms of Use and Privacy & Cookie
            Policy.
          </Typography>
        </Card>
      </Dialog>
    </>
  );
};

export default Signup;
