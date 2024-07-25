import React from 'react';
import '../Academics.css';

const Academics = () => {
  return (
    <section className="academics1">
      <div className="academics">
      <div className="container">
        <h1>Academics</h1>

        <div className="curriculum">
          <h2>Curriculum</h2>

          <div className="curriculum-section">
            <h3>Primary (Grades 1-5)</h3>
            <ul>
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Social Studies</li>
              <li>Art</li>
              <li>Physical Education</li>
            </ul>
          </div>

          <div className="curriculum-section">
            <h3>Secondary (Grades 6-10)</h3>
            <ul>
              <li>English</li>
              <li>Mathematics</li>
              <li>Science (Physics, Chemistry, Biology)</li>
              <li>Social Studies</li>
              <li>Computer Science</li>
              <li>Physical Education</li>
              <li>Art</li>
            </ul>
          </div>

          <div className="curriculum-section">
            <h3>Senior Secondary (Grades 11-12)</h3>
            <div className="curriculum-stream">
              <h4>Science Stream</h4>
              <ul>
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Biology</li>
                <li>Mathematics</li>
                <li>Computer Science</li>
                <li>English</li>
              </ul>
            </div>

            <div className="curriculum-stream">
              <h4>Commerce Stream</h4>
              <ul>
                <li>Accountancy</li>
                <li>Business Studies</li>
                <li>Economics</li>
                <li>Mathematics</li>
                <li>English</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="teaching-methodologies">
          <h2>Teaching Methodologies</h2>
          <p>We utilize a blend of traditional and modern teaching techniques to cater to various learning styles. Our approach includes interactive lectures, hands-on activities, and technology-enhanced learning to ensure comprehensive understanding and engagement.</p>
        </div>

        <div className="educational-resources">
          <h2>Educational Resources</h2>
          <p>Our institution is equipped with digital classrooms and interactive learning modules. We provide access to a range of online educational platforms to supplement classroom learning and offer students a broader educational experience.</p>
        </div>

        <div className="blog">
          <h2>Educational Blog</h2>
          <p>Stay tuned for our educational blog, where we share articles, tips, and updates related to academic excellence and student development.</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Academics;
