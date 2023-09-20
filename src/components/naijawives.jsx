import BG from "./../assets/background.png";
import Ghana from "../assets/reels/Ghana.jpg";
import Haiti from "../assets/reels/Haiti.jpg";
import Japan from "../assets/reels/Japan.jpg";
import Kenya from "../assets/reels/Kenya.jpg";
import Korea from "../assets/reels/Korea.jpg";
import naijawives from "./../assets/9ja_wives.png";
export default () => {
  return (
    <div className="bg-white">
      <div
        style={{
          background: `url(${BG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="bg-white flex justify-end items-end h-[400px] sm:h-[600px]"
      >
        <div className="sm:mx-[12em] h-[500px] items-center flex flex-col justify-between p-4">
          <div className="sm:w-[150px] sm:h-[150px] p-2 border-[3px] border-white rounded-[50%]">
            <div className="w-full flex justify-center items-center h-full bg-white rounded-[50%]">
              <img srcSet={naijawives} className="sm:w-[65%]" />
            </div>
          </div>
          <div className="flex relative">
            {/* Photo stacks */}
            <Photo_stack word={"Beautiful Wedding"} x={"Registry"} />
          </div>
        </div>
      </div>
    </div>
  );
};
function Photo_stack({ word, x }) {
  return (
    <div className="absolute right-0 bottom-0 flex items-end box text-white w-[200px] h-[200px] ">
      <div className="p-2 pb-3 bg-[#0000007e] h-full justify-end flex flex-col">
        <p className="sm:text-4xl px-2 roboto">{word}</p>
        <p className="px-2 text-sm">{x}</p>
      </div>
    </div>
  );
}
