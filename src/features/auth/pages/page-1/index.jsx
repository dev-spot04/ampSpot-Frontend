import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Star,
  YouTube,
} from "@mui/icons-material";
import React from "react";
import { assets } from "../../../../assets";

const LoginPage1 = () => {
  return (
    <main className="bg-background min-h-screen grid md:grid-cols-2 grid-cols-1 text-white">
      <section className="flex flex-col gap-10 px-10 pb-10 min-h-screen">
        <div className="flex justify-between items-center my-3">
          <p className="text-xl font-bold">AMP Spot</p>
          <select id="lang" name="lang" className="bg-background text-xs">
            <option value="English (UK)">English (UK)</option>
            <option value="English (US)">English (US)</option>
          </select>
        </div>
        <div className="flex flex-col gap-3 max-w-sm justify-center m-auto w-full">
          <h1 className="font-bold text-xl">Let's get started</h1>
          <form className="flex flex-col max-w-sm">
            <label htmlFor="name" className="text-xs my-3 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              className="bg-background outline-none border border-border/50 focus:border-border rounded p-2 px-4 text-sm text-white placeholder:text-border"
            />
            <label htmlFor="email" className="text-xs my-3 font-bold">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter Your Email"
              className="bg-background outline-none border border-border/50 focus:border-border rounded p-2 px-4 text-sm text-white placeholder:text-border"
            />
            <label htmlFor="email" className="text-xs my-3 font-bold">
              Password
            </label>
            <input
              type="text"
              id="email"
              placeholder="Type a strong password"
              className="bg-background outline-none border border-border/50 focus:border-border rounded p-2 px-4 text-sm text-white placeholder:text-border"
            />
            <p className="text-xs my-2">
              Password must be at least 6 characters
            </p>
            <div className="flex gap-2 my-3">
              <input type="checkbox" className="rounded-full" id="tc-agree" />
              <label className="text-xs" htmlFor="tc-agree">
                I agree to all of{" "}
                <a href="/" className="text-border hover:underline">
                  terms & conditions
                </a>
              </label>
            </div>
          </form>
          <button className="text-center bg-border p-2 rounded">
            Register Now
          </button>
          <button className="text-center bg-border p-2 rounded">
            Sign up with Google
          </button>
          <p className="text-xs text-center my-2">
            Already have an account? <span className="text-border">Log in</span>
          </p>
          <div className="flex justify-between items-center">
            <p className="text-border text-sm">Need Help?</p>
            <div className="flex gap-2">
              <Instagram sx={{ color: "#223B6A" }} />
              <Facebook sx={{ color: "#223B6A" }} />
              <YouTube sx={{ color: "#223B6A" }} />
            </div>
          </div>
        </div>
      </section>
      <section
        className="hidden md:flex min-h-full overflow-hidden"
        style={{
          background: `url(${assets.auth.registration})no-repeat center center/cover`,
        }}
      >
        <div className="self-end max-w-xs mx-auto my-8 rounded p-4 backdrop-blur-xl">
          <p className="mb-5">
            "Music has been used for therapeutic purposes in a variety of
            settings"
          </p>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">Adrin Laue</p>
              <p className="text-sm">Founder Member</p>
            </div>
            <div>
              <div>
                <Star sx={{ fontSize: "1rem" }} />
                <Star sx={{ fontSize: "1rem" }} />
                <Star sx={{ fontSize: "1rem" }} />
                <Star sx={{ fontSize: "1rem" }} />
              </div>
              <div className="flex justify-between items-center">
                <ChevronLeft className="border rounded-full" />
                <ChevronRight className="border rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage1;
