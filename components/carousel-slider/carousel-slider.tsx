import Image from "next/image";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CarouselSlider() {
  const photo1 =
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80";

  const slides = [photo1, photo1, photo1, photo1, photo1];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {slides.map((src, index) => (
        <SwiperSlide key={"slider" + index}>
          <Image
            alt="'Hello'"
            layout="responsive"
            height={370}
            width={993}
            src={src}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
