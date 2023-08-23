import React from "react";
import "./Testimonials.css";
import {Swiper ,SwiperSlide} from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import {Pagination} from "swiper";
import 'swiper/css/pagination';
import 'swiper/css'


const Testimonials = () => {
    const clients=[
            {
                img:profilePic1,
                review:
                "dipak is very good at his work he understands the requirement of project and deliver according to that also he is very punctual.always do the work on time  ",


            },
            {
                img:profilePic2,
                review:
                "dipak is very good at his work he understands therequirement of project and deliver according to that also he is very punctual. always do the work on time  ",

            },
            {
                img:profilePic3,
                review:
                "dipak is very good at his  work he understands the requirement of project and  deliver according to  that also he is very punctual.  always do the work on time  ",

            },
            {
                img:profilePic4,
                review:
                "dipak is very good at his  work he understands the requirement of project and deliver according to that also he is very punctual.always do the work on time  ",

            },

    ]
  return (
    <div className='t-wrapper' id="Testimonials">
        <div className='t-heading'>
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>From me...</span>
            <div 
            className="blur t-blur1" 
            style={{background:"var (--purple) "}}
            ></div>
            <div className="blur t-blur2" style={{background:"var (--skyblue) "}}></div>

        </div>
        {/* slider*/}
        
        <Swiper
            module={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}}
        
        
        >
            {clients.map((client , index)=>{
             return (
                <SwiperSlide key={index}>
                    <img src={client.img} alt=""/>
                    <span>  {client.review} </span>
                </SwiperSlide>
             )
             })}
        </Swiper>
    </div>
  )
}

export default Testimonials