import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <div>
            <section>
                <SectionTitle heading={'From 11.00am to 10.00pm'} subHeading={'order online'}></SectionTitle>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-24 "
                >
                    <SwiperSlide className=' p-4'>
                        <div className=' '>
                            <img src={slide1} alt="" />
                            <h3 className='text-center uppercase text-white relative -mt-12'>Salads</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' p-4'>
                        <div>
                            <img src={slide2} alt="" /> <h3 className='text-center -mt-12 uppercase text-white'>pizza</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='p-4'>
                        <div><img src={slide3} alt="" /> <h3 className='text-center -mt-12 uppercase text-white'>soup</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' p-4'>
                        <div><img src={slide4} alt="" /> <h3 className='text-center -mt-12 uppercase text-white'>pastry</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=' p-4'>
                        <div><img src={slide5} alt="" /> <h3 className='text-center -mt-12 uppercase text-white'>Salads</h3>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </section>
        </div>
    );
};

export default Category;