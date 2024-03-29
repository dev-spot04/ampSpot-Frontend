import { ChevronLeft, ChevronRight, Star } from "@mui/icons-material";
import React from "react";
import { assets } from "../../../../assets";

const LoginPage2 = () => {
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
        <div className="flex flex-col items-center gap-3 m-auto">
          <h1 className="font-bold text-xl mx-auto my-4">How about a plug?</h1>
          <button className="text-center bg-green-500 p-3 rounded w-80 max-w-full">
            Spotify Link
          </button>
          <button className="text-center bg-orange-500 p-3 rounded w-80 max-w-full">
            Soundcloud Link
          </button>
          <button className="text-center bg-red-700 p-3 rounded w-80 max-w-full">
            YouTube Link
          </button>
          <div className="grid grid-cols-2 w-80 max-w-full gap-2">
            <button className="text-center p-3 rounded w-full">Skip</button>
            <button className="text-center bg-blue-600 p-3 rounded w-full">
              Next
            </button>
          </div>
        </div>
      </section>
      <section
        className="hidden md:flex justify-center h-screen overflow-hidden"
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

export default LoginPage2;
