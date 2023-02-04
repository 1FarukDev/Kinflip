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
import mobile1 from './images/mobile-images/mobile1.png'
import mobile2 from './images/mobile-images/mobile2.png'
import mobile3 from './images/mobile-images/mobile3.png'
import mobile4 from './images/mobile-images/mobile4.png'
import mobile5 from './images/mobile-images/mobile5.png'
import mobile6 from './images/mobile-images/mobile6.png'
import mobile7 from './images/mobile-images/mobile7.png'
import mobile8 from './images/mobile-images/mobile8.png'
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
      <div className="gallery-image-mobile">
                <img src={mobile1} alt="gallery" className="mobile1"/>
                <img src={mobile2} alt="gallery" className="mobile2"/>
                <img src={mobile3} alt="gallery" className="mobile3"/>
                <img src={mobile4} alt="gallery" className="mobile4"/>
                <img src={mobile5} alt="gallery" className="mobile5"/>
                <img src={mobile6} alt="gallery" className="mobile6"/>
                <img src={mobile7} alt="gallery" className="mobile7"/>
                <img src={mobile8} alt="gallery" className="mobile8"/>
      </div>
          <a href="#"><section id="show-more">Show More <span className="arrow"><FaArrowRight /></span></section></a>

          
 <section id="nominees">
      <h3 className="nominees-text">Nominees</h3>
      <h4 className="nominees--text">Check out our Award Nominees and Categories</h4>

      <a href="#"><h5 className="vote">VOTE NOW</h5></a>
    </section>
    </section>
  );
}
