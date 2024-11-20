import Image from "next/image";
import Maq from "@/components/maq";
import Link from "next/link";
import Count from "@/components/countdown";

export default function Home() {
  return (
    <main className=" flex flex-col px-[2rem] ">
      <div className=" upper flex items-center justify-between py-[0.3rem] px-[0.7rem] my-[1.5rem] rounded-3xl bg-white">
        <Image src="/favicon.ico" width={30} height={30} />
        <div className="relative flex items-center left-28">
          <input
            className=" impt border-2 p-3 relative outline-none pr-[220px] rounded-[50px]"
            type="text"
            name="name"
            placeholder="Enter your email address"
          />
          <button className=" bbtn text-[10px] absolute right-3.5 bg-[rgb(54,69,79)] text-white px-5 py-2 cursor-pointer rounded-2xl">
            Join Waitlist
          </button>
        </div>

        <button className="bg-[rgb(54,69,79)] bmtn cursor-pointer text-white px-5 py-2 flex items-center gap-2 text-[10px] rounded-2xl">
          Download playStore
          <Image src="/Google Play.png" height={20} width={20} />
        </button>
      </div>

      <div className=" favs flex flex-col items-center justify-center pb-6 bg-white rounded-xl">
        <button className="border-2 px-5 py-2 rounded-3xl my-5 flex gap-2 items-center">
          <Image src="/Frame 39130.png" height={30} width={30} />
          Shopping with food hub
        </button>
        <h1 className="font-medium text-[55px] px-5 ">
          All Your Fav Eateries in one
        </h1>
        <div className=" placeText text-[55px] mb-3 flex gap-4 px-6 rounded-full items-center w-fit mx-auto justify-center ">
          <Image src="/food cart.png" width={60} height={60} />
          <h1>place</h1>
          <Image
            src="/How_to_Make_Jollof_Rice_in_5_Easy_Steps_-_Ev_s_Eats-removebg-preview 2 (1).png"
            width={60}
            height={60}
          />
        </div>
        <p className="text-[25px] text-[rgba(15,13,19,1)] mb-3  ">
          Enjoy meal from all your favorite eateries
        </p>
        <button className="border-3 bg-[rgb(54,69,79)] px-8 py-2 rounded-2xl mb-10 text-white">
          Get Started
        </button>
        <div className="bg-yellow-500 rounded-[100%] p-3">
          <Image className="" src="/heroImage.png" width={700} height={700} />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-12 mb-20">
        <p className="text-[20px] my-6 text-[rgb(54,69,79)] font-medium">
          In collaboration with only the best
        </p>
        <Maq />
      </div>

      <div className=" gbeduText flex flex-col items-center justify-center pb-20">
        <h1 className="text-[60px] font-medium gbeduText ">Gbedu Combo</h1>

        <div className=" gbedu flex flex-row w-full gap-6">
          <div className="flex flex-1 flex-col border-2 border-gray-200 rounded-2xl items-center justify-center">
            <h2 className="text-[50px] text-[rgb(54,69,79)] pt-4 ">Dishes</h2>
            <p className="text-[20px] text-[rgb(54,69,79)] py-4 ">
              Browse through our large menu of mouth watering dishes
            </p>
            <Image
              src="/Frame 39132.png"
              height={700}
              width={700}
              className="pb-14 px-4"
            />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center border-2 border-gray-300 rounded-2xl">
            <Image
              src="/Frame 39134.png"
              height={700}
              width={700}
              className="pt-10 px-4"
            />
            <h2 className="text-[50px] text-[rgb(54,69,79)] pt-4 ">
              Resturants & Eateries
            </h2>
            <p className="text-[20px] text-[rgb(54,69,79)] pb-14">
              Shop from all your favorite eateries at the same time
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[rgba(255,215,0,1)] flex flex-col gap-10 p-10 mb-16 rounded-3xl">
        <h1 className="flex justify-start text-[65px] font-extrabold italic">
          Swift Delivery
        </h1>
        <Image
          src="/Delivery guy.png"
          width={700}
          height={700}
          className="flex justify-center mx-auto"
        />
        <p className="flex justify-end font-extrabold text-[25px] italic">
          Track and follow your food as its gets to you
        </p>
      </div>

      <div className=" shopOrder flex flex-row flex-1 justify-between ">
        <div className="w-[64%] m-4 flex flex-col gap-3 shopOrder1">
          <div className=" shopOrder2 flex flex-row justify-between items-center p-6 bg-[rgba(255,251,230,1)] text-[rgba(89,75,0,1)]  rounded-3xl h-[50%] ">
            <h1 className="text-[65px] font-bold ml-10">Shop</h1>
            <Image
              src="/woman holding shopping bags.png"
              height={210}
              width={210}
              className="shopImg"
            />
          </div>
          <div className=" shopOrder2 flex flex-row justify-between items-center border-2 border-[rgba(0,106,73,1)] p-6 bg-[rgba(255,255,255,1)] text-[rgba(89,75,0,1)] rounded-3xl p- ">
            <h1 className="text-[65px] font-bold ml-10">Order</h1>
            <Image
              src="/Pizza delivery guy riding a scooter in a hurry.png"
              height={250}
              width={250}
              className="shopImg"
            />
          </div>
        </div>
        <div className=" shopEat flex flex-col justify-between w-[32%] bg-[rgba(128,0,0,1)] rounded-3xl">
          <h1 className="text-[65px] text-white font-bold mt-7 ml-10">Eat</h1>
          <div className="flex justify-end">
            <Image src="/young man eating pizza.png" height={150} width={150}  />
          </div>
        </div>
      </div>

      <div className=" Foodimg py-16 relative flex items-center  justify-center rounded-3xl">
        <div className="gbe p-4 max-w-[480px] relative  h-fit w-full bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border-gray-200 ">
          <div className="blurred">
            <h1 className="text-[40px] font-bold text-center ">
              Serve yourself
            </h1>
            <p className="text-[20px] text-center">
              Remove and add your preferred serving qauntity, take away any
              dislikes
            </p>
          </div>
        </div>
        <Image
          src="/Rectangle 2297.png"
          height={500}
          width={500}
          className="w-full"
        />
      </div>

      <div className=" generalText flex relative flex-col gap-10 justify-center items-center bg-[rgba(255,251,230,1)] rounded-3xl p-16 mb-7">
        <Count />
        <p className="timeCover text-[rgba(45,0,0,1)] font-bold text-[30px] bg-white">
          To Our Product Launch
        </p>
        <img
          src="/Animation - 1727972223973 (3).gif"
          alt="gif animation"
          className="absolute bottom-10 h-screen"
        />
      </div>

      <div className="bg-[rgba(72,70,70,1)] p-6 rounded-xl ">
        <div className="flex justify-between items-center  ">
          <Image src="/favicon.ico" width={30} height={30} className="" />
          <div className="flex gap-14 text-white font-bold px-9">
            <Link href="#">Address</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Poeple</Link>
          </div>
        </div>
        <div className="flex justify-end items-end mt-12">
          <button className="bg-red-700 text-white rounded-xl p-2">
            Download from playStore
          </button>
        </div>
        <p className="text-white font-bold text-[20px]">FoodHub © 2022</p>
      </div>
    </main>
  );
}
