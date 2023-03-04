import React from "react";
import img from "./../assets/HeaderSection/Slide1.webp";
function HeaderSection() {
  return (
    <div className="container my-5">
      <div className="grid lg:grid-cols-12 gap-2 border h-80">
        <div className="bg-gray-400 col-span-12 xl:col-span-8"></div>
        <div className=" hidden xl:grid xl:col-span-4 gap-2 grid-cols-2 grid-rows-2 ">
          <div className="bg-gray-400 ">1</div>
          <div className="bg-gray-400">2</div>
          <div className="bg-gray-400">3</div>
          <div className="bg-gray-400">4</div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
