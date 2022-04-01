import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'TinaShow',
    review: 'I hope and pray It I hope and pray It wont be long This ho'
  },
  {
    avatar: AVTR2,
    name: 'hurry kane',
    review: 'I hope and pray It I hope and pray It wont be long This ho'
  },
  {
    avatar: AVTR3,
    name: 'luk show',
     review: 'I hope and pray It I hope and pray It wont be long This ho'

  },
 
  {
    avatar: AVTR4,
   name: 'johnson',
   review: 'I hope and pray It I hope and pray It wont be long This ho'
  }

]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From The Client</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials_container'
        modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
     
      pagination={{ clickable: true }}>
      
  {
          data.map(({ avatar, name, review }, index) => {
            return (
                 <SwiperSlide key={index} className='testimonial'>
          <div className='cliant_avatar'>
            <img src={avatar} alt='hamo' />
          
          </div>
                <h5 className='client_name'>{name}</h5>
            <small className='client_review'>
              {review}
            </small>
        </SwiperSlide>

            )
            
          }
          
          
          )
        }
      
      </Swiper>
    </section>
  )
}

export default Testimonials