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
      <h5 className="text-2xl font-bold tracking-tight text-gray-900">
        {props?.icon}
        {props.title}
      </h5>
      <p className={`font-normal text-gray-700 ${color}`}>{props.value}</p>
    </Card>
  );
}
