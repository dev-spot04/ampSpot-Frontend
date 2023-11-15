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
import { useLocation, useNavigate } from "react-router-dom";
import useApiMutation from "../../../../hooks/useApiMutation";
import agent from "../../../../services/agent";
import { toast } from "react-toastify";
const VerificationEmail = () => {
  const { mutate, isLoading, isSuccess, isError, error, data } = useApiMutation(
    agent.Auth.sendVerificationMail,
  );
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const email = queryParams.get("email")
  const token = queryParams.get("token")
  const notSendMail = queryParams.get("notSendMail")

  const handleEmailVerification = async () => {
    try {
      const query = `?token=${token}`
      await agent.Auth.verifyMail({}, query)
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error.message;
      if (errorMessage === 'Email is already verified') {
        return navigate('/dashboard')
      }
      toast.error(errorMessage);
    }
  }
  useEffect(() => {
    if (token) {
      handleEmailVerification()
    }
    if (!email) {
      toast.error('Email is required')
    }
    else if (!notSendMail)
      mutate({ email })
  }, [])
  const resendLinkHandler = async () => {
    await handleEmailVerification()
  }
  useEffect(() => {
    if (isSuccess && data) {

    } else if (isError) {
      const errorMessage = error?.response?.data?.message || error.message;
      if (errorMessage === 'Email is already verified') {
        return navigate('/dashboard')
      }
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
          <p className="text-center">
            A verification link has been sent to {email?.padStart(4, "*")}
          </p>
          <p className="text-center my-6">
            Didn't receive an email?{" "}
            <button onClick={() => resendLinkHandler()} className="text-blue1">Resend link</button>
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

export default VerificationEmail;
