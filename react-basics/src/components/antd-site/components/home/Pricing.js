import React from "react";
import { Button, Card, List } from "antd";
const priceData = [
  {
    title: "Basic",
    content: {
      price: "$20",
      space: "256 MB of space",
      user: "1 user",
      support: "24/7 support",
    },
  },
  {
    title: "Premium",
    content: {
      price: "$20",
      space: "512 MB of space",
      user: "3 user",
      support: "24/7 support",
    },
  },
  {
    title: "Enterprise",
    content: {
      price: "$20",
      space: "1 GB of space",
      user: "10 user",
      support: "24/7 support",
    },
  },
];

const Pricing = () => {
  return (
    <div id="price" className="block price-block bg-gray">
      Pricing
      <div className="container-fluid">
        <div className="title-holder">
          <h2>Choose a plan to fit your needs</h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum
          </p>
        </div>
        <div className="price-content">
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 3,
            }}
            dataSource={priceData}
            renderItem={(item) => (
              <List.Item>
                <Card title={item.title}>
                  <p className="large">{item.content.price}</p>
                  <p>{item.content.space}</p>
                  <p>{item.content.user}</p>
                  <p>{item.content.support}</p>
                  <Button type="primary">
                    <i className="fab fa-telegram-plane"></i>Select
                  </Button>
                </Card>
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
