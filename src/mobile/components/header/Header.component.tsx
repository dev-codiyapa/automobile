import React, { useState } from "react";
import "./Header.component.css";
import ProductFeature from "../feature-component/ProductFeature.component";
import { AlignCenterOutlined } from "@ant-design/icons";
import { IMobileHeaderProps, IMobileHeaderState } from "./interfaces";

class MobileHeader extends React.Component<
  IMobileHeaderProps,
  IMobileHeaderState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isDropDownOpen: false
    };
  }
  handleClick = () => {
    this.setState({
      isDropDownOpen: !this.state.isDropDownOpen
    });
  };
  render() {
    return (
      <>
        <div className="mobile-container">
          <div
            className={this.state.isDropDownOpen ? "topnav responsive":"topnav"}
            id="myTopnav"
          >
            <a href="#home" className="active logo">
              <span className="title-first-text">auto</span>
              <span className="title-second-text">Mobile</span>
            </a>
            <a href="#Login">Login</a>
            <a
              href="javascript:void(0);"
              className="icon"
              onClick={this.handleClick}
            >
              <span>
                <AlignCenterOutlined />
              </span>{" "}
              Menu{" "}
            </a>
            <a href="#schedule" className="schedule-btn">
              Schedule a 1:1 meeting
            </a>
            <a href="#resources">Resources</a>
            <a href="#about">About</a>
            <a href="#choose_ud">Why Choose us</a>
            <a href="#services">Services</a>
          </div>
        </div>
        <div className="mobile-header-section">
          <div className="mobile-feature-product">
            <ProductFeature />
          </div>
        </div>
      </>
    );
  }
}

export default MobileHeader;
