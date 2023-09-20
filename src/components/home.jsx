// Home page

import Nav from "./nav";
import Video_bg from "./video_bg";
import bg from "../assets/bk2.jpg";
import line from "../assets/line2.png";
import ghana from "../assets/nigeria3.jpeg";
import ghana_flag from "../assets/ghana_flag.png";
import nigeria_flag from "../assets/nigeria_flag.png";
import gambia_flag from "../assets/gambia_flag.png";
import gambia from "../assets/gambia.jpeg";
import nigeria from "../assets/nigeria2.jpeg";
import Footer from "./footer";
import $ from "jquery";
import Photo_stack from "./photo_stack";
import { Link } from "react-router-dom";
import Loading from "./loading";
import { useEffect, useState } from "react";
export default () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    window.addEventListener("load", () => {
      $("#loader").fadeOut(300, () => setLoad(false));
    });
    return () => {
      window.removeEventListener("load", () => {
        console.log("done");
      });
    };
  }, [load]);
  return load == true ? (
    <Loading />
  ) : (
    <div className="min-h-full bg-black">
      <Nav />
      <Video_bg />
      <Photo_swapsection /> {/* Photo swap section */}
      <div className="my-10 bg-black text-white pt-[6em]">
        <p className="sm:text-[50px] text-3xl italic roboto text-center">
          CHOOSE YOUR DOMINION
        </p>
        <div className="flex sm:flex-row flex-col mt-5 justify-center items-center sm:px-10 sm:space-y-0 space-y-10 sm:space-x-5">
          <Link to={"/9jawives"} className="flex flex-col">
            <div className="bg-white flex overflow-hidden p-2 justify-center items-center lg:w-[370px] sm:w-[300px] md:w-[300px] w-[370px] h-[280px] rounded-lg">
              <img
                srcSet={nigeria}
                className="w-full duration-300 hover:scale-125 hover:brightness-50 h-[99%] rounded-xl"
              />
            </div>
            <div className="flex h-[110px] items-center w-full justify-center space-x-5">
              <p className="lg:text-6xl md:text-3xl text-5xl italic">Nigeria</p>

              <img srcSet={nigeria_flag} alt="" className="w-10" />
            </div>
          </Link>

          <div className="flex flex-col">
            <div className="bg-white flex overflow-hidden  p-2 justify-center items-center lg:w-[370px] sm:w-[300px] md:w-[300px] w-[370px] h-[280px] rounded-lg">
              <img
                srcSet={gambia}
                className="w-full duration-300 hover:scale-125 hover:brightness-50 h-[99%] rounded-xl"
              />
            </div>
            <div className="flex h-[110px] items-center w-full justify-center space-x-5">
              <p className="lg:text-6xl md:text-3xl text-5xl italic">Gambia</p>

              <img srcSet={gambia_flag} alt="" className="w-16" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="bg-white flex overflow-hidden  p-2 justify-center items-center lg:w-[370px] sm:w-[300px] md:w-[300px] w-[370px] h-[280px] rounded-lg">
              <img
                srcSet={ghana}
                className="w-full duration-300 hover:scale-125 hover:brightness-50 h-[99%] rounded-xl"
              />
            </div>
            <div className="flex h-[110px] items-center w-full justify-center space-x-5">
              <p className="lg:text-6xl md:text-3xl text-5xl italic">Ghana</p>

              <img srcSet={ghana_flag} alt="" className="w-10" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
function Photo_swapsection() {
  return (
    <div
      style={{ background: `url(${bg})` }}
      className="flex sm:flex-row flex-col  sm:h-[380px] sm:items-center bg-contain bg-no-repeat sm:p-4 sm:justify-center sm:space-x-10 w-full"
    >
      <div className="sm:w-1/2 p-4 h-full">
        <Photo_stack />
      </div>
      <div className="sm:w-1/2 h-full text-white flex items-center justify-center sm:p-0 p-4 ">
        <div className="flex flex-col sm:m-0 pb-10 sm:h-auto h-[90%] space-y-2 sm:space-y-5 items-center rounded-lg w-[100%] bg-[#000000ea]">
          <div className="flex sm:pt-8 pt-4 justify-center">
            <img srcSet={line} className=" w-[80%] sm:w-[70%]" />
          </div>
          <p
            style={{ fontFamily: "cursive" }}
            className="sm:text-4xl text-2xl text-[#ad942e]"
          >
            Mission Statement
          </p>
          <p className="text-center font-sans text-base sm:text-base w-[80%]">
            Intercultural Marriages <br /> are both rewarding and challenging.
            <br />
            Our mission is to encourage, support and guide our <br /> Foreign
            Wives.
          </p>
        </div>
      </div>
    </div>
  );
}
