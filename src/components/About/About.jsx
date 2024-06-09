import React from 'react'
import"./About.css"
import vedio from "../../images/video.mp4"
function About() {
  return (
    <div className='About-section'>
        <h1>zaph travels and tours</h1>
        <p>     Kenya, a land of stunning landscapes and vibrant traditions,zaph offers travelers unforgettable experiences that explore into its rich culture. The journey begins in Nairobi, the bustling capital where the association of modernity and tradition is vividly apparent. A visit to the National Museum introduces you to Kenya’s diverse heritage, showcasing artifacts that narrate the story of its numerous ethnic groups.     Venturing into the heart of Maasailand, you encounter the Maasai people, renowned for their distinctive red attire and intricate beadwork.
</p><div className="video-container">
      <video controls autoPlay muted>
        <source src={vedio} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
  )
}

export default About