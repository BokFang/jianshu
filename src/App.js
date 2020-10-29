import React, { Component } from "react";
import Header from "./common/header";
import { GlobalStyle } from "./style"

  class App extends Component {
    render() {
      return (
        <React.Fragment>
          <GlobalStyle />
          <Header />
        </React.Fragment>
      )
    }
  }

export default App;
