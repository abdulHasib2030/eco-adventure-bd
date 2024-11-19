import item1 from '../../assets/banner1.jpg'
import 'animate.css';

import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './stylesAdventure.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, Navigate } from 'react-router-dom';

const AdventureExperience = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const {data, user} = useContext(AuthContext)
  return (
    <>
      <section className="py-10 my-10 h-[650px] ">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500
                 to-purple-400  mb-8">Adventure Experiences</h2>
        <Swiper 
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}

          loop={true} // Enable infinite loop
          autoplay={{
            delay: 3000, // Set autoplay delay in milliseconds
            disableOnInteraction: false, // Autoplay will not stop when the user interacts
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >


          {data.map((adventure) => (
            <SwiperSlide>

              <div key={adventure.id} className="card bg-white shadow-md hover:shadow-lg p-4">
                <figure>
                  <img src={item1} alt={adventure.title} className="w-full h-48 object-cover" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-xl font-semibold text-gray-700">{adventure.title}</h3>
                  <ul className="mt-2 text-sm text-gray-600">
                    {adventure.eco_friendly_features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-green-500">✔</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <div className='border border-gray-400 p-4'>
                    <h4 className='animate__animated animate__headShake 
                  animate__infinite  animate__delay-2s animate__slower text-xl font-semibold
                   text-transparent bg-clip-text  bg-gradient-to-r from-indigo-600
                    to-purple-600 '>{adventure.location} | {adventure.duration}</h4>
                  </div>
                  <div className="card-actions mt-2">
                    {
                      user ? 
                      <Link to={`/${adventure.id}`} className="btn text-black font-semibold text-xl bg-gradient-to-r from-indigo-300 to-purple-400 ">
                      Explore Now
                    </Link>:
                   <Link to={'/login'} state={{id:adventure.id}} className="btn text-black font-semibold text-xl bg-gradient-to-r from-indigo-300 to-purple-400 ">
                   Explore Now
                 </Link>
                    }
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </section>


    </>
  );
}

export default AdventureExperience;