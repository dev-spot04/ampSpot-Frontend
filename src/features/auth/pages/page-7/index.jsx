import { ChevronLeft, ChevronRight, Star } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../../../assets";

const LoginPage7 = () => {
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
            <form className="flex flex-col w-[80%]">
              <div className="flex gap-2 bg-blue-50/10 p-1 w-fit rounded">
                <button type="button" className="bg-blue1 p-1 w-20 rounded">
                  User
                </button>
                <button type="button" className="p-1 w-20">
                  DJ
                </button>
              </div>
              <label
                htmlFor="email"
                className="text-xs 2xl:text-[16px] my-3 font-bold"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter Your Email"
                className="bg-background outline-none border border-border/50 focus:border-border rounded p-2 px-4 text-sm text-white placeholder:text-border"
              />
              <label
                htmlFor="email"
                className="text-xs 2xl:text-[16px] my-3 font-bold"
              >
                Password
              </label>
              <input
                type="text"
                id="email"
                placeholder="Type a strong password"
                className="bg-background outline-none border border-border/50 focus:border-border rounded p-2 px-4 text-sm text-white placeholder:text-border"
              />
              <div className="flex justify-between items-center 2xl:text-[16px] text-xs">
                <div className="flex gap-2 my-3">
                  <input
                    type="checkbox"
                    className="rounded-full"
                    id="remember"
                  />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <p className="text-blue-500">Forgot password?</p>
              </div>
              <button className="text-center p-2 rounded bg-blue1 my-3 mt-5">
                Login
              </button>
              <button className="text-center bg-white p-2 rounded text-black">
                Login With Google
              </button>
              <p className="text-xs text-[16px] text-center my-2">
                New here?{" "}
                <Link to="/page-1" className="text-border">
                  Register now
                </Link>
              </p>
            </form>
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

export default LoginPage7;
