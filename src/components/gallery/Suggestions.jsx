import React from "react";
import { AiOutlineFileDone } from "react-icons/ai";
const Suggestions = ({ suggestions, onClick, autocompleted }) => {
  const handleChange = (selectedValue) => {
    onClick(selectedValue);
  };

  let suggestionArray = suggestions.suggestions;
  const autocomplete =
    suggestionArray &&
    !!suggestionArray.length &&
    suggestionArray.map((suggestion, index) => {
      return (
        <li
          className="pt-[5px] pr-[10px] cursor-pointer hover:bg-[#f0f0f0] w-full "
          key={index}
          onClick={() => handleChange(suggestion.word)}
        >
          <a
            href="#top"
            className="text-[#111111] hover:bg-[#f0f0f0] flex flex-row  flex-start items-center justify-between "
          >
            <AiOutlineFileDone />

            {suggestion.word}
          </a>
        </li>
      );
    });
  console.log(`autocomplete result ${autocompleted}`);
  console.log(`autocomplete result ${suggestions}`);
  console.log(`autocomplete result ${suggestionArray}`);
  return (
    <ul className="z-[999] relative bg-white w-[30vw] mt-0 mr-auto p-0  overflow-y-auto border border-solid rounded-b-[5px] text-sm text-left list-none shadow-xl flex flex-col justify-center items-center py-2 ">
      {autocomplete}
      {suggestionArray ? (
        <li
          className="pt-[5px] pr-[10px] cursor-pointer hover:bg-[#f0f0f0]"
          style={{ fontStyle: "italic", fontWeight: "bold" }}
        >
          Suggestions: {Object.keys(suggestionArray).length}
        </li>
      ) : (
        <li
          className="pt-[5px] pr-[10px] cursor-pointer hover:bg-[#f0f0f0]"
          style={{ fontStyle: "italic", fontWeight: "bold" }}
        >
          No suggestions
        </li>
      )}
    </ul>
  );
};

export default Suggestions;
