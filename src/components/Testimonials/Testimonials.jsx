import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Testimonials.css';
import shiro_img from '../../images/shiro.jpeg';
import alex_img from '../../images/alex.jpeg';
import ian_img from '../../images/ian.jpeg';
import miriam_img from '../../images/miriam.jpeg';
import lydia_img from '../../images/lydia.jpeg';

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="part">     
        <h1>Testimonials</h1>
      <Swiper
        spaceBetween={2}
        slidesPerView={2}
        pagination={{ clickable: true }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div className="testimonial-card">
            <img src={shiro_img} alt="Shiro" className="card-img" />
            <h1>Shiro.G</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita consequuntur, illo culpa nemo dicta eum.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <img src={alex_img} alt="Alex" className="card-img" />
            <h1>Alex Githinji</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita consequuntur, illo culpa nemo dicta eum.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <img src={ian_img} alt="Ian" className="card-img" />
            <h1>Ian Kimani</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita consequuntur, illo culpa nemo dicta eum.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <img src={miriam_img} alt="Miriam" className="card-img" />
            <h1>Miriam Mugure</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita consequuntur, illo culpa nemo dicta eum.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            <img src={lydia_img} alt="Lydia" className="card-img" />
            <h1>Lydia</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita consequuntur, illo culpa nemo dicta eum.</p>
          </div>
        </SwiperSlide>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
      </div>

    </section>
  );
}

export default Testimonials;
