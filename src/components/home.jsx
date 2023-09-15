// Home page

import Nav from "./nav";
import Video_bg from "./video_bg";
import bg from "../assets/bk2.jpg";
import line from "../assets/line2.png";
import nigeria from "../assets/nigeria3.jpeg";
import ghana_flag from "../assets/ghana_flag.png";
import gambia_flag from "../assets/gambia_flag.png";
import gambia from "../assets/gambia.jpeg";
export default () => {
  return (
    <div>
      <Nav />
      <Video_bg />
      <Photo_swapsection /> {/* Photo swap section */}
      <div className="my-10 pt-[6em]">
        <p className="sm:text-[50px] italic roboto text-center">
          CHOOSE YOUR DOMINION
        </p>
        <div className="flex mt-5 justify-center items-center px-10 space-x-5">
          <div className="flex flex-col">
            <div className="bg-white flex overflow-hidden  p-2 justify-center items-center w-[370px] h-[280px] rounded-lg">
              <img
                srcSet={nigeria}
                className="w-full duration-300 hover:scale-125 hover:brightness-50 h-[99%] rounded-xl"
              />
            </div>
            <div className="flex h-[110px] items-center w-full justify-center space-x-5">
              <p className="text-6xl italic">Nigeria</p>
              <img srcSet={ghana_flag} alt="" className="w-10" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="bg-white flex overflow-hidden  p-2 justify-center items-center w-[370px] h-[280px] rounded-lg">
              <img
                srcSet={nigeria}
                className="w-full duration-300 hover:scale-125 hover:brightness-50 h-[99%] rounded-xl"
              />
            </div>
            <div className="flex h-[110px] items-center w-full justify-center space-x-5">
              <p className="text-6xl italic">Gambia</p>
              <img srcSet={gambia_flag} alt="" className="w-16" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="bg-white flex overflow-hidden  p-2 justify-center items-center w-[370px] h-[280px] rounded-lg">
              <img
                srcSet={nigeria}
                className="w-full duration-300 hover:scale-125 hover:brightness-50 h-[99%] rounded-xl"
              />
            </div>
            <div className="flex h-[110px] items-center w-full justify-center space-x-5">
              <p className="text-6xl italic">Ghana</p>
              <img srcSet={ghana_flag} alt="" className="w-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
function Photo_swapsection() {
  return (
    <div
      style={{ background: `url(${bg})` }}
      className="flex h-[380px] items-center bg-contain bg-no-repeat p-4 justify-center space-x-10 w-full"
    >
      <div className="w-1/2 h-full"></div>
      <div className="w-1/2 h-full flex items-center justify-center p-4 ">
        <div className="flex flex-col h-[90%] space-y-5 items-center rounded-lg w-[100%] bg-[#000000ea]">
          <div className="flex pt-10 justify-center">
            <img srcSet={line} className="w-[70%]" />
          </div>
          <p
            style={{ fontFamily: "cursive" }}
            className="text-4xl text-[#ad942e]"
          >
            Mission Statement
          </p>
          <p className="text-center font-sans text-xl my-4 w-[80%]">
            Intercultural Marriages <br /> are both rewarding and challenging.{" "}
            <br />
            Our mission is to encourage, support and guide our <br /> Foreign
            Wives.
          </p>
        </div>
      </div>
    </div>
  );
}
