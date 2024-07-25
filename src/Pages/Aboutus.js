import React from 'react';
import '../App.css';

const AboutUs = () => {
  return (
    <section className="about-us1">
      <div className="about-us">
      <div className="container1">
        <h1>About Us</h1>
        <div className="history">
          <h2>History</h2>
          <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
        </div>
        <div className="vision">
          <h2>Vision</h2>
          <p>To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
        </div>
        <div className="mission">
          <h2>Mission</h2>
          <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
        </div>
        <div className="principal-message">
          <h2>Principal's Message</h2>
          <blockquote>
            <p>"At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future."</p>
          </blockquote>
        </div>
        <div className="infrastructure">
          <h2>Infrastructure and Facilities</h2>
          <ul>
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>Library with a vast collection of books and digital resources</li>
            <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutUs;
