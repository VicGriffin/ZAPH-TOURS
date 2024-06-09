import React from 'react'
import { Link } from 'react-router-dom'
import "./destination.css"
import any_img from "../../images/any6.jpeg"
import any1_img from "../../images/any1.jpg"
import any2_img from "../../images/any7.jpeg"
import any3_img from "../../images/any4.jpeg"
import any4_img from "../../images/any3.jpeg"
import any5_img from "../../images/any8.jpeg"


function Destinations() {
  return (
    <>
    <section className='destination'>
      <h1>Destinations</h1>
      <h3>Travel and Holiday Destinations With Zaph Tours</h3>
      <p>Exploring the world's best safaris and adventure tours offers an unparalleled opportunity to connect with nature, experience diverse cultures, and create unforgettable memories. Africa is the quintessential destination for a safari, with countries like Kenya, Tanzania, and South Africa leading the way. The Maasai Mara in Kenya and the Serengeti in Tanzania are renowned for their breathtaking wildebeest migrations, offering a front-row seat to one of nature's most spectacular events. South Africa's Kruger National Park boasts a remarkable diversity of wildlife, including the Big Five: lions, elephants, leopards, rhinos, and buffaloes. <br />For those seeking a different kind of adventure, South America provides unique tours through the Amazon Rainforest. Navigating the dense foliage and winding rivers reveals an astonishing array of wildlife, from colorful birds to elusive jaguars. Patagonia, straddling Argentina and Chile, offers dramatic landscapes of glaciers, mountains, and lakes, perfect for trekking and wildlife spotting. <br />In Asia, Nepal's Annapurna Circuit is a trekker’s paradise, combining challenging trails with stunning Himalayan views and rich cultural experiences. For a truly off-the-beaten-path adventure, Mongolia's vast steppes and nomadic culture provide a journey back in time, with horseback riding and eagle hunting demonstrations. <br />Whether it’s the iconic African safaris, the lush Amazon adventures, or the rugged beauty of the Himalayas and Patagonia, each destination promises a thrilling and enriching experience for every adventurer.</p>

      <p>tap the pictures to see more </p>
      <div className="card-area">
        <div className="wrapper">
          <div className="box-area">
          <div className="box">
              <img src={any_img} alt="" />
              <div className="overlay">
                <h3>Moutaineering</h3>
                <span>500$</span>
                <a href="">Book Now</a>
              </div>
            </div>
            <div className="box">
              <img src={any1_img} alt="" />
              <div className="overlay">
                <h3>Moutaineering</h3>
                <span>1000$</span>
                <a href="">Book Now</a>
              </div>
            </div>
            <div className="box">
              <img src={any3_img} alt="" />
              <div className="overlay">
                <h3>Moutaineering</h3>
                <span>650$</span>
                <a href="">Book Now</a>
              </div>
            </div>
            <div className="box">
              <img src={any4_img} alt="" />
              <div className="overlay">
                <h3>Moutaineering</h3>
                <span>600$</span>
                <a href="">Book Now</a>
              </div>
            </div>
            <div className="box">
              <img src={any5_img} alt="" />
              <div className="overlay">
                <h3>Moutaineering</h3>
                <span>700$</span>
                <a href="">Book Now</a>
              </div>
            </div>
            <div className="box">
              <img src={any2_img} alt="" />
              <div className="overlay">
                <h3>Moutaineering</h3>
                <span>200$</span>
                <a href="">Book Now</a>
              </div>
            </div><div className="box">
              <img src={any_img} alt="" />
              <div className="overlay">
                <h3>Moutaineering</h3>
                <span>500$</span>
                <a href="">Book Now</a>
              </div>
            </div>
            <div className="box">
              <img src={any1_img} alt="" />
              <div className="overlay">
                <h3>Moutaineering</h3>
                <span>400$</span>
                <a href="">Book Now</a>
              </div>
            </div>
            <div className="box">
              <img src={any3_img} alt="" />
              <div className="overlay">
                <h3>Moutaineering</h3>
                <span>300$</span>
                <a href="">Book Now</a>
              </div>
            </div>
            <div className="box">
              <img src={any4_img} alt="" />
              <div className="overlay">
                <h3>Moutaineering</h3>
                <span>150$</span>
                <a href="">Book Now</a>
              </div>
            </div>
            <div className="box">
              <img src={any5_img} alt="" />
              <div className="overlay">
                <h3>Moutaineering</h3>
                <span>200$</span>
                <a href="">Book Now</a>
              </div>
            </div>
            <div className="box">
              <img src={any2_img} alt="" />
              <div className="overlay">
                <h3>Moutaineering</h3>
                <span>400$</span>
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