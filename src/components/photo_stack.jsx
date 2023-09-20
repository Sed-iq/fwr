import { useEffect } from "react";
import $ from "jquery";
import America from "../assets/reels/America.jpg";
import Australia from "../assets/reels/Australia.jpg";
import Cambodia from "../assets/reels/Cambodia.jpg";
import Denmark from "../assets/reels/Denmark.jpg";
import Egypt from "../assets/reels/Egypt.jpg";
import Finland from "../assets/reels/Finland.jpg";
import Gambia from "../assets/reels/Gambia.jpg";
import Ghana from "../assets/reels/Ghana.jpg";
import Haiti from "../assets/reels/Haiti.jpg";
import Japan from "../assets/reels/Japan.jpg";
import Kenya from "../assets/reels/Kenya.jpg";
import Korea from "../assets/reels/Korea.jpg";
import Mexico from "../assets/reels/Mexico.jpg";
import Philippines from "../assets/reels/Philippines.jpg";
import Rwanda from "../assets/reels/Rwanda.jpg";
import Scotland from "../assets/reels/Scotland.jpg";
import Singapore from "../assets/reels/Singapore.jpg";
import SouthAfrica from "../assets/reels/SouthAfrica.jpg";
import Sweden from "../assets/reels/Sweden.jpg";
export default () => {
  useEffect(() => {
    window.getZIndex = function (e) {
      var z = window.getComputedStyle(e).getPropertyValue("z-index");
      if (isNaN(z)) return window.getZIndex(e.parentNode);
      return z;
    };
    setTimeout(() => {
      fxn();
    }, 1000);
  }, []);

  return (
    <div className=" relative sm:overflow-x-visible sm:overflow-y-visible overflow-y-hidden overflow-x-hidden flex sm:h-auto h-[250px] justify-center items-center">
      <img
        srcSet={America}
        alt=""
        className="absolute card rotate-[15deg] lg:top-0 md:top-10 top-6 z-[0] lg:w-[300px] w-[200px]"
      />
      <img
        srcSet={Australia}
        alt=""
        className="absolute card rotate-[-15deg] lg:top-0 md:top-10 top-6 z-[1] lg:w-[300px] w-[200px]"
      />
      <img
        srcSet={Cambodia}
        alt=""
        className="absolute card rotate-[10deg] lg:top-0 md:top-10 top-6 z-[2] lg:w-[300px] w-[200px]"
      />
      <img
        srcSet={Denmark}
        alt=""
        className="absolute card rotate-[-10deg] lg:top-0 md:top-10 top-6 z-[3] lg:w-[300px] w-[200px]"
      />
      <img
        srcSet={Egypt}
        alt=""
        className="absolute card rotate-[-5deg] lg:top-0 md:top-10 top-6 z-[4] lg:w-[300px] w-[200px]"
      />
      <img
        srcSet={Finland}
        alt=""
        className="absolute card rotate-[5deg] lg:top-0 md:top-10 top-6 z-[5] lg:w-[300px] w-[200px]"
      />{" "}
      <img
        srcSet={Gambia}
        alt=""
        className="absolute card rotate-[10deg] lg:top-0 md:top-10 top-6 z-[6] lg:w-[300px] w-[200px]"
      />{" "}
      <img
        srcSet={Ghana}
        alt=""
        className="absolute card rotate-[-15deg] lg:top-0 md:top-10 top-6 z-[7] lg:w-[300px] w-[200px]"
      />{" "}
      <img
        srcSet={Haiti}
        alt=""
        className="absolute card rotate-[20deg] lg:top-0 md:top-10 top-6 z-[8] lg:w-[300px] w-[200px]"
      />{" "}
      <img
        srcSet={Japan}
        alt=""
        className="absolute card rotate-[-20deg] lg:top-0 md:top-10 top-6 z-[9] lg:w-[300px] w-[200px]"
      />{" "}
      <img
        srcSet={Kenya}
        alt=""
        className="absolute card rotate-[-15deg] lg:top-0 md:top-10 top-6 z-[10] lg:w-[300px] w-[200px]"
      />{" "}
      <img
        srcSet={Korea}
        alt=""
        className="absolute card rotate-[15deg] lg:top-0 md:top-10 top-6 z-[11] lg:w-[300px] w-[200px]"
      />{" "}
      <img
        srcSet={Mexico}
        alt=""
        className="absolute card rotate-[-5deg] lg:top-0 md:top-10 top-6 z-[12] lg:w-[300px] w-[200px]"
      />{" "}
      <img
        srcSet={Philippines}
        alt=""
        className="absolute card rotate-[10deg] lg:top-0 md:top-10 top-6 z-[13] lg:w-[300px] w-[200px]"
      />{" "}
      <img
        srcSet={Rwanda}
        alt=""
        className="absolute card rotate-[15deg] lg:top-0 md:top-10 top-6 z-[14] lg:w-[300px] w-[200px]"
      />{" "}
      <img
        srcSet={Scotland}
        alt=""
        className="absolute card rotate-[-10deg] lg:top-0 md:top-10 top-6 z-[15] lg:w-[300px] w-[200px]"
      />{" "}
      <img
        srcSet={Singapore}
        alt=""
        className="absolute card rotate-[5deg] lg:top-0 md:top-10 top-6 z-[16] lg:w-[300px] w-[200px]"
      />{" "}
      <img
        srcSet={SouthAfrica}
        alt=""
        className="absolute card rotate-[-5deg] lg:top-0 md:top-10 top-6 z-[17] lg:w-[300px] w-[200px]"
      />
      <img
        srcSet={Sweden}
        alt=""
        className="absolute card rotate-[-5deg] lg:top-0 md:top-10 top-6 z-[18] lg:w-[300px] w-[200px]"
      />
    </div>
  );
};
function fxn() {
  // Runs the animate_card stack continously
  var i = 19;
  var id = setInterval(() => {
    animate_card(i);
    i -= 1;
    if (i == 0) i = 19;
  }, 1000);
}
async function animate_card(i) {
  const cards = document.querySelectorAll(".card");
  let z_index = window.getZIndex(cards[cards.length - 1]);
  var crd = $(cards[i - 1]);
  crd.animate(
    {
      left: "100%",
    },
    500,
    "linear",
    () => {
      crd.css("z-index", z_index - 1);
      shiftZUp(cards, window.getZIndex, i).then(() => {
        crd.animate(
          {
            left: "31.5442%",
          },
          500,
          () => {}
        );
      });
    }
  );
}
function shiftZUp(e, fxn, i) {
  // Shifts zindex of other elements up the stack
  return new Promise((resolve, reject) => {
    e.forEach((item, index) => {
      var z = Number(fxn(item)); // z-index of all elements
      $(item).css("z-index", z + 1);
      if (index == i - 1) {
        // makes top item bottom
        $(item).css("z-index", 0);
        resolve(true);
      }
    });
  });
}
