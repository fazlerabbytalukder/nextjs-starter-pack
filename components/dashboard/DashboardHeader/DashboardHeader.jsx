"use client";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import UserDropdown from "../UserDropdown/UserDropdown";

const DashboardHeader = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 h-16">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-4">
          <button
            className="text-gray-700 hover:text-gray-900 block lg:hidden"
            onClick={onMenuClick}
          >
            <HiOutlineBars3CenterLeft className="text-2xl" />
          </button>
          <h1 className="text-2xl font-semibold text-gray-900">Welcome back</h1>
        </div>

        <div className="flex items-center space-x-4">
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
