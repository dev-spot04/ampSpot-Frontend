import { ChevronLeft } from "@mui/icons-material";
import React from "react";
import { assets } from "../../../../assets";

const MusicLinks = () => {
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
        // style={ { background: `url(${assets.auth.registration})no-repeat center center/cover`, } }
      >
        <img
          src={assets.auth.registration}
          alt="Img Not Found"
          className="w-full"
        />
      </section>
    </main>
  );
};

export default MusicLinks;
