import React from "react";
import "./App.css";
import Home from "./desktop/pages/home/Home.component";
import MobileHome from "./mobile/pages/Home/MobileHome.component";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

interface IAppState {
  width: number;
}
interface IAppProps {}

class App extends React.Component<IAppProps, IAppState> {
  /*
  constructor(props: any) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const width = this.state.width;
    const isMobile = width <= 1190;
    return (
      <>
        {isMobile ? (
          <Router>
            <Switch>
              <Route exact path="/" component={MobileHome} />
            </Switch>
          </Router>
        ) : (
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        )}
      </>
    );
  }
  */

  render() {
    return (
      <>
        <MobileHome />
      </>
    );
  }
}
export default App;
