import React from "react";
import logo from "./../assets/MiddleNav/logo.png";
import shopping_bag from "./../assets/MiddleNav/shopping-bag.svg";
import user from "./../assets/MiddleNav/user.svg";
import search from "./../assets/MiddleNav/search.svg";

function MiddelNav() {
  return (
    <div>
      <div className="container">
        <div className="flex justify-between items-center my-3">
          <div className="cursor-pointer lg:hidden">
            <img src={search} alt="search" loading="lazy" />
          </div>
          <div>
            <img className="w-40 lg:48" src={logo} loading="lazy" alt="" />
          </div>
          <div className="flex gap-10 items-center ">
            <form className=" hidden lg:block">
              <input
                placeholder="Keyword hero ..."
                className="flex-shrink h-12 border  w-[20rem] lg:w-[35rem] rounded-l-full pl-5 font-normal text-sm outline-none focus:border-site-1"
                type="text"
              />
              <button className="bg-site-1 h-12 text-white px-5 rounded-r-full py-2">
                Search
              </button>
            </form>
            <div className=" hidden xl:flex ">
              <img className="h-10 w-10" src={user} loading="lazy" alt="" />
              <div>
                <p className="text-gray-600 text-xs">My Account</p>
                <p className="text-md font-medium">
                  <span className="cursor-pointer">Login </span> /{" "}
                  <span className="cursor-pointer">Register </span>
                </p>
              </div>
            </div>
            <div className="flex cursor-pointer">
              <img
                className="h-9 w-9"
                src={shopping_bag}
                loading="lazy"
                alt=""
              />
              <div className="hidden lg:block">
                <p className="text-gray-600 font-medium text-sm">My cart</p>
                <p className="text-xs text-site-1 ">(00.00LE)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddelNav;
