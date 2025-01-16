import React from "react";
import RestCardInfo from "@/components/resturantCard/resrCardInfo";
import RestCard from "@/components/resturantCard/restCard";

const Resturants = () => {
  return (
    <div className="flex flex-row justify-center gap-8 py-6">
      <RestCard />
      <RestCardInfo />
    </div>
  );
};

export default Resturants;
