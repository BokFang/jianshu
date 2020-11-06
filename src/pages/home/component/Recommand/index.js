import React, { Component } from "react";
import "./style.scss";

class Recommend extends Component {
  render() {
    const { title, article, like, rewards, comments, img, user } = this.props;
    return (
      <React.Fragment>
        <div className="recommand-wrapper">
          <img className="img" src={img} alt=""></img>
          <h3 className="title">{title}</h3>
          <p className="desc">{article}</p>
          <div className="info-wrapper">
            <span className="diamond">
              <svg className="icon"><use xlinkHref="#icon-diamond"></use></svg>
              {rewards}
            </span>
            <span className="user">{user}</span>
            <span className="comments">
              <svg className="icon"><use xlinkHref="#icon-comments"></use></svg>
              {comments}
            </span>
            <span className="likes">
              <svg className="icon"><use xlinkHref="#icon-like"></use></svg>
              {like}
            </span>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Recommend;