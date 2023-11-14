import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { assets } from "../../../../assets";
import InputField from "../../../../components/forms/InputField";
import useApiMutation from "../../../../hooks/useApiMutation";
import { login } from "../../../../redux/userSlice";
import agent from "../../../../services/agent";
import { ALL_LINKS } from "../../../../constants/navigation-routes";

const Login = () => {
  const { mutate, isLoading, isSuccess, isError, error, data } = useApiMutation(
    agent.Auth.login
  );
  const [userType, setUserType] = useState("user");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object({
    email: yup.string().email().required("Enter Your Email"),
    password: yup.string().required("Enter Your Password"),
  });
  const onSubmitHandler = (values) => {
    values = { ...values };
    mutate(values);
  };

  useEffect(() => {
    if (isSuccess && data) {
      // toast.success(data.message);
      dispatch(
        login({
          isAuthenticated: true,
          user: data.user,
          token: data.token,
          id: data.user._id,
          role: data.user.role,
        })
      );
      navigate("/chat/conversations");
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
              Login to your profile
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
                      label={"Email"}
                      type="text"
                      uni="email"
                      placeholder="Enter Your mail"
                      required={true}
                      className={"placeholder:text-[#B9B9B9]"}
                      {...props}
                    />
                    <InputField
                      label={"Password"}
                      type="password"
                      uni="password"
                      placeholder="Type a strong password"
                      required={true}
                      className={"placeholder:text-[#B9B9B9]"}
                      {...props}
                    />
                    <div className="flex justify-between items-center 2xl:text-[16px] text-xs">
                      <div className="flex gap-2 my-3">
                        <Field
                          type="checkbox"
                          id="remember"
                          name="remember"
                          className="rounded-full"
                        />
                        <label htmlFor="remember" className="text-[#787878]">
                          Remember Me
                        </label>
                      </div>
                      <button type="button" onClick={
                        () => {
                          console.log(props.values.email)
                          if(props.values.email){
                            navigate(ALL_LINKS.ForgotPassword.pageLink+'?email='+props.values.email);
                          }
                          else{
                            toast.error("Please enter your email first");
                          }
                        }
                      } className="text-blue-500">Forgot password?</button>
                    </div>
                    <button
                      className="text-center p-2 rounded bg-blue1 my-3 mt-5 2xl:h-[50px]"
                      type="submit"
                    >
                      Login
                    </button>
                    <button
                      className="text-center bg-white p-2 rounded text-black 2xl:h-[50px]"
                      type="button"
                    >
                      Login With Google
                    </button>
                    <p className="text-xs text-[16px] text-center my-2">
                      New here?{" "}
                      <Link to="/register" className="text-blue1">
                        Register now
                      </Link>
                    </p>
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

export default Login;
