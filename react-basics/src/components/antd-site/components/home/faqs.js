import React from "react";
import { Button, Collapse } from "antd";
const faqsData = [
  {
    question: "How to setup the theme?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
  },
  {
    question: "How to setup the theme?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
  },
  {
    question: "How to setup the theme?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
  },
  {
    question: "How to setup the theme?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
  },
];
const { Panel } = Collapse;

const Faqs = () => {
  return (
    <div id="faq" className="block faq-block">
      Faqs
      <div className="container-fluid">
        <div className="title-holder">
          {" "}
          <h2>Frequently Asked Questions</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis
          </p>
        </div>
        <Collapse defaultActiveKey="1">
          {faqsData.map((item, index) => {
            return (
              <Panel header={item.question} key={index + 1}>
                <p>{item.answer}</p>
              </Panel>
            );
          })}
        </Collapse>
        <div className="quick-support">
          <h3>Want quick support?</h3>
          <p>
            {" "}
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis
          </p>
          <Button type="primary" size="large">
            <i className="fas fa-envelope"></i>Email Your Query
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
