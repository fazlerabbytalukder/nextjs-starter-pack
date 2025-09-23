"use client";
import userImg from "@/assets/dashboard/user/user-img.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const UserDropdown = () => {
  const [userDropdown, setUserDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // close on route change
  useEffect(() => {
    setUserDropdown(false);
  }, [pathname]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center space-x-3 cursor-pointer rounded-lg p-2 transition-colors duration-200"
        onClick={() => setUserDropdown((prev) => !prev)}
      >
        <div className="block">
          <Image
            src={userImg}
            width={50}
            height={50}
            alt="User avatar"
            className="rounded-full w-[40px] h-[40px]"
          />
        </div>
        <span className="inline-flex flex-col items-start">
          <span className="text-lg font-semibold">User Name</span>
          <span className="text-sm text-gray-500">User Email</span>
        </span>
      </button>
      {userDropdown && (
        <div className="absolute right-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <ul className="p-2">
            <li>
              <Link
                href="/dashboard/settings"
                className="block px-4 py-2 hover:bg-orange-500 hover:text-white rounded-lg"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/settings/change-password"
                className="block px-4 py-2 hover:bg-orange-500 hover:text-white rounded-lg"
              >
                Change Password
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/support"
                className="block px-4 py-2 hover:bg-orange-500 hover:text-white rounded-lg"
              >
                Support Ticket
              </Link>
            </li>

            <li>
              <button
                href="#"
                className="block px-4 py-2 bg-red-100 hover:bg-red-500 text-red-700 hover:text-white w-full text-start rounded-lg"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
