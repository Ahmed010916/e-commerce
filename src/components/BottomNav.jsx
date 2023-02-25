import React, { useEffect, useState } from "react";
import align_list from "./../assets/BottomNav/align-justify.svg";
import arrow_down from "./../assets/BottomNav/arrow-down.svg";
import close from "./../assets/BottomNav/x.svg";
import plus from "./../assets/BottomNav/plus.svg";

function BottomNav() {
  const [overlay, setoverlay] = useState("-left-[200vw]");
  const [mobilemenuseller, setmobilmenuseller] = useState("h-0");
  const [mobilemenucategor, setmobilemenucategor] = useState("h-0");

  return (
    <div>
      <div className="h-14 bg-site-1 lg:bg-site-3">
        <div className="">
          {/* Web */}
          <ul className="w-fit mx-auto relative hidden md:flex h-14  gap-10 justify-center text-lg items-center text-white">
            <a
              href="#"
              className="group h-14 flex gap-2 items-center ont-medium transition-colors duration-200 hover:text-site-1"
            >
              Categories{" "}
              <img className="mt-1" src={arrow_down} alt="arrow_down" />
              <div
                className=" transition-all  hidden bg-white  group-hover:block
            absolute -bottom-80 overflow-auto h-80 border  left-0 w-full shadow text-black
          "
              >
                <div className="flex gap-5">
                  <ul className="flex flex-col px-2 pl-5 py-4 pt-5">
                    <p className="font-bold text-lg text-gray-600">Desktop</p>
                    <div className="w-20 mr-1 bg-site-3 h-[2px] rounded-full mb-3"></div>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Motherboard
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Graphic
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Card
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Ram
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Processors
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Desktop
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Computer
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Case
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Power
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Supply
                    </a>
                  </ul>
                  <ul className="flex flex-col px-2 pl-5 py-4 pt-5">
                    <p className="font-bold text-lg text-gray-600">Notebook</p>
                    <div className="w-20 mr-1 bg-site-3 h-[2px] rounded-full mb-3"></div>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Ram
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Notebook Fans
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Notebook
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Notebook Case
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Storage
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Notebook Msi
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      GeForce RTX 30
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Series Laptops
                    </a>
                  </ul>
                  <ul className="flex flex-col px-2 pl-5 py-4 pt-5">
                    <p className="font-bold text-lg text-gray-600">Storage</p>
                    <div className="w-20 mr-1 bg-site-3 h-[2px] rounded-full mb-3"></div>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      External
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Hard
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Hard
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      SSD
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Internal
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Card
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Accessories
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Memory
                    </a>
                  </ul>
                  <ul className="flex flex-col px-2 pl-5 py-4 pt-5">
                    <p className="font-bold text-lg text-gray-600">Monitors</p>
                    <div className="w-20 mr-1 bg-site-3 h-[2px] rounded-full mb-3"></div>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Monitors
                    </a>
                  </ul>
                  <ul className="flex flex-col px-2 pl-5 py-4 pt-5">
                    <p className="font-bold text-lg text-gray-600">Network</p>
                    <div className="w-20 mr-1 bg-site-3 h-[2px] rounded-full mb-3"></div>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Router
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Switch
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Wireless
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      USB
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Adapter
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Access
                    </a>
                    <a
                      className="hover:text-site-1 my-1 text-xs space-x-1"
                      href="#"
                    >
                      Point
                    </a>
                  </ul>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="h-14 flex items-center font-medium transition-colors duration-200 hover:text-site-1"
            >
              Home
            </a>
            <a
              href="#"
              className="h-14  flex items-center font-medium transition-colors duration-200 hover:text-site-1"
            >
              About Us
            </a>
            <a
              href="#"
              className="h-14  flex items-center font-medium transition-colors duration-200 hover:text-site-1"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="h-14  flex items-center font-medium transition-colors duration-200 hover:text-site-1"
            >
              Blog
            </a>
            <a
              href="#"
              className="h-14  flex items-center font-medium transition-colors duration-200 hover:text-site-1"
            >
              Special Offers
            </a>
            <a
              href="#"
              className="group h-14 flex gap-2 items-center ont-medium transition-colors duration-200 hover:text-site-1"
            >
              Selles <img className="mt-1" src={arrow_down} alt="arrow_down" />
              <div
                className=" transition-all  hidden group-hover:block
            absolute -bottom-52 overflow-auto h-52 border  left-0 w-full shadow text-black
          "
              >
                <div className="flex gap-5">
                  <ul className="flex flex-col px-2 pl-5 py-4 pt-5">
                    <p className="font-bold text-md text-gray-600 hover:text-site-1 w-[750px]">
                      sigma
                    </p>
                    <div className="w-[750px] mr-1 bg-gray-400 h-[1px] rounded-full mb-3"></div>
                    <p className=" w-[750px] font-bold text-md text-gray-600 hover:text-site-1">
                      aula
                    </p>
                    <div className="w-[750px] mr-1 bg-gray-400 h-[1px] rounded-full mb-3"></div>
                    <p className=" w-[750px] font-bold text-md text-gray-600 hover:text-site-1">
                      ingco
                    </p>
                    <div className="w-[750px] mr-1 bg-gray-400 h-[1px] rounded-full mb-3"></div>
                    <p className=" w-[750px] font-bold text-md text-gray-600 hover:text-site-1">
                      msi
                    </p>
                    <div className="w-[750px] mr-1 bg-gray-400 h-[1px] rounded-full mb-3"></div>
                  </ul>
                </div>
              </div>
            </a>
          </ul>
          {/* Mobile */}
          <div
            onClick={() => {
              setoverlay("left-0");
            }}
            className="h-14 flex md:hidden cursor-pointer justify-end mr-5 items-center"
          >
            <img src={align_list} alt="align_list" />
          </div>
        </div>
      </div>

      <div
        onClick={() => {
          setoverlay("-left-[200vw]");
        }}
        className={`opacity-30 absolute ${overlay} top-0 w-screen h-screen bg-gray-500`}
      ></div>

      <div
        className={`transition-all duration-300 overflow-auto  absolute top-0 ${overlay} h-screen w-[70vw] bg-[#333] text-white`}
      >
        <img
          className="z-10 cursor-pointer float-right mr-5 mt-20"
          src={close}
          onClick={() => {
            setoverlay("-left-[200vw]");
          }}
          alt=""
        />
        <div className="clear-both"></div>
        <div className="mx-5 mt-1 flex justify-around ">
          <a
            className="hover:text-site-1 shadow-inner px-3 py-1 shadow-site-1"
            href="#"
          >
            Login
          </a>
          <a
            className="hover:text-site-1 shadow-inner px-3 py-1 shadow-site-1"
            href="#"
          >
            Register
          </a>
        </div>
        <div
          onClick={() => {
            setmobilemenucategor((pre) => {
              const a = pre === "h-32" ? "h-0" : "h-32";
              return a;
            });
          }}
          className="group cursor-pointer mt-3 mx-5 border-y border-gray-600 min-h-[2.25rem] "
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium uppercase group-hover:text-site-1">
              Categories
            </p>
            <div className="w-8 h-9 bg-gray-600 flex justify-center items-center">
              <img src={plus} alt="plus" />
            </div>
          </div>
          <div
            className={`${mobilemenucategor}  transition-all overflow-hidden text-site-3 text-sm font-bold  px-3  bg-white`}
          >
            <div className="py-3">
              <p className="my-1">SIGMA</p>
              <p className="my-1">AULA</p>
              <p className="my-1">INGCO</p>
              <p className="my-1">MSI</p>
            </div>
          </div>
        </div>
        <div className="group cursor-pointer mt-3 mx-5 border-y border-gray-600 min-h-[2.25rem] flex items-center justify-between">
          <p className="text-sm font-medium uppercase group-hover:text-site-1">
            Home
          </p>
        </div>
        <div className="group cursor-pointer mt-3 mx-5 border-y border-gray-600 min-h-[2.25rem] flex items-center justify-between">
          <p className="text-sm font-medium uppercase group-hover:text-site-1">
            About us
          </p>
        </div>
        <div className="group cursor-pointer mt-3 mx-5 border-y border-gray-600 min-h-[2.25rem] flex items-center justify-between">
          <p className="text-sm font-medium uppercase group-hover:text-site-1">
            Contact us
          </p>
        </div>
        <div className="group cursor-pointer mt-3 mx-5 border-y border-gray-600 min-h-[2.25rem] flex items-center justify-between">
          <p className="text-sm font-medium uppercase group-hover:text-site-1">
            Blog
          </p>
        </div>
        <div className="group cursor-pointer mt-3 mx-5 border-y border-gray-600 min-h-[2.25rem] flex items-center justify-between">
          <p className="text-sm font-medium uppercase group-hover:text-site-1">
            Special Offer
          </p>
        </div>
        <div
          onClick={() => {
            setmobilmenuseller((pre) => {
              const a = pre === "h-32" ? "h-0" : "h-32";
              return a;
            });
          }}
          className="group cursor-pointer mt-3 mx-5 border-y border-gray-600 min-h-[2.25rem] "
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium uppercase group-hover:text-site-1">
              seller
            </p>
            <div className="w-8 h-9 bg-gray-600 flex justify-center items-center">
              <img src={plus} alt="plus" />
            </div>
          </div>
          <div
            className={`${mobilemenuseller} transition-all overflow-hidden text-site-3 text-sm font-bold  px-3  bg-white`}
          >
            <div className="py-3">
              <p className="my-1">SIGMA</p>
              <p className="my-1">AULA</p>
              <p className="my-1">INGCO</p>
              <p className="my-1">MSI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
