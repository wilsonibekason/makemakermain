const SearchForm = () => {
  const mostSearched = ["Arduino "];
  return (
    <>
      {/* <form className="relative mt-4" ref={ref} onSubmit={onSubmitForm}> */}
      <form className="relative mt-4">
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
          //onChange={onInputChange}
          //onClick={(e) => onInputClick(!showSuggestions)}
          // value={search}
        />

        <div className="inline-block  text-black text-ellipsis hover:bg-black bg-white rounded mt-8 py-2 px-3 mx-auto hover:text-white">
          {mostSearched.map((suggestion, index) => (
            <span
              className="p-1 text-sm cursor-pointer font-normal transition-all  duration-900 ease-linear hover:font-semibold "
              key={index}
              // onClick={() => onSuggestionClick(suggestion)}
            >
              {suggestion}
            </span>
          ))}
        </div>
      </form>
    </>
  );
};

export default SearchForm;
