import React from "react";
import MainCard from "./card";
import { X } from "lucide-react";

const items = [
  {
    icon: X,
    tag: "Sales",
    price: "200,000",
  },
  {
    icon: X,
    tag: "Sales",
    price: "200",
  },
  {
    icon: X,
    tag: "Sales",
    price: "200",
  },
  {
    icon: X,
    tag: "Sales",
    price: "200",
  },
  {
    icon: X,
    tag: "Sales",
    price: "200",
  },
  {
    icon: X,
    tag: "Sales",
    price: "200",
  },
  {
    icon: X,
    tag: "Sales",
    price: "200",
  },
  
];

const Cardbox = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4  bg-green-500 mt-10 p-4 rounded-md shadow-lg">
      <h1 className="text-2xl font-bold text-white">Daily Overview</h1>
      <div className="">
        <div className="h-full w-full rounded-lg flex flex-row justify-center items-center gap-4">
          {items.map((item, index) => (
            <MainCard item={item} key={index} />
          ))}
        </div>

        {/* <MainCard item={ {
      icon: "icon-food",
      tag: "Sales",
      price: "/dashboard",
    }} /> */}

      </div>

    </div>
  );
};

export default Cardbox;
