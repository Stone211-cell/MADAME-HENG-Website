import { ContactIcon } from "./ContactIcon";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookMessenger,
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
          <ContactIcon
            pops={pops}
            sizeicon="2x"
            coloricon="blue"
            msg="Messenger"
            description="99999999999"
            LINKBTN="#"
            icontype={faFacebookMessenger}
            classtype={classtype}
          />

          <ContactIcon
            pops={pops}
            sizeicon="2x"
            coloricon="blue"
            msg="Facebook"
            description="9999999"
             LINKBTN="tel:99999999"
            icontype={faFacebook}
            classtype={classtype}
          />

          <span className="pr-10 ">
            <ContactIcon
              pops={pops}
              sizeicon="2x"
              coloricon="red"
              msg="โทรสอบถาม"
              description="0699999999"
              LINKBTN="tel:99999999"
              icontype={faPhone}
              classtype={classtype}
            />
          </span>
          <span className="pr-10 ">
            <ContactIcon
              pops={pops}
              sizeicon="2x"
              coloricon="red"
              msg="โทรสอบถาม"
              description="0999999999"
              LINKBTN="tel:99999999"
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
              description="0699999999"
              LINKBTN="tel:99999999"
              icontype={faLine}
              classtype={classtype}
            />
          </span>
        </div>
      </div>
    </div>
  );
};
export default ContactedBox;
