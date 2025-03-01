import { CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  sidebar: {
    root: {
      base: "h-full transition-all p-2",
      inner:
        "bg-gradient-to-b from-gray-800 to-gray-900 rounded-md h-full p-2 box-border",
      collapsed: {
        on: "w-16",
        off: "w-80",
      },
    },
    itemGroup: {
      base: "mt-4 space-y-2 border-t border-gray-600 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700",
    },
    item: {
      base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-300 hover:bg-gray-600 hover:text-white hover:cursor-pointer",
      active: "bg-gray-100 text-black font-bold",
      icon: {
        base: "h-6 w-6 flex-shrink-0 text-gray-300 transition duration-75 group-hover:text-white",
        active: "text-black",
      },
    },
  },
  table: {
    root: {},
  },
};

export default customTheme;
