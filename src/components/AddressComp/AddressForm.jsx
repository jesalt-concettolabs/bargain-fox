import React, { useState } from "react";
import {
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import closeIcon from "/assets/close.png";

const AddressForm = ({ show, handleClose }) => {
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(4).max(25).required("Full Name is required"),
    phoneNumber: Yup.number().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    apartment: Yup.string()
      .max(50, "Apartment/suite number is too long")
      .nullable(),
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
    onSubmit: (values, { resetForm }) => {
      console.log("User Address Detail: ", values);
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
        size="lg"
        open={show}
        handler={handleClose}
        className="bg-transparent shadow-none max-h-full w-full  overflow-y-auto"
      >
        <Card className="mx-auto w-full p-3 max-w-[28rem] ">
          <div
            className="cursor-pointer right-5 top-4 absolute"
            onClick={handleClose}
          >
            <img src={closeIcon} alt="closeicon" />
          </div>
          <div>
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
                <Input
                  required
                  autoComplete="off"
                  label="Full Name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  type={"text"}
                  size="lg"
                />
                {formik.touched.name && formik.errors.name && (
                  <Typography className="text-sm text-red-400">
                    {formik.errors.name}
                  </Typography>
                )}

                <Textarea
                  required
                  autoComplete="off"
                  label="Address"
                  name="address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  helpertext={
                    formik.errors.address ? formik.errors.address : ""
                  }
                  size="lg"
                />
                {formik.touched.address && formik.errors.address && (
                  <Typography className="text-sm text-red-400">
                    {formik.errors.address}
                  </Typography>
                )}

                <Input
                  required
                  autoComplete="off"
                  label="Apartment,Suite,etc."
                  name="apartments"
                  onChange={formik.handleChange}
                  value={formik.values.apartment}
                  type={"text"}
                  size="lg"
                />
                {formik.touched.apartment && formik.errors.apartment && (
                  <Typography className="text-sm text-red-400">
                    {formik.errors.apartment}
                  </Typography>
                )}

                <Input
                  required
                  autoComplete="off"
                  label="City"
                  name="city"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  type={"text"}
                  size="md"
                />
                {formik.touched.city && formik.errors.city && (
                  <Typography className="text-sm text-red-400">
                    {formik.errors.city}
                  </Typography>
                )}

                <Input
                  required
                  autoComplete="off"
                  label="Postcode"
                  name="postcode"
                  onChange={formik.handleChange}
                  value={formik.values.postcode}
                  type={"text"}
                  size="lg"
                />
                {formik.touched.postcode && formik.errors.postcode && (
                  <Typography className="text-sm text-red-400">
                    {formik.errors.postcode}
                  </Typography>
                )}

                <Input
                  required
                  autoComplete="off"
                  label="Phone"
                  type={"text"}
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  size="lg"
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                  <Typography className="text-sm text-red-400">
                    {formik.errors.phoneNumber}
                  </Typography>
                )}
              </CardBody>
              <CardFooter className="pt-0">
                <button
                  type={"submit"}
                  className="bg-[#FF7900] w-full text-white text-sm font-bold p-2 rounded-[56px]"
                >
                  {loading ? "Loading..." : "Save Address"}
                </button>
              </CardFooter>
            </form>
          </div>
        </Card>
      </Dialog>
    </>
  );
};

export default AddressForm;
