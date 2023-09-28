import { useEffect, useState } from "react";
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
  window.getZIndex = function (e) {
    var z = window.getComputedStyle(e).getPropertyValue("z-index");
    if (isNaN(z)) return window.getZIndex(e.parentNode);
    return z;
  };
  const [loadedCount, setCount] = useState(0);
  const images = [
    America,
    Australia,
    Cambodia,
    Denmark,
    Egypt,
    Finland,
    Gambia,
    Ghana,
    Haiti,
    Japan,
    Kenya,
    Korea,
    Mexico,
    Philippines,
    Rwanda,
    Scotland,
    Singapore,
    SouthAfrica,
    Sweden,
  ];

  if (loadedCount >= images.length) {
    setTimeout(() => {
      fxn();
    }, 1600); // Just to wait for extra before images fully load
  } // Checks if all images loaded

  return (
    <div
      id="stack"
      className=" relative sm:overflow-x-visible sm:overflow-y-visible overflow-y-hidden overflow-x-hidden flex sm:h-auto h-[250px] justify-center items-center"
    >
      {images.map((image, index) => {
        return (
          <Image key={index} src={image} i={index + 1} setCount={setCount} />
        );
      })}
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
function Image({ src, i, setCount }) {
  var tilt;
  if (Math.round(Math.random() * 1) == 0) tilt = -35;
  else tilt = 35;
  const rotate = `${Math.floor(tilt * Math.random())}deg`;
  const onLoad = () => {
    setCount(i);
  };
  return (
    <img
      style={{
        rotate: rotate,
        zIndex: `${i}`,
      }}
      srcSet={src}
      onLoad={onLoad}
      className={`absolute card lg:top-0 md:top-10 top-6 lg:w-[300px] w-[200px]`}
    />
  );
}
