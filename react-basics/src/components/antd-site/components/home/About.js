import { Col, Row } from "antd";
import React from "react";
const aboutData = [
  {
    key: "1",
    icon: <i className="fas fa-chart-line"></i>,
    title: "High Performance",
    content:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    key: "2",
    icon: <i className="fas fa-display"></i>,
    title: "Flat Design",
    content:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    key: "3",
    icon: <i className="fas fa-code"></i>,
    title: "Simplified Workflow",
    content:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
];
const About = () => {
  return (
    <div id="about" className="block about-block">
      About
      <div className="container-fluid">
        <div className="title-holder">
          <h2>About Us</h2>
          <p>Dolor sit amet,consectetur adipisicing elit</p>
        </div>
        <div className="content-holder">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <Row gutter={(16, 16)}>
          {aboutData.map((item) => {
            return (
              <Col span={8}>
                <div className="content">
                  <div className="icon">{item.icon}</div>

                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default About;
