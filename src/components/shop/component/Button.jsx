import React from "react";

const Button = ({ mt, message }) => {
  return (
    <button
      type="button"
      className={`border border-blue-400 text-gray-300 mt-${mt} active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
    >
      {message}
    </button>
  );
};

export default Button;
