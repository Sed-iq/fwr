import BG from "./../assets/background.png";
import naijawives from "./../assets/9ja_wives.png";
import {
  AiFillCopyrightCircle,
  AiFillCreditCard,
  AiFillStar,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { MdChecklist, MdOutlineWoman, MdPeople } from "react-icons/md";
export default () => {
  return (
    <div className="bg-white">
      <div
        style={{
          background: `url(${BG}) fixed`,
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
          <div className="flex sm:mx-[14em] relative">
            {/* Photo stacks */}
            <Photo_stack word={"Beautiful Wedding"} x={"Registry"} />
            <Photo_stack word={"Serah Bolton"} x={"Niger Wife"} />
            <Photo_stack word={"Loving it Here"} x={"Toniatte Olumba"} />
            <Photo_stack word={"First Train Ride"} x={"From Ibadan Lagos"} />
          </div>
        </div>
      </div>

      <div className="sm:h-[300px] flex justify-center items-center">
        <p className="sm:text-[8em] font-[cursive]">Howfa!</p>
      </div>
      <div className="sm:h-[350px] sm:flex items-center sm:space-x-3 justify-center services">
        <Services_cards cls={"container1"} />
        <Services_cards cls={"container2"} />
        <Services_cards cls={"container3"} />
      </div>
      <div className="sm:mt-14 large-services h-auto sm:p-4 sm:flex sm:space-y-5 flex-col items-center">
        <Big_service_card
          cls={"container1"}
          title={
            <div>
              Airport <br /> Conceige <br /> Services
            </div>
          }
          word={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente aut in officiis dolore repudiandae!"
          }
        />
        <Big_service_card
          cls={"container2"}
          title={
            <div>
              Visa <br /> Services
            </div>
          }
          word={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente aut in officiis dolore repudiandae!"
          }
        />
        <Big_service_card
          cls={"container3"}
          title={
            <div>
              Niger <br /> Wife Card
            </div>
          }
          word={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente aut in officiis dolore repudiandae!"
          }
        />
        <Big_service_card
          cls={"container2"}
          title={
            <div>
              Nigeria <br /> Weddings
            </div>
          }
          word={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente aut in officiis dolore repudiandae!"
          }
        />
      </div>

      <div className="sm:py-16 sm:flex items-center sm:space-y-4 flex-col">
        <Other_Services
          service={"9ja Wife Card"}
          icon={<AiFillCreditCard className="text-[#008000] sm:text-2xl" />}
        />
        <Other_Services
          service={"Travelling Checklist"}
          icon={<MdChecklist className="text-[#008000] sm:text-2xl" />}
        />
        <Other_Services
          service={"NWC Club"}
          icon={<MdPeople className="text-[#008000] sm:text-2xl" />}
        />
        <Other_Services
          service={"Special Marriage Registery"}
          icon={<MdOutlineWoman className="text-[#008000] sm:text-2xl" />}
        />
        <Other_Services
          service={"Accomdations"}
          icon={<AiFillStar className="text-[#008000] sm:text-2xl" />}
        />
      </div>
      <div className="pb-4">
        <p className="text-green-800 italic text-center roboto font-extrabold">
          Copyright 9ja Wives Reign
          <sup>
            <AiOutlineCopyrightCircle className="inline" />
          </sup>
          2023
        </p>
      </div>
    </div>
  );
};
function Services_cards({ cls, special1, special2 }) {
  return (
    <div
      className={` ${special1} border-4 hover:scale-[1.13] duration-200 hover:translate-x-5  border-green-950 `}
    >
      <div className={`${special1} border-4 border-black `}>
        <div
          className={`${cls} sm:h-[230px] border-4 ${special2} border-green-950 sm:w-[240px]`}
        >
          <div></div>
        </div>
      </div>
    </div>
  );
}
function Big_service_card({ cls, title, word }) {
  return (
    <div className="sm:flex cards sm:w-[60%] sm:space-x-4">
      <Services_cards
        cls={cls}
        special1={"border-[#af861c]"}
        special2={"border-[#7c5d0e]"}
      />
      <div className="w-[40%] p-3">
        <p className="sm:text-[36px] roboto text-white">{title}</p>
        <p className="text-white text-sm">{word}</p>
      </div>
    </div>
  );
}
function Other_Services({ service, icon }) {
  return (
    <div
      style={{
        background: "linear-gradient(green, black)",
      }}
      className="sm:w-[50%] flex items-center rounded-r-full rounded-bl-full justify-between  bg-[#057405] py-1"
    >
      <div></div>
      <div className="text-white roboto">{service}</div>
      <div className="bg-white rounded-full p-2">{icon}</div>
    </div>
  );
}
function Photo_stack({ word, x }) {
  return (
    <div className="absolute right-0 bottom-[-3em] flex items-end box text-white w-[200px] h-[200px] ">
      <div
        className={"p-2 pb-3 bg-[#0000007e] h-full justify-end flex flex-col"}
      >
        <p className="sm:text-4xl px-2 roboto">{word}</p>
        <p className="px-2 text-sm">{x}</p>
      </div>
    </div>
  );
}
