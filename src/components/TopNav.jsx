import React from "react";
import refresh from "./../assets/TopNav/refresh.svg";
import heart from "./../assets/TopNav/heart.svg";
import check from "./../assets/TopNav/check.svg";
import egypt from "./../assets/TopNav/egypt.png";

function TopNav() {
  return (
    <div className="h-10 bg-[#f5f5f5] border border-[#eee]">
      <div className="container">
        <div className="flex h-10 justify-center md:justify-between items-center text-xs text-[#555]">
          <div className="hidden md:flex  gap-3">
            <p>Welcome to Our Online Store !</p>
            <p className="flex gap-1 items-center">
              <span>
                <img src={refresh} alt="refresh" loading="lazy" />
              </span>{" "}
              Compare
            </p>
            <p className="flex gap-1 items-center">
              <span>
                <img src={heart} alt="refresh" loading="lazy" />
              </span>{" "}
              My Wish List
            </p>
          </div>
          <div className="flex gap-3">
            <p className="text-black font-bold">Call us: 3309999</p>
            <p className="flex gap-1 items-center text-green-600">
              <span>
                <img loading="lazy" src={check} alt="refresh" />
              </span>{" "}
              out of stock
            </p>{" "}
            <p className="flex gap-1 items-center">
              <span>
                <img loading="lazy" className="w-3" src={egypt} alt="refresh" />
              </span>{" "}
              عربى
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
