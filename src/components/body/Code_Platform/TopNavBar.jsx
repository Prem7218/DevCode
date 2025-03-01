import React from "react";
import { CODEWHEELR, CODEWHEELR_PNG } from "../../../constantData/mock_data";

const TopNavBar = ({ setDarkMode, darkMode }) => {
  return (
    <div className="flex justify-between items-center p-3 bg-gray-800 text-white">
      <div className="flex items-center gap-3">
        <a href={CODEWHEELR}>
          <img
            className="rounded-full w-[50px]"
            src={CODEWHEELR_PNG}
            alt="1"
            border="0"
          />
        </a>

        <span className="text-lg font-semibold shadow-white shadow-2xl hover:shadow-violet-200 hover:text-violet-500">
          <a href={CODEWHEELR}>
            CodeWheelr
            <span className="ml-2 shadow-white shadow-2xl hover:shadow-yellow-200 hover:text-yellow-500">Dev-Editor (1.0)</span>
          </a>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 bg-gray-700 rounded"
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
        <span className="font-semibold shadow-white shadow-2xl hover:shadow-violet-200 hover:text-violet-500">
          <a href={CODEWHEELR}>
            👤Join CodeWheelr
          </a>
        </span>
      </div>
    </div>
  );
};

export default TopNavBar;
