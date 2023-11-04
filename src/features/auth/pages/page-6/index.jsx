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

const LoginPage5 = () => {
  return (
    <main className="bg-background min-h-screen grid md:grid-cols-2 grid-cols-1 text-white">
      <section className="flex flex-col gap-10 px-10 pb-10 min-h-screen">
        <div className="flex justify-between items-center my-3">
          <p className="text-xl font-bold">AMP Spot</p>
          <select id="lang" name="lang" className="bg-background text-xs">
            <option value="English (UK)">English (UK)</option>
            <option value="English (US)">English (US)</option>
          </select>
        </div>
        <div className="flex flex-col gap-3 max-w-sm justify-center m-auto w-full">
          <img src={assets.auth.Mail} alt="Mail" />
          <p className="text-center">You've been verified</p>
          <Link
            to="/page-7"
            className="bg-blue-500 w-40 text-center self-center rounded p-1"
          >
            Continue
          </Link>
        </div>
      </section>
      <section
        className="hidden md:flex min-h-full overflow-hidden"
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

export default LoginPage5;
