import React from 'react'
import "./Footer.css"
import lion_img from "../../images/lionshadow.jpeg"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <section className="footer">
        <footer>
          <div className="left-side">
            <img src={lion_img} alt="" />
            <h1>JOIN US</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='right-side'>
          

          <div className='subscribe-card'>
            <h3>Subscribe To Our Newsletter</h3>
            <br />
            
            <form action="" method="post">
            <div>
            <label htmlFor="">Fullname:</label>
            <input type="text" placeholder='Write your Fullname'/> 
            </div>
            <br />
            <div>
            <label htmlFor="">Phone Number</label>
            <input type="number" placeholder='Phone Number' /> 
            </div>
            <br />
            <div>
            <label htmlFor="">Input Email</label>
            <input type="email" placeholder='Email' />
            </div>
            <br/>
            <button type='submit'>subscribe</button>
            </form>
            
            <p>Copyright 2022</p>
          </div>
          </div>
        </footer>
    </section>
    </>
  )
}

export default Footer