import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <section className='header'>
        <div className="header-maintitle">
            <h1>zaph tours</h1>
        </div>
        <div className="navigation-bar">
            <ol className='lists'>
                <li><Link to="/">home</Link></li>
                <li><Link to="/Destinations">destinations</Link></li>
                <li><Link to="/Visuals">visuals</Link></li>
                <li><Link to="/Contact">contact</Link></li>
            </ol>
        </div>
    </section>
    
    
    </>
  )
}

export default Header