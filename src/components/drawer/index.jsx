import {
  EmojiEvents,
  HeartBrokenRounded,
  HomeRounded,
  MessageRounded,
  PersonAddAltRounded,
  StarRounded,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Drawer = () => {
  const [activeLink, setActiveLink] = useState("home");
  const navIconProps = {
    sx: { fontSize: "150%" },
    className: "relative top-[1px]",
  };
  const defaultLinkClass =
    "text-[#98B3E1] flex items-center gap-[10%] p-2 rounded-lg px-[10%] 2xl:text-base text-sm";
  return (
    <div className="2xl:py-9 py-6">
      <div className="bg-blue1 w-16 h-16 rounded-full flex justify-center items-center relative m-auto">
        <div className="grid grid-cols-2">
          <span>S</span>
          <span>P</span>
          <span>O</span>
          <span>T</span>
        </div>
      </div>
      <div className="lg:w-4/5 w-[96%] relative mx-auto my-12 flex flex-col 2xl:gap-6 gap-2">
        <Link
          to="/dashboard"
          className={
            defaultLinkClass +
            " " +
            (activeLink === "home" &&
              "border-l-blue1 border-l-[0.2rem] bg-blue1/10")
          }
        >
          <HomeRounded {...navIconProps} />
          <p>Home</p>
        </Link>
        <Link to="/dashboard" className={defaultLinkClass}>
          <PersonAddAltRounded {...navIconProps} />
          <p>Bookings</p>
        </Link>
        <Link to="/dashboard" className={defaultLinkClass}>
          <EmojiEvents {...navIconProps} />
          <p>Availability</p>
        </Link>
        <Link to="/dashboard" className={defaultLinkClass}>
          <HeartBrokenRounded {...navIconProps} />
          <p>Documents</p>
        </Link>
        <Link to="/dashboard" className={defaultLinkClass}>
          <MessageRounded {...navIconProps} />
          <p>Messages</p>
        </Link>
        <hr className="border border-blue1/20 my-3" />
      </div>
      <div className="lg:w-4/5 w-[97%] relative mx-auto border border-blue1/10 rounded-lg p-3">
        <div className="flex gap-1">
          <div className="h-8 p-1 bg-[#FAAE57] rounded-full flex justify-center items-center">
            <StarRounded />
          </div>
          <div className="2xl:text-lg">
            <h3 className="font-bold leading-[100%]">Become a pro member</h3>
            <p className="2xl:text-sm text-xs my-3 text-[#98B3E1]">
              Worried what to write in your about section?
            </p>
          </div>
        </div>
        <button
          type="button"
          className="bg-blue1 w-full p-1 rounded-lg 2xl:text-base text-sm"
        >
          Upgrade Plan
        </button>
      </div>
    </div>
  );
};

export default Drawer;
