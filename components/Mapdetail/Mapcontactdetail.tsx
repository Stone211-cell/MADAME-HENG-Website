import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ContactIcon } from "../Contacted/ContactIcon";
import {  faLine } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

const Mapcontactdetail = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-b from-red-600 to-red-900">
        <Image
          src="/images/banner/S__8683544.webp"
          alt="สบู่มาดามเฮง "
          className="absolute inset-0 w-full h-[100%] min-h-[500px] object-cover  backdrop-blur-md"
          fill
        />

        <div className="relative z-10 bg-red-900/50 p-8 h-[100%] min-h-[500px] rounded-xl text-white backdrop-blur-sm  text-center  flex flex-col justify-center">
          <div className="flex justify-center ">
            <h2 className="text-2xl font-bold  bg-white text-black w-50 rounded-md transition-transform duration-200 ease-in-out hover:scale-110  ">
              <Link href="#map">ติดต่อเรา</Link>
            </h2>
          </div>

          <div className="my-5">
            <h3 className=" text-5xl font-bold py-5">ตัวแทนจำหน่าย</h3>
            <p className="mt-2 text-sm">
              เปิดรับตัวแทนทั่วประเทศ

คุณภาพดี
ส่งตรงเวลา
ราคามิตรภาพ
            </p>
          </div>

          <div className="flex justify-center text-center ">
            <h2 className="text-md font-bold mt-5  text-black bg-yellow-500 rounded-2xl p-2 transition-transform duration-200 ease-in-out hover:scale-110 ">
              <Link
                href="https://maps.app.goo.gl/EeVGskhjHEgHwUq76"
                className="text-white"
              >
                เปิดแผนที่นำทาง
              </Link>
            </h2>
          </div>

          <div
            id="map"
            className=" my-5 text-center flex flex-col justify-items-center"
          >
            <div className=" flex flex-col items-center justify-items-center justify-self-center">
              <ContactIcon
                sizeicon="2x"
                coloricon="yellow"
                msg="ที่ตั้ง"
                LINKBTN="https://maps.app.goo.gl/EeVGskhjHEgHwUq76"
                icontype={faLocationDot}
                classtype=""
              />
            </div>

            <p>
              บริษัท เคอรี่ เทรดดิ้ง จำกัด
เลขที่ 1205  หมู่ 3  
ตำบลท้ายบ้านใหม่  
อำเภอเมืองสมุทรปราการ 
จังหวัดสมุทรปราการ  10280
            </p>
          </div>

          <div className="flex justify-center text-center ">
            <div className="grid grid-cols-1 md:grid-cols-3  gap-10">
              <span>
                <ContactIcon
                  sizeicon="2x"
                  coloricon="yellow"
                  msg="โทรศัพท์สอบถาม"
                  description="089-994-7693"
              LINKBTN="tel:0899947693"
                  icontype={faPhone}
                  classtype=""
                />
              </span>
              <span>
                <ContactIcon
                  sizeicon="2x"
                  coloricon="yellow"
                  msg="LINE ID"
                  description="Line"
                  LINKBTN="https://qr-official.line.me/gs/M_094shhsh_BW.png?oat_content=qr"
                  icontype={faLine}
                  classtype=""
                />
              </span>
              <span>
                <ContactIcon
                  sizeicon="2x"
                   coloricon="yellow"
                          msg="Facebook"
                          description="ติดต่อสอบถาม"

                          LINKBTN="https://www.facebook.com/share/18MM3dBtwd/"
                  classtype="pr-10"
                />
              </span>

             

            </div>
          </div>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.0492780659088!2d100.61154909999999!3d13.5756575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a71ce762d2f9%3A0x46b0d8247b1debf2!2zS2VycnkgVHJhZGluZyBDby4sTHRkLiAvIOC4muC4o-C4tOC4qeC4seC4lyDguYDguITguK3guKPguLXguYgg4LmA4LiX4Lij4LiU4LiU4Li04LmJ4LiHIOC4iOC4s-C4geC4seC4lA!5e1!3m2!1sth!2sth!4v1754226330671!5m2!1sth!2sth"
          width="100%"
          height="500"
          loading="lazy"
          //               style="border:0;"
          // allowfullscreen=""
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
export default Mapcontactdetail;
