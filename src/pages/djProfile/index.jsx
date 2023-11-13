import { FavoriteBorder, Search, Share } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import DashboardHeader from "../../components/dashboardHeader";
import Drawer from "../../components/drawer";
import { assets } from "../../assets";
import { Rating } from "@mui/material";

const DjProfile = () => {
  const quick_states = [
    { type: "dollar", value: 200, title: "Total Balance" },
    { type: "dollar", value: 2025, title: "Total Earning", trend: "up" },
    { type: "count", value: 50, title: "Total Events" },
    { type: "dollar", value: 200, title: "Total Expenses", trend: "down" },
  ];
  const [activeTab, setActiveTab] = useState("Upcoming Bookings");
  const tab_list = [
    "Upcoming Bookings",
    "Past bookings",
    "Cancelled bookings",
    "Contract Pending",
    "Contract Signed",
  ];
  // prettier-ignore
  const event_list = [ { event: "Event in Dhaka", tags: ["Classic", "Local"], date: "25 Aug 2023", time: "20:00-23:00", tab: "Contract Signed", }, { event: "Event in Dhaka", tags: ["Classic", "Local"], date: "25 Aug 2023", time: "20:00-23:00", tab: "Contract Signed", }, { event: "Event in Dhaka", tags: ["Classic", "Local"], date: "25 Aug 2023", time: "20:00-23:00", tab: "Contract Signed", }, { event: "Event in Dhaka", tags: ["Classic", "Local"], date: "25 Aug 2023", time: "20:00-23:00", tab: "Contract Signed", }, { event: "Event in Dhaka", tags: ["Classic", "Local"], date: "25 Aug 2023", time: "20:00-23:00", tab: "Past bookings", }, { event: "Event in Dhaka", tags: ["Classic", "Local"], date: "25 Aug 2023", time: "20:00-23:00", tab: "Past bookings", }, { event: "Event in Dhaka", tags: ["Classic", "Local"], date: "25 Aug 2023", time: "20:00-23:00", tab: "Past bookings", }, { event: "Event in Dhaka", tags: ["Classic", "Local"], date: "25 Aug 2023", time: "20:00-23:00", tab: "Past bookings", }, { event: "Event in Dhaka", tags: ["Classic", "Local"], date: "25 Aug 2023", time: "20:00-23:00", tab: "Upcoming Bookings", }, { event: "Event in Dhaka", tags: ["Classic", "Local"], date: "25 Aug 2023", time: "20:00-23:00", tab: "Upcoming Bookings", }, { event: "Event in Dhaka", tags: ["Classic", "Local"], date: "25 Aug 2023", time: "20:00-23:00", tab: "Upcoming Bookings", }, { event: "Event in Dhaka", tags: ["Classic", "Local"], date: "25 Aug 2023", time: "20:00-23:00", tab: "Upcoming Bookings", }, { event: "Event in Dhaka", tags: ["Classic", "Local"], date: "25 Aug 2023", time: "20:00-23:00", tab: "Upcoming Bookings", }, { event: "Event in Dhaka", tags: ["Classic", "Local"], date: "25 Aug 2023", time: "20:00-23:00", tab: "Upcoming Bookings", }, ];
  return (
    // <main className="bg-background min-h-screen flex gap-2 text-white">
    <main className="bg-background min-h-screen md:grid md:grid-cols-4 2xl:grid-cols-5 text-white">
      {/* <section className="w-1/6 md:block hidden"> */}
      <section className="w-full md:block hidden bg-blue2">
        <Drawer />
      </section>
      {/* <section className="md:w-5/6 px-2 w-full"> */}
      <section className="px-2 w-full col-span-3 2xl:col-span-4">
        <DashboardHeader>
          <span />
          <label
            className="bg-lightBlue/10 px-2 rounded-full text-lightBlue/10 w-1/2 overflow-hidden flex flex-nowrap items-center"
            htmlFor="search"
          >
            <Search className="text-lightBlue" />
            <input
              placeholder="Search"
              name="search"
              id="search"
              type="text"
              className="bg-transparent outline-none placeholder:text-inputText focus:border-border rounded-full rounded-l-none 2xl:h-[51px] p-2 text-[14px] text-white"
            />
          </label>
        </DashboardHeader>
        <section className="grid md:grid-cols-3">
          <section className="col-span-1 overflow-y-hidden">
            <div className="bg-blue2 text-lightBlue pb-5 rounded-lg overflow-hidden shadow-md mx-5">
              <div className="flex justify-between items-center z-10 relative w-[90%] mx-auto top-3">
                <button type="button">
                  <FavoriteBorder />
                </button>
                <button type="button">
                  <Share />
                </button>
              </div>
              <div
                className="h-48 relative top-[-2rem] flex items-end justify-center"
                style={{
                  background: `url(${assets.auth.backgrounds.bg_5})no-repeat center center/cover`,
                }}
              >
                <div
                  className="h-36 w-36 rounded-full relative top-1/3"
                  style={{
                    background: `url(${assets.auth.backgrounds.bg_7})no-repeat center center/cover`,
                  }}
                />
              </div>
              <div className="relative mt-14 text-center px-[4.5%]">
                <h2 className="text-3xl font-bold">DJ First lady</h2>
                <h3 className="text-lg my-1">@djfirstlady</h3>
                <div className="flex justify-center my-3">
                  <Rating value={4} />4
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="2xl:text-3xl font-bold">20</p>
                    <p className="2xl:text-sm">Total Events</p>
                  </div>
                  <div>
                    <p className="2xl:text-3xl font-bold">150</p>
                    <p className="2xl:text-sm">Total Events</p>
                  </div>
                  <div>
                    <p className="2xl:text-3xl font-bold">10k+</p>
                    <p className="2xl:text-sm">Total Events</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 justify-between my-6 text-lg font-bold">
                  <button type="button" className="bg-blue1/5 h-12 rounded-xl">
                    Send Request
                  </button>
                  <button type="button" className="bg-blue1 h-12 rounded-xl">
                    Message Now
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="col-span-2"></section>
        </section>
      </section>
    </main>
  );
};

export default DjProfile;
