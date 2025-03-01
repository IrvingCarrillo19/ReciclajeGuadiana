import { Card } from "flowbite-react";
import React from "react";

interface NumPanelProps {
  title?: string;
  value?: string;
  icon?: React.ReactNode;
  color?: "warning" | "success" | "danger" | "primary";
}

export default function NumPanel(props: NumPanelProps) {
  let color = "text-black";
  switch (props.color) {
    case "warning":
      color = "text-yellow-500";
      break;
    case "success":
      color = "text-green-500";
      break;
    case "danger":
      color = "text-red-500";
      break;
  }
  return (
    <Card className="border-gray-300">
      <div className="flex items center">
        <div className="flex justify-center items-center h-full mx-5 text-3xl">
          {props?.icon}
        </div>
        <div className="flex flex-col">
          <p className={`font-normal text-gray-700`}>{props.title}</p>
          <h5
            className={`text-2xl font-bold tracking-tight text-gray-900 ml-4 ${
              color ?? ""
            }`}
          >
            {props.value}
          </h5>
        </div>
      </div>
    </Card>
  );
}
