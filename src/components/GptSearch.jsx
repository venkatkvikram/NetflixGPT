import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestion from "./GptSearchSuggestion";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed md:absolute -z-10">
        <img className="h-screen object-cover"src={BG_URL} />
      </div>
      <div >
        <GptSearchBar />
        <GptSearchSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
