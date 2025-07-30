"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export function BannerBox() {
  return (
    <div>
      <div className="relative bg-black overflow-hidden h-[40rem]">
        {/* Neon Red Glow */}
        <div
          className="absolute inset-0 rounded-xl 
          shadow-[0_0_30px_5px_rgba(255,0,0,0.8),0_0_60px_10px_rgba(255,0,0,0.6)] 
          pointer-events-none"
        ></div>

        {/* Background Image with Blur */}
        <Image
          src="/images/Banner/6511883982ee8.jpg"
          alt="มาดามเฮง"
          className="absolute inset-0 w-full h-full object-cover "
          fill
        />

        {/* Content Overlay */}
        <div className="relative z-10 bg-black/60 p-8 h-[40rem] flex flex-col justify-center text-white text-center  shadow-[0_0_30px_5px_rgba(255,0,0,0.8),0_0_60px_10px_rgba(255,0,0,0.6)]">
          <div className="flex justify-center">
            <Link href="#map">
              <h2 className="text-2xl font-bold bg-white text-black px-4 py-1 rounded-md transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer">
                ตัวแทนขายส่ง
              </h2>
            </Link>
          </div>

          <div className="my-5">
            <h1 className="text-5xl font-bold py-5">
              เราคือตัวแทนขายส่ง สบู่ที่ดีที่สุดในไทย
            </h1>
            <p className="mt-2 text-sm">
              เราเป็นตัวแทน ขายส่ง ขายออก ที่มีประสบการณ์มามากกว่า 5ปี
              โดยเราทำงานเป้ฯมืออาชีพ ส่งของตรงเวลาและไวที่สุด ราคาเป็นมิตร
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              href="https://maps.app.goo.gl/HHCnyNu87xprH9Dr7?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <h2 className="text-md font-bold mt-5 bg-red-800 rounded-2xl px-4 py-2 transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer hover:bg-red-700">
                ติดต่อ กดคลิก
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
