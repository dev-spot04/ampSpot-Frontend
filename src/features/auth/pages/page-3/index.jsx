import { ChevronLeft, ChevronRight, Star } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../../../assets";

const LoginPage3 = () => {
  return (
    <main className="bg-background min-h-screen grid md:grid-cols-2 grid-cols-1 text-white">
      <section className="flex flex-col gap-10 px-10 pb-10">
        <div className="flex justify-between items-center my-3">
          <div className="flex items-center text-sm gap-1">
            <ChevronLeft />
            <p className="font-bold">Back</p>
          </div>
          <p className="text-xl font-bold">AMP Spot</p>
        </div>
        <div className="flex flex-col items-center gap-8 m-auto">
          <h1 className="font-bold text-2xl mx-auto">Set your sound</h1>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-2">
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              Rock
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              Afrobeats
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              Rock
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              Rock
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              HipHop
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              HipHop
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              Rock
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              Rock
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              HipHop
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              Afrobeats
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              Rock
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              Afrobeats
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              Rock
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              Rock
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              Afrobeats
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              Rock
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              Afrobeats
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              Rock
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              Rock
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              Rock
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              Rock
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              Rock
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              Rock
            </button>
            <button className="bg-border/20 rounded p-1 min-w-[7rem]">
              Rock
            </button>
          </div>
          <div className="grid grid-cols-2 w-80 max-w-full gap-2">
            <Link to="/page-4" className="text-center p-3 rounded w-full">
              Skip
            </Link>
            <Link
              to="/page-4"
              className="text-center bg-blue-600 p-3 rounded w-full"
            >
              Next
            </Link>
          </div>
        </div>
      </section>
      <section
        className="hidden md:flex justify-center h-screen overflow-hidden"
        style={{
          background: `url(${assets.auth.registration})no-repeat center center/cover`,
        }}
      >
        <div className="self-end max-w-xs mx-auto my-8 rounded p-6 backdrop-blur-xl">
          <p className="mb-5">
            "Music has been used for therapeutic purposes in a variety of
            settings"
          </p>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-sm">Adrin Laue</p>
              <p className="text-sm mt-1">Founder Member</p>
            </div>
            <div>
              <div className="relative top-[-3px]">
                <Star sx={{ fontSize: "1rem" }} />
                <Star sx={{ fontSize: "1rem" }} />
                <Star sx={{ fontSize: "1rem" }} />
                <Star sx={{ fontSize: "1rem" }} />
              </div>
              <div className="flex justify-between items-center my-1">
                <ChevronLeft className="border rounded-full scale-75" />
                <ChevronRight className="border rounded-full scale-75" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage3;
