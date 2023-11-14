import { StarRounded } from "@mui/icons-material";
import React from "react";

const GigCard = ({ mention, rating, theme, rate, imgSrc }) => {
  return (
    <div className="w-full rounded-2xl overflow-hidden 2xl:p-5 p-3 bg-border/20">
      <div>
        <div className="aspect-square overflow-hidden rounded-xl">
          <img src={imgSrc} />
        </div>
        <div className="2xl:text-base text-sm flex items-center justify-between text-blue1/50 mt-2">
          <p>{mention}</p>
          <div className="flex items-center 2xl:gap-3 gap-1 text-blue1 text-xs">
            <StarRounded sx={{ fontSize: "170%" }} /> ({rating})
          </div>
        </div>
        <p className="text-white font-bold 2xl:text-2xl text-lg 2xl:my-3 my-2">
          {theme}
        </p>
        <p className="text-blue1 2xl:text-xl text-sm my-3 font-bold">{rate}</p>
      </div>
    </div>
  );
};

export default GigCard;
