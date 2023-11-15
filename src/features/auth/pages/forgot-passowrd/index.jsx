import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Star,
  YouTube,
} from "@mui/icons-material";
import React, { useEffect } from "react";
import { assets } from "../../../../assets";
import { useLocation } from "react-router-dom";
import useApiMutation from "../../../../hooks/useApiMutation";
import { toast } from "react-toastify";
import agent from "../../../../services/agent";
const ForgotPassword = () => {

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const email = queryParams.get("email")
  const { mutate, isLoading, isSuccess, isError, error, data } = useApiMutation(
    agent.Auth.forgotPasswordMail,
  );
  const resendEmailHandler = () => {
    if (!email) {
      return toast.error('Email missing')
    }
    mutate({ email })
  };
  useEffect(() => {
    if (isSuccess && data) {
      toast.success('A new mail has been sent.')
    } else if (isError) {
      const errorMessage = error?.response?.data?.message || error.message;
      toast.error(errorMessage);
    }
  }, [isSuccess, isError, data, error]);
  return (
    <main className="bg-background min-h-screen grid md:grid-cols-2 grid-cols-1 text-white">
      <section className="flex flex-col gap-10 pb-10 min-h-screen">
        <div className="flex justify-between items-center my-3 mx-auto md:w-[70%] w-[90%]">
          <p className="text-xl font-bold">AMP Spot</p>
        </div>
        <div className="flex flex-col gap-3 md:w-[70%] w-[90%] justify-center m-auto p-7 2xl:text-[24px] text-black1">
          <img src={assets.auth.Mail} className="w-80 mx-auto" alt="Mail" />
          <p className="text-center text-white font-bold">
            A reset link has been sent to {email}
          </p>
          <p className="text-center my-6">
            Didn't receive an email?{" "}
            <button
              type="button"
              className="text-blue1"
              onClick={resendEmailHandler}
            >
              Resend link
            </button>
          </p>
        </div>
      </section>
      <section
        className="hidden md:flex min-h-full overflow-hidden"
        style={{
          background: `url(${assets.auth.backgrounds.bg_7})no-repeat center center/cover`,
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

export default ForgotPassword;
