
import { ImagesSliderSection } from "@/components/Animation/ImagesSliderSection";
import { CardHoverEffect } from "@/components/Card/CardHoverEffect";
import { CardTestimonials } from "@/components/Card/CardTestimonials";
import Productadvantages from "@/components/Card/Productadvantages";
import { TwoCardL, TwoCardR } from "@/components/Card/TwosectionCardImg";
import ContactedBox from "@/components/Contacted/ContactedBox";
import Mapcontactdetail from "@/components/Mapdetail/Mapcontactdetail";

const page = () => {
  return (
    <div>
      <div>banner</div>

      <div>
        <CardHoverEffect/>
      </div>

      <TwoCardR
        title="ข้อดีโรงแรม"
        des="ข้อดีโรงแรม"
        img="/images/Advantages/cosmetic-cat-1.webp"
      />

    <CardTestimonials />

    <div>
      <Productadvantages />
      <ContactedBox />
    </div>


    <div>
        <TwoCardR
        title="ข้อดีโรงแรม2"
        des="ข้อดีโรงแรม2"
        img="/images/Advantages/cosmetic-cat-1.webp"
      />

            <ContactedBox />
    </div>


    {/* ข้อดีสินค้า */}
    <section className="my-15">

      <div>
      <ImagesSliderSection/>

            <ContactedBox />
      </div>

      <div>
      <TwoCardL  title="ข้อดีโรงแรม2"
        des="ข้อดีโรงแรม2"
        img="/images/Advantages/cosmetic-cat-1.webp"/>
    </div>

    <div>
      <Mapcontactdetail />
    </div>
    </section>
    
    

    </div>
  );
};
export default page;
