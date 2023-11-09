import { ChevronLeft, ChevronRight, Star, YouTube } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../../../assets";
import agent from "../../../../services/agent";
import useApiMutation from "../../../../hooks/useApiMutation";
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../../../redux/userSlice";
const LoginPage2 = () => {
  const { mutate, isLoading, isSuccess, isError, error, data } = useApiMutation(
    agent.Auth.update,
  );
  const { user } = useSelector(state => state.user)

  const dispatch = useDispatch()
  const [plug, setPlug] = useState(-1);
  const [musicLinks, setMusicLinks] = useState({
    spotifyLink: "",
    soundCloudLink: "",
    youtubeLink: "",
  });
  useEffect(() => {
    setMusicLinks({
      ...musicLinks,
      spotifyLink: user.spotifyLink,
      soundCloudLink: user.soundCloudLink,
      youtubeLink: user.youtubeLink,
    });
  }, [user])
  const handleLinkChange = (platform, value) => {
    setMusicLinks({
      ...musicLinks,
      [platform]: value,
    });

  };
  const navigate = useNavigate();
  const nextHandler = () => {
    const query = `?email=${user.email}`
    mutate(musicLinks, query)
    // navigate("/page-3");
  };
  const skipHandler = () => {
    const query = `?email=${user.email}`
    mutate({}, query)
    navigate("/page-3");
  };
  const backHandler = () => {
    navigate("/register");
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
      navigate("/page-3");
    } else if (isError) {
      const errorMessage = error?.response?.data?.message || error.message;
      toast.error(errorMessage);
    }
  }, [isSuccess, isError, data, error]);

  return (
    <main className="bg-background min-h-screen grid md:grid-cols-2 grid-cols-1 text-white">
      <section className="flex flex-col gap-10 pb-10">
        <div className="w-[90%] md:w-[70%] mx-auto h-full flex flex-col">
          <div className="flex justify-between items-center my-3">
            {/* <button
              type="button"
              className="flex items-center text-xs gap-1 font-bold text-lightBlue 2xl:text-[18px]"
              onClick={backHandler}
            >
              <ChevronLeft />
              <p className="font-bold">Back</p>
  </button>*/}
            <p className="2xl:text-3xl font-bold">AMP Spot</p>
          </div>
          <div className="flex flex-col items-center gap-3 w-full mt-[20%] 2xl:mt-[40%]">
            <h1 className="font-bold text-xl mx-auto my-4">
              How about a plug?
            </h1>
            <input
              type="text"
              className={`text-center text-[16px] p-3 rounded w-full outline-none placeholder:text-white 2xl:h-[70px] ${
                plug === 0 ? "bg-blue1" : "bg-[#63D471]"
              }`}
              placeholder="Spotify Link"
              defaultValue={user.spotifyLink}
              value={musicLinks.spotifyLink}
              onChange={(e) => handleLinkChange('spotifyLink', e.target.value)}
            />
            {/* <button */}
            {/*   className={`text-center p-3 rounded w-full ${ */}
            {/*     plug === 0 ? "bg-blue1" : "bg-[#63D471]" */}
            {/*   }`} */}
            {/*   onClick={() => setPlug(plug !== 0 ? 0 : -1)} */}
            {/* > */}
            {/*   Spotify Link */}
            {/* </button> */}
            <input
              type="text"
              className={`text-center p-3 rounded w-full outline-none placeholder:text-white 2xl:h-[70px] ${
                plug === 0 ? "bg-blue1" : "bg-[#F6871F]"
              }`}
              placeholder="Soundcloud Link"
              defaultValue={user.soundCloudLink}
              value={musicLinks.soundCloudLink}
              onChange={(e) => handleLinkChange('soundCloudLink', e.target.value)}
            />
            {/* <button */}
            {/*   className={`text-center ${ */}
            {/*     plug === 1 ? "bg-blue1" : "bg-[#F6871F]" */}
            {/*   } p-3 rounded w-full`} */}
            {/*   onClick={() => setPlug(plug !== 1 ? 1 : -1)} */}
            {/* > */}
            {/*   Soundcloud Link */}
            {/* </button> */}
            <input
              type="text"
              className={`text-center p-3 rounded w-full outline-none placeholder:text-white 2xl:h-[70px] ${
                plug === 0 ? "bg-blue1" : "bg-[#FF0000]"
              }`}
              placeholder="Youtube Link"
              value={musicLinks.youtubeLink}
              onChange={(e) => handleLinkChange('youtubeLink', e.target.value)}
            />
            {/* <button */}
            {/*   className={`text-center ${ */}
            {/*     plug === 2 ? "bg-blue1" : "bg-[#FF0000]" */}
            {/*   } p-3 rounded w-full flex gap-2 justify-center items-center`} */}
            {/*   onClick={() => setPlug(plug !== 2 ? 2 : -1)} */}
            {/* > */}
            {/*   <YouTube /> */}
            {/*   YouTube Link */}
            {/* </button> */}
            <div className="grid grid-cols-2 w-full gap-2 2xl:h-[70px]">
              <button
                type="button"
                to="/page-3"
                className="text-center p-3 rounded w-full"
                onClick={skipHandler}
              >
                Skip
              </button>
              <button
                type="button"
                to="/page-3"
                className="text-center bg-blue1 p-3 rounded w-full hover:bg-blue1/95 2xl:h-[70px]"
                onClick={nextHandler}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        className="hidden md:flex justify-center h-screen overflow-hidden"
        style={{
          background: `url(${assets.auth.backgrounds.bg_8})no-repeat center center/cover`,
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

export default LoginPage2;
