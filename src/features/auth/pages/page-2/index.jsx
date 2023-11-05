import { ChevronLeft, ChevronRight, Star } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../../../assets";

const LoginPage2 = () => {
  return (
    <main className="bg-background min-h-screen grid md:grid-cols-2 grid-cols-1 text-white">
      <section className="flex flex-col gap-10 pb-10">
        <div className="w-[90%] md:w-[70%] mx-auto h-full flex flex-col">
          <div className="flex justify-between items-center my-3">
            <div className="flex items-center text-sm gap-1">
              <ChevronLeft />
              <p className="font-bold">Back</p>
            </div>
            <p className="text-xl font-bold">AMP Spot</p>
          </div>
          <div className="flex flex-col items-center gap-3 w-full mt-[20%] 2xl:mt-[40%]">
            <h1 className="font-bold text-xl mx-auto my-4">
              How about a plug?
            </h1>
            <button className="text-center bg-green-500 p-3 rounded w-full">
              Spotify Link
            </button>
            <button className="text-center bg-orange-500 p-3 rounded w-full">
              Soundcloud Link
            </button>
            <button className="text-center bg-red-700 p-3 rounded w-full">
              YouTube Link
            </button>
            <div className="grid grid-cols-2 w-full gap-2">
              <Link to="/page-3" className="text-center p-3 rounded w-full">
                Skip
              </Link>
              <Link
                to="/page-3"
                className="text-center bg-blue-600 p-3 rounded w-full"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className="hidden md:flex justify-center h-screen overflow-hidden"
        style={{
          background: `url(${assets.auth.backgrounds.bg_8})no-repeat center center/cover`,
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

export default LoginPage2;
