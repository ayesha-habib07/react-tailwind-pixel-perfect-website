import React from "react";
import tickarrow from "../asset/icons/tickarrow.svg";
import Checkbox from "./Checkbox";
const StoryCard = () => {
  return (
    <>
      <div className='l w-[30%] h-[232px]   p-5 className="flex justify-center flex-col items-center mb-4 bg-white '>
        <div className="flex justify-between mb-4">
          <button className="w-[80px] h-[25px] flex items-center justify-center text-white bg-deep-brownish py-[5px] px-[8px] rounded-full">
            Insight
          </button>

          <Checkbox />
        </div>
        <div>
          <p className="text-[20px] font-PlusJakartaSans font-semibold leading-[25.2px] mb-2 tracking-wide">
            Show Your locallove
          </p>
          <p className="font-PlusJakartaSans text-[12px] font-normal text-lite-gray">
            An application programming interface (API) is a way for two or more
            computer programs to communicate with each other. It is a type of
            software interface, offering a service to other pieces of software.
          </p>
        </div>
      </div>
    </>
  );
};

export default StoryCard;
