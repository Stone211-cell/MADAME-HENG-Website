"use client";
import { ContactIcon } from "./ContactIcon";

import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  
  faLine,
} from "@fortawesome/free-brands-svg-icons";

type classtype = {
  classtype?: string;
  pops?: string;
};
const ContactedBox = ({ classtype, pops }: classtype) => {
  return (
    <div>
      {" "}
      <div className="  justify-items-center ">
        <div className="grid grid-cols-1 px-5 gap-5  md:grid-cols-2 justify-items-center  ">
          <span >
            <ContactIcon
              pops={pops}
              sizeicon="2x"
              coloricon="blue"
              msg="Facebook"
              description="ติดต่อสอบถาม"
              LINKBTN="https://www.facebook.com/share/18MM3dBtwd/"
              icontype={faFacebook}
              classtype={classtype}
            />
          </span>

          <span className="">
            <ContactIcon
              pops={pops}
              sizeicon="2x"
              coloricon="red"
              msg="โทรสอบถาม"
                 description="089-994-7693"
              LINKBTN="tel:0899947693"
              icontype={faPhone}
              classtype={classtype}
            />
          </span>
          <span className="pr-10">
            <ContactIcon
              pops={pops}
              sizeicon="2x"
              coloricon="green"
              msg="LINE ID"
              description="Line"
              LINKBTN="https://qr-official.line.me/gs/M_094shhsh_BW.png?oat_content=qr"
              icontype={faLine}
              classtype={classtype}
            />
          </span>

           <span>
          
                               <ContactIcon pops={pops}
                                 sizeicon="2x"
                                 coloricon="red"
                                 msg=" เปิดแผนที่นำทาง"
                                 description=""
                                 LINKBTN="https://maps.app.goo.gl/EeVGskhjHEgHwUq76"
                                 icontype={faLocationDot}
                                 classtype=""
                                 />
          
                                 </span>
        </div>
      </div>
    </div>
  );
};
export default ContactedBox;
