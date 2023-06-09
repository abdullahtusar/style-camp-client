// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import slider01 from '../../../assets/Fashion_Slider01.jpg';
import slider02 from '../../../assets/Fashion_Slider02.jpg';
import slider03 from '../../../assets/Fashion_Slider03.jpg';

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
        <SwiperSlide><img src={slider01} /></SwiperSlide>
        <SwiperSlide><img src={slider02} /></SwiperSlide>
        <SwiperSlide><img src={slider03} /></SwiperSlide>
      </Swiper>
    </>
    );
};

export default Banner;