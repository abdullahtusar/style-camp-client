// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import slider1 from '../../../assets/Fashion_Slider1.jpg';

const Banner = () => {
    return (
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slider1} /></SwiperSlide>
        <SwiperSlide><img src={slider1} /></SwiperSlide>
        <SwiperSlide><img src={slider1} /></SwiperSlide>
        <SwiperSlide><img src={slider1} /></SwiperSlide>
      </Swiper>
    </>
    );
};

export default Banner;