import React from "react";
import { Typography, Input } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "@djthoms/pretty-checkbox";

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

const PaymentCardForm = () => {
  const validationSchema = Yup.object().shape({
    name_on_card: Yup.string()
      .min(4)
      .max(25)
      .required("Name on Card is required"),
    card_number: Yup.string()
      .matches(/^\d{16}$/, "Card number must be exactly 16 digits")
      .required("Card number is required"),
    month: Yup.string().required("Month is required"),
    year: Yup.string().required("Year is required"),
    cvv: Yup.string()
      .matches(/^\d{3}$/, "CVV must be exactly 3 digits")
      .required("CVV is required"),
  });

  const formik = useFormik({
    initialValues: {
      name_on_card: "",
      card_number: "",
      month: "",
      year: "",
      cvv: "",
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

  const submitForm = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("Form Data:", values);
  };

  return (
    <form
      noValidate
      onSubmit={formik.handleSubmit}
      className="grid grid-flow-row grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-5"
    >
      <div className="flex flex-col gap-y-5">
        {renderInput("name_on_card", "Name on Card", formik)}
        {renderInput("card_number", "Card Number", formik)}
        <div className="flex gap-x-5">
          <select
            className="bg-transparent border border-blue-gray-200 text-blue-gray-500 text-sm rounded-lg block w-full p-2.5"
            value={formik.values.month}
            onChange={formik.handleChange}
            name="month"
          >
            <option value="">Select Month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          {formik.touched.month && formik.errors.month && (
            <Typography className="text-sm text-red-400">
              {formik.errors.month}
            </Typography>
          )}
          <select
            className="bg-transparent border border-blue-gray-200 text-blue-gray-500 text-sm rounded-lg block w-full p-2.5"
            value={formik.values.year}
            onChange={formik.handleChange}
            name="year"
          >
            <option value="">Select Year</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
            <option value="2031">2031</option>
            <option value="2032">2032</option>
            <option value="2033">2033</option>
            <option value="2034">2034</option>
          </select>
          {formik.touched.year && formik.errors.year && (
            <Typography className="text-sm text-red-400">
              {formik.errors.year}
            </Typography>
          )}
          {renderInput("cvv", "CVV", formik, "number")}
        </div>

        <label htmlFor="">
          <input type="checkbox" name="save card" id="" /> Save card for future
          payments
        </label>
      </div>
    </form>
  );
};

export default PaymentCardForm;
