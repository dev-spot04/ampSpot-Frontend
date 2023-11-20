import { TrendingDown, TrendingUp } from "@mui/icons-material";
import React from "react";

const State = ({ type, value, title, trend }) => {
  return (
    <div className="bg-white dark:bg-[#0D1322] rounded flex flex-col items-center gap-4 justify-center 2xl:h-36 h-28 min-w-[10rem] w-fit lg:w-full">
      <h3 className="text-[#618BCF] 2xl:text-xl text-sm">{title}</h3>
      <p className="2xl:text-5xl text-3xl flex gap-3 items-center">
        {type === "dollar" && "$ "}
        {value.toLocaleString()}
        {trend && trend === "up" && (
          <TrendingUp sx={{ color: "green", fontSize: "100%" }} />
        )}
        {trend && trend === "down" && (
          <TrendingDown sx={{ color: "red", fontSize: "100%" }} />
        )}
      </p>
    </div>
  );
};

export default State;
