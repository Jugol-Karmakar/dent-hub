import React from "react";
import profile from "../../images/jugol.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <h2 className="text-3xl font-black text-center my-4">My Future Goal</h2>
      <div className="">
        <img className="h-60 mx-auto rounded-full" src={profile} alt="" />
        <h2 className="text-xl text-center"> Jugol Karmakar</h2>
        <div className="container mx-auto">
          <p>
            Now i am a final year student of CSE Deperment and Continue
            Programimg Web development Course.When Course was finish and i am
            trying to intern and multinationl company in font end development
            and grow my skill .then i am try a to a job and also freelancing{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
