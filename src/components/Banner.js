import React from "react";

const Banner = () => {
  const descriptionEllipsis = (string, numberOfString) => {
    return string?.length > numberOfString
      ? string.substr(0, numberOfString - 1) + "..."
      : string; //it takes a substring from 0 to numberOfString - 1 and appends ... in place of the rest of the string.
  };

  return (
    <header className="bg-banner bg-cover bg-center h-[448px] relative text-white object-contain">
      <div className="ml-[30px] pt-[140px]">
        <h1 className="text-[48px] font-extrabold pb-3">Movie Name</h1>
        <div>
          <button className="cursor-pointer text-white outline-none border-none font-bold rounded-sm pl-8 pr-8 mr-4 pt-2 pb-2 bg-btn-bg hover:bg-[#e6e6e6] hover:text-black hover:transition-all duration-300">
            Play
          </button>
          <button className="cursor-pointer text-white outline-none border-none font-bold rounded-sm pl-8 pr-8 mr-4 pt-2 pb-2 bg-btn-bg hover:bg-[#e6e6e6] hover:text-black hover:transition-all duration-300">
            My List
          </button>
        </div>
        <h1 className="w-[720px] pt-[16px] text-[15px] max-w-[360px] h-[80px]">
          {descriptionEllipsis(
            `This is a movie description Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequuntur veniam unde deleniti soluta quo, a non
          incidunt obcaecati qui deleniti earum, voluptas non possimus aliquam
          velit totam!`,
            100
          )}
        </h1>
      </div>
      <div />
    </header>
  );
};

export default Banner;

//The substring of a string is a portion of the original string that starts at
//a specified index and includes a specified number of characters.

//string?.length checks if the string parameter is not null or
//undefined and then accesses its length property.
