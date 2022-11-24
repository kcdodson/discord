import React from "react";
import { AiFillCompass } from "react-icons/ai";
import {
  BsFillEmojiSmileFill,
  BsFillPlayCircleFill,
  BsMusicNoteBeamed,
} from "react-icons/bs";
import { FaGraduationCap, FaHeadphones } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { GiConsoleController } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { TbAtom } from "react-icons/tb";
import lmfao from "../photos/lmfao.jpg";
import Topic from "./Topic";

const Discover = () => {
  const topics = [
    { title: "Home", icon: <AiFillCompass /> },
    { title: "Gaming", icon: <GiConsoleController /> },
    { title: "Music", icon: <BsMusicNoteBeamed /> },
    { title: "Education", icon: <FaGraduationCap /> },
    { title: "Science & tech", icon: <TbAtom /> },
    { title: "Content Creator", icon: <BsFillPlayCircleFill /> },
    { title: "Anime & Manga", icon: <BsFillEmojiSmileFill /> },
    { title: "Movies & TV", icon: <FiMonitor /> },
  ];
  return (
    <div className="hidden xl:flex flex-col justify-between bg-[#303136] w-[18rem] shrink-0  h-screen sticky top-0">
      <div className="p-4">
        {/* Title */}
        <p className="text-white font-bold text-[24px]">Discover</p>
        {/* Topics */}
        <div className="mt-4 space-y-4">
          {topics.map((topic) => (
            <Topic title={topic.title} icon={topic.icon} />
          ))}
        </div>
      </div>

      {/* Profile Settings */}
      <div className="bg-[#292b2f] h-[5rem] flex text-white/80 items-center px-4 justify-between">
        <div className="flex items-center ">
          <img src={lmfao} alt="321" className="w-12 h-12 rounded-full" />
          <div className=" pl-2">
            <p>Wumpus</p>
            <p className="text-[14px] text-gray-400">#12345</p>
          </div>
        </div>

        <div className=" flex space-x-3 text-[20px]">
          <MdKeyboardVoice />
          <FaHeadphones />
          <IoMdSettings className=" " />
        </div>
      </div>
    </div>
  );
};

export default Discover;
