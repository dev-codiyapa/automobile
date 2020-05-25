import React from "react";
import { IMobileHomeProps, IMobileHomeState } from "./interfaces";
import MobileHeader from "../../components/header/Header.component";

class MobileHome extends React.Component<IMobileHomeProps, IMobileHomeState> {
  render() {
    return (
      <>
        <MobileHeader />
      </>
    );
  }
}

export default MobileHome;
