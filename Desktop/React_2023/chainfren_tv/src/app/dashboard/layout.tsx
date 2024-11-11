"use client";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Inter } from "next/font/google";
import { LuArrowLeftFromLine } from "react-icons/lu";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import * as Avatar from "@radix-ui/react-avatar";

const inter = Inter({ subsets: ["latin"] });
// Rename the component to follow React naming conventions
const DashboardLayout = ({
  children,
  name = "Moshood",
}: {
  children: React.ReactNode;
  name: string;
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const navigate = useRouter();
  return (
    <div
      className={`${inter.className} text-black-primary-text flex h-screen `}
    >
      {/* Sidebar for desktop */}
      <aside className="hidden md:block w-72 px-4 bg-white shadow-md">
        <div className="pl-4 flex justify-between items-center">
          <div className=" py-6 font-bold uppercase text-black-primary-text">
            <h1> Creator Dashboard</h1>
          </div>
          <button
            onClick={() => {
              navigate.replace("/");
            }}
            className=""
          >
            <LuArrowLeftFromLine className="text-xl font-bold" />
          </button>
        </div>
        <Sidebar />
      </aside>

      {/* Drawer for mobile */}
      <div
        className={`fixed inset-0 z-20 transition-opacity bg-black bg-opacity-50 ${
          isDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      />
      <aside
        className={clsx(
          "fixed px-4 inset-y-0 left-0 z-30 w-72 bg-white shadow-md transform transition-transform duration-500 ease-in-out",
          isDrawerOpen ? "translate-x-0" : "-translate-x-full",
          "md:hidden"
        )}
      >
        <div className="pl-4 flex justify-between items-center">
          <div className=" py-6 font-bold uppercase text-black-primary-text">
            <h1> Creator Dashboard</h1>
          </div>
          <button onClick={toggleDrawer} className="md:hidden">
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        <Sidebar />
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflw-hidden">
        <header className="shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="text-lg font-black text-black-primary-text">
              CHAINFREN<span className="text-main-blue italic ">TV</span>
            </div>
            <div className=" flex items-center gap-2">
              <div className="text-sm font-semibold">{name}</div>
              <Avatar.Root className="inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-blackA1 align-middle">
                <Avatar.Image
                  className="size-full rounded-[inherit] object-cover"
                  src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                  alt="Pedro Duarte"
                />
                <Avatar.Fallback
                  className="leading-1 flex size-full rounded-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
                  delayMs={600}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_85_301)">
                      <circle cx="17.5" cy="17.5" r="15.5" fill="#3351FF" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M31 33.4445C31 26.817 25.6274 21.4445 19 21.4445C12.3726 21.4445 7 26.817 7 33.4445H31Z"
                        fill="white"
                      />

                      <rect
                        x="9.55884"
                        y="9.68384"
                        width="14"
                        height="10"
                        rx="1.6"
                        transform="rotate(-5.42238 9.55884 9.68384)"
                        fill="white"
                      />
                    </g>
                    <rect
                      x="1"
                      y="1"
                      width="33"
                      height="33"
                      rx="16.5"
                      stroke="black"
                      strokeWidth="2"
                    />
                    <defs>
                      <clipPath id="clip0_85_301">
                        <rect
                          x="2"
                          y="2"
                          width="31"
                          height="31"
                          rx="15.5"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Avatar.Fallback>
              </Avatar.Root>
            </div>
            <button onClick={toggleDrawer} className="md:hidden">
              {!isDrawerOpen && <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 text-orange overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-3 py-4">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
