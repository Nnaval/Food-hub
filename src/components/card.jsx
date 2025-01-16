import React from "react";
import { Button } from "@/components/ui/button";

const MainCard = ({ item }) => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="min-w-32 min-h-32 flex flex-col p-4 justify-center items-centere shadow-md bg-white rounded-md gap-2">
        <p className="bg-secondary size-fit rounded-full p-1">
          {<item.icon />}
        </p>
        <p className="text-sm font-semibold">{item.tag}</p>
        <p className="text-xl font-bold">{item.price}</p>
      </div>
    </div>
  );
};

export default MainCard;

export const OrderSatCard = () => {

  const numbers = [
    {
      num : "234",
      orders: "Total orders"
    },
    {
      num : "32",
      orders: "pending / Processing"
    },
    {
      num : "435",
      orders: "Out for delivery"
    },
    {
      num : "500",
      orders: "Delivered"
    },
  ]

  return (
 
    <div className="flex flex-row justify-around items-center p-4 gap-4 ">
   { numbers.map((number, index) => (
      <div key={index} className=" bg-white w-full rounded-md gap-2 p-4 flex flex-col items-start justify-center">
        <p className="text-2xl font-bold">{number.num}</p>
        <p className="text-sm font-semibold">{number.orders}</p>
  </div>

))}
   </div>
  )
};

// export default card
