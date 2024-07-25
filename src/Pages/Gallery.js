import React from 'react';
import '../App.css';
import sportsDay from '../Asset/WhatsApp-Image-2021-12-23-at-9.35.02-PM.jpeg';
import scienceExhibition from '../Asset/Springdale-Public-School-Pusa-Road-Delhi-Science-Lab.webp';
import culturalFest from '../Asset/DSC_7160.jpg';
import classroom from '../Asset/1560806830465-817-182.jpg';
import library from '../Asset/R (1).jpeg';
import schoolTour from '../Asset/video.mp4';


const Gallery = () => {
  return (
    <div className="gallery1">
    <div className="gallery">
      <h1>Gallery</h1>
      
      <div className="photos">
        <h2>Photos</h2>
        <div className="photo-grid">
          <div className="photo-item">
            <img src={sportsDay} alt="Sports Day" />
            <p>Students participating in various sports events.</p>
          </div>
          <div className="photo-item">
            <img src={scienceExhibition} alt="Science Exhibition" />
            <p>Students presenting their science projects.</p>
          </div>
          <div className="photo-item">
            <img src={culturalFest} alt="Cultural Fest" />
            <p>Students performing in the cultural fest.</p>
          </div>
          <div className="photo-item">
            <img src={classroom} alt="Classroom" />
            <p>A glimpse of our interactive classrooms.</p>
          </div>
          <div className="photo-item">
            <img src={library} alt="Library" />
            <p>Students reading and studying in the school library.</p>
          </div>
        </div>
      </div>
      
      <div className="videos">
        <h2>Videos</h2>
        <div className="video-item">
          <video controls>
            <source src={schoolTour} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Virtual tour of Springdale Public School.</p>
        </div>
        <div className="video-item">
          <video controls>
            <source src={schoolTour} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Highlights from the Annual Function 2023.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Gallery;
