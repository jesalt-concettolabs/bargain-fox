import React, { useEffect, useState } from "react";
import placeholderImg from "/assets/user-placeholder.jpg";
import editImg from "/assets/Edit.svg";
import { Typography, Input, CardBody } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userData } from "../api/constant";
import Loader from "../components/Loader/Loader";

const renderInput = (name, label, formik, type = "text") => (
  <>
    <Input
      required
      autoComplete="off"
      label={label}
      name={name}
      onChange={formik.handleChange}
      value={formik.values[name]}
      type={type}
      size="lg"
    />
    {formik.touched[name] && formik.errors[name] && (
      <Typography className="text-sm text-red-400">
        {formik.errors[name]}
      </Typography>
    )}
  </>
);

const ProfilePage = () => {
  const [loading, setLoading] = useState(false);
  const [userDetail, setUserDetail] = useState();

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const userDetailsApi = async () => {
    setLoading(true);
    try {
      const response = await axios.get(userData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 200) {
        setUserDetail(response.data.result);
        setLoading(false);
      }
    } catch (error) {
      console.log("userdetail api error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    userDetailsApi();
  }, []);

  const validationSchema = Yup.object().shape({
    full_name: Yup.string().min(4).max(25).required("Full Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      id: userDetail ? userDetail.id : "",
      full_name: userDetail ? userDetail.name : "",
      phone: userDetail ? userDetail.mobile : "",
      email: userDetail ? userDetail.email : "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await submitForm(values, resetForm);
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  const submitForm = async (values, resetForm) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("new user", values);
    resetForm();
  };

  if (token && loading) {
    return <Loader />;
  }

  if (!token && loading) {
    return navigate("/");
  }

  return (
    userDetail && (
      <main className="container">
        <section className="mx-auto w-[90%] sm:w-[70%] lg:w-[50%] flex flex-col gap-10 sm:gap-6 mt-6">
          <div className="px-2 py-1 flex flex-col justify-center items-center gap-7 w-full">
            <h1 className="text-2xl font-bold text-[#292D32]">Your Profile</h1>
            <div className="flex flex-col gap-5 w-full">
              <div className="flex flex-col justify-center items-center w-full">
                <div className="relative h-24 w-24">
                  <img
                    src={userDetail.avatar_url}
                    alt="user-profile"
                    className="w-full h-full rounded-full"
                  />
                  <div className="absolute -bottom-2 right-2 h-8 w-8 p-0.5 flex justify-center items-center bg-[#FFFFFF] rounded-full">
                    <img src={editImg} alt="img-edit-logo" />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-full">
                <div className="mx-auto w-full p-3 max-w-[28rem] flex flex-col justify-center items-center">
                  <form
                    className="w-full"
                    noValidate
                    onSubmit={formik.handleSubmit}
                  >
                    <div className="flex flex-col gap-4 ">
                      {renderInput("full_name", "Full Name", formik)}
                      {renderInput("phone", "Phone", formik, "tel")}
                      {renderInput("email", "Email", formik, "email")}
                    </div>
                    <button
                      type="submit"
                      className="bg-[#0063FF] mt-4 w-full text-white text-sm font-bold p-2 rounded-[56px]"
                    >
                      Update & Save
                    </button>
                  </form>
                </div>
              </div>
              <div className="flex w-full justify-center items-center gap-x-2">
                <span className="text-[#0063ff] cursor-pointer">
                  Manage Addresses
                </span>
                <span>|</span>
                <span className="cursor-pointer">Delete Account</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  );
};

export default ProfilePage;
