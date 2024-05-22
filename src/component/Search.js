import React from "react";

const Search = ({ SearchClass,Searchcions }) => {
  return (
    <div className="">
      <div className="relative">
        <input
          type="search"
          className={`${SearchClass} pl-10 outline-none w-[447px] h-[42px] rounded-[20px] border border-lite font-normal text-sm leading-4 text-lite-gray`}
          placeholder="Search for reel, captions, etc."
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src={Searchcions} alt="alt" />
        </div>
      </div>
    </div>
  );
};

export default Search;
