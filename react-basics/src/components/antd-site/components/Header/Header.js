import { Anchor, Button, Drawer, Layout, Menu } from "antd";
import React, { useState } from "react";
const { Link } = Anchor;
const AppHeader = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://www.google.com">Bangalore Tech</a>
        </div>
        {/* <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
        <Menu.Item key={"home"}>Home</Menu.Item>
        <Menu.Item key={"about"}>About</Menu.Item>
        <Menu.Item key={"features"}>Features</Menu.Item>
        <Menu.Item key={"how"}>How it works</Menu.Item>
        <Menu.Item key={"faq"}>FAQ</Menu.Item>
        <Menu.Item key={"pricing"}>Pricing</Menu.Item>
        <Menu.Item key={"contact"}>Contact</Menu.Item>
      </Menu> */}
        <div>
          <Anchor targetOffset={"65"}>
            <Link href="#home" title="Home" />
            <Link href="#about" title="About" />
            <Link href="#feature" title="Feature" />
            <Link href="#howitwork" title="Works" />
            <Link href="#faq" title="FAQ" />
            <Link href="#price" title="Pricing" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div>
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            {" "}
            <Anchor targetOffset={"65"}>
              <Link href="#home" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Feature" />
              <Link href="#howitwork" title="Works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#price" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
