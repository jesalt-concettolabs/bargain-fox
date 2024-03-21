import React, { useContext, useState } from "react";
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
import closeIcon from "/assets/close.png";
import axios from "axios";
import { registerUser } from "../api/constant";
import { UserContext } from "../context/UserContext";
import { useSelector } from "react-redux";

const SignupForm = ({ show, handleClose }) => {
  const [loading, setLoading] = useState(false);

  const userLoginDetail = useSelector(
    (state) => state.loginDetail.userLoginData
  );
  const isNumber = /^\d+$/.test(userLoginDetail);

  const { setUserData } = useContext(UserContext);

  const handleRegisterSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(registerUser, values);
      const newUser = await response.data.result;
      if (response.status === 200) {
        setUserData(newUser);
        localStorage.setItem("token", newUser.token);
        setTimeout(() => {
          setLoading(false);
          handleClose();
        }, 1000);
      } else {
        console.log("newuser error");
      }
    } catch (error) {
      console.log("User register error: ", error);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(4).max(25).required("Name is required"),
    mobile: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: !isNumber ? userLoginDetail : "",
      mobile: isNumber ? userLoginDetail : "",
    },
    validationSchema: validationSchema,
    onSubmit: handleRegisterSubmit,
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
          <div className={`block`}>
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
                  type={"number"}
                  name="mobile"
                  onChange={formik.handleChange}
                  value={formik.values.mobile}
                  helpertext={formik.errors.mobile ? formik.errors.mobile : ""}
                  size="lg"
                />
                {formik.touched.mobile && formik.errors.mobile && (
                  <Typography className="text-sm text-red-400">
                    {formik.errors.mobile}
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
          <div className="mb-4 text-center text-xs flex justify-center">
            By continuing, you agree to our Terms of Use and Privacy & Cookie
            Policy.
          </div>
        </Card>
      </Dialog>
    </>
  );
};

export default SignupForm;
