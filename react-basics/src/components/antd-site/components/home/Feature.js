import { Card, Col, Row } from "antd";
import image1 from "../../assets/images/modern-design.jpg";
import image2 from "../../assets/images/clean-design.jpg";
import image3 from "../../assets/images/great-support.jpg";
import image4 from "../../assets/images/easy-customise.jpg";
import image5 from "../../assets/images/unlimited-features.jpg";
import image6 from "../../assets/images/advanced-option.jpg";
import React from "react";
const featureData = [
  {
    title: "Modern Design",
    img: image1,
  },
  {
    title: "Clean and Elegant",
    img: image2,
  },
  {
    title: "Great Support",
    img: image3,
  },
  {
    title: "Easy to customise",
    img: image4,
  },

  {
    title: "Unlimited Features",
    img: image5,
  },
  {
    title: "Advanced Options",
    img: image6,
  },
];
const Feature = () => {
  const { Meta } = Card;
  return (
    <div id="feature" className="block feature-block bg-gray">
      Feature
      <div className="container-fluid">
        <div className="title-holder">
          <h2>Key Features and Benefits</h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum
          </p>
        </div>
        <Row gutter={(16, 16)}>
          {featureData.map((item) => {
            return (
              <Col span={8} key={item.title}>
                <Card
                  hoverable
                  cover={<img alt={`${item.title}`} src={item.img} />}
                >
                  <Meta title={item.title} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Feature;
