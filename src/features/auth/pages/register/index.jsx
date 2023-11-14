import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Star,
  YouTube,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../../../assets";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import agent from "../../../../services/agent";
import { toast } from "react-toastify";
import useApiMutation from "../../../../hooks/useApiMutation";
import { login } from "../../../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../../components/forms/InputField";

const LoginPage1 = () => {
  const navigate = useNavigate();
  const { mutate, isLoading, isSuccess, isError, error, data } = useApiMutation(
    agent.Auth.register
  );
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const [userType, setUserType] = useState("dj");
  const initialValues = {
    firstName: "",
    email: "",
    password: "",
    tcAgree: false,
  };
  const validationSchema = yup.object({
    name: yup.string().required("Enter Your Name"),
    email: yup.string().required("Enter Your Email"),
    password: yup.string().required("Enter Your Password"),
    tcAgree: yup.boolean().isTrue(),
  });
  const onSubmitHandler = async (values) => {
    mutate({
      ...values,
      role: userType,
    });
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
      navigate("/plug");
    } else if (isError) {
      const errorMessage = error?.response?.data?.message || error.message;
      toast.error(errorMessage);
    }
  }, [isSuccess, isError, data, error]);

  return (
    <main className="bg-background min-h-screen grid md:grid-cols-2 grid-cols-1 text-white">
      {/* {isLoading && <h1 className="text-7xl text-white">Loading</h1>} */}
      <section className="flex flex-col gap-10 pb-10 min-h-screen">
        <div className="w-[90%] md:w-[70%] mx-auto">
          <div className="flex justify-between items-center my-3">
            <p className="text-xl font-bold 2xl:text-3xl">AMP Spot</p>
            <select
              id="lang"
              name="lang"
              className="bg-background text-xs 2xl:text-xl"
            >
              <option value="English (UK)">English (UK)</option>
              <option value="English (US)">English (US)</option>
            </select>
          </div>
          <div className="flex flex-col gap-3 lg:max-w-[85%] justify-center w-full mt-8">
            <h1 className="font-bold text-xl 2xl:text-[30px] my-[5%] 2xl:my-[10%]">
              Let's get started
            </h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmitHandler}
            >
              {(props) => {
                return (
                  <Form className="flex flex-col text-[#C8D6EF] 2xl:gap-4 gap-2">
                    <div className="flex gap-2 bg-blue-50/10 p-1 w-[200px] 2xl:w-[250px] 2xl:h-[60px] rounded 2xl:my-7 my-2">
                      <button
                        type="button"
                        className={`${
                          userType === "user" ? "bg-blue1" : ""
                        } p-1 w-1/2 rounded`}
                        onClick={() => setUserType("user")}
                      >
                        User
                      </button>
                      <button
                        type="button"
                        className={`${
                          userType === "dj" ? "bg-blue1" : ""
                        } p-1 w-1/2 rounded`}
                        onClick={() => setUserType("dj")}
                      >
                        DJ
                      </button>
                    </div>
                    <InputField
                      label={"Name"}
                      type="text"
                      uni="name"
                      placeholder="Enter Your Name"
                      required={true}
                      {...props}
                    />
                    <InputField
                      label={"Email"}
                      type="text"
                      uni="email"
                      placeholder="Enter Your Email"
                      required={true}
                      {...props}
                    />
                    <InputField
                      label={"Password"}
                      type="password"
                      uni="password"
                      placeholder="Enter Your Password"
                      required={true}
                      {...props}
                      lengthWarning={true}
                    />
                    <div className="my-2 mb-8">
                      <div className="flex gap-2 text-xs 2xl:text-[16px]">
                        <Field
                          type="checkbox"
                          className="rounded-full"
                          id="tc-agree"
                          name="tcAgree"
                        />
                        <label htmlFor="tc-agree">
                          I agree to all of{" "}
                          <a href="/" className="text-blue1 hover:underline">
                            terms & conditions
                          </a>
                        </label>
                      </div>
                      {props.errors.tcAgree && (
                        <p className="bg-black/40 rounded text-center w-32 text-xs 2xl:text-[16px] p-1 my-1 relative left-10 text-red-400">
                          agree to continue
                        </p>
                      )}
                    </div>
                    <button
                      className="text-center bg-blue1 p-2 rounded hover:bg-blue1/95 2xl:h-[50px]"
                      type={"submit"}
                    >
                      Register Now
                    </button>
                    {/* <Link
                      to="/plug"
                      className="text-center bg-[#25437F] p-2 rounded my-3"
                    >
                      Sign up with Google
                    </Link> */}
                  </Form>
                );
              }}
            </Formik>
            <p className="text-xs text-center my-2 text-[#787878]">
              Already have an account?{" "}
              <Link to="/login" className="text-blue1 hover:underline">
                Log in
              </Link>
            </p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-blue1 text-sm hover:underline">Need Help?</p>
              <div className="flex gap-2">
                <Instagram sx={{ color: "#2C549D" }} />
                <Facebook sx={{ color: "#2C549D" }} />
                <YouTube sx={{ color: "#2C549D" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="hidden md:flex min-h-full overflow-hidden"
        style={{
          background: `url(${assets.auth.backgrounds.bg_6})no-repeat center center/cover`,
        }}
      >
        <div className="w-[79%] self-end mx-auto my-8 rounded p-[7%] backdrop-blur-xl flex flex-col gap-10 2xl:gap-14">
          <p className="text-[20px] 2xl:text-[30px]">
            "Music has been used for therapeutic purposes in a variety of
            settings"
          </p>
          <div className="flex justify-between items-center">
            <div className="2xl:gap-3 flex flex-col">
              <p className="font-bold text-sm 2xl:text-[24px]">Adrin Laue</p>
              <p className="text-sm mt-1 2xl:text-[20px]">Founder Member</p>
            </div>
            <div>
              <div className="relative top-[-3px]">
                <Star sx={{ fontSize: "1.4rem" }} />
                <Star sx={{ fontSize: "1.4rem" }} />
                <Star sx={{ fontSize: "1.4rem" }} />
                <Star sx={{ fontSize: "1.4rem" }} />
              </div>
              <div className="flex justify-between items-center my-1">
                <ChevronLeft className="border rounded-full scale-75 2xl:scale-100" />
                <ChevronRight className="border rounded-full scale-75 2xl:scale-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage1;
