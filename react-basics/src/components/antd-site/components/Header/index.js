import { Layout } from "antd";
import React from "react";
import AppHeader from "./Header";

const { Header } = Layout;

const PageHeader = () => (
  <Header
    style={{
      position: "fixed",
      zIndex: 1,
      width: "100%",
    }}
  >
    <AppHeader />
  </Header>
);

export default PageHeader;
