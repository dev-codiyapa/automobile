import React from "react";
import Header from "../../components/header/Header.component";
import { IhomeProps, IhomeState } from "./interfaces";
import "./Home.component.css";
import { Radio, Carousel } from "antd";

class Home extends React.Component<IhomeProps, IhomeState> {
  state = {
    dotPosition: "top"
  };
  handlePositionChange = () => {
    console.log("handlePositionChange");
  };

  render() {
    const dotPosition  = this.state;
    return (
      <>
        <div className="home-page">
          <Header />
        </div>
      </>
    );
  }
}

export default Home;
