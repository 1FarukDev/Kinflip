import React from "react";
import { FaArrowRight } from "react-icons/fa";
import './gallery.css'
import image1 from './images/gallery1.png'
import image2 from './images/gallery2.png'
import image3 from './images/gallery3.png'
import image4 from './images/gallery4.png'
import image5 from './images/gallery5.png'
import image6 from './images/gallery6.png'
import image7 from './images/gallery7.png'
import image8 from './images/gallery8.png'
import ipad1 from './images/ipad1.png'
import ipad2 from './images/ipad2.png'
import ipad3 from './images/ipad3.png'
import ipad4 from './images/ipad4.png'
import ipad5 from './images/ipad5.png'
import ipad6 from './images/ipad6.png'
import ipad7 from './images/ipad7.png'
import ipad8 from './images/ipad8.png'
export default function Gallery() {
  return (
    <section id="gallery">
      <div className="speaker gallery-text">
        <h3>Gallery</h3>
        <h4>Just for you... Get inspired</h4>
      </div>
      <div className="gallery-image">
                <img src={image1} alt="gallery" className="image1"/>
                <img src={image2} alt="gallery" className="image2"/>
                <img src={image3} alt="gallery" className="image3"/>
                <img src={image4} alt="gallery" className="image4"/>
                <img src={image5} alt="gallery" className="image5"/>
                <img src={image6} alt="gallery" className="image6"/>
                <img src={image7} alt="gallery" className="image7"/>
                <img src={image8} alt="gallery" className="image8"/>
      </div>
      <div className="gallery-image-ipad">
                <img src={ipad1} alt="gallery" className="ipad1"/>
                <img src={ipad2} alt="gallery" className="ipad2"/>
                <img src={ipad3} alt="gallery" className="ipad3"/>
                <img src={ipad4} alt="gallery" className="ipad4"/>
                <img src={ipad5} alt="gallery" className="ipad5"/>
                <img src={ipad6} alt="gallery" className="ipad6"/>
                <img src={ipad7} alt="gallery" className="ipad7"/>
                <img src={ipad8} alt="gallery" className="ipad8"/>
      </div>
          <section id="show-more">Show More <span className="arrow"><FaArrowRight /></span></section>
    </section>
  );
}
