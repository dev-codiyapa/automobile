import React from "react";
import { PageHeader, Button, Descriptions, Row, Col } from "antd";
import "./Header.component.css";
import ProductFeature from "../feature-component/ProductFeature.component";
import { IHeaderProps } from "./interfaces";

const Header: React.FC<IHeaderProps> = () => {
  return (
    <>
      <div className="page-header">
        <div className="header">
          <Row>
            <Col span={18} offset={3}>
              <PageHeader
                ghost={false}
                title={
                  <div>
                    <span className="title-first-text">athena</span>
                    <span className="title-second-text">health</span>
                  </div>
                }
                extra={[
                  <Button key="services_header" type="link">
                    Services
                  </Button>,
                  <Button key="choose_us_header" type="link">
                    Why Choose us
                  </Button>,
                  <Button key="about_header" type="link">
                    About
                  </Button>,
                  <Button key="resources_header" type="link">
                    Resources
                  </Button>,
                  <Button key="schedule_header" className="schedule-btn">
                    Schedule a 1:1 meeting
                  </Button>,
                  <Button key="login_header" type="link">
                    Login
                  </Button>
                ]}
              ></PageHeader>
            </Col>
          </Row>
        </div>
        <div className="header-section">
          <div className="feature-product">
            <ProductFeature />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
