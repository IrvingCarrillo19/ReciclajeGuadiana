import { Card } from "flowbite-react";

interface TopPanelProps {
  title: string;
  series: { name: string; description: string; value: number }[];
}

export default function TopPanel(props: TopPanelProps) {
  return (
    <Card className="border-gray-300 hover:scale-105 transition-transform">
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">
          {props.title}
        </h3>
        <ul className="space-y-4">
          {props.series.map((item, index) => {
            return (
              <li
                className="flex items-center justify-between"
                key={"top_item_" + props.title + "_" + index}
              >
                <div>
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
                <span className="text-blue-500 font-bold text-lg">
                  {item.value}%
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
}
