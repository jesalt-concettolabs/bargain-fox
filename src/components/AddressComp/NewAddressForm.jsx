import React from "react";
import { Typography, Input } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { storeUserAddress } from "../../api/constant";

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

const NewAddressForm = ({ editAddress, checked, update }) => {
  const storeUserAddressApi = async (values, resetForm) => {
    try {
      const response = await axios.post(storeUserAddress, values, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 200) {
        handleClose();
        update((prev) => !prev);
        resetForm();
      }
    } catch (error) {
      console.log("Store user Address API error: ", error);
    }
  };

  const validationSchema = Yup.object().shape({
    full_name: Yup.string().min(4).max(25).required("Full Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    address2: Yup.string()
      .max(50, "Apartment/suite number is too long")
      .required("Apartment number is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().min(4).max(25).required("City is required"),
    postcode: Yup.number().required("Postcode number is required"),
    country: Yup.string().required("Country is required"),
  });

  const formik = useFormik({
    initialValues: {
      id: editAddress ? editAddress.id : "",
      full_name: editAddress ? editAddress.full_name : "",
      address: editAddress ? editAddress.address : "",
      address2: editAddress ? editAddress.address2 : "",
      state: editAddress ? editAddress.state : "",
      city: editAddress ? editAddress.city : "",
      postcode: editAddress ? editAddress.postcode : "",
      phone: editAddress ? editAddress.mobile : "",
      country: editAddress ? editAddress.country : "India",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (checked != null) {
          await updateForm(values, resetForm);
        } else {
          await submitForm(values, resetForm);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  const submitForm = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    storeUserAddressApi(values);
  };

  const updateForm = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    storeUserAddressApi(values);
  };

  return (
    <form
      noValidate
      onSubmit={formik.handleSubmit}
      className="grid grid-flow-row grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-5"
    >
      <div>
        <select
          className="bg-transparent border border-blue-gray-200 text-blue-gray-500 text-sm rounded-lg block w-full p-2.5"
          value={formik.values.country}
          onChange={formik.handleChange}
          name="country"
        >
          <option value="India">India</option>
          <option value="USA">United States</option>
          <option value="Canada">Canada</option>
          <option value="France">France</option>
        </select>
      </div>
      {renderInput("full_name", "Full Name", formik)}
      {renderInput("address", "Address", formik, "textarea")}
      {renderInput("address2", "Apartment", formik)}
      {renderInput("city", "City", formik)}
      {renderInput("state", "State", formik)}
      {renderInput("postcode", "Postcode", formik, "number")}
      {renderInput("phone", "Phone", formik, "number")}
    </form>
  );
};

export default NewAddressForm;
