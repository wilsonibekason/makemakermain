import React, { useState, useEffect, useRef, useMemo } from "react";
import { FcSearch } from "react-icons/fc";
import { Suggestions } from "../gallery";
const SearchForm = ({ onSearchPhoto }) => {
  const mostSearched = [
    "STEMS",
    "CAD",
    "Programming",
    "Science",
    "Digital Fabrication",
    "Arduino",
  ];

  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const ref = useRef();
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (search.trim("") !== "") onSearchPhoto(search);
    setSearch("");
    setSuggestions("");
    setShowSuggestions(false);
  };

  const fetchSuggestions = () => {
    fetch(`https://api.datamuse.com/sug?s=${search}`)
      .then((response) => response.json())
      .then((data) => {
        const suggestionArray = data;
        console.log(`suggestionArray ${data}`);
        setSuggestions({ suggestions: suggestionArray });
      })
      .catch((error) => console.log(error));
  };
  const onInputChange = (e) => {
    let search = e.target.value;
    setSearch(search);
    if (search.length > 2) fetchSuggestions(search);
  };
  const onInputClick = () => {
    setShowSuggestions(true);
  };
  const onSuggestionClick = (e) => {
    onSearchPhoto(e);
    setSearch("");
    setSuggestions("");
    setShowSuggestions(false);
  };
  const handleOutsideClick = (e) => {
    if (!ref.current || !ref.current.contains(e.target)) {
      setShowSuggestions((prev) => !prev);
    }
    //  else if (ref.current.contains(e.target)) return;
    setShowSuggestions((prev) => prev);
  };

  const handleoutsideClick = (e) => {
    if (ref.current.contains(e.target)) {
      return;
    }
    setShowSuggestions(false);
  };

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      setShowSuggestions((prev) => !prev);
      onSearchPhoto(e);
      setSearch("");
      setSuggestions("");
    }
  };

  const handleKeyEscape = (e) => {
    if (e.key === "Escape") {
      setShowSuggestions((prev) => prev);
      setSearch("");
      setSuggestions("");
    }
  };

  useEffect(() => {
    if (showSuggestions) {
      document.addEventListener("mousedown", handleoutsideClick);
    } else {
      document.addEventListener("mousedown", handleoutsideClick);
    }

    return () => {
      document.addEventListener("mousedown", handleoutsideClick);
    };
  }, [showSuggestions]);
  return (
    <>
      <form className="relative mt-4" ref={ref} onSubmit={onSubmitForm}>
        <span className="absolute top-[10px] left-[8px] invert-[0.5] z-10">
          {/* <FcSearch /> */}
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
          className="z-[9] block w-[30vw] h-[45px] font-raleway font-normal text-sm indent-10 border border-solid outline-none "
          placeholder="Search free high-resolution images "
          id="query"
          onChange={onInputChange}
          onClick={(e) => onInputClick(!showSuggestions)}
          // value={search}
        />
        {showSuggestions ? (
          <Suggestions
            autocompleted={fetchSuggestions}
            suggestions={suggestions}
            onClick={(e) => onSuggestionClick(e)}
          />
        ) : (
          <div className="inline-block  text-black text-ellipsis hover:bg-black bg-white rounded mt-8 py-2 px-3 mx-auto hover:text-white">
            {mostSearched.map((suggestion, index) => (
              <span
                className="p-1 text-sm cursor-pointer font-normal transition-all  duration-900 ease-linear hover:font-semibold "
                key={index}
                onClick={() => onSuggestionClick(suggestion)}
              >
                {suggestion}
              </span>
            ))}
          </div>
        )}
      </form>
    </>
  );
};

export default SearchForm;
