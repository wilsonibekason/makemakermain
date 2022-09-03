import React from "react";
import { Link, useNavigate } from "react-router-dom";

import CountUp from "react-countup";
const Sentence = ({ stats, query }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-row gap-4 py-8">
        <div className="z-10 w-8 h-8">
          <svg
            width="32"
            height="32"
            className="text-center "
            version="1.1"
            viewBox="0 0 32 32"
            aria-hidden="false"
          >
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
          </svg>
        </div>

        {stats === 0 ? (
          <p>
            sorry no results for <b>{query}</b>
          </p>
        ) : (
          <>
            <p>
              currently showing{" "}
              <strong>{stats && <CountUp end={stats} />}</strong>
              {"  "}
              results for : <strong>{query}</strong>
            </p>
            <div className="bg-black py-1 px-2 text-ellipsis font-raleway font-normal text-sm rounded-lg text-white justify-center items-center">
              powered by {/* <Link to="unsplash.com"> */}
              <span
                className="italic hover:text-blue-300"
                onClick={() => navigate("unsplash.com", { replace: true })}
              >
                unsplash
              </span>
              {/* </Link> */}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Sentence;
