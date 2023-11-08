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
import { toast } from 'react-toastify'
import useApiMutation from "../../../../hooks/useApiMutation";
import { login } from "../../../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
const LoginPage1 = () => {
  const navigate = useNavigate()
  const { mutate, isLoading, isSuccess, isError, error, data } = useApiMutation(agent.Auth.register);
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector(state => state.user)
  const [userType, setUserType] = useState("user");
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
      role: userType
    });
  };
  useEffect(() => {
    if (isSuccess && data) {
      // toast.success(data.message);
      dispatch(login({
        isAuthenticated: true,
        user: data.user,
        token: data.token,
        id: data.user._id,
        role: data.user.role
      }))
      navigate('/page-2')
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
          <div className="flex flex-col gap-3 max-w-lg justify-center w-full mt-8">
            <h1 className="font-bold text-xl 2xl:text-3xl my-[5%] 2xl:my-[10%]">
              Let's get started
            </h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmitHandler}
            >
              {({ errors, touched }) => {
                return (
                  <Form className="flex flex-col">
                    <div className="flex gap-2 bg-blue-50/10 p-1 w-fit rounded">
                      <button
                        type="button"
                        className={`${userType === "user" ? "bg-blue1" : ""
                          } p-1 w-20 rounded`}
                        onClick={() => setUserType("user")}
                      >
                        User
                      </button>
                      <button
                        type="button"
                        className={`${userType === "dj" ? "bg-blue1" : ""
                          } p-1 w-20 rounded`}
                        onClick={() => setUserType("dj")}
                      >
                        DJ
                      </button>
                    </div>
                    <label
                      htmlFor="name"
                      className="text-xs 2xl:text-[16px] my-3 font-bold"
                    >
                      Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter Your Name"
                      required
                      className={`${touched.name && errors.name
                        ? "border border-red-500"
                        : "border border-border/50"
                        } bg-background outline-none placeholder:text-border focus:border-border rounded p-2 px-4 text-sm text-white mb-2`}
                    />
                    <label
                      htmlFor="email"
                      className="text-xs 2xl:text-[16px] my-3 font-bold"
                    >
                      Email
                    </label>
                    <Field
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Enter Your Email"
                      required
                      className={`${touched.email && errors.email
                        ? "border border-red-500"
                        : "border border-border/50"
                        } bg-background outline-none placeholder:text-border focus:border-border rounded p-2 px-4 text-sm text-white mb-2`}
                    />
                    <label
                      htmlFor="email"
                      className="text-xs 2xl:text-[16px] my-3 font-bold"
                    >
                      Password
                    </label>
                    <Field
                      type="text"
                      id="email"
                      placeholder="Type a strong password"
                      name="password"
                      required
                      className={`${touched.email && errors.email
                        ? "border border-red-500"
                        : "border border-border/50"
                        } bg-background outline-none placeholder:text-border focus:border-border rounded p-2 px-4 text-sm text-white mb-2`}
                    />
                    <p className="text-xs my-2 2xl:text-[14px]">
                      Password must be at least 6 characters
                    </p>
                    <div className="flex gap-2 my-3 text-xs 2xl:text-[16px]">
                      <Field
                        type="checkbox"
                        className="rounded-full"
                        id="tc-agree"
                        name="tcAgree"
                      />
                      <label htmlFor="tc-agree">
                        I agree to all of{" "}
                        <a href="/" className="text-border hover:underline">
                          terms & conditions
                        </a>
                      </label>
                    </div>
                    <button
                      className="text-center bg-blue1 p-2 rounded hover:bg-blue1/95"
                      type={"submit"}
                    >
                      Register Now
                    </button>
                    {/* <Link
                      to="/page-2"
                      className="text-center bg-[#25437F] p-2 rounded my-3"
                    >
                      Sign up with Google
                    </Link> */}
                  </Form>
                );
              }}
            </Formik>
            <p className="text-xs text-center my-2">
              Already have an account?{" "}
              <Link to="/login" className="text-border hover:underline">
                Log in
              </Link>
            </p>
            <div className="flex justify-between items-center">
              <p className="text-border text-sm hover:underline">Need Help?</p>
              <div className="flex gap-2">
                <Instagram sx={{ color: "#223B6A" }} />
                <Facebook sx={{ color: "#223B6A" }} />
                <YouTube sx={{ color: "#223B6A" }} />
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
