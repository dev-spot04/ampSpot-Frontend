import { ChevronLeft, ChevronRight, Star } from "@mui/icons-material";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../../../assets";
import * as yup from "yup";
import { toast } from "react-toastify";
import useApiMutation from "../../../../hooks/useApiMutation";
import agent from "../../../../services/agent";
import InputField from "../../../../components/forms/InputField";
import { useLocation } from "react-router-dom";

const ChangePassword = () => {
  const { mutate, isLoading, isSuccess, isError, error, data } = useApiMutation(
    agent.Auth.resetPassword,
  );
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setToken(params.get("token"));
  }, [location.search]);

  const initialValues = {
    password: "",
    confirmPassword: "",
    email: "",
  };
  const validationSchema = yup.object({
    password: yup.string().required("Ente New Password").min(6),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .min(6, "Should Have At Least 6 Characters")
      .required("Confirm the new password"),
    email: yup.string().email().required("Enter Your Email"),
  });
  const onSubmitHandler = (values) => {
    if (!token) {
      return toast.error("Token is missing");
    }
    values = { ...values };
    const query = `?resetToken=${token}`;
    mutate(values, query);
  };

  useEffect(() => {
    if (isSuccess && data) {
      // toast.success(data.message);
      navigate("/dashboard");
    } else if (isError) {
      const errorMessage = error?.response?.data?.message || error.message;
      toast.error(errorMessage);
    }
  }, [isSuccess, isError, data, error]);

  return (
    <main className="bg-background min-h-screen grid md:grid-cols-2 grid-cols-1 text-white">
      <section className="flex flex-col pb-10 min-h-screen">
        <div className="w-[90%] md:w-[70%] mx-auto flex flex-col">
          <div className="flex justify-between items-center my-3">
            <p className="text-xl font-bold">AMP Spot</p>
            <select id="lang" name="lang" className="bg-background text-xs">
              <option value="English (UK)">English (UK)</option>
              <option value="English (US)">English (US)</option>
            </select>
          </div>
        </div>
        <div className="h-full flex items-center">
          <div className="flex flex-col gap-3 justify-center w-[70%] mx-auto">
            <h1 className="font-bold text-xl 2xl:text-[30px]">
              Reset Password
            </h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmitHandler}
            >
              {(props) => {
                return (
                  <Form className="flex flex-col md:w-[80%]">
                    <InputField
                      label="Email"
                      type="email"
                      uni="email"
                      placeholder="Email"
                      required={true}
                      className={"placeholder:text-[#B9B9B9]"}
                      {...props}
                    />
                    <InputField
                      label="New Password"
                      type="password"
                      uni="password"
                      placeholder="New Password"
                      required={true}
                      className={"placeholder:text-[#B9B9B9]"}
                      {...props}
                      lengthWarning
                    />
                    <InputField
                      label="Re enter new password"
                      type="password"
                      uni="confirmPassword"
                      placeholder="Type a strong password"
                      required={true}
                      className={"placeholder:text-[#B9B9B9]"}
                      {...props}
                    />
                    <button
                      className="text-center p-2 rounded bg-blue1 my-3 mt-5 2xl:h-[50px]"
                      type="submit"
                    >
                      Reset Password
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </section>
      <section
        className="hidden md:flex min-h-full overflow-hidden items-center"
        style={{
          background: `url(${assets.auth.backgrounds.bg_5})no-repeat center center/cover`,
        }}
      >
        <div className="w-[55%] mx-auto my-8 rounded p-[6%] backdrop-blur-xl flex flex-col gap-3 items-center">
          <img src={assets.auth.Mail} alt="Mail" className="w-[70%] rounded" />
          <p className="text-[24px] font-bold">Log In with QR code</p>
          <p className="text-[20px]">
            Scan with your mobile to log in immediately
          </p>
        </div>
      </section>
    </main>
  );
};

export default ChangePassword;
