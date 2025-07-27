


import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function CardTestimonials() {
  const testimonials = [
    {
      quote:
        "สำเนาบัตรประชาชนของผู้สมัคร สำเนาบัญชีธนาคาร",
      name: " ",
      designation: " เอกสารที่ใช้ในการสมัครตัวแทนจำหน่ายมีอะไรบ้าง?",
      src: "/images/Testimonials/pic1.webp",
    },
    {
      quote:
        "สำเนาบัตรประชาชนของผู้สมัคร สำเนาบัญชีธนาคาร",
      name: " ",
      designation: " เอกสารที่ใช้ในการสมัครตัวแทนจำหน่ายมีอะไรบ้าง?",
      src: "/images/Testimonials/pic2.webp",
    },
   
    {
      quote:
        "สำเนาบัตรประชาชนของผู้สมัคร สำเนาบัญชีธนาคาร",
      name: " ",
      designation: " เอกสารที่ใช้ในการสมัครตัวแทนจำหน่ายมีอะไรบ้าง?",
      src: "/images/Testimonials/pic3.webp",
    },
    {
      quote:
        "สำเนาบัตรประชาชนของผู้สมัคร สำเนาบัญชีธนาคาร",
      name: " ",
      designation: " เอกสารที่ใช้ในการสมัครตัวแทนจำหน่ายมีอะไรบ้าง?",
      src: "/images/Testimonials/pic4.webp",
    },
   
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
