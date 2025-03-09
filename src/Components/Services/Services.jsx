import React, { useState } from "react";
import "./Services.css";
import theme_pattern from "../../assets/assets/theme_pattern.svg";
import Services_Data from "../../assets/assets/services_data";
import arrow_icon from "../../assets/assets/arrow_icon.svg";

const Services = () => {
  const [expanded, setExpanded] = useState(null);

  const handleReadMore = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{expanded === index ? service.s_full_desc : service.s_desc}</p>
              <div
                className="services-readmore"
                onClick={() => handleReadMore(index)}
                style={{ cursor: "pointer" }}
              >
                <p>{expanded === index ? "Read Less" : "Read More"}</p>
                <img
                  src={arrow_icon}
                  alt=""
                  style={{
                    transform:
                      expanded === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "0.3s ease-in-out",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
