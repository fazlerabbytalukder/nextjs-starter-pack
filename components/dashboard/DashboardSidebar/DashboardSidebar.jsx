"use client";
import {
  ArrowLeftRight,
  BanknoteArrowUp,
  Bell,
  CircleDollarSign,
  History,
  Home,
  Layers,
  MessageCircle,
  PanelBottomOpen,
  QrCode,
  Settings,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const DashboardSidebar = ({ isOpen, setIsOpen }) => {
  const currentPath = usePathname();
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Navigation items array
  const navigationItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "My Wallets",
      href: "/dashboard/my-wallets",
      icon: Wallet,
    },
    {
      name: "Add Money",
      href: "/dashboard/add-money",
      icon: BanknoteArrowUp,
    },
    {
      name: "Cash In",
      href: "/dashboard/cash-in",
      icon: CircleDollarSign,
    },
    {
      name: "Withdraw",
      href: "/dashboard/withdraw",
      icon: PanelBottomOpen,
    },
    {
      name: "Transactions",
      href: "/dashboard/transactions",
      icon: ArrowLeftRight,
    },
    {
      name: "Profit History",
      href: "/dashboard/profit-history",
      icon: History,
    },
    {
      name: "Notifications",
      href: "/dashboard/notifications",
      icon: Bell,
    },
    {
      name: "QR Code",
      href: "/dashboard/qr-code",
      icon: QrCode,
    },
    {
      name: "Support",
      href: "/dashboard/support",
      icon: MessageCircle,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform 
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:fixed lg:translate-x-0 lg:flex lg:flex-col
        `}
      >
        {/* Logo */}
        <div className="flex items-center h-16 px-6 bg-primary">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-lg">M</span>
            </div>
            <span className="ml-3 text-white font-semibold text-lg">
              MoneyChain
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-8 px-4 h-full overflow-y-auto">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/dashboard"
                  ? currentPath === "/dashboard"
                  : currentPath.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "bg-blue-50 text-primary"
                        : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                    }`}
                  >
                    <Icon
                      className={`mr-3 h-5 w-5 ${
                        isActive
                          ? "text-primary"
                          : "text-gray-400 group-hover:text-primary"
                      }`}
                    />
                    {item.name}
                  </Link>
                </li>
              );
            })}

            {/* Components Dropdown */}
            <li>
              <button
                onClick={() => toggleDropdown("components")}
                className={`group flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer ${
                  openDropdowns["components"]
                    ? "bg-blue-50 text-primary rounded-b-[0px]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                }`}
              >
                <Layers
                  className={`mr-3 h-5 w-5 ${
                    openDropdowns["components"]
                      ? "text-primary"
                      : "text-gray-400 group-hover:text-primary"
                  }`}
                />
                Components
                <span className="ml-auto transform transition-transform duration-300">
                  {openDropdowns["components"] ? (
                    <MdKeyboardArrowUp className="text-xl" />
                  ) : (
                    <MdKeyboardArrowDown className="text-xl" />
                  )}
                </span>
              </button>

              {/* Dropdown Items */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openDropdowns["components"]
                    ? "max-h-40 opacity-100 bg-blue-50"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="mt-2 pl-9 space-y-1">
                  <li>
                    <Link
                      href="/dashboard/components/buttons"
                      className={`block px-3 py-2 text-sm rounded-md ${
                        currentPath === "/dashboard/components/buttons"
                          ? "bg-blue-100 text-primary"
                          : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                      }`}
                    >
                      Buttons
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/components/cards"
                      className={`block px-3 py-2 text-sm rounded-md ${
                        currentPath === "/dashboard/components/cards"
                          ? "bg-blue-100 text-primary"
                          : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                      }`}
                    >
                      Cards
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/components/tables"
                      className={`block px-3 py-2 text-sm rounded-md ${
                        currentPath === "/dashboard/components/tables"
                          ? "bg-blue-100 text-primary"
                          : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                      }`}
                    >
                      Tables
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Components-2 Dropdown */}
            <li>
              <button
                onClick={() => toggleDropdown("components2")}
                className={`group flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer ${
                  openDropdowns["components2"]
                    ? "bg-blue-50 text-primary rounded-b-[0px]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                }`}
              >
                <Layers
                  className={`mr-3 h-5 w-5 ${
                    openDropdowns["components2"]
                      ? "text-primary"
                      : "text-gray-400 group-hover:text-primary"
                  }`}
                />
                Components-2
                <span className="ml-auto transform transition-transform duration-300">
                  {openDropdowns["components2"] ? (
                    <MdKeyboardArrowUp className="text-xl" />
                  ) : (
                    <MdKeyboardArrowDown className="text-xl" />
                  )}
                </span>
              </button>

              {/* Dropdown Items */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openDropdowns["components2"]
                    ? "max-h-40 opacity-100 bg-blue-50"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="mt-2 pl-9 space-y-1">
                  <li>
                    <Link
                      href="/dashboard/components2/example1"
                      className={`block px-3 py-2 text-sm rounded-md ${
                        currentPath === "/dashboard/components2/example1"
                          ? "bg-blue-100 text-primary"
                          : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                      }`}
                    >
                      Example 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/components2/example2"
                      className={`block px-3 py-2 text-sm rounded-md ${
                        currentPath === "/dashboard/components2/example2"
                          ? "bg-blue-100 text-primary"
                          : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                      }`}
                    >
                      Example 2
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DashboardSidebar;
