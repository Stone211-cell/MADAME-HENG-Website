
import Dropdown from "./Dropdown";


import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import {

  faFacebook,
  faFacebookMessenger,
  faLine,
} from "@fortawesome/free-brands-svg-icons";

import { ContactIcon } from "../Contacted/ContactIcon";

const HeadderNavbar = () => {
  return (
    <div className="flex justify-between items-center p-4 w-full overflow-x-hidden border-b-1 ">
      <div></div>

      <div className="flex  gap-4 items-center max-w-full ">
                  <span >
                    <ContactIcon
                       pops="hidden"
                      sizeicon="2x"
                      coloricon="blue"
                      msg="Facebook"
                      description="ติดต่อสอบถาม"
                      LINKBTN="https://www.facebook.com/share/18MM3dBtwd/"
                      icontype={faFacebook}
                      
                    />
                  </span>
        
                  <span className="">
                    <ContactIcon
                       pops="hidden"
                      sizeicon="2x"
                      coloricon="red"
                      msg="โทรสอบถาม"
                         description="089-994-7693"
                      LINKBTN="tel:0899947693"
                      icontype={faPhone}
                      
                    />
                  </span>
                  <span >
                    <ContactIcon
                       pops="hidden"
                      sizeicon="2x"
                      coloricon="green"
                      msg="LINE ID"
                      description="Line"
                      LINKBTN="https://qr-official.line.me/gs/M_094shhsh_BW.png?oat_content=qr"
                      icontype={faLine}
                      
                    />
                  </span>
        
                   <span>
                  
                                       <ContactIcon  pops="hidden"
                                         sizeicon="2x"
                                         coloricon="red"
                                         msg=" เปิดแผนที่นำทาง"
                                         description=""
                                         LINKBTN="https://maps.app.goo.gl/EeVGskhjHEgHwUq76"
                                         icontype={faLocationDot}
                                         classtype=""
                                         />
                  
                                         </span>



        
        <div>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};
export default HeadderNavbar;
