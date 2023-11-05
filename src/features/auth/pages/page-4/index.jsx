import { ChevronLeft, ChevronRight, Star } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../../../assets";

const LoginPage4 = () => {
  return (
    <main className="bg-background min-h-screen grid md:grid-cols-2 grid-cols-1 text-white">
      <section className="flex flex-col gap-10 pb-10">
        <div className="flex justify-between items-center my-3 md:w-[70%] w-[90%] mx-auto">
          <div className="flex items-center gap-1">
            <ChevronLeft />
            <p className="font-bold text-sm">Back</p>
          </div>
          <p className="2xl:text-[30px] font-bold">AMP Spot</p>
        </div>
        <div className="flex flex-col gap-8 my-auto md:w-[70%] w-[90%] mx-auto">
          <h1 className="font-bold text-xl 2xl:text-[30px] text-start text-black1">
            Set up your profile
          </h1>
          <form className="flex flex-col w-[80%] gap-3">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-xs 2xl:text-[16px] my-3 font-bold text-black1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="bg-background outline-none border border-border/50 focus:border-border rounded p-2 px-4 text-sm text-white placeholder:text-border"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="bio"
                className="text-xs 2xl:text-[16px] my-3 font-bold text-black1"
              >
                Personal bio
              </label>
              <textarea
                className="resize-none bg-background outline-none border border-border/50 focus:border-border rounded p-2 px-4 text-sm text-white placeholder:text-border min-h-[10rem]"
                placeholder="Type here..."
                id="bio"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 my-10">
              <Link to="/page-5" className="text-center p-3 rounded w-full">
                Skip
              </Link>
              <button className="text-center bg-blue-600 p-3 rounded w-full">
                Next
              </button>
            </div>
          </form>
        </div>
      </section>
      <section
        className="hidden md:flex justify-center h-screen overflow-hidden min-h-full"
        style={{
          background: `url(${assets.auth.backgrounds.bg_2})no-repeat center center/cover`,
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

export default LoginPage4;
