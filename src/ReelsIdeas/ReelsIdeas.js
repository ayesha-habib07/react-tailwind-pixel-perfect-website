import React from "react";
import Sidebar from "../component/Sidebar";
import Search from "../component/Search";
import Picwithtext from "../component/Picwithtext";
import Openccallender from "../component/Openccallender";
import StoryCard from "../component/StoryCard";
const ReelsIdeas = () => {
  return (
    <div className="flex gap-x-[80px]  bg-[#F9FAF5]      ">
      <Sidebar />
      <div className=" flex flex-col  w-full px-8 ">
        <div className="flex pt-4 justify-between flex-col">
          <div className="flex justify-end mb-4">
            <Search SearchClass={`mx-auto`} />
          </div>
          <div className="flex justify-between  h-48 w-full ">
            <Picwithtext
              textBeforeSPan="Let’s create a "
              span="Script"
              textAfterSpan="for your next Reel"
              textBelowHeading=""
            />
            <Openccallender />
          </div>

          <div className="flex justify-between items-center pr-8 my-8 ">
            <p className="font-messiri font-normal text-2xl leading-9 text-sky-off">
              Reels Ideas
            </p>
            <div className="flex ">
              <p className="block font-semibold text-base leading-5 text-green cursor-pointer  border-b-4 border-b-green pb-4 px-8">
                Lead generators
              </p>
              <p className="block font-semibold text-base leading-5 text-lite-gray .active:text-green cursor-pointer  border-b-2 border-b-lite-gray pb-4 px-8">
                Engagement
              </p>
              <p className="block font-semibold text-base leading-5 text-lite-gray .active:text-green cursor-pointer  border-b-2 border-b-lite-gray pb-4 px-8">
                Local
              </p>
              <p className="block font-semibold text-base leading-5 text-lite-gray active:text-green cursor-pointer  border-b-2 border-b-lite-gray pb-4 px-8">
                Add tags here
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap">
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
        </div>
      </div>
    </div>
  );
};

export default ReelsIdeas;
