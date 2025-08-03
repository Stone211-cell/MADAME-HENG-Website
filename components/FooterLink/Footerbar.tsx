import {
  faHouse,
  faTruckFast,
  faUser,
  faUsersRectangle,
} from "@fortawesome/free-solid-svg-icons";

import { ContactIcon } from "../Contacted/ContactIcon";

// import Image from "next/image";
// import { faLine } from "@fortawesome/free-brands-svg-icons";

const Footerbar = () => {
  return (
    <footer className="bg-gradient-to-b bg-red-900  w-full p-8 h-[100%]  text-white  ">
      <div>
        <div>
          <h2 className="text-3xl font-bold text-amber-300"> เปิดรับตัวแทนทั่วประเทศ</h2>

          <div className="my-5 ">
            <h2 className="text-2xl font-bold">
              {" "}
              เงื่อนไขการสมัครตัวแทน
            </h2>
            <p className="mt-2 text-sm">
1.สมัครฟรีไม่ต้องเสียค่าสมัคร 2.ไม่ต้องสต๊อกสินค้า 3.ไม่ต้องรักษายอด 4.ต้องโพสต์ขายสินค้าทุกวันเพื่อรักษาสิทธิ์การเป็นตัวแทน
            </p>

            
<p className="mt-2 text-sm">
เปิดบริการทุกวัน 
จ-ส 09.00-18.00 น. 

การเดินทาง BTS
ลงสถานี BTS สายลวด 
เข้าซอยเทศบาลบางปู 43
นั่งมอไซค์ ซอยสินสมบูรณ์ 12 ฝั่งขวา เข้าซอย 50 เมตร อยู่ซ้ายมือ 

รถยนต์ส่วนตัว
เข้าซอยเทศบาลบางู 45
ซอยสินสมบูรณ์ 12 ฝั่งซ้าย
เข้าซอย 50 เมตร อยู่ซ้ายมือ
            </p>

          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 text-md">
        <div>
          <h2 className="mb-3 mx-5">แผนผังเว็บไซต์</h2>

          <div className="flex flex-col lg:gap-y-3 lg:mx-8">
            <span>
              <ContactIcon
                sizeicon="lg"
                coloricon="white"
                msg="หน้าหลัก"
                LINKBTN="/"
                icontype={faHouse}
                classtype=""
              />
            </span>
            <span>
              <ContactIcon
                sizeicon="lg"
                coloricon="white"
                msg="เกี่ยวกับเรา"
                LINKBTN="#aboutus"
                icontype={faUser}
                classtype=""
              />
            </span>
            <span>
              <ContactIcon
                sizeicon="lg"
                coloricon="white"
                msg="การบริการของเรา"
                LINKBTN="#service"
                icontype={faTruckFast}
                classtype=""
              />
            </span>
            <span>
              <ContactIcon
                sizeicon="lg"
                coloricon="white"
                msg="ติดต่อเรา"
                LINKBTN="#Contacted"
                icontype={faUsersRectangle}
                classtype=""
              />
            </span>
            <div className="hidden md:block">
              <h2 className="text-sm font-bold md:text-xl text-amber-300">
                {" "}
                เลือกเรา ไม่ผิดหวัง รับสมัครตัวแทนจำหน่าย
              </h2>
              <p className="mt-2 text-xs">
                รับสมัครตัวแทนจำหน่าย ขายส่งสบู่มาดามเฮงออนไลน์ สร้างรายได้ง่ายๆ ที่บ้าน ข้อมูลไม่ต้องเตรียมเยอะสมัครเป็นตัวแทนได้เลย
              </p>
            </div>
          </div>
        </div>

        {/* QRcode 
        <div>
          <h2>QRcode</h2>

          <div className="flex flex-col gap-y-3 mt-3">
            <Image
              src="/images/service/QRCODE.jpg"
              alt="hello"
              width={100}
              height={100}
            />
            <ContactIcon
              sizeicon="lg"
              msg="QR CODE LINE"
              LINKBTN="tel:0644088510"
              icontype={faLine}
              classtype=""
            />
          </div>
          
        </div>   */}
      </div>
    </footer>
  );
};
export default Footerbar;
