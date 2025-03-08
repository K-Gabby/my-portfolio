import React from "react";
import "./About.css";
import theme_pattern from "../../assets/assets/theme_pattern.svg";
import profile_img from "../../assets/assets/about_profile.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a passionate frontend developer based in Lagos, Nigeria. I
              specialize in building user-friendly and modern web applications
              using React and other technologies.
            </p>
            <p>
              My goal is to create seamless user experiences, implement
              responsive designs, and continuously learn new tools to stay ahead
              in the ever-evolving tech industry.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Flutter</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>MySQL</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>PHP</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>UI/UX Design</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTED COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>CERTIFICATIONS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
