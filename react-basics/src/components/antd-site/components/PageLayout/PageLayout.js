import { Layout } from "antd";
import React from "react";
import AppHome from "../../pages/home";
import PageHeader from "../Header";

const { Content } = Layout;
const PageLayout = ({ children }) => {
  return (
    <>
      <Layout className="mainLayout">
        <PageHeader />
        <Content>
          <AppHome />
        </Content>
      </Layout>
    </>
  );
};

export default PageLayout;
