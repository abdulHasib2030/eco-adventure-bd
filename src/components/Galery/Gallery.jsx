import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './style.css';
import image1 from '../../assets/g1.jpg'
import image2 from '../../assets/g2.jpg'
import image3 from '../../assets/g3.avif'
import image4 from '../../assets/g4.jpg'
import image5 from '../../assets/g5.jpg'
import image6 from '../../assets/g6.jpg'
import image7 from '../../assets/g7.jpg'
import image8 from '../../assets/g8.jpg'
import image9 from '../../assets/g9.jpg'

// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const Gallery = () => {
    return (
      <section className="py-10 my-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500
               to-purple-400  mb-8">Gallery</h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true} // Enable infinite loop
          autoplay={{
            delay: 3000, // Set autoplay delay in milliseconds
            disableOnInteraction: false, // Autoplay will not stop when the user interacts
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className='h-full' src={image1} />
          </SwiperSlide>
          <SwiperSlide>
            <img className='h-full' src={image2} />
          </SwiperSlide>
          <SwiperSlide>
            <img className='h-full' src={image3} />
          </SwiperSlide>
          <SwiperSlide>
            <img className='h-full' src={image4} />
          </SwiperSlide>
          <SwiperSlide>
            <img className='h-full' src={image5} />
          </SwiperSlide>
          <SwiperSlide>
            <img className='h-full' src={image6} />
          </SwiperSlide>
          <SwiperSlide>
            <img className='h-full' src={image7} />
          </SwiperSlide>
          <SwiperSlide>
            <img className='h-full' src={image8} />
          </SwiperSlide>
          <SwiperSlide>
            <img className='h-full' src={image9} />
          </SwiperSlide>
        </Swiper>
     </section>
    );
};

export default Gallery;