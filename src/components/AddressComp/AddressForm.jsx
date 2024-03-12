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
import closeIcon from "/assets/close.png";

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

const AddressForm = ({ show, handleClose }) => {
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(4).max(25).required("Full Name is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    apartment: Yup.string()
      .max(50, "Apartment/suite number is too long")
      .required("Apartment number is required"),
    city: Yup.string().min(4).max(25).required("City is required"),
    postcode: Yup.number().required("Postcode number is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      apartment: "",
      city: "",
      postcode: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        await submitForm(values, resetForm);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    },
  });

  const submitForm = async (values, resetForm) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("User Address: ", values);
    resetForm();
  };

  return (
    <Dialog
      size="lg"
      open={show}
      handler={handleClose}
      className="bg-transparent shadow-none max-h-full w-full overflow-y-auto"
    >
      <Card className="mx-auto w-full p-3 max-w-[28rem] ">
        <div
          className="cursor-pointer right-5 top-4 absolute"
          onClick={handleClose}
        >
          <img src={closeIcon} alt="closeicon" />
        </div>
        <form noValidate onSubmit={formik.handleSubmit}>
          <CardBody className="flex flex-col gap-4">
            <Typography
              variant="h5"
              className="text-center text-sm sm:text-2xl text-[#292D32]"
            >
              Add Delivery Address
            </Typography>
            <div>
              <select className="bg-transparent border border-blue-gray-200 text-blue-gray-500 text-sm rounded-lg block w-full p-2.5">
                <option selected>Choose a country</option>
                <option value="IN">India</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
              </select>
            </div>
            {renderInput("name", "Full Name", formik)}
            {renderInput("address", "Address", formik, "textarea")}
            {renderInput("apartment", "Apartment", formik)}
            {renderInput("city", "City", formik)}
            {renderInput("postcode", "Postcode", formik, "number")}
            {renderInput("phoneNumber", "Phone", formik, "number")}
          </CardBody>
          <CardFooter className="pt-0">
            <button
              type="submit"
              className="bg-[#FF7900] w-full text-white text-sm font-bold p-2 rounded-[56px]"
            >
              {loading ? "Loading..." : "Save Address"}
            </button>
          </CardFooter>
        </form>
      </Card>
    </Dialog>
  );
};

export default AddressForm;
