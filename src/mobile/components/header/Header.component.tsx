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
          <div className="topnav">
            <a href="#home" className="logo">
              <span className="title-first-text">athena</span>
              <span className="title-second-text">health</span>
            </a>
            <a href="#" className="icon" onClick={this.handleClick}>
              <span>
                <AlignCenterOutlined />
              </span>{" "}
              Menu{" "}
            </a>
            {this.state.isDropDownOpen ? (
              <div className="info-link">
                <a href="#services">Services</a>
                <a href="#choose_ud">Why Choose us</a>
                <a href="#about">About</a>
                <a href="#resources">Resources</a>
                <a href="#schedule" className="schedule-btn">
                  Schedule a 1:1 meeting
                </a>
                <a href="#Login">Login</a>
              </div>
            ) : null}
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
