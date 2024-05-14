import React from "react";
import lang from "../Utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[5%] flex justify-center">
      <form action="" className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 rounded-lg  col-span-9 "
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 bg-slate-400 rounded-lg col-span-3 m-4">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
