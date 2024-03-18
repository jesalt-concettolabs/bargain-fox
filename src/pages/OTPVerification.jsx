import { Dialog } from "@material-tailwind/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  otp: Yup.string()
    .required("OTP is required")
    .matches(/^[0-9]{5}$/, "OTP must be 5 digits"),
});

const initialValues = {
  otp: "",
};

const OTPVerification = ({ show, handleVerify }) => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Submitting OTP:", values.otp);
    setSubmitting(false);
    handleVerify();
  };
  return (
    <>
      <Dialog open={show} size={"xs"}>
        <div className="relative flex  flex-col justify-center overflow-hidden">
          <div className="relative px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
            <div className="mx-auto flex w-full max-w-md flex-col space-y-4">
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                <div className="text-[#292D32] text-2xl font-semibold">
                  <p>Verification Code</p>
                </div>
                <div className="flex flex-row font-medium text-[#707070]">
                  <p>
                    A verification code is sent to{" "}
                    <span className="font-semibold">
                      stephenparker@gmail.com
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="flex flex-col gap-2 mt-5">
                        <p className="text-sm font-medium text-[#000000B3]">
                          Verification Code
                        </p>
                        <div className="flex gap-6 relative items-center">
                          {[0, 1, 2, 3, 4].map((index) => (
                            <Field
                              name={`otp${index}`}
                              key={index}
                              validate={(value) => {
                                if (!value) {
                                  return "OTP is required";
                                }
                                if (!/^\d{1}$/.test(value)) {
                                  return "Please enter a single digit";
                                }
                              }}
                            >
                              {({ field, meta }) => (
                                <input
                                  {...field}
                                  className="text-2xl outline-none rounded-md border border-gray-400 w-12 h-12 flex p-2 text-center"
                                />
                              )}
                            </Field>
                          ))}
                        </div>
                        <div className="flex justify-between items-center text-[16px] font-normal">
                          <p className="text-[#292D32]">Expires in 00:30</p>
                          <button className="text-[#ff7900]">
                            Resend Code
                          </button>
                        </div>
                        <button
                          type="submit"
                          className="rounded-[25px] w-full mt-5 bg-[#ff7900] text-white font-semibold py-1"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Verifying..." : "Verify"}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default OTPVerification;
