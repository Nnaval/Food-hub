"use client";
import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { XCircle } from "lucide-react";
import { Card } from "../ui/card";
import Cardbox from "../cardbox";
import MainCard from "../card";
// import MainCard from "../card";

const RestCardInfo = () => {
  const items = [
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

  return (
    <div className="">
      <div
        className="border-2 w-full border-gray-300 rounded-lg p-4 flex flex-col items-center
      justify-center"
      >
        <Image
          src="/Delivery guy.png"
          width={900}
          height={900}
          alt="Delivery guy"
          className="relative"
        />
        <Image
          src="/Ellipse 22.png"
          width={100}
          height={100}
          alt="Ellipse 22"
          className="absolute top-48 "
        />
        <div className="flex flex-row justify-between items-center border-b-2 rounded-lg p-4 mt-16 bg-white w-full">
          <div className="z-10">
            <h1 className="flex items-center gap-3">
              Brass Tacks
              <Image
                src="/Ellipse 23.png"
                width={20}
                height={20}
                alt="Ellipse 22"
              />
            </h1>
            <h1 className="flex items-center gap-3">
              Nnewichi Nnewi
              <Image
                src="/Ellipse 23.png"
                width={20}
                height={20}
                alt="Ellipse 22"
              />
            </h1>
            <h1 className="flex items-center gap-3">
              0906345678876
              <Image
                src="/Ellipse 23.png"
                width={20}
                height={20}
                alt="Ellipse 22"
              />
            </h1>
          </div>
          <div className="z-10">
            <h1>Brass Tacks</h1>
            <h1>Brass Tacks</h1>
            <h1>Brass Tacks</h1>
          </div>
        </div>
        <div className="flex justify-between items-center p-4 mt-16 w-full">
          {items.map((item, index) => (
            <MainCard
              key={index}
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "16px",
                borderRadius: "8px",
              }}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestCardInfo;
