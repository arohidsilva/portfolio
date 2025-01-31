/* eslint-disable no-unused-vars */
import React from "react";
import "../Stylesheets/Bgdetails.css";
import imgedu from "../assets/EduLogo.png";
import imgintern from "../assets/InternLogo.png";
import imgexp from "../assets/ExpLogo.png";

function Bgdetails() {
  return (
    <section id="bgdetails">
      <span className="BGTitle">Background</span>
      <div className="BGContainer">
        <div className="BGCard">
          <div className="BGHeaders">Education</div>
          <div className="BGHeader">Masters in Bigdata Analytics</div>
          <div className="BGYear">2020-2022</div>
          <div className="BGSubtext">AIMIT, Mangalore</div>
          <div className="BGSubtext fw-bolder">CGPA: 8.8</div>
          <div className="BGHeader">Bachelor of Computer Application</div>
          <div className="BGYear">2017-2020</div>
          <div className="BGSubtext">St. Agnes College, Mangalore</div>
          <div className="BGSubtext fw-bolder">CGPA: 8.5</div>
          {/* <div className='BGHeader'>
                    Pre-University College
                    <span className='BGSubtext'>
                        2015-2017
                    </span>
                </div>
                <div className='BGSubtext'>St. Agnes College, Mangalore</div>
                <div className='BGSubtext fw-bolder'>Percentage: 83%</div>
                <div className='BGHeader'>
                    SSLC
                    <span className='BGSubtext'>
                        2014-2015
                    </span>
                </div>
                <div className='BGSubtext'>Little Flower High School, Siddapur</div>
                <div className='BGSubtext fw-bolder'>Percentage: 90.08%</div> */}
          <img className="BGImg" src={imgedu} alt="Logo" />
        </div>
        <div className="BGCard">
          <div className="BGHeaders">Internship</div>
          <div className="BGHeader">Tata Consultancy Services</div>
          <div className="BGYear">March 2022 - June 2022</div>
          <div className="BGSubtext">
            {" "}
            Worked with various AWS services like S3 Bucket, Rekognition,
            DynamoDB, Lambda and RDS
          </div>
          <div className="BGHeader">Accolade Tech Solutions</div>
          <div className="BGYear">November 2019 - March 2020</div>
          <div className="BGSubtext">
            {" "}
            Worked on a web application using Visual studio, C#, HTML/CSS,
            JavaScript and MySQL 5.0.
          </div>
          <img className="BGImg" src={imgintern} alt="Logo" />
        </div>
        <div className="BGCard">
          <div className="BGHeaders">Experience</div>
          <div className="BGHeader">Tata Consultancy Services</div>
          <div className="BGYear">August 2022 - Present</div>
          <div className="BGSubtext fw-bolder pb-2">
            {" "}
            Assistant System Engineer
          </div>
          <div className="BGSubtext">
            Maintained web application user interfaces with ReactJS and Redux
            utilizing modular, scalable, and efficient code in JavaScript, and
            SCSS by implementing responsive design techniques to ensure
            applications are usable on various devices.
            <br />
            Provided defect support to improve performance and user experience.
            <br />
            Worked on Sonar test coverage utilizing Jest and other frameworks.
          </div>
          <img className="BGImg" src={imgexp} alt="Logo" />
        </div>
      </div>
    </section>
  );
}

export default Bgdetails;
