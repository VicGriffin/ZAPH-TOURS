<link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
    rel="stylesheet"
/>
import React from 'react'
import { Link } from 'react-router-dom'
import "./Trips.css"
import honey_img from "../../images/hooney.jpeg"

function Trips() {
  return (
    <>
    <section className="trips-body">
        <div className="container">
        <div className="card-board">
            <div className="card__border">
                <div className="card__place">
                    <img src={honey_img} alt="" className="card__img" />
                </div>
            </div>
            <h3 className="card--name">Honey moon</h3>
            <span className="card--details">amount</span>

            <div className="info">
                <div className="info--icon">
                    <i></i>
                </div>
                
                <div className="info--border">
                    <div className="info--place">
                        <img src={honey_img} alt="" className='img'/>
                    </div>
                </div>
                <div className="info--data">
                    <h3 className="info--name">Honey moon</h3>
                    <span className="info--details">Lorem ipsum dolor sit amet consectetur.</span>
                    <span className="info--location">nairobi kenya</span>
                </div>
            </div>
        </div>
        <div className="card-board">
            <div className="card__border">
                <div className="card__place">
                    <img src={honey_img} alt="" className="card__img" />
                </div>
            </div>
            <h3 className="card--name">Honey moon</h3>
            <span className="card--details">amount</span>

            <div className="info">
                <div className="info--icon">
                    <i></i>
                </div>
                
                <div className="info--border">
                    <div className="info--place">
                        <img src={honey_img} alt="" className='img'/>
                    </div>
                </div>
                <div className="info--data">
                    <h3 className="info--name">Honey moon</h3>
                    <span className="info--details">Lorem ipsum dolor sit amet consectetur.</span>
                    <span className="info--location">nairobi kenya</span>
                </div>
            </div>
        </div>
        <div className="card-board">
            <div className="card__border">
                <div className="card__place">
                    <img src={honey_img} alt="" className="card__img" />
                </div>
            </div>
            <h3 className="card--name">Honey moon</h3>
            <span className="card--details">amount</span>

            <div className="info">
                <div className="info--icon">
                    <i></i>
                </div>
                
                <div className="info--border">
                    <div className="info--place">
                        <img src={honey_img} alt="" className='img'/>
                    </div>
                </div>
                <div className="info--data">
                    <h3 className="info--name">Honey moon</h3>
                    <span className="info--details">Lorem ipsum dolor sit amet consectetur.</span>
                    <span className="info--location">nairobi kenya</span>
                </div>
            </div>
        </div>
        </div>

    </section>
    </>
  )
}

export default Trips