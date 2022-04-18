import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="text-3xl my-3 font-semibold">
        Difference Between Authentication and Authorization?
      </h1>
      <div className="py-4">
        <h2 className="text-xl font-bold">Authentication ? </h2>
        <p className="text-base text-zinc-700">
          Authentication is the act of validating that users are whom they claim
          to be. This is the first step in any security process.{" "}
        </p>
        <p className="text-base text-zinc-700">
          Authentication, in the form of a key. The lock on the door only grants
          access to someone with the correct key in much the same way that a
          system only grants access to users who have the correct credentials.
          Verifies credentials .Through passwords, biometrics, one-time pins, or
          apps
        </p>
      </div>
      <div>
        <h2 className="text-xl font-bold">Authorization ? </h2>
        <p className="text-base text-zinc-700">
          Authorization in system security is the process of giving the user
          permission to access a specific resource or function. This term is
          often used interchangeably with access control or client privilege.
        </p>
        <p className="text-base text-zinc-700">
          Authorization, in the form of permissions. Once inside, the person has
          the authorization to access the kitchen and open the cupboard that
          holds the pet food. The person may not have permission to go into the
          bedroom for a quick nap. Grants or denies permissions Through settings
          maintained by security teams{" "}
        </p>
      </div>

      <div className="py-5">
        <h2 className="text-xl font-bold">Why are using firebase ?</h2>
        <p className="text-base text-zinc-700">
          Firebase is a less technical and time-saving alternative to writing
          full-fledged backend code for dynamic apps. You might also want to
          consider leveraging this tool if you eventually wish to host and
          manage your app in the cloud. Being serverless, Firebase removes the
          need to worry about the technicalities of cloud server configuration.
          As a Google Cloud service, it also gives you access to other Google
          products and features, like Google Drive and Sheets. For instance, you
          can import dummy data from Google Sheets and use it temporarily to
          serve your app.
        </p>

        <h2 className="text-xl font-bold mt-5">
          What other options do you have to implement authentication?
        </h2>
        <p className="text-base text-zinc-700">
          {" "}
          Other ways to authenticate can be through cards, retina scans, voice
          recognition, and fingerprints and react firebase hooks
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mt-5 pb-4">
          What other services does firebase provide other than authentication ?{" "}
        </h2>
        <p className="text-base text-zinc-700">
          <li>Cloud Firestore</li>
          <li>Cloud Functions</li>
          <li>Authentication</li>
          <li>Hosting</li>
          <li>Cloud Storage</li>
          <li>Google Analytics</li>
          <li>Predictions</li>
          <li>Cloud Messaging</li>
          <li>Dynamic Links</li>
          <li>Remote Config</li>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
