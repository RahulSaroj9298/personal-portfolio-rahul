import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const data=[
  {
    avatar: AVATAR1,
    name: "Mariya",
    review: "Great experience with the company. I am very happy with the result. Increased my site seo and users"
  },
  {
    avatar: AVATAR2,
    name: "David",
    review: "Helped to build a new website for my company. I am delighted with the result. "

  },
  {
    avatar: AVATAR3,
    name: "Michael",
    review: "Best experience with the company. I am very happy with the result. Increased my company brand."
  },
  {
    avatar: AVATAR4,
    name: "Alison",
    review: "Wow service. I am very happy with the result. Designed the best logo for the company."
  },

]


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      >
        {
          data.map(({avatar, name,review},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar}/>
                </div>
                <h5 className="client_name"> {name}</h5>
                <small className="client_review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  
  );
};

export default Testimonials;
