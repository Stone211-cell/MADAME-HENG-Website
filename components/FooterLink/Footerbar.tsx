import {
  faHouse,
  faTruckFast,
  faUser,
  faUsersRectangle,
} from "@fortawesome/free-solid-svg-icons";

import { ContactIcon } from "../Contacted/ContactIcon";

import Image from "next/image";
import { faLine } from "@fortawesome/free-brands-svg-icons";

const Footerbar = () => {
  return (
    <footer className="bg-gradient-to-b bg-red-900  w-full p-8 h-[100%]  text-white  ">
      <div>
        <div>
          <h2 className="text-3xl font-bold text-amber-300"> โรงแรม</h2>

          <div className="my-5 ">
            <h2 className="text-2xl font-bold">
              {" "}
              Sunsea View Residence <br /> Kohtao
            </h2>
            <p className="mt-2 text-sm">
              ซันซีวิวเรสซิเดนซ์ เกาะเต่า พักผ่อนอย่างสบายใจในเมืองสุราษฎร์ธานี
              กับที่พักบรรยากาศดีและเป็นกันเอง ใกล้ร้านอาหาร ร้านกาแฟ ทะเล
              และเดินทางต่อไปเกาะสมุยหรือเขื่อนเชี่ยวหลานได้ง่าย
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 text-md">
        <div>
          <h2 className="mb-3 mx-5">แผนผังเว็บไซต์</h2>

          <div className="flex flex-col gap-y-3 mx-8">
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
                สัมผัสความสะดวกสบายอันทันสมัยที่โรงแรมของเราในตัวเมืองกรุงเทพ
              </h2>
              <p className="mt-2 text-xs">
                หลีกหนีสู่สถานที่ให้ความสุขอันเงียบสงบใจกลางย่านสุราษฎร์ธานีที่
                Sunsea View Residence Kohtao
                โรงแรมของเราในใจกลางเมืองสุราษฎร์ธานีเหมาะสำหรับทั้งธุรกิจหรือการพักผ่อน
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
