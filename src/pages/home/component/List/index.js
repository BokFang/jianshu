import React, { Component } from "react";
import "./style.scss";
import listBanner1 from "../../../../static/list-banner1.png";
import listBanner2 from "../../../../static/list-banner2.png";
import listBanner3 from "../../../../static/list-banner3.png";
import listBanner4 from "../../../../static/list-banner4.png";

class List extends Component {
  render() {
    return (
      <div className="list-wrapper">
        <img className="list-img" src={listBanner1}></img>
        <img className="list-img" src={listBanner2}></img>
        <img className="list-img" src={listBanner3}></img>
        <img className="list-img" src={listBanner4}></img>
      </div>
    )
  }
}

export default List;