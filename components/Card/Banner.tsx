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
          src="/images/Banner/6511883982ee8.webp"
          alt="มาดามเฮง"
          className="absolute inset-0 w-full h-full object-cover "
          fill
          priority
          sizes="100vw"
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
              เปิดรับตัวแทนทั่วประเทศ เงื่อนไขการสมัครตัวแทน
              1.สมัครฟรีไม่ต้องเสียค่าสมัคร 2.ไม่ต้องสต๊อกสินค้า
              3.ไม่ต้องรักษายอด
              4.ต้องโพสต์ขายสินค้าทุกวันเพื่อรักษาสิทธิ์การเป็นตัวแทน
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              href="tel:0899947693"
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
