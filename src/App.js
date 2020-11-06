import React, { Component } from "react";
import { Provider } from "react-redux";
import { GlobalStyle } from "./style";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <GlobalStyle />
          <Header />
          <BrowserRouter>
            <div>
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </React.Fragment>
    )
  }
}

export default App;
