import React from "react";

const Suggestions = ({ suggestions, onClick }) => {
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
          className="pt-[5px] pr-[10px] cursor-pointer hover:bg-[#f0f0f0]"
          key={index}
          onClick={() => handleChange(suggestion.word)}
        >
          <a href="#top" className="text-[#111111] hover:bg-[#f0f0f0]">
            {suggestion.word}
          </a>
        </li>
      );
    });
  return (
    <ul className="z-[999] relative bg-white w-[30vw] mt-0 mr-auto p-0  overfolw-y-auto border border-solid rounded-b-[5px] text-sm text-left list-none shadow-md flex justify-center items-center py-2">
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
