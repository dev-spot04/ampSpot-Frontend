import React from "react";

const Registration = () => {
  return (
    <main className="bg-background min-h-screen grid md:grid-cols-2 grid-cols-1 text-white">
      <section className="flex flex-col gap-10 px-10 pb-10">
        <div className="flex justify-between items-center my-3">
          <p className="text-xl font-bold">AMP Spot</p>
          <select id="lang" name="lang" className="bg-background text-xs">
            <option value="English (UK)">English (UK)</option>
            <option value="English (US)">English (US)</option>
          </select>
        </div>
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
          <p className="text-xs my-2">Password must be at least 6 characters</p>
          <div className="flex gap-2">
            <input type="checkbox" className="rounded-full" id="tc-agree" />
            <label className="text-xs" htmlFor="tc-agree">
              I agree to all of{" "}
              <a href="/" className="text-border hover:underline">
                terms & conditions
              </a>
            </label>
          </div>
        </form>
        <div className="flex flex-col gap-2 max-w-sm">
          <button className="text-center bg-border p-2 rounded">
            Register Now
          </button>
          <button className="text-center bg-border p-2 rounded">
            Sign up with Google
          </button>
          <p className="text-xs text-center my-2">
            Already have an account? <span className="text-border">Log in</span>
          </p>
        </div>
        <div>
          <span className="text-border text-sm">Need Help?</span>
        </div>
      </section>
      <section className="hidden md:block bg-border"></section>
    </main>
  );
};

export default Registration;
