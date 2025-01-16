import React from "react";
import Image from "next/image";
// import pic from ".../public/images/resturant.jpg"
// import pix from ""

const RestCard = () => {
  const resturants = [
    {
      image: "/Ellipse 26.png",
      name: "Brass Tacks",
      address: "Nnewichi Nnewi Old Onitsha Road",
      rating: 4.5,
    },
    {
      image: "/Ellipse 33.png",
      name: "Brass Tacks",
      address: "Nnewichi Nnewi Old Onitsha Road",
      rating: 4.5,
    },
    {
      image: "/Ellipse 34.png",
      name: "Brass Tacks",
      address: "Nnewichi Nnewi Old Onitsha Road",
      rating: 4.5,
    },
    {
      image: "/Ellipse 22.png",
      name: "Brass Tacks",
      address: "Nnewichi Nnewi Old Onitsha Road",
      rating: 4.5,
    },
    {
      image: "/Ellipse 26.png",
      name: "Brass Tacks",
      address: "Nnewichi Nnewi Old Onitsha Road",
      rating: 4.5,
    },
    {
      image: "/Ellipse 26.png",
      name: "Brass Tacks",
      address: "Nnewichi Nnewi Old Onitsha Road",
      rating: 4.5,
    },
    {
      image: "/Ellipse 26.png",
      name: "Brass Tacks",
      address: "Nnewichi Nnewi Old Onitsha Road",
      rating: 4.5,
    },
  ];

  return (
    <div className=" w-full rounded-2xl ml-6 px-6 py-4 bg-white flex flex-col gap-2">
      <h1 className="text-xl font-bold">Resturants</h1>
      {resturants.map((resturant, index) => (
        <div
          key={index}
          className="flex flex-row gap-2 items-center justify-center cursor-pointer hover:bg-red-600 hover:text-white rounded-2xl p-2"
        >
          <Image src={resturant.image} width={70} height={70} alt="resturant Image" />
          <div className="items-start justify-center flex flex-col">
            <h1>{resturant.name}</h1>
            <p>{resturant.address}</p>
            <p>Rating: {resturant.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestCard;
