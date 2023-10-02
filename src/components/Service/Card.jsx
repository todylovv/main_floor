import React from "react";

const Card = ({ title, imageSrc, description }) => {
  return (
    <div className="relative mt-10 mb-10">
      {/* Карточка с анимацией */}
      <div
        className="ml-5 mr-5 relative h-full transform border-2 bg-white transition-transform hover:-translate-x-2 hover:-translate-y-2 rounded-lg"
      >
        {/* Контент карточки */}
        <div className="p-4">
          <div className="flex flex-row">
            <img alt="" src={imageSrc} className="h-8 w-8 sm:h-8 sm:w-8" />
            <h3 className="text-l font-medium sm:text-xl ml-4 -mt-2 max-w-full text-black">
              {title}
            </h3>
          </div>
          <p className="mt-4 text-sm sm:text-base text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
