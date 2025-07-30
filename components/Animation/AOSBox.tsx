"use client"

import { ImagesSliderSection } from "@/components/Animation/ImagesSliderSection";
import { CardHoverEffect } from "@/components/Card/CardHoverEffect";
import { CardTestimonials } from "@/components/Card/CardTestimonials";
import Productadvantages from "@/components/Card/Productadvantages";
import { TwoCardL, TwoCardR } from "@/components/Card/TwosectionCardImg";
import ContactedBox from "@/components/Contacted/ContactedBox";
import Mapcontactdetail from "@/components/Mapdetail/Mapcontactdetail";
import { BannerBox } from "../Card/Banner";
import Image from "next/image";

import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export const AOSPage = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000,   // ระยะเวลาเล่น animation (ms)
      once: false,      // ❗ เล่นได้หลายรอบ (default คือ false อยู่แล้ว แต่ใส่ไว้ชัดเจน)
    });
  }, []);
  return (
    <div>
      <div data-aos="fade-up">
        <BannerBox />
      </div>

      <div id="service" data-aos="zoom-in-up">
        <CardHoverEffect />
      </div>

      <div data-aos="fade-up-left">
        <TwoCardR
          title="รายละเอียดต่างๆ"
          des={
            <>
              ตัวแทนจำหน่ายจะได้รับผลประโยชน์หลักๆ คือ
              กำไรจากการขายสินค้าส่วนต่าง, ค่าคอมมิชชั่น, และโบนัสจากยอดขาย.
              นอกจากนี้ การเป็นตัวแทนจำหน่ายยังช่วยให้เข้าถึงตลาดใหม่ๆ,
              สร้างความน่าเชื่อถือให้กับแบรนด์, และลดความเสี่ยงในการลงทุน.{" "}
              <br />
              <br />
              ผลประโยชน์ที่ตัวแทนจำหน่ายจะได้รับ: กำไรจากการขาย:
              ตัวแทนจำหน่ายจะซื้อสินค้าจากผู้ขาย (เจ้าของแบรนด์) ในราคาส่วนลด
              (ราคาส่ง) และนำไปขายในราคาปลีก
              ซึ่งส่วนต่างของราคาจะเป็นกำไรของตัวแทนจำหน่าย. <br />
              <br />
              ค่าคอมมิชชั่น : บางรูปแบบของตัวแทนจำหน่าย เช่น
              ตัวแทนจำหน่ายแบบไม่สต๊อกสินค้า (Dropship)
              ตัวแทนจะได้รับค่าตอบแทนเป็นค่าคอมมิชชั่นจากการขายสินค้า
              โดยไม่ต้องลงทุนสต๊อกสินค้าเอง. โบนัสจากยอดขาย:
              บางแบรนด์หรือบริษัทอาจมีระบบสะสมยอดขาย
              เพื่อให้ตัวแทนจำหน่ายได้รับโบนัสพิเศษเมื่อทำยอดขายได้ตามเป้าที่กำหนด.{" "}
              <br />
              <br />
              ขยายตลาด:
              ตัวแทนจำหน่ายสามารถเข้าถึงกลุ่มลูกค้าในพื้นที่ที่ผู้ขายอาจเข้าไม่ถึง
              ทำให้ธุรกิจสามารถขยายตลาดได้กว้างขวางขึ้น. สร้างความน่าเชื่อถือ:
              การมีตัวแทนจำหน่ายหลายคน ช่วยสร้างความน่าเชื่อถือให้กับแบรนด์
              และทำให้แบรนด์เป็นที่รู้จักในวงกว้างมากขึ้น. ลดความเสี่ยง:
              การเป็นตัวแทนจำหน่ายแบบไม่สต๊อกสินค้า ช่วยลดความเสี่ยงในการลงทุน
              และความเสี่ยงจากสินค้าคงคลัง. ฝึกทักษะ: การเป็นตัวแทนจำหน่าย
              ช่วยให้ได้เรียนรู้และฝึกฝนทักษะด้านการขาย การตลาด
              และการบริหารจัดการธุรกิจ
              ซึ่งเป็นประโยชน์สำหรับการเป็นผู้ประกอบการในอนาคต. ข้อควรพิจารณา:{" "}
              <br />
              ความน่าเชื่อถือของแบรนด์:
              ควรเลือกเป็นตัวแทนจำหน่ายของแบรนด์ที่มีความน่าเชื่อถือ
              เพื่อลดความเสี่ยงในการถูกหลอกลวง. ข้อตกลง:
              ทำความเข้าใจข้อตกลงและเงื่อนไขต่างๆ
              ของการเป็นตัวแทนจำหน่ายให้ชัดเจน. การบริหารจัดการ:
              วางแผนและบริหารจัดการตัวแทนจำหน่ายอย่างมีประสิทธิภาพ
              เพื่อให้การทำงานราบรื่นและสร้างยอดขายได้ตามเป้า.
            </>
          }
          img="/images/Testimonials/pic1.webp"
        />

        <CardTestimonials />
      </div>

      <div data-aos="fade-down-right">
        <Productadvantages />
        <ContactedBox />
      </div>

      <div id="aboutus" data-aos="zoom-in">
        <TwoCardR
          title="เกี่ยวกับเรา บริษัท เคอรี่ เทรดดิ้ง จำกัด"
          des={
            <>
              บริษัท เคอรี่ เทรดดิ้ง จำกัด ก่อตั้งขึ้นเมื่อวันที่ 19 มกราคม พ.ศ.
              2564 เราเป็นผู้จำหน่ายสินค้าทั่วไป
              เพื่อสนองต่อความต้องการของลูกค้า
              สิ่งที่แสดงถึงวิสัยทัศน์อันกว้างไกลได้อย่างชัดเจนคือ
              กลยุทธ์ในการสร้างความกลมเกลียวภายในองค์กร
              และสร้างพันธมิตรภายนอกองค์กร ดังนั้น
              เราจึงตระหนักและคำนึงถึงความสำคัญของปัญหาสิ่งแวดล้อม
              ตั้งแต่นี้เป็นต้นไป
              บริษัทของเราจะมุ่งมั่นในการดำเนินธุรกิจอย่างยั่งยืนบนพื้น
            </>
          }
          img="/images/Testimonials/pic1.webp"
        />

        <ContactedBox />
      </div>

      {/* ข้อดีสินค้า */}
      <section className="my-15" data-aos="flip-up">
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
                    src="/images/Testimonials/pic3.webp"
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
                    src="/images/Testimonials/pic3.webp"
                    alt="Lobby Lounge"
                    width={600}
                    height={260}
                    layout="responsive"
                  />
                </div>

                {/* เนื้อหา */}
                <div className="flex flex-col justify-start items-start w-full text-black">
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
