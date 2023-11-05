import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Star,
  YouTube,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../../../assets";

const LoginPage1 = () => {
  return (
    <main className="bg-background min-h-screen grid md:grid-cols-2 grid-cols-1 text-white">
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
            <form className="flex flex-col">
              <label
                htmlFor="name"
                className="text-xs 2xl:text-[16px] my-3 font-bold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="bg-background outline-none border border-border/50 focus:border-border rounded p-2 px-4 text-sm text-white placeholder:text-border mb-2"
              />
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
                className="bg-background outline-none border border-border/50 focus:border-border rounded p-2 px-4 text-sm text-white placeholder:text-border mb-2"
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
              <p className="text-xs my-2 2xl:text-[14px]">
                Password must be at least 6 characters
              </p>
              <div className="flex gap-2 my-3 text-xs 2xl:text-[16px]">
                <input type="checkbox" className="rounded-full" id="tc-agree" />
                <label htmlFor="tc-agree">
                  I agree to all of{" "}
                  <a href="/" className="text-border hover:underline">
                    terms & conditions
                  </a>
                </label>
              </div>
            </form>
            <Link to="/page-2" className="text-center bg-blue1 p-2 rounded">
              Register Now
            </Link>
            <button className="text-center bg-border p-2 rounded">
              Sign up with Google
            </button>
            <p className="text-xs text-center my-2">
              Already have an account?{" "}
              <span className="text-border">Log in</span>
            </p>
            <div className="flex justify-between items-center">
              <p className="text-border text-sm">Need Help?</p>
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
