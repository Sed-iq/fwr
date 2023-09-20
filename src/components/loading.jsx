import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import {} from "react-icons/di";
export default () => {
  return (
    <div
      id="loader"
      className="h-screen flex justify-center items-center text-white w-full p-4 bg-[#000000d7]"
    >
      <div className="flex sm:space-y-0 space-y-3 items-center flex-col">
        <AiOutlineLoading className="animate-spin text-xl sm:text-3xl" />
        <p className="sm:text-base text-sm">Please Wait...</p>
      </div>
    </div>
  );
};
