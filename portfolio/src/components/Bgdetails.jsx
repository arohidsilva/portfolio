/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../Stylesheets/Bgdetails.css";
import imgedu from "../assets/EduLogo.png";
import imgintern from "../assets/InternLogo.png";
import imgexp from "../assets/ExpLogo.png";
import experianceData from "../Mockdata/experiance.json";
import ReactMarkdown from "react-markdown";

function Bgdetails() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState([]);

  const components = {
  strong: ({ node, ...props }) => (
    <strong style={{ color: "#ffd587f5" }} {...props} />
  ),
};

  // Function to open modal
  const openModal = (key) => {
    setShowModal(true);
    setModalContent(key);
  };

  // Function to close modal
  const closeModal = () => setShowModal(false);
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
          <img className="BGImg" src={imgedu} alt="Logo" />
        </div>
        <div className="BGCard">
          <div className="BGHeaders">Internship</div>
          <div className="BGHeader">Tata Consultancy Services</div>
          <div className="BGYear">March 2022 - July 2022</div>
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
          {
            Object.keys(experianceData).map((key, index) => {
              const item = experianceData[key];
              return (
                <div key={index}>
                  <div className="BGHeader">{item.title}</div>
                  <div className="BGYear">{item.duration}</div>
                  <div className="d-flex">
                    <div className="BGSubtext fw-bolder pb-2">{item.position}</div>
                    <div className="BGInfo" onClick={() => openModal(key)}>
                      More
                    </div>
                  </div>
                </div>
              );
            })
          }
          <img className="BGImg" src={imgexp} alt="Logo" />
        </div>
      </div>

      {/* Modal Popup */}
      {(showModal && experianceData[modalContent]) && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <div className="BGHeader">{experianceData[modalContent].title}</div>
            <div className="BGYear">{experianceData[modalContent].duration}</div>
            <div className="BGSubtext fw-bolder pb-2">{experianceData[modalContent].position}</div>
            <div className="modal-list-container">
                <ReactMarkdown components={components}>{experianceData[modalContent].responsibilities}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Bgdetails;
