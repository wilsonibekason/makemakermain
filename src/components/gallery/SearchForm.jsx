import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Suggestions from "./Suggestions";
const SearchForm = ({ onSearchPhoto }) => {
  const mostSearched = [
    "Wallpapers",
    "Nature",
    "Architecture",
    "Fashion",
    "Film",
    "Animals",
  ];

  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const ref = useRef();

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (search.trim() !== "") onSearchPhoto(search);
    setSearch("");
    setSuggestions("");
    setShowSuggestions(false);
  };

  const fetchSuggestions = () => {
    fetch(`https://api.datamuse.com/sug?s=${search}`)
      .then((response) => response.json())
      .then((data) => {
        const suggestionArray = data;
        console.log(data);
        setSuggestions({ suggestions: suggestionArray });
      });
  };

  const onInputChange = (e) => {
    let search = e.target.value;
    setSearch(search);
    if (search.length > 2) {
      setShowSuggestions((prev) => !prev);
    }
  };

  const onInputClick = () => {
    setShowSuggestions((prev) => !prev);
  };

  const onSuggestionClick = (e) => {
    onSearchPhoto(e);
    setSearch("");
    setSuggestions("");
    setShowSuggestions((prev) => prev);
  };

  const handleOutsideClick = (e) => {
    if (!ref.current || !ref.current.contains(e.target)) {
      setShowSuggestions((prev) => !prev);
    }
    setShowSuggestions(false);
  };

  const handleoutsideClick = (e) => {
    if (ref.current.contains(e.target)) {
      return;
    }
    setShowSuggestions((prev) => prev);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setShowSuggestions((prev) => !prev);
    }
  };

  const handleKeyDownEsc = (e) => {
    if (e.key === "Escape") {
      setShowSuggestions((prev) => !prev);
    }
  };

  const handleKeyDownEnter = (e) => {
    if (e.key === "Enter") {
      onSearchPhoto(e);
      setSearch("");
      setSuggestions("");
      setShowSuggestions((prev) => prev);
    }
  };

  useEffect(() => {
    if (showSuggestions) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.addEventListener("mousedown", handleoutsideClick);
    };
  }, [showSuggestions]);
  return (
    <>
      <form className="absolute " ref={ref} onSubmit={onSubmitForm}>
        <span className="absolute top-[5px] left-[8px] invert-[0.5] z-10">
          <svg
            width="20"
            height="20"
            version="1.1"
            viewBox="0 0 25 25"
            aria-hidden="false"
          >
            <path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path>
          </svg>
        </span>
        <input
          type="text"
          // serach input
          className="z-[9] block w-[30vw] h-[45px] font-raleway font-normal text-sm indent-10 border border-solid outline-none "
          placeholder="Search free high-resolution images "
          id="query"
          onChange={onInputChange}
          onClick={(e) => onInputClick(!showSuggestions)}
          value={search}
        />
        {showSuggestions ? (
          <Suggestions
            suggestions={suggestions}
            onClick={(e) => onSuggestionClick(e)}
          />
        ) : (
          <div className="inline-block overflow-hidden text-[#fff]  text-ellipsis">
            {mostSearched.map((suggestion, index) => {
              return (
                <span
                  className="p-1 text-white text-[13px] cursor-pointer  font-normal transition-all duration-500 hover:font-semibold "
                  key={index}
                  onClick={() => onSuggestionClick(suggestion)}
                >
                  {suggestion}
                </span>
              );
            })}
          </div>
        )}
      </form>
    </>
  );
};

export default SearchForm;
