import React, { Component } from "react";
import Header from "./common/header";
import { Provider } from "react-redux";
import { GlobalStyle } from "./style";
import store from "./store";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <GlobalStyle />
          <Header />
        </Provider>
      </React.Fragment>
    )
  }
}

export default App;
