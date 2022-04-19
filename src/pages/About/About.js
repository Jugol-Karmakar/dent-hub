import React from "react";
import profile from "../../images/jugol.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <h2 className="text-3xl font-black text-center my-4">My Future Goal</h2>
      <div className="">
        <img className="h-60 mx-auto rounded-full" src={profile} alt="" />
        <h2 className="text-2xl text-center my-3 font-bold text-black">
          {" "}
          Jugol Karmakar
        </h2>
        <div className="container mx-auto">
          <p className="px-24 text-lg font-medium text-zinc-600">
            After completing the web development course my next wish The next
            five-six months target is To create some very good projects And so I
            can add to GitHub profile and my cv .After doing a good project, I
            want to do an internship in a good company And there is the desire
            to do freelancing as well And after all there is a desire to do a
            good job Font-end. It feels better to work So if I work on the
            intern, I will feel more comfortable doing font-end development. I
            haven't thought about anything for the next 5 to 6 months but I want
            to do a lot of good with it, earn a lot of money and be very rich
            and do a lot of things.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
