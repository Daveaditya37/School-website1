import React from 'react';
import '../App.css';

const Students = () => {
  return (
    <div className="students1">
    <div className="students">
      <h1>Students</h1>
      
      <div className="life-at-springdale">
        <h2>Life at Springdale</h2>
        <h3>Extracurricular Activities</h3>
        <p>Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club</p>
        
        <h3>Clubs and Societies</h3>
        <p>Literary Society, Environmental Club, Astronomy Club, Coding Club</p>
      </div>
      
      <div className="achievements">
        <h2>Achievements</h2>
        <ul>
          <li>John Smith - National Level Math Olympiad Winner</li>
          <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
          <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
        </ul>
      </div>
      
      <div className="student-council">
        <h2>Student Council</h2>
        <ul>
          <li><strong>President:</strong> Amy Parker, Grade 12</li>
          <li><strong>Vice President:</strong> Rajiv Mehta, Grade 11</li>
          <li><strong>Secretary:</strong> Lisa Wong, Grade 10</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Students;
