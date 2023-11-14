import {
  FavoriteBorder,
  InsertInvitationRounded,
  LocationOn,
  PersonRounded,
  Search,
  ShareOutlined,
  StarRounded,
  WatchLater,
} from "@mui/icons-material";
import React from "react";
import DashboardHeader from "../../components/dashboardHeader";
import Drawer from "../../components/drawer";
import { assets } from "../../assets";
import { Rating } from "@mui/material";
import GigCard from "./components/GigCard";
import GigCardSkeleton from "./components/GigCardSkeleton";

const DjProfile = () => {
  const userProfile = [
    { icon: <LocationOn />, data: "From", more: "LA, USA" },
    { icon: <PersonRounded />, data: "Member Since", more: "Jan 2023" },
    { icon: <WatchLater />, data: "Average Evnet Time", more: "3 Hours" },
    {
      icon: <InsertInvitationRounded />,
      data: "Last Event",
      more: "3 Days Ago",
    },
  ];
  const messageHandler = () => {};
  const requestHandler = () => {};
  const favouriteHandler = () => {};
  const shareHandler = () => {};
  return (
    <main className="bg-background min-h-screen md:grid md:grid-cols-5 2xl:grid-cols-5 text-white">
      <section className="w-full md:block hidden bg-blue2">
        <Drawer />
      </section>
      <section className="w-full col-span-4 2xl:col-span-4">
        <DashboardHeader>
          <span />
          <label
            className="bg-lightBlue/10 px-2 rounded-full text-lightBlue/10 w-1/2 overflow-hidden flex flex-nowrap items-center"
            htmlFor="search"
          >
            <Search className="text-lightBlue cursor-pointer" />
            <input
              placeholder="Search"
              name="search"
              id="search"
              type="text"
              className="bg-transparent outline-none placeholder:text-inputText focus:border-border rounded-full rounded-l-none 2xl:h-[51px] p-2 text-[14px] text-white w-full"
            />
          </label>
        </DashboardHeader>
        <section className="lg:grid lg:grid-cols-3 px-4 lg:gap-3">
          <section className="lg:col-span-1 overflow-y-hidden w-full">
            <div className="bg-blue2 text-lightBlue pb-5 rounded-lg overflow-hidden shadow-md">
              <div className="2xl:text-base text-sm flex justify-between items-center z-10 relative w-[90%] mx-auto top-3">
                <button
                  type="button"
                  className="text-blue1 bg-white rounded-full p-1"
                  onClick={favouriteHandler}
                >
                  <FavoriteBorder />
                </button>
                <button
                  type="button"
                  className="flex justify-center items-center bg-background rounded-full p-1 gap-2"
                  onClick={shareHandler}
                >
                  <ShareOutlined className="text-blue1" />
                  Share
                </button>
              </div>
              <div
                className="2xl:h-48 h-36 relative top-[-2rem] flex items-end justify-center"
                style={{
                  background: `url(${assets.auth.backgrounds.bg_5})no-repeat center center/cover`,
                }}
              >
                <div
                  className="2xl:h-36 2xl:w-36 w-24 h-24 rounded-full relative top-1/3"
                  style={{
                    background: `url(${assets.auth.backgrounds.bg_7})no-repeat center center/cover`,
                  }}
                />
              </div>
              <div className="relative mt-14 text-center px-[4.5%]">
                <h2 className="2xl:text-3xl text-xl font-bold">
                  DJ First lady
                </h2>
                <h3 className="2xl:text-lg text-sm my-1">@djfirstlady</h3>
                <div className="flex justify-center my-3">
                  <Rating
                    value={4}
                    readOnly
                    emptyIcon={
                      <StarRounded sx={{ color: "#98B3E1", opacity: "0.1" }} />
                    }
                    icon={<StarRounded sx={{ color: "blue" }} />}
                  />
                  4
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="2xl:text-3xl text-xl font-bold">20</p>
                    <p className="2xl:text-sm text-xs">Total Events</p>
                  </div>
                  <div>
                    <p className="2xl:text-3xl text-xl font-bold">150</p>
                    <p className="2xl:text-sm text-xs">Total Events</p>
                  </div>
                  <div>
                    <p className="2xl:text-3xl text-xl font-bold">10k+</p>
                    <p className="2xl:text-sm text-xs">Total Events</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 justify-between my-6 2xl:text-lg text-sm font-bold 2xl:h-12 h-9 text-white">
                  <button
                    type="button"
                    className="bg-blue1/5 rounded-xl"
                    onClick={requestHandler}
                  >
                    Send Request
                  </button>
                  <button
                    type="button"
                    className="bg-blue1 rounded-xl"
                    onClick={messageHandler}
                  >
                    Message Now
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-blue2 text-lightBlue rounded-lg overflow-hidden shadow-md my-8 2xl:p-6 p-4">
              {userProfile.map((item, i) => (
                <PersonalInfo
                  key={"personal_info-" + i}
                  icon={item.icon}
                  more={item.more}
                  data={item.data}
                />
              ))}
            </div>
          </section>
          <section className="col-span-2 text-lightBlue pb-5">
            <div className="min-h-[20vh]">
              <h2 className="2xl:text-lg w-fit text-center">
                Availability
                <hr className="w-20 border-2 bg-blue1 border-blue1 my-2" />
              </h2>
            </div>
            <div>
              <h2 className="2xl:text-lg w-fit text-center">
                Gigs
                <hr className="w-20 border-2 bg-blue1 border-blue1 my-2" />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-8">
                <GigCard
                  theme="Birthday Party"
                  rate="$100/Hour"
                  mention="@djarmansomoy"
                  rating={5}
                  imgSrc={assets.auth.backgrounds.bg_3}
                />
                <GigCard
                  theme="Birthday Party"
                  rate="$80/Hour"
                  mention="@djarmansomoy"
                  rating={5}
                  imgSrc={assets.auth.backgrounds.bg_3}
                />
                <GigCard
                  theme="Birthday Party"
                  rate="$70/Hour"
                  mention="@djarmansomoy"
                  rating={5}
                  imgSrc={assets.auth.backgrounds.bg_3}
                />
                <GigCardSkeleton
                  theme="Birthday Party"
                  rate="$100/Hour"
                  mention="@djarmansomoy"
                  rating={5}
                  imgSrc={assets.auth.backgrounds.bg_3}
                />
              </div>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
};

const PersonalInfo = ({ icon, data, more }) => {
  return (
    <>
      <div className="flex items-center gap-3 justify-between">
        <div className="overflow-hidden ">
          <p className="2xl:text-base text-sm flex items-center gap-3 text-ellipsis">
            {icon}
            {data}
          </p>
        </div>
        <p className="text-white font-bold 2xl:text-md text-sm">{more}</p>
      </div>
      <hr className="border border-border/20 2xl:my-3 my-2" />
    </>
  );
};

export default DjProfile;
