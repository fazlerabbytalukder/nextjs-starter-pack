"use client";
import {
  ArrowLeftRight,
  BanknoteArrowUp,
  Bell,
  CircleDollarSign,
  History,
  Home,
  MessageCircle,
  PanelBottomOpen,
  QrCode,
  Settings,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardSidebar = ({ isOpen, setIsOpen }) => {
  const currentPath = usePathname();

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
        <nav className="flex-1 mt-8 px-4">
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
                        ? "bg-blue-50 text-primary border-r-4 border-primary"
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
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DashboardSidebar;
