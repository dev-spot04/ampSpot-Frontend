import { ChevronLeft, ChevronRight, Star } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../../../assets";
import useApiMutation from "../../../../hooks/useApiMutation";
import agent from "../../../../services/agent";
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../../../redux/userSlice";
const SetSound = () => {
  const { mutate, isLoading, isSuccess, isError, error, data } = useApiMutation(
    agent.Auth.update,
  );
  const { user } = useSelector(state => state.user)

  const dispatch = useDispatch()
  const [sounds, setSounds] = useState([
    { value: "Rock", selected: false },
    { value: "Pop", selected: false },
    { value: "Hip Hop", selected: false },
    { value: "Electronic", selected: false },
    { value: "Jazz", selected: false },
    { value: "Classical", selected: false },
    { value: "Country", selected: false },
    { value: "R&B", selected: false },
    { value: "Blues", selected: false },
    { value: "Reggae", selected: false },
    { value: "Metal", selected: false },
    { value: "Folk", selected: false },
    { value: "Indie", selected: false },
    { value: "Alternative", selected: false },
    { value: "Rap", selected: false },
    { value: "Soul", selected: false },
    { value: "Funk", selected: false },
    { value: "Disco", selected: false },
    { value: "Gospel", selected: false },
    { value: "Punk", selected: false },
    { value: "Latin", selected: false },
    { value: "World", selected: false },
    { value: "Reggaeton", selected: false },
    { value: "Techno", selected: false },
    { value: "House", selected: false },
    { value: "Trance", selected: false },
    { value: "Dance", selected: false },
    { value: "Ambient", selected: false },
    { value: "Chillout", selected: false },
    { value: "Acoustic", selected: false },
    { value: "Instrumental", selected: false },
  ]);
  useEffect(() => {
    setSounds((prev) => prev.map((item) =>
      user.sounds.find(((s) => s.sound === item.value)) ? {
        value: item.value,
        selected: true
      } : {
        value: item.value,
        selected: false
      }
    ))
  }, [user])
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/plug");
  };
  const skipHandler = () => {
    const query = `?email=${user.email}`
    mutate({}, query);
    navigate("/set-profile");
  };
  const nextHandler = () => {
    const query = `?email=${user.email}`
    const payload = sounds
      .map(item => {
        if (item.selected) return { sound: item.value };
        return null;
      })
      .filter(value => value !== null);
    mutate({ sounds: payload }, query);
  };

  useEffect(() => {
    if (isSuccess && data) {
      // toast.success(data.message);
      dispatch(update({
        user: {
          ...user,
          ...data.user
        }
      }))
      navigate("/set-profile");
    } else if (isError) {
      const errorMessage = error?.response?.data?.message || error.message;
      toast.error(errorMessage);
    }
  }, [isSuccess, isError, data, error]);

  return (
    <main className="bg-background min-h-screen grid md:grid-cols-2 grid-cols-1 text-white">
      <section className="flex flex-col gap-10 pb-10">
        <div className="flex justify-between items-center my-3 w-[90%] md:w-[70%] mx-auto">
          <button
            type="button"
            className="flex items-center text-xs gap-1 font-bold text-lightBlue 2xl:text-[18px]"
            onClick={backHandler}
          >
            <ChevronLeft />
            <p className="font-bold">Back</p>
          </button>
          <p className="2xl:text-3xl font-bold">AMP Spot</p>
        </div>
        <div className="flex flex-col items-center gap-8 m-auto w-[90%] md:w-[70%]">
          <h1 className="font-bold text-2xl 2xl:text-[30px] mx-auto">
            Set your sound
          </h1>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 w-full 2xl:text-[18px] text-[14px]">
            {sounds.map((sound, index) => (
              <>
                <button
                  className={`${sound.selected ? "bg-blue1" : "bg-[#0D1322]"
                    } rounded p-1`}
                  key={`sound-${index}`}
                  onClick={() => {
                    const tempSounds = [...sounds];
                    tempSounds[index].selected = !tempSounds[index].selected;
                    setSounds(tempSounds);
                  }}
                >
                  {sound.value}
                </button>
              </>
            ))}
          </div>
          <div className="grid grid-cols-2 w-80 max-w-full gap-2">
            <button
              onClick={skipHandler}
              type="button"
              to="/set-profile"
              className="text-center p-3 rounded w-full"
            >
              Skip
            </button>
            <button
              onClick={nextHandler}
              to="/set-profile"
              className="text-center bg-blue-600 p-3 rounded w-full"
            >
              Next
            </button>
          </div>
        </div>
      </section>
      <section
        className="hidden md:flex justify-center h-screen overflow-hidden"
        style={{
          background: `url(${assets.auth.backgrounds.bg_1})no-repeat center center/cover`,
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

export default SetSound;