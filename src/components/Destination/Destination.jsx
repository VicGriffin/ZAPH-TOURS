import React from 'react'
import { Link } from 'react-router-dom'
import "./destination.css"
import tsavo_img from "../../images/Tsavo.jpeg"
import lake_img from "../../images/Lake.jpeg"
import mtkenya_img from "../../images/MtKenya.jpeg"
import nairobi_img from "../../images/nairobi.jpeg"
import coastal_img from "../../images/coastal.jpeg"


function Destination() {
  return (
    <>
    
        <div className='heading'>
            <h1>most popular destinations</h1>
        </div>
        <section className='card-name'>
        <div className="card-section">
            <div className="card-body">
            <img src={tsavo_img} alt="" />
            <div className="inf1o">
                <h3>TSAVO-NATIONAL PARK</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim delectus eligendi sit doloribus. Magni consequatur harum voluptate perferendis tempora necessitatibus aliquid. Eos natus corporis laudantium autem voluptates id eius?</p>
            </div>
            </div>            
        </div>
        <div className="card-section">
            <div className="card-body">
            <img src={lake_img} alt="" />
            <div className="inf1o">
                <h3>LAKE NAKURU</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim delectus eligendi sit doloribus. Magni consequatur harum voluptate perferendis tempora necessitatibus aliquid. Eos natus corporis laudantium autem voluptates id eius?</p>
            </div>
            </div>            
        </div>
        <div className="card-section">
            <div className="card-body">
            <img src={coastal_img} alt="" />
            <div className="inf1o">
                <h3>COAST</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim delectus eligendi sit doloribus. Magni consequatur harum voluptate perferendis tempora necessitatibus aliquid. Eos natus corporis laudantium autem voluptates id eius?</p>
            </div>
            </div>            
        </div>
        <div className="card-section">
            <div className="card-body">
            <img src={nairobi_img} alt="" />
            <div className="inf1o">
                <h3>NAIROBI NATIONAL PARK</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim delectus eligendi sit doloribus. Magni consequatur harum voluptate perferendis tempora necessitatibus aliquid. Eos natus corporis laudantium autem voluptates id eius?</p>
            </div>
            </div>            
        </div>
        <div className="card-section">
            <div className="card-body">
            <img src={mtkenya_img} alt="" />
            <div className="inf1o">
                <h3>MOUNT KENYA</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim delectus eligendi sit doloribus. Magni consequatur harum voluptate perferendis tempora necessitatibus aliquid. Eos natus corporis laudantium autem voluptates id eius?</p>
            </div>
            </div>            
        </div>   
    </section>    
    </>
  )
}

export default Destination