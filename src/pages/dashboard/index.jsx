import React from "react";
import { useState } from "react";
import Drawer from "../../components/drawer";
import Event from "./components/Event";
import State from "./components/State";

const Dashboard = () => {
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
      <section className="w-full md:block hidden">
        <Drawer />
      </section>
      {/* <section className="md:w-5/6 px-2 w-full"> */}
      <section className="px-2 w-full col-span-3 2xl:col-span-4">
        <header className="2xl:h-24 h-16 flex justify-between items-center px-5">
          <h1 className="2xl:text-3xl text-xl">Dashboard</h1>
        </header>
        <section className="flex gap-1">
          <section className="md:w-5/6 w-full md:pr-7 px-5">
            <div className="rounded-2xl px-7 py-4 bg-[#0052FF] flex flex-col gap-5">
              <div>
                <p className="2xl:text-3xl text-xl font-bold">
                  Welcome Back! MD Rakib
                </p>
                <p className="2xl:text-base text-sm">
                  You have completed 54% of your profile
                </p>
              </div>
              <button
                type="button"
                className="bg-[#FAAE57] rounded-xl my-2 2xl:w-44 w-36 2xl:p-3 p-2 2xl:text-base text-sm"
              >
                Complete Now
              </button>
            </div>
            <div>
              <div className="my-9 flex justify-between items-center">
                <p className="2xl:text-xl font-bold">Quick States</p>
                <input
                  type="text"
                  className="bg-[#3D6DBA]/50 placeholder:text-[#98B3E1] 2xl:text-sm text-xs 2xl:p-2 p-1 border border-[#98B3E1] rounded-md 2xl:w-56 w-48 text-center"
                  placeholder="20 August 2023-31 August 2023"
                />
              </div>
              <div className="lg:grid lg:grid-cols-4 flex flex-wrap gap-5">
                {quick_states.map((state, i) => (
                  <State {...state} key={"state_" + i} />
                ))}
              </div>
              <div className="flex my-8 border-b border-border/50 2xl:text-lg text-sm overflow-scroll gap-[5%]">
                {tab_list.map((tab, i) => (
                  <div
                    className="flex flex-col items-center gap-1 2xl:w-44 w-36"
                    key={"tab_" + i}
                  >
                    <button
                      className={`w-max text-[#98B3E1] ${
                        activeTab === tab && "font-bold"
                      }`}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                    <hr
                      className={`w-1/2 ${
                        activeTab === tab ? "border-2 border-blue1" : "hidden"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-3 flex flex-wrap gap-5">
              {event_list.map((ev, i) => (
                <React.Fragment key={"event_" + i}>
                  {ev.tab === activeTab && <Event {...ev} />}
                </React.Fragment>
              ))}
            </div>
          </section>
          <section className="w-1/6 md:block hidden">Right Area</section>
        </section>
      </section>
    </main>
  );
};

export default Dashboard;
