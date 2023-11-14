import { StarRounded } from "@mui/icons-material";
import React from "react";

const GigCardSkeleton = ({ mention, rating, theme, rate, imgSrc }) => {
  return (
    <div className="w-full rounded-2xl overflow-hidden 2xl:p-5 p-3 bg-border/20 animate-pulse">
      <div>
        <div className="aspect-square overflow-hidden rounded-xl bg-blue1/50" />
        <div className="2xl:text-base text-sm flex items-center justify-between text-blue1/50 mt-2">
          <p className="w-1/2 h-5 rounded-full bg-border/40" />
          <div className="h-5 w-10 rounded-full bg-border/40" />
        </div>
        <p className="w-2/3 h-6 rounded-full text-white bg-border/40 2xl:my-3 my-2" />
        <p className="w-1/3 h-5 rounded-full text-white bg-border/40 " />
      </div>
    </div>
  );
};

export default GigCardSkeleton;
