import React from 'react'
import "./Testimonials.css"
import shiro_img from "../../images/shiro.jpeg"
import alex_img from "../../images/alex.jpeg"
import ian_img from "../../images/ian.jpeg"
import miriam_img from "../../images/miriam.jpeg"
import lydia_img from "../../images/lydia.jpeg"

function Testimonials() {
  return (
    <>
    <section className="testimonials">
        <h1>Testimonials</h1>
    <div className="testimonial-cards">
            <div>
                <img src={shiro_img} alt="" className='card-img' />
                <h1>Shiro.G</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita consequuntur, illo culpa nemo dicta eum, </p>
            </div>
        </div><div className="testimonial-cards">
            <div>
                <img src={alex_img} alt="" className='card-img' />
                <h1>Alex Githinji</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita consequuntur, illo culpa nemo dicta eum, </p>
            </div>
        </div><div className="testimonial-cards">
            <div>
                <img src={ian_img} alt="" className='card-img' />
                <h1>Ian Kimani</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita consequuntur, illo culpa nemo dicta eum, </p>
            </div>
        </div><div className="testimonial-cards">
            <div>
                <img src={miriam_img} alt="" className='card-img' />
                <h1>Miriam Mugure</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita consequuntur, illo culpa nemo dicta eum, </p>
            </div>
        </div><div className="testimonial-cards">
            <div>
                <img src={lydia_img} alt="" className='card-img' />
                <h1>Lydia</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita consequuntur, illo culpa nemo dicta eum, </p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Testimonials