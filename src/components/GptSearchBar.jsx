import React, { useRef } from "react";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //api call to open ai and get movie results
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query " +
      searchText.current.value +
      " only give me names of 5 movies, seperated like the example result gie ahead. Example Result: Bahubali,Pushpa,Devara,Don,Golmaal";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: "hi" }],
      model: "gpt-3.5-turbo",
      temperature: 0.7, // Adjusts randomness
      max_tokens: 50, // Limits response size
    });
    console.log("GPT", gptResults.choices);
  };

  return (
    <div className="pt=[30%] md:pt-[10%] flex justify-center">
      <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-1/2 bg-black grid grid-cols-12">
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 bg-white"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 bg-red-700 m-4 text-white rounded-lg col-span-3" onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
