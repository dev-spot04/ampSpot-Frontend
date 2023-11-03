import { ChevronLeft, ChevronRight, Star } from "@mui/icons-material";
import React from "react";
import { assets } from "../../../../assets";

const LoginPage4 = () => {
  return (
    <main className="bg-background min-h-screen grid md:grid-cols-2 grid-cols-1 text-white">
      <section className="flex flex-col gap-10 md:px-[15%] px-10 pb-10">
        <div className="flex justify-between items-center my-3">
          <div className="flex items-center text-sm gap-1">
            <ChevronLeft />
            <p className="font-bold">Back</p>
          </div>
          <p className="text-xl font-bold">AMP Spot</p>
        </div>
        <div className="flex flex-col gap-8 my-auto">
          <h1 className="font-bold text-2xl text-start">Set up your profile</h1>
          <form className="flex flex-col max-w-lg gap-3">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-xs my-3 font-bold">
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
              <label htmlFor="bio" className="text-xs my-3 font-bold">
                Personal bio
              </label>
              <textarea
                className="resize-none bg-background outline-none border border-border/50 focus:border-border rounded p-2 px-4 text-sm text-white placeholder:text-border min-h-[10rem]"
                placeholder="Type here..."
                id="bio"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button className="text-center p-3 rounded w-full">Skip</button>
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
          background: `url(${assets.auth.registration})no-repeat center center/cover`,
        }}
      >
        <div className="self-end max-w-xs mx-auto my-8 rounded p-4 backdrop-blur-xl">
          <p className="mb-5">
            "Music has been used for therapeutic purposes in a variety of
            settings"
          </p>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">Adrin Laue</p>
              <p className="text-sm">Founder Member</p>
            </div>
            <div>
              <div>
                <Star sx={{ fontSize: "1rem" }} />
                <Star sx={{ fontSize: "1rem" }} />
                <Star sx={{ fontSize: "1rem" }} />
                <Star sx={{ fontSize: "1rem" }} />
              </div>
              <div className="flex justify-between items-center">
                <ChevronLeft className="border rounded-full" />
                <ChevronRight className="border rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage4;
