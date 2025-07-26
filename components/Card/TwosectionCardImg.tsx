import Image from "next/image";
import { ReactNode } from "react";

type cardlist = {
  title: string;
  des: ReactNode;
  img: string;
};

export const TwoCardR = ({ title, des, img }: cardlist) => {
  return (
    <div className="flex mt-15 bg-red-900 justify-center items-center h-full w-full py-20 my-10 ">
      <div className="hidden md:block ">
        <div className=" flex flex-row items-center space-x-10 w-full px-15">
          <div>
            <Image
              className="rounded-xl"
              src={img || "/image/Central/bkkqp-lobby-0027_Classic-Hor.jpg"}
              alt="Lobby Lounge"
              width={600}
              height={260}
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-start items-start px-5 p-2 w-full text-white">
            <h2 className="text-xl font-semibold mb-3 text-start">{title}</h2>
            <span className="block mb-4">
              {" "}
              {/* หากต้องการเพิ่มข้อมูลในช่องนี้ สามารถใช้ได้ */}{" "}
            </span>
            <p className="text-base ">{des}</p>
          </div>
        </div>
      </div>

      <div className="block md:hidden w-full">
        <div className="flex flex-col items-center  w-full px-15">
          {/* รูปภาพ */}
          <div className="w-full">
            <Image
              className="rounded-xl mb-6"
              src={img || "/image/Central/bkkqp-lobby-0027_Classic-Hor.jpg"}
              alt="Lobby Lounge"
              width={600}
              height={260}
              layout="responsive"
            />
          </div>

          {/* เนื้อหา */}
          <div className="flex flex-col justify-start items-start w-full text-white">
            <h2 className="text-xl font-semibold mb-2 text-start">{title}</h2>
            {/* <span className="block mb-4"></span> */}
            <p className="text-base">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TwoCardL = ({ title, des, img }: cardlist) => {
  return (
    <div className="flex mt-15 bg-black justify-center items-center h-full w-full py-20 my-10 ">
      <div className="hidden md:block ">
        <div className=" flex flex-row items-center space-x-10 w-full px-15">
         

          {/* Text Content */}
          <div className="flex flex-col justify-start items-start px-5 p-2 w-full text-white">
            <h2 className="text-xl font-semibold mb-3 text-start">{title}</h2>
            <span className="block mb-4">
              {" "}
              {/* หากต้องการเพิ่มข้อมูลในช่องนี้ สามารถใช้ได้ */}{" "}
            </span>
            <p className="text-base ">{des}</p>
          </div>

           <div>
            <Image
              className="rounded-xl"
              src={img || "/image/Central/bkkqp-lobby-0027_Classic-Hor.jpg"}
              alt="Lobby Lounge"
              width={600}
              height={260}
            />
          </div>
        </div>
      </div>

      <div className="block md:hidden w-full">
        <div className="flex flex-col items-center  w-full px-15">
          {/* รูปภาพ */}
          <div className="w-full">
            <Image
              className="rounded-xl mb-6"
              src={img || "/image/Central/bkkqp-lobby-0027_Classic-Hor.jpg"}
              alt="Lobby Lounge"
              width={600}
              height={260}
              layout="responsive"
            />
          </div>

          {/* เนื้อหา */}
          <div className="flex flex-col justify-start items-start w-full text-white">
            <h2 className="text-xl font-semibold mb-2 text-start">{title}</h2>
            {/* <span className="block mb-4"></span> */}
            <p className="text-base">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};