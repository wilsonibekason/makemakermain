import React from "react";

const HeaderText = () => {
  return (
    <>
      <p className="mt-5 text-white text-3xl font-medium capitalize font-poppins">
        our image gallery
      </p>
      <p className="text-xl font-medium text-white ">
        the internet's source of{" "}
        <a className="text-white transition hover:font-semibold" href="#top">
          freely-useble image
        </a>
        . <br />
        powered by creators everywhere
      </p>
    </>
  );
};

export default HeaderText;
