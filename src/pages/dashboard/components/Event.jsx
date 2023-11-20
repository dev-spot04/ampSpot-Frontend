import { ArrowRightAlt } from "@mui/icons-material";
import React from "react";

const Event = ({ event, tags, date, time, tab }) => {
  return (
    <div className="bg-white dark:bg-[#0D1322] rounded-lg flex flex-col gap-4 justify-center p-4 w-full">
      <h3 className="2xl:text-2xl text-lg font-bold">{event}</h3>
      <div className="flex gap-[2%]">
        {tags.map((tag, i) => (
          <p
            className="bg-gray-200 dark:bg-[#162239] rounded p-[2px] px-4 border-border border 2xl:text-base text-xs"
            key={"event_tag_" + i}
          >
            {tag}
          </p>
        ))}
      </div>
      <div className="flex justify-between items-center 2xl:text-base text-xs">
        <div>
          <p className="text-blue1/40">Date</p>
          <p className="text-lightBlue">{date}</p>
        </div>
        <div>
          <p className="text-blue1/40">Time</p>
          <p className="text-lightBlue">{time}</p>
        </div>
      </div>
      <hr className="border-border/70" />
      <div className="flex justify-between 2xl:text-sm text-xs">
        <button
          type="button"
          className="hover:bg-blue1 border border-blue1/40 rounded-md min-w-[5.4rem] flex justify-center items-center gap-1"
        >
          Details
          <ArrowRightAlt sx={{ fontSize: "25px" }} />
        </button>
        <button type="button" className="text-[#FF3D14]">
          Cancel Booking
        </button>
      </div>
    </div>
  );
};

export default Event;
