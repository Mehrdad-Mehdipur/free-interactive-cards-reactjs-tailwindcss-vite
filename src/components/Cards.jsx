import { useState } from "react";
import { cardsInfo } from "../constants";
import { getImageURL } from "../utils/image-util";
import InfoIcon from "../assets/images/svg/InfoIcon";

const Cards = () => {
  const [showInfoText, setShowInfoText] = useState(false);

  const handleInfoIconClick = () => {
    setShowInfoText(!showInfoText);
  };

  return (
    <div className="cards relative w-full md:w-[60%] h-full md:h-[60%] bg-zinc-800/50 rounded-lg overflow-hidden">
      <img
        id="car_img"
        src={getImageURL("vertical-porsche.jpeg")}
        alt="vertical-porsche"
        className="absolute w-full h-full object-cover"
      />
      <ul className="cards_wrapper absolute w-full h-full flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-1">
        {cardsInfo &&
          cardsInfo.map((item) => (
            <li
              key={item.id}
              className="card w-full h-1/3 flex flex-grow md:w1/3 items-center justify-end overflow-hidden bg-blue-950"
            >
              <div className="card_info w-[60%] h-full items-start p-2 bg-gradient-to-r from-black/90">
                <InfoIcon className="info_icon w-5 " />

                <div
                  className="info_text w-full h-full text-white text-[14px] overflow-y-auto bg-red-800"
                  dir="rtl"
                >
                  <div className="details" dir="ltr">
                    <p className="topic font-black text-white/40 -mb-1">
                      Zero To Top
                    </p>

                    <div className="wrapper flex flex-row items-end space-x-1">
                      <h3 className="text-sm font-medium">
                        {item.zeroToHundred}
                      </h3>
                      <h5 className="font-extralight">
                        {item.zeroToHundredText}
                      </h5>
                    </div>
                  </div>

                  <div className="details" dir="ltr">
                    <p className="topic font-black text-white/40 -mb-1">
                      Top Speed
                    </p>

                    <div className="wrapper flex flex-row items-end space-x-1">
                      <h3 className="text-sm font-medium">{item.topSpeed}</h3>
                      <h5 className="font-extralight">{item.topSpeedText}</h5>
                    </div>
                  </div>

                  <div className="details" dir="ltr">
                    <p className="topic font-black text-white/40 -mb-1">
                      Torque
                    </p>

                    <div className="wrapper flex flex-row items-end space-x-1">
                      <h3 className="text-sm font-medium">{item.torque}</h3>
                      <h5 className="font-extralight">{item.torqueText}</h5>
                    </div>
                  </div>

                  <div className="details" dir="ltr">
                    <p className="topic font-black text-white/40 -mb-1">
                      Engine
                    </p>

                    <div className="wrapper flex flex-col items-start">
                      <h5 className="font-extralight">{item.engine}</h5>
                    </div>
                  </div>

                  <div className="details" dir="ltr">
                    <p className="topic font-black text-white/40 -mb-1">
                      Ability
                    </p>

                    <div className="wrapper flex flex-col items-start">
                      <h5 className="font-extralight">{item.ability}</h5>
                    </div>
                  </div>

                  <div className="details" dir="ltr">
                    <p className="topic font-black text-white/40 -mb-1">
                      Website
                    </p>

                    <div className="wrapper flex flex-col items-start">
                      <a
                        href={item.websiteURL}
                        className="font-extralight text-blue-400 cursor-pointer hover:text-blue-200"
                      >
                        {item.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="logo w-[40%] h-full flex flex-col items-center justify-center space-y-1">
                <img
                  className="w-16 h-16 object-contain"
                  src={getImageURL(item.logoImage)}
                  alt={item.brandName}
                />

                <img
                  className="w-20"
                  src={getImageURL(item.logoTextImage)}
                  alt="porsche text logo"
                />

                <h4 className="font-normal text-[13px] text-white">
                  {item.model}
                </h4>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cards;
