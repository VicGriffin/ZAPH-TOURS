import React from 'react'
import { Link } from 'react-router-dom'
import "./Contact.css"

function Contact() {
  return (
    <>
    <div className='contact'>
    <h1>Contact zaph tours</h1>
    <p className='contact-para'>your journey starts here- contact us to start planning your next getaway</p>
    <h2 className='contact-parah'>Experience the world like never before - let's connect and start planning your trip</h2>
    <section className='contact-side'>
      <div className='contact-left-side'>
        <h3>Our Contacts</h3>
        <p>Phone: +234 803 456 7890</p>
        <p>Email: [info@zaph.com](mailto:info@zaph.com)</p>
        <p>Address: 123, Zaph Street, nairobi, kenya</p>
      </div>
      <div className="contact-right-side">
      <h3>FILL IN YOUR DETAILS</h3>
        <form action="">
          <label for="number">Phone Number:</label>
          <input type="number" placeholder='Phone Number' />
          <label for="name">FullName:</label>
          <input type="text" placeholder='FullName' required/>
          <label for="email">Email:</label>
          <input type="email" placeholder='Email' required />
          <label for="message">safari start date</label>
          <input type="date" id="name" name="name" required/>
          <label for="email">safari end date</label>
          <input type="date"/>
          <label for="message">Number of Adults</label>
          <input type="number" placeholder='no. of adults'/>
          <label for="message">Number of Children</label>
          <input type="number" placeholder='no. of children' />
          <button>submit</button>
        </form>
      </div>
    </section>
    </div>
    </>
  )
}

export default Contact