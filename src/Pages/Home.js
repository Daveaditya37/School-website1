import React, { useState, useEffect } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import '../App.css';
import img3 from '../Asset/IMG_20240724_235838.jpg'; // Ensure this path is correct

const slides = [
    {
      title: "Annual Sports Day",
      description: "Celebrating Excellence in Sports",
      image: "https://i0.wp.com/www.millhill.org.uk/wp-content/uploads/Belmont-Sports-Day-2018-342.jpg"
    },
    {
      title: "Science Exhibition",
      description: "Showcasing Student Innovations",
      image: "https://static.wixstatic.com/media/b80b1d_6ac48943474c42abbae15efcb4266880~mv2_d_1848_1230_s_2.jpg/v1/fill/w_1600,h_1064,al_c,q_90/file.jpg"
    },
    {
      title: "Cultural Fest",
      description: "Embracing Diversity and Creativity",
      image: "https://www.thepresidiumschool.com/common/images/gallery/pages/Events/Annual-Fest/annual-day-0013.jpg"
    }
  ];
  
  function Home() {
    const [slideIndex, setSlideIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setSlideIndex(prevIndex => (prevIndex + 1) % slides.length);
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }, []);
  
    const nextSlide = () => {
      setSlideIndex((slideIndex + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setSlideIndex((slideIndex - 1 + slides.length) % slides.length);
    };
  
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    return (
      <>
        
  <div className="intro1">
        <div className="intro">
          <h1>Springdale Public School</h1>
          <h2>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</h2>
          <p>At Springdale Public School, we are dedicated to providing an exceptional education experience that fosters academic excellence, personal growth, and a strong sense of community. Our mission is to nurture and inspire every student to reach their full potential and become responsible, thoughtful, and well-rounded individuals.</p>
          <h2>Our Vision</h2>
          <p>Our vision is to create a dynamic learning environment where students are empowered to explore their passions, develop critical thinking skills, and cultivate a lifelong love of learning. We believe in nurturing a diverse and inclusive community where every student feels valued and supported.</p>
          <h2>Academic Excellence</h2>
          <p>Springdale Public School is committed to maintaining high academic standards and providing a rigorous curriculum that challenges and engages students. Our experienced and dedicated faculty use innovative teaching methods to inspire curiosity and encourage academic achievement. We offer a wide range of subjects and extracurricular activities to ensure a well-rounded education for all students.</p>
          <h2>Holistic Development</h2>
          <p>We believe that education goes beyond academics. At Springdale Public School, we focus on the holistic development of our students by promoting physical, emotional, and social well-being. Our comprehensive programs in sports, arts, and extracurricular activities provide opportunities for students to develop their talents and interests.</p>
          <h2>State-of-the-Art Facilities</h2>
          <p>Our campus is equipped with modern facilities and resources to support our students' learning journey. From well-equipped classrooms and science labs to a spacious library and sports complex, we provide an environment that enhances learning and growth.</p>
          <h2>Community Engagement</h2>
          <p>Springdale Public School is deeply rooted in the community. We value the partnerships we have with parents, local organizations, and stakeholders. Together, we work to create a supportive and collaborative environment that benefits our students and the wider community.</p>
          <h2>A Safe and Nurturing Environment</h2>
          <p>The safety and well-being of our students are our top priorities. We provide a safe and nurturing environment where students feel secure and confident to express themselves and take on new challenges. Our dedicated staff ensures that every student receives the care and support they need to thrive.</p>
        </div>
        </div>
  
        <div className="new">
          <div className="carousel" role="region" aria-label="Highlights Carousel">
            <div className="carousel-inner">
              {slides.map((slide, index) => (
                <div
                  className={`carousel-item ${index === slideIndex ? 'active' : ''}`}
                  key={index}
                  role="tabpanel"
                  aria-hidden={index !== slideIndex}
                >
                  <img src={slide.image} alt={slide.title} />
                  <div className="carousel-caption">
                    <h2>{slide.title}</h2>
                    <p>{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="prev"
              onClick={prevSlide}
              aria-label="Previous Slide"
            >
              &#10094;
            </button>
            <button
              className="next"
              onClick={nextSlide}
              aria-label="Next Slide"
            >
              &#10095;
            </button>
          </div>
        </div>
        </>
        
    );
  }
  
  export default Home;