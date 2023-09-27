// Page of naija wives
import naijawives from "./../assets/9ja_wives.png";
import $ from "jquery";
import {
  AiFillCreditCard,
  AiFillStar,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { Reveal } from "react-reveal";
import "./../assets/stack.css";
import { MdChecklist, MdOutlineWoman, MdPeople } from "react-icons/md";
import { useEffect } from "react";
export default () => {
  useEffect(() => {});
  return (
    <div className="bg-white">
      <div id="bg" className="bg-white flex justify-end items-end sm:h-[600px]">
        <div className="sm:hidden flex w-[300px] flex-col justify-end items-start py-10 px-8 h-[300px]">
          <div className=" w-[135px] p-2 border-[3px] border-white rounded-[50%]">
            <div className="w-full flex justify-center items-center p-3 h-full bg-white rounded-[50%]">
              <img srcSet={naijawives} className="w-[80px]" />
            </div>
          </div>
        </div>
        <div className="sm:mx-[12em] sm:h-[500px] sm:items-center hidden sm:flex flex-col justify-between sm:justify-between p-4">
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
      <div className="flex sm:hidden relative">
        {/* Photo stacks */}
        <Photo_stack word={"Beautiful Wedding"} x={"Registry"} />
        <Photo_stack word={"Serah Bolton"} x={"Niger Wife"} />
        <Photo_stack word={"Loving it Here"} x={"Toniatte Olumba"} />
        <Photo_stack word={"First Train Ride"} x={"From Ibadan Lagos"} />
      </div>
      <div className="sm:h-[300px] h-[320px] flex justify-center items-center">
        <p className="sm:text-[8em] text-[4.5em] cursive">Howfa!</p>
      </div>
      <Reveal>
        <div className="sm:h-[350px] sm:flex hidden items-center sm:space-x-3 justify-center services">
          <Services_cards
            cls={"container1"}
            word={"Airport Conceige Services"}
          />
          <Services_cards
            cls={"container2"}
            word={
              <>
                Visa <br /> Services
              </>
            }
          />
          <Services_cards cls={"container3"} word={"Naija Wife Card"} />
        </div>
        <div className="sm:mt-14 large-services h-auto sm:p-4 sm:flex flex-col sm:space-y-5 hidden items-center">
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
        {/* Mobile */}

        <div className="large-services sm:hidden h-auto flex space-y-7 flex-col items-center">
          <Big_service_card
            cls={"container1"}
            title={<div>Airport Conceige Services</div>}
            word={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente aut in officiis dolore repudiandae!"
            }
          />
          <Big_service_card
            cls={"container2"}
            title={<div>Visa Services</div>}
            word={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente aut in officiis dolore repudiandae!"
            }
          />
          <Big_service_card
            cls={"container3"}
            title={<div>Niger Wife Card</div>}
            word={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente aut in officiis dolore repudiandae!"
            }
          />
          <Big_service_card
            cls={"container2"}
            title={<div>Nigeria Weddings</div>}
            word={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente aut in officiis dolore repudiandae!"
            }
          />
        </div>
        {/* Mobile ends */}
        <div className="sm:py-16 pt-16 pb-10 flex items-center space-y-4 flex-col">
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
      </Reveal>
    </div>
  );
};
function Services_cards({ cls, special1, special2, word }) {
  return (
    <div
      className={` ${special1} border-4 sm:hover:scale-[1.13] hover:scale-[1.03] duration-200 sm:hover:translate-x-5 border-green-950 `}
    >
      <div className={`${special1} border-4 border-black`}>
        <div
          className={`${cls} sm:h-[230px] overflow-y-hidden relative h-[260px] border-4 ${special2} border-green-950 sm:w-[240px]`}
        >
          <div
            onMouseOver={(e) => {
              show(e, "show");
            }}
            className=" w-full  h-full"
          >
            <div
              onMouseOut={(e) => show(e, "hide")}
              id="services"
              className="flex justify-start items-end p-4"
            >
              <p className="whitespace-break-spaces sm:text-4xl text-3xl text-white roboto">
                {word}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Big_service_card({ cls, title, word }) {
  return (
    <div className="sm:flex cards md:w-[90%] lg:w-[60%] sm:space-x-4">
      <Services_cards
        cls={cls}
        special1={"border-[#af861c]"}
        special2={"border-[#7c5d0e]"}
        word={title}
      />
      <div className="sm:w-[40%] sm:block flex flex-col sm:space-y-0 space-y-3 p-3">
        <p className="sm:text-[36px] text-[27px] sm:text-white text-[#e2ad25] roboto">
          {title}
        </p>
        <p className="text-white text-sm">{word}</p>
      </div>
    </div>
  );
}
function Other_Services({ service, icon }) {
  return (
    <div
      style={{
        background: "linear-gradient(green, #272727)",
      }}
      className="sm:w-[50%] w-[80%] hover:scale-105 duration-150 flex items-center rounded-r-full rounded-bl-full justify-between bg-[#057405] py-1"
    >
      <div></div>
      <div className="text-white sm:text-base text-sm roboto">{service}</div>
      <div className="bg-white rounded-full p-2">{icon}</div>
    </div>
  );
}
function Photo_stack({ word, x }) {
  return (
    <div className="absolute right-0 bottom-[-3em] flex items-end box w-[100px] h-[100px] text-white sm:w-[200px] sm:h-[200px] ">
      <div
        className={
          "p-2 pb-3 bg-[#0000007e]  w-full h-full justify-end flex flex-col"
        }
      >
        <p className="sm:text-4xl text-[9px] sm:px-2 roboto">{word}</p>
        <p className="sm:px-2 text-[8px] sm:text-sm">{x}</p>
      </div>
    </div>
  );
}
function show(e, op) {
  // used to animate the onmouse event show function
  if (op == "show") {
    const text = $(e.target.children[0]);
    text.animate(
      {
        top: 0,
      },
      200,
      "linear"
    );
  } else if (op == "hide") {
    const text = $(e.target);
    text.animate(
      {
        top: "100%",
      },
      200,
      "linear"
    );
  }
}
