import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper";


import fashionImage1 from '../../../assets/Fashion_Slider2.jpg'
import fashionImage3 from '../../../assets/Fashion_Slider3.jpg'
import fashionImage4 from '../../../assets/Fashion_Slider0.jpg'
import {  FaArrowCircleRight } from "react-icons/fa";

const Facilities = () => {
    return (
        <div className=''>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="my-auto space-y-3">
                    <h3 className="text-[#24a9e1] font-bold">- Welcome -</h3>
                    <h2 className="text-3xl md:text-4xl font-bold">Fashion summer camp facilities</h2>
                    <div className="flex items-center gap-2">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <FaArrowCircleRight className="text-[#24a9e1]"></FaArrowCircleRight>
                        </motion.div>
                        <p>Design Studios: Dedicated spaces equipped with design tools such as sewing machines</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <FaArrowCircleRight className="text-[#24a9e1]"></FaArrowCircleRight>
                        </motion.div>
                        <p>Computer Labs: Equipped with design software like Adobe Illustrator or Photoshop</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <FaArrowCircleRight className="text-[#24a9e1]"></FaArrowCircleRight>
                        </motion.div>
                        <p>Fabric and Material Resources: A well-stocked fabric and material library with a variety of textiles</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <FaArrowCircleRight className="text-[#24a9e1]"></FaArrowCircleRight>
                        </motion.div>
                        <p>Classroom and Lecture Spaces: Rooms where instructors can deliver lessons, conduct workshops</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <FaArrowCircleRight className="text-[#24a9e1]"></FaArrowCircleRight>
                        </motion.div>
                        <p>Fitting Rooms: Private areas where campers can try on their garments and necessary adjustments</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <FaArrowCircleRight className="text-[#24a9e1]"></FaArrowCircleRight>
                        </motion.div>
                        <p>Outdoor Spaces: Depending on the camps, there may be outdoor areas for recreational activities</p>
                    </div>

                </div>
                <div className="">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={fashionImage1} /></SwiperSlide>
                        <SwiperSlide><img src={fashionImage3} /></SwiperSlide>
                        <SwiperSlide><img src={fashionImage4} /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Facilities;