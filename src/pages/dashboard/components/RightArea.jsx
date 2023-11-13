import { Add, CreditCard } from "@mui/icons-material";
import React from "react";

const RightArea = ({ balance }) => {
  const cardIconSx = { fontSize: "2rem" };
  return (
    <>
      <div className="rounded-2xl bg-[#0052FF] flex flex-col gap-5 py-5 px-3 w-full">
        <div>
          <h2 className="2xl:text-xl">Primary Account</h2>
          <p className="2xl:text-3xl text-xl font-bold 2xl:my-4 my-1">
            ${balance.toLocaleString("en-IN")}
          </p>
          <div className="flex gap-2 justify-between">
            <div className="2xl:text-sm text-xs overflow-hidden">
              <p className="truncate">Sarah Jahn SP</p>
              <p className="truncate">XXXX XXXX XXXX 1116</p>
            </div>
            <div className="flex gap-2 relative top-3 max-h-10">
              <button type="button" className="border rounded-lg p-1">
                <Add sx={cardIconSx} />
              </button>
              <button
                type="button"
                className="rounded-lg bg-[#1EB6FF] p-1 max-h-10"
              >
                <CreditCard sx={{ ...cardIconSx, color: "#0866C5" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 bg-border/20 p-4 rounded-lg">
        <h2 className="text-lightBlue 2xl:text-2xl text-lg font-bold">
          Availabilities
        </h2>
        <div className="min-h-[16rem] 2xl:text-base text-xs">Calendar Here</div>
        <hr className="border-lightBlue/10 border" />
        <h2 className="text-lightBlue 2xl:text-2xl text-lg font-bold my-5">
          Notifications
        </h2>
        <div className="gap-2 flex flex-col">
          <Notification />
          <Notification />
          <Notification />
          <Notification />
        </div>
      </div>
    </>
  );
};

const Notification = () => {
  return (
    <div className="flex gap-3 text-lightBlue items-center">
      <div className="rounded-full w-10 h-10 bg-blue1"></div>
      <div className="whitespace-nowrap overflow-hidden">
        <p className="2xl:text-base text-sm truncate">Rose Nash</p>
        <p className="2xl:text:sm text-xs truncate">Requested new booking</p>
      </div>
    </div>
  );
};

export default RightArea;
