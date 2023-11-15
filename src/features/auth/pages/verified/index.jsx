import {
  AutoAwesomeRounded,
  CheckCircleRounded,
  ChevronLeft,
  ChevronRight,
  GradeRounded,
  Star,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../../../assets";
import { ALL_LINKS } from "../../../../constants/navigation-routes";

const Verified = () => {
  return (
    <main className="bg-background min-h-screen grid md:grid-cols-2 grid-cols-1 text-white">
      <section className="flex flex-col gap-10 pb-10 min-h-screen">
        <div className="flex justify-between items-center my-3 md:w-[70%] w-[90%] mx-auto">
          <p className="2xl:text-[30px] text-xl font-bold">AMP Spot</p>
        </div>
        <div className="flex flex-col gap-3 items-center m-auto w-[90%] md:w-[70%]">
          <div>
            <GradeRounded className="relative top-16 right-5 text-blue1/50 rotate-12" />
            <GradeRounded className="relative top-7 right-4 text-blue1/20 rotate-12 scale-75" />
            <GradeRounded className="relative top-2 right-4 text-blue1/90 rotate-12 scale-110" />
            <GradeRounded className="relative top-2 right-3 text-blue1/40 rotate-12 scale-50" />
            <GradeRounded className="relative top-5 right-4 text-blue1/50 rotate-12 scale-90" />
          </div>
          <div className="bg-blue1 p-8 rounded-full relative">
            <CheckCircleRounded sx={{ fontSize: "3rem" }} />
          </div>
          <p className="text-center 2xl:text-[24px] text-black1">
            You've been verified
          </p>
          <Link
            to={ALL_LINKS.Plug.pageLink}
            className="bg-blue-500 w-40 text-center self-center rounded p-1 2xl:text-[20px]"
          >
            Continue
          </Link>
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

export default Verified;
