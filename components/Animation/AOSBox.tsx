import { ImagesSliderSection } from "@/components/Animation/ImagesSliderSection";
import { CardHoverEffect } from "@/components/Card/CardHoverEffect";
import { CardTestimonials } from "@/components/Card/CardTestimonials";
import Productadvantages from "@/components/Card/Productadvantages";
import { TwoCardL, TwoCardR } from "@/components/Card/TwosectionCardImg";
import ContactedBox from "@/components/Contacted/ContactedBox";
import Mapcontactdetail from "@/components/Mapdetail/Mapcontactdetail";
import { BannerBox } from "../Card/Banner";
import Image from "next/image";

export const AOSPage = () => {
  return (
    <div>
      <div>
        <BannerBox />
      </div>

      <div id="service">
        <CardHoverEffect />
      </div>

      <div>

      <TwoCardR
        title="มีเงื่อนไงการสมัครอย่างไรบ้าง"
        des={
          <>
            1. สมัครฟรีไม่ต้องเสียค่าสมัคร <br />
            2. ไม่ต้องสต็อกสินค้า <br />
            3. ไม่ต้องรักษายอด <br />
            4. ต้องโพสต์ขายสินค้าทุกวัน เพื่อรักษาสิทธิการเป็นตัวแทน{" "}
          </>
        }
        img="/images/Advantages/cosmetic-cat-1.webp"
        />

      <CardTestimonials />
        </div>

      <div>
        <Productadvantages />
        <ContactedBox />
      </div>

      <div id="aboutus">
        <TwoCardR
          title="ข้อดีของการเป็นตัวแทนขายสบู่มาดามเฮง"
          des={
            <>
              1.ลดต้นทุน (ไม่ต้องสต๊อกสินค้าเอง
              ได้สินค้าราคาส่งโดยที่ไม่ต้องไปขนสินค้ามาเอง) <br />
              2. ประหยัด ( เวลาสินค้าถึงมือลูกค้าเร็วขึ้น
              ไม่เสียเวลาในการแพ็คของ/ส่งของ) <br />
              3. สะดวกสบาย ( ไม่ต้องลงแรงเองทั้งหมด เริ่มต้นได้ง่ายๆ <br />
              ตัวแทนจำหน่ายสินค้าแบบ Stock กับ Non Stock แบบไหนดีกว่ากัน ?{" "}
              <br />
              ตอบ จริง ๆแล้วคงจะไม่มีแบบไหนที่ดีกว่ากัน
              ทั้งนี้จะขึ้นอยู่กับเงินลงทุนของตัวแทนและความพร้อมของตัวแทนแต่ละคน
              เรามีงินลงทุนอยู่เพียงหลักพัน เราก็คงไม่อยากที่จะสต็อกสินค้า
              การเป็นตัวแทนแบบ NON Stock จึงเป็นทางเลือกที่ดีกว่า
              แต่ถ้าเราพอมีทุนอยู่บ้าง
              เราอยากเริ่มต้นในการเป็นตัวแทนจำหน่ายแบบจริงจัง
              เราอยากได้กำไรที่มากขึ้น การเป็นตัวแทนจำหน่ายแบบ Stock
              สินค้าย่อมดีกว่าแน่นอน
            </>
          }
          img="/images/Advantages/cosmetic-cat-1.webp"
        />

        <ContactedBox />
      </div>

      {/* ข้อดีสินค้า */}
      <section className="my-15">
        <div>
          <ImagesSliderSection />

          <ContactedBox />
        </div>

        <div id="benefits">
          <div className="flex mt-15 bg-gray-300 justify-center items-center h-full w-full py-20 my-10 ">
            <div className="hidden md:block ">
              <div className=" flex flex-row items-center space-x-10 w-full px-15">
                {/* Text Content */}
                <div className="flex flex-col justify-start items-start px-5 p-2 w-full text-black">
                  <h2 className="text-2xl font-bold mb-4">
                    🧼 คุณประโยชน์ของการใช้สบู่สมุนไพร
                  </h2>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>
                      <strong>ทำความสะอาดผิว:</strong>{" "}
                      ช่วยทำความสะอาดผิวหน้าและผิวกายได้อย่างหมดจด
                    </li>
                    <li>
                      <strong>ลดสิว:</strong> ลดการเกิดสิวใหม่
                      และช่วยรักษาสิวที่มีอยู่
                    </li>
                    <li>
                      <strong>ลดผดผื่นคัน:</strong>{" "}
                      บรรเทาอาการคันและผื่นแดงต่างๆ
                    </li>
                    <li>
                      <strong>ลดรอยด่างดำ:</strong> ช่วยลดเลือนรอยดำ รอยแดง
                      และจุดด่างดำ
                    </li>
                    <li>
                      <strong>ระงับกลิ่นกาย:</strong>{" "}
                      ระงับกลิ่นเหงื่อและกลิ่นตัวได้อย่างมีประสิทธิภาพ
                    </li>
                    <li>
                      <strong>ปรับผิวให้กระจ่างใส:</strong>{" "}
                      ช่วยให้ผิวแลดูกระจ่างใสขึ้นอย่างเป็นธรรมชาติ
                    </li>
                    <li>
                      <strong>ปรับผิวให้เนียนนุ่ม:</strong>{" "}
                      ฟื้นฟูผิวหยาบกร้านให้กลับมาเนียนนุ่ม น่าสัมผัส
                    </li>
                    <li>
                      <strong>บำรุงผิว:</strong>{" "}
                      บางสูตรมีส่วนผสมพิเศษที่ช่วยเสริมความแข็งแรงและสุขภาพดีให้ผิว
                    </li>
                    <li>
                      <strong>ผ่อนคลาย:</strong>{" "}
                      กลิ่นหอมจากสมุนไพรช่วยให้รู้สึกผ่อนคลายขณะอาบน้ำ
                    </li>
                  </ul>
                </div>

                <div>
                  <Image
                    className="rounded-xl"
                    src="/images/Advantages/cosmetic-cat-1.webp"
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
                    src="/images/Advantages/cosmetic-cat-1.webp"
                    alt="Lobby Lounge"
                    width={600}
                    height={260}
                    layout="responsive"
                  />
                </div>

                {/* เนื้อหา */}
                <div className="flex flex-col justify-start items-start w-full text-white">
                  <h2 className="text-2xl font-bold mb-4">
                    🧼 คุณประโยชน์ของการใช้สบู่สมุนไพร
                  </h2>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>
                      <strong>ทำความสะอาดผิว:</strong>{" "}
                      ช่วยทำความสะอาดผิวหน้าและผิวกายได้อย่างหมดจด
                    </li>
                    <li>
                      <strong>ลดสิว:</strong> ลดการเกิดสิวใหม่
                      และช่วยรักษาสิวที่มีอยู่
                    </li>
                    <li>
                      <strong>ลดผดผื่นคัน:</strong>{" "}
                      บรรเทาอาการคันและผื่นแดงต่างๆ
                    </li>
                    <li>
                      <strong>ลดรอยด่างดำ:</strong> ช่วยลดเลือนรอยดำ รอยแดง
                      และจุดด่างดำ
                    </li>
                    <li>
                      <strong>ระงับกลิ่นกาย:</strong>{" "}
                      ระงับกลิ่นเหงื่อและกลิ่นตัวได้อย่างมีประสิทธิภาพ
                    </li>
                    <li>
                      <strong>ปรับผิวให้กระจ่างใส:</strong>{" "}
                      ช่วยให้ผิวแลดูกระจ่างใสขึ้นอย่างเป็นธรรมชาติ
                    </li>
                    <li>
                      <strong>ปรับผิวให้เนียนนุ่ม:</strong>{" "}
                      ฟื้นฟูผิวหยาบกร้านให้กลับมาเนียนนุ่ม น่าสัมผัส
                    </li>
                    <li>
                      <strong>บำรุงผิว:</strong>{" "}
                      บางสูตรมีส่วนผสมพิเศษที่ช่วยเสริมความแข็งแรงและสุขภาพดีให้ผิว
                    </li>
                    <li>
                      <strong>ผ่อนคลาย:</strong>{" "}
                      กลิ่นหอมจากสมุนไพรช่วยให้รู้สึกผ่อนคลายขณะอาบน้ำ
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10" id="contacted">
          <Mapcontactdetail />
        </div>
      </section>
    </div>
  );
};
