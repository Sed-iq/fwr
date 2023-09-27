import { useEffect, useState } from "react";
import logo from "./../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
export default () => {
  const [ico, setIco] = useState(false); // used to show if drop is activated
  return (
    <div className="w-full sticky z-[100] top-0 flex items-center bg-black sm:h-[80px] h-[100px]">
      <div className="w-full relative flex items-center justify-between px-10 p-4">
        <div>
          <img alt="" srcSet={logo} className="w-[50px]" />
        </div>
        <div
          id="options"
          className={`sm:relative sm:opacity-[1] opacity-[0] sm:text-sm right-0 flex left-0 absolute sm:bg-transparent bg-black sm:w-auto w-full sm:top-auto top-[80px] items-center flex-col sm:justify-start sm:flex-row sm:space-x-7 text-base sm:flex text-[#f5df8a] sm:items-center`}
        >
          <p className="duration-200 cursor-pointer hover:border-[#f5df8a] border-b-2 py-[7px] border-transparent">
            HOME
          </p>
          <p className="duration-200 cursor-pointer hover:border-[#f5df8a] border-b-2 py-[7px] border-transparent">
            ABOUT
          </p>
          <p className="duration-200 cursor-pointer hover:border-[#f5df8a] border-b-2 py-[7px] border-transparent">
            COUNTRIES
          </p>
          <p className="duration-200 cursor-pointer hover:border-[#f5df8a] border-b-2 py-[7px] border-transparent">
            BLOG
          </p>
          <p className="duration-200 cursor-pointer hover:border-[#f5df8a] border-b-2 py-[7px] border-transparent">
            TESTIMONIALS
          </p>
          <p className="duration-200 cursor-pointer sm:hover:border-[#f5df8a] border-b-2 py-[7px] border-transparent">
            CONTACT US
          </p>
          <div className=" flex sm:p-0 py-4 space-x-9">
            <button className="py-2 hover:border-transparent hover:bg-[#f5df8a] hover:text-black duration-200 px-5 border-2 text-sm border-[#f5df8a] rounded-lg">
              Sign Up
            </button>
            <button className="py-2 hover:border-transparent hover:bg-[#f5df8a] hover:text-black duration-200 px-5 border-2 text-sm border-[#f5df8a] rounded-lg">
              Login
            </button>
          </div>
        </div>
        <div className="sm:hidden block">
          {ico == true ? (
            <AiOutlineClose
              onClick={() => show(ico, setIco)}
              className="text-3xl text-[#f5df8a]"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => show(ico, setIco)}
              className="text-3xl text-[#f5df8a]"
            />
          )}
        </div>
      </div>
    </div>
  );
};
function show(ico, setIco) {
  const options_tab = document.querySelector("#options");
  let opacity = Number(
    window.getComputedStyle(options_tab).getPropertyValue("opacity")
  );
  // options_tab.style.opacity =;
  if (ico == false) {
    animate(options_tab, opacity);
    setIco(true);
  } else {
    animate(options_tab, opacity);
    setIco(false);
  }
}
function animate(ref, point) {
  console.log(point);
  if (point == 0) {
    let it = setInterval(() => {
      point = point + 0.25345;
      ref.style.opacity = point;
      if (point >= 1) clearInterval(it);
    }, 20);
  } else {
    if (point == 1) {
      let it = setInterval(() => {
        point = point - 0.25345;
        ref.style.opacity = point;
        if (point < 0) clearInterval(it);
      }, 20);
    }
  }
}
