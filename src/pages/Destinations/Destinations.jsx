import React from 'react'
import { Link } from 'react-router-dom'
import "./destination.css"
import any_img from "../../images/any6.jpeg"
import any1_img from "../../images/any1.jpg"
import any2_img from "../../images/any7.jpeg"
import any3_img from "../../images/any4.jpeg"
import any4_img from "../../images/any7.jpeg"
import any5_img from "../../images/any7.jpeg"


function Destinations() {
  return (
    <>
    <section className='destination'>
      <h1>Destinations</h1>
      <div className="card-area">
        <div className="wrapper">
          <div className="box-area">
            <div className="box">
              <img src={any_img} alt="" />
              <div className="overlay">
                <h3>Moutaineering</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum dolores voluptas eos ipsam nobis nemo doloremque ad illum. Quidem velit modi a eos tempora, unde optio in nesciunt accusamus.</p>
                <span>amount</span>
                <a href="">Book Now</a>
              </div>
            </div>
            <div className="box">
              <img src={any1_img} alt="" />
              <div className="overlay">
                <h3>Moutaineering</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum dolores voluptas eos ipsam nobis nemo doloremque ad illum. Quidem velit modi a eos tempora, unde optio in nesciunt accusamus.</p>
                <span>amount</span>
                <a href="">Book Now</a>
              </div>
            </div>
            <div className="box">
              <img src={any3_img} alt="" />
              <div className="overlay">
                <h3>Moutaineering</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum dolores voluptas eos ipsam nobis nemo doloremque ad illum. Quidem velit modi a eos tempora, unde optio in nesciunt accusamus.</p>
                <span>amount</span>
                <a href="">Book Now</a>
              </div>
            </div>
            <div className="box">
              <img src={any1_img} alt="" />
              <div className="overlay">
                <h3>Moutaineering</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum dolores voluptas eos ipsam nobis nemo doloremque ad illum. Quidem velit modi a eos tempora, unde optio in nesciunt accusamus.</p>
                <span>amount</span>
                <a href="">Book Now</a>
              </div>
            </div>
            <div className="box">
              <img src={any1_img} alt="" />
              <div className="overlay">
                <h3>Moutaineering</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum dolores voluptas eos ipsam nobis nemo doloremque ad illum. Quidem velit modi a eos tempora, unde optio in nesciunt accusamus.</p>
                <span>amount</span>
                <a href="">Book Now</a>
              </div>
            </div>
            <div className="box">
              <img src={any2_img} alt="" />
              <div className="overlay">
                <h3>Moutaineering</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum dolores voluptas eos ipsam nobis nemo doloremque ad illum. Quidem velit modi a eos tempora, unde optio in nesciunt accusamus.</p>
                <span>amount</span>
                <a href="">Book Now</a>
              </div>
            </div>
            </div>
        </div>
      </div>

    </section>
    </>
  )
}

export default Destinations