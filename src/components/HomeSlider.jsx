import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
import avengerImg from '../assets/avenger.jpg'
import matrixImg from '../assets/matrix.jpg'
import spiderMan from '../assets/spiderMan.jpg'


const HomeSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper rounded-lg"
    >
      <SwiperSlide>
        <img src={slider1} className="object-cover w-full h-[400px]" alt="slider1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} className="object-cover w-full h-[400px]" alt="slider2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={spiderMan} className="object-cover w-full h-[400px]" alt="slider3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={avengerImg} className="object-cover w-full h-[400px]" alt="slider3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={matrixImg} className="object-cover w-full h-[400px]" alt="slider3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;