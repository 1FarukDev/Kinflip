import React from "react";
import './gallery.css'
import image1 from './images/gallery1.png'
import image2 from './images/gallery2.png'
import image3 from './images/gallery3.png'
import image4 from './images/gallery4.png'
import image5 from './images/gallery5.png'
import image6 from './images/gallery6.png'
import image7 from './images/gallery7.png'
import image8 from './images/gallery8.png'
export default function Gallery() {
  return (
    <section id="gallery">
      <div className="speaker">
        <h3>Gallery</h3>
        <h4>Just for you... Get inspired</h4>
      </div>
      <div className="gallery-image">
                <img src={image1} alt="gallery" />
                <img src={image2} alt="gallery" />
                <img src={image3} alt="gallery" />
                <img src={image4} alt="gallery" />
                <img src={image5} alt="gallery" />
                <img src={image6} alt="gallery" />
                <img src={image7} alt="gallery" />
                <img src={image8} alt="gallery" />
      </div>
    </section>
  );
}
